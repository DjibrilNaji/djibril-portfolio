import { useEffect, useRef } from "react";

// Raymarched liquid metaballs behind the portrait: plain WebGL, no 3D library.
// It reacts to the pointer, ripples on tap, pauses off screen, and steps down
// (then gives up for the CSS glow underneath) on devices that can't keep up.

const vertex = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

const fragment = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uPulse;
uniform float uDark;

mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}

float map(vec3 p){
  float t=uTime;
  float d=length(p)-.44;
  d+=(.035+.12*uPulse)*sin(5.6*p.x+t*1.1)*sin(5.*p.y+t*.9)*sin(6.*p.z+t*1.3);
  vec3 a=vec3(cos(t*.55)*.68,sin(t*.7)*.3,sin(t*.55)*.65);
  vec3 b=vec3(sin(t*.4+2.)*.58,cos(t*.5+1.)*.58,cos(t*.4)*.45);
  vec3 c=vec3(cos(t*.33+4.)*.65,sin(t*.45+3.)*-.5,sin(t*.3)*.6);
  d=smin(d,length(p-a)-.14,.28);
  d=smin(d,length(p-b)-.1,.25);
  d=smin(d,length(p-c)-.08,.2);
  return d;
}

vec3 nor(vec3 p){
  vec2 e=vec2(.001,0.);
  return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));
}

void main(){
  // The orb sits on the portrait's lower-left corner, half over the frame.
  vec2 uv=(gl_FragCoord.xy-.5*uRes)/min(uRes.x,uRes.y)-vec2(-.27,-.2);
  vec3 ro=vec3(0.,0.,4.);
  vec3 rd=normalize(vec3(uv,-1.25));
  vec3 l=normalize(vec3(-.5,.8,.6));
  float ax=uMouse.x*.8+uTime*.1, ay=-uMouse.y*.55;
  ro.yz*=rot(ay); rd.yz*=rot(ay); l.yz*=rot(ay);
  ro.xz*=rot(ax); rd.xz*=rot(ax); l.xz*=rot(ax);

  float t=0., m=9.;
  bool hit=false;
  for(int i=0;i<64;i++){
    float d=map(ro+rd*t);
    m=min(m,d);
    if(d<.001){hit=true;break;}
    t+=d*.85;
    if(t>8.)break;
  }

  vec3 cV=vec3(.55,.4,.98), cB=vec3(.4,.6,1.), cP=vec3(1.,.68,.9);
  vec4 o=vec4(0.);
  if(hit){
    vec3 p=ro+rd*t, n=nor(p);
    float fr=pow(1.-max(dot(n,-rd),0.),2.5);
    float k=n.y*.5+.5+.15*sin(uTime*.6+p.x*2.5);
    vec3 col=mix(cV,cB,smoothstep(.1,.9,k));
    col=mix(col,cP,fr*.75);
    float dif=max(dot(n,l),0.);
    float spe=pow(max(dot(reflect(rd,n),l),0.),48.);
    col=col*(.45+.65*dif)*mix(1.,.85,uDark)+spe+fr*.2;
    o=vec4(col,1.);
  }
  // Soft halo, faded out before the canvas edges so its rectangle never shows
  vec2 q=gl_FragCoord.xy/uRes;
  float edge=smoothstep(0.,.15,q.x)*smoothstep(1.,.85,q.x)*smoothstep(0.,.15,q.y)*smoothstep(1.,.85,q.y);
  float g=exp(-m*6.)*mix(.3,.5,uDark)*edge;
  o.rgb+=mix(cV,cB,.4)*g*(1.-o.a);
  o.a+=g*(1.-o.a);
  gl_FragColor=o;
}`;

function canRender() {
	const nav = navigator as Navigator & {
		connection?: { saveData?: boolean };
		deviceMemory?: number;
	};
	return !(
		matchMedia("(prefers-reduced-motion: reduce)").matches ||
		nav.connection?.saveData ||
		(nav.deviceMemory ?? 8) < 4 ||
		(nav.hardwareConcurrency ?? 8) < 4
	);
}

export function LiquidOrb() {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current;
		if (!canvas || !canRender()) return;
		let stop = () => {};

		// Start after the first screen has painted so the orb never delays LCP.
		const start = () => {
			const gl = canvas.getContext("webgl", {
				antialias: false,
				powerPreference: "low-power",
			});
			if (!gl) return;
			const program = link(gl);
			if (!program) return;

			const buffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
			gl.bufferData(
				gl.ARRAY_BUFFER,
				new Float32Array([-1, -1, 3, -1, -1, 3]),
				gl.STATIC_DRAW,
			);
			const pos = gl.getAttribLocation(program, "p");
			gl.enableVertexAttribArray(pos);
			gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
			const u = (name: string) => gl.getUniformLocation(program, name);
			const uRes = u("uRes");
			const uTime = u("uTime");
			const uMouse = u("uMouse");
			const uPulse = u("uPulse");
			const uDark = u("uDark");

			let scale = Math.min(devicePixelRatio, 1.5);
			const resize = () => {
				canvas.width = Math.round(canvas.clientWidth * scale);
				canvas.height = Math.round(canvas.clientHeight * scale);
				gl.viewport(0, 0, canvas.width, canvas.height);
			};
			resize();
			const resizeObserver = new ResizeObserver(resize);
			resizeObserver.observe(canvas);

			const target = { x: 0, y: 0 };
			const mouse = { x: 0, y: 0 };
			let pulse = 0;
			const onMove = (event: PointerEvent) => {
				const r = canvas.getBoundingClientRect();
				target.x = clamp(((event.clientX - r.left) / r.width) * 2 - 1);
				target.y = clamp(((event.clientY - r.top) / r.height) * 2 - 1);
			};
			const onTap = () => {
				pulse = 1;
			};
			const host = canvas.parentElement;
			window.addEventListener("pointermove", onMove, { passive: true });
			host?.addEventListener("pointerdown", onTap);

			let visible = true;
			let running = false;
			let frame = 0;
			let last = 0;
			let time = 0;
			let frames = 0;
			let slow = 0;
			const kick = () => {
				if (running || !visible || document.hidden) return;
				running = true;
				last = performance.now();
				frame = requestAnimationFrame(draw);
			};
			const io = new IntersectionObserver(([entry]) => {
				visible = entry.isIntersecting;
				kick();
			});
			io.observe(canvas);

			const draw = (now: number) => {
				if (!visible || document.hidden) {
					running = false;
					return;
				}
				const dt = Math.min(now - last, 100);
				last = now;
				time += dt / 1000;

				// Judge frames 30-120: halve the resolution if too slow, then give up.
				frames++;
				if (frames > 30 && dt > 30) slow++;
				if (frames === 120) {
					if (slow > 45 && scale > 0.75) {
						scale = 0.5;
						resize();
						frames = 30;
					} else if (slow > 45) {
						canvas.style.opacity = "0";
						running = false;
						return;
					}
					slow = 0;
				}

				mouse.x += (target.x - mouse.x) * 0.05;
				mouse.y += (target.y - mouse.y) * 0.05;
				pulse *= 0.96;
				gl.uniform2f(uRes, canvas.width, canvas.height);
				gl.uniform1f(uTime, time);
				gl.uniform2f(uMouse, mouse.x, mouse.y);
				gl.uniform1f(uPulse, pulse);
				gl.uniform1f(
					uDark,
					document.documentElement.classList.contains("dark") ? 1 : 0,
				);
				gl.drawArrays(gl.TRIANGLES, 0, 3);
				canvas.style.opacity = "1";
				frame = requestAnimationFrame(draw);
			};
			document.addEventListener("visibilitychange", kick);
			kick();

			stop = () => {
				cancelAnimationFrame(frame);
				io.disconnect();
				resizeObserver.disconnect();
				window.removeEventListener("pointermove", onMove);
				host?.removeEventListener("pointerdown", onTap);
				document.removeEventListener("visibilitychange", kick);
				gl.getExtension("WEBGL_lose_context")?.loseContext();
			};
		};

		const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 300));
		const handle = idle(start, { timeout: 1500 });
		return () => {
			(window.cancelIdleCallback ?? clearTimeout)(handle);
			stop();
		};
	}, []);

	return (
		// biome-ignore lint/a11y/noAriaHiddenOnFocusable: decorative canvas, never focusable
		<canvas
			ref={ref}
			aria-hidden="true"
			className="pointer-events-none absolute -inset-[16%] size-[132%] opacity-0 transition-opacity duration-1000"
		/>
	);
}

const clamp = (v: number) => Math.max(-1, Math.min(1, v));

function link(gl: WebGLRenderingContext) {
	const program = gl.createProgram();
	for (const [type, source] of [
		[gl.VERTEX_SHADER, vertex],
		[gl.FRAGMENT_SHADER, fragment],
	] as const) {
		const shader = gl.createShader(type);
		if (!shader) return null;
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		gl.attachShader(program, shader);
	}
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
	// biome-ignore lint/correctness/useHookAtTopLevel: WebGL call, not a React hook
	gl.useProgram(program);
	return program;
}
