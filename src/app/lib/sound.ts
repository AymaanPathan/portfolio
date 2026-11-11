/**
 * Mouse-click sound, synthesised with the Web Audio API (no audio files).
 *
 * A real mouse click is three tiny things layered together, all over in a few
 * milliseconds:
 *   1. a very short "snap" (noise burst, ~5ms) — the switch actuating
 *   2. a quick plastic "ring" (~1.8kHz, ~6ms)   — the button shell
 *   3. a soft low "body" (~180Hz, ~10ms)        — the click felt through the case
 * One click per press, kept light: quiet, with only a hint of low body.
 */

let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;
const lastAt: Record<string, number> = {};
const KEY = "sound";

export function soundEnabled() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY) !== "off";
}

export function setSoundEnabled(on: boolean) {
  localStorage.setItem(KEY, on ? "on" : "off");
}

function getNoise(c: AudioContext) {
  if (noise) return noise;
  const length = Math.floor(c.sampleRate * 0.02);
  noise = c.createBuffer(1, length, c.sampleRate);
  const data = noise.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  return noise;
}

const presets = {
  press: { snap: 2000, ring: 1800, body: 220, volume: 1 },
  toggle: { snap: 2200, ring: 2000, body: 240, volume: 0.95 },
  open: { snap: 1800, ring: 1600, body: 200, volume: 0.95 },
} as const;

export type ClickKind = keyof typeof presets;

export function playTick(kind: ClickKind = "press") {
  if (!soundEnabled()) return;

  const t = performance.now();
  if (t - (lastAt[kind] ?? 0) < 35) return; // never stack the same click
  lastAt[kind] = t;

  try {
    ctx ??= new AudioContext();
    if (ctx.state === "suspended") void ctx.resume();

    const p = presets[kind];
    const now = ctx.currentTime;
    const out = ctx.createGain();
    out.gain.value = 0.32 * p.volume; // light
    out.connect(ctx.destination);

    // 1. Snap: ~4ms band-passed noise burst
    const src = ctx.createBufferSource();
    src.buffer = getNoise(ctx);
    src.playbackRate.value = 0.95 + Math.random() * 0.1;
    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.frequency.value = p.snap;
    band.Q.value = 0.8;
    // Cut the highs that make a click sound sharp.
    const soften = ctx.createBiquadFilter();
    soften.type = "lowpass";
    soften.frequency.value = 2800;
    soften.Q.value = 0.5;
    const snapEnv = ctx.createGain();
    snapEnv.gain.setValueAtTime(0.0001, now);
    snapEnv.gain.exponentialRampToValueAtTime(0.35, now + 0.001); // rounded start
    snapEnv.gain.exponentialRampToValueAtTime(0.0001, now + 0.005);
    src.connect(band).connect(soften).connect(snapEnv).connect(out);
    src.start(now);
    src.stop(now + 0.006);

    // 2. Ring: short damped plastic resonance
    const ring = ctx.createOscillator();
    ring.type = "sine";
    ring.frequency.value = p.ring;
    const ringEnv = ctx.createGain();
    ringEnv.gain.setValueAtTime(0.0001, now);
    ringEnv.gain.exponentialRampToValueAtTime(0.035, now + 0.001);
    ringEnv.gain.exponentialRampToValueAtTime(0.0001, now + 0.006);
    ring.connect(ringEnv).connect(out);
    ring.start(now);
    ring.stop(now + 0.008);

    // 3. Body: soft low thump
    const body = ctx.createOscillator();
    body.type = "sine";
    body.frequency.setValueAtTime(p.body, now);
    body.frequency.exponentialRampToValueAtTime(p.body * 0.6, now + 0.01);
    const bodyEnv = ctx.createGain();
    bodyEnv.gain.setValueAtTime(0.0001, now);
    bodyEnv.gain.exponentialRampToValueAtTime(0.05, now + 0.001);
    bodyEnv.gain.exponentialRampToValueAtTime(0.0001, now + 0.009);
    body.connect(bodyEnv).connect(out);
    body.start(now);
    body.stop(now + 0.015);
  } catch {
    /* audio unavailable: stay silent */
  }
}
