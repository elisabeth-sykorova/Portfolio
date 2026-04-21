import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D-Xhi8Pi.js","_app/immutable/chunks/Qjaj5YtJ.js","_app/immutable/chunks/DfF-AoOb.js","_app/immutable/chunks/DGbXfal5.js","_app/immutable/chunks/DQPn_T6y.js","_app/immutable/chunks/CgNxYvJP.js","_app/immutable/chunks/Tz0mJ9h2.js","_app/immutable/chunks/DNy9p2st.js","_app/immutable/chunks/BsSBJtuq.js","_app/immutable/chunks/CD3HZL-D.js","_app/immutable/chunks/EiXC-7kA.js","_app/immutable/chunks/BiTT8mz5.js"];
export const stylesheets = ["_app/immutable/assets/0.CPZuXkir.css"];
export const fonts = [];
