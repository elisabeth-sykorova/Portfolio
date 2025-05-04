import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.4iFoD_sh.js","_app/immutable/chunks/4VXVIelm.js","_app/immutable/chunks/CDKdtU_a.js","_app/immutable/chunks/DZVlJTJb.js","_app/immutable/chunks/B9_8J5I9.js","_app/immutable/chunks/Ba2kp9X7.js","_app/immutable/chunks/Cf8A8oEm.js","_app/immutable/chunks/BsrjeLVK.js","_app/immutable/chunks/i4YRnLSV.js","_app/immutable/chunks/DmGxEQFG.js"];
export const stylesheets = ["_app/immutable/assets/0.BrTBLH7A.css"];
export const fonts = [];
