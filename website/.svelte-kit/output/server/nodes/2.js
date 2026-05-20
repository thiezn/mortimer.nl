import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DtfWg_aC.js","_app/immutable/chunks/BouCShL9.js","_app/immutable/chunks/BLxti61K.js","_app/immutable/chunks/8DrdZxtr.js","_app/immutable/chunks/C65M9lFy.js","_app/immutable/chunks/CCBZD8dC.js","_app/immutable/chunks/a5UqIVsx.js","_app/immutable/chunks/CaW4ROi3.js","_app/immutable/chunks/DE88kTLm.js","_app/immutable/chunks/B62olm2I.js","_app/immutable/chunks/F5-ZH1RO.js","_app/immutable/chunks/3lbckUqZ.js","_app/immutable/chunks/Do2ZjYCO.js","_app/immutable/chunks/BAxGcdr6.js"];
export const stylesheets = ["_app/immutable/assets/SocialIcon.Bd-I6Alq.css"];
export const fonts = [];
