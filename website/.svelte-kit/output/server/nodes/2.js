import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B2w72nzY.js","_app/immutable/chunks/Dm6FXoTn.js","_app/immutable/chunks/BLxti61K.js","_app/immutable/chunks/8DrdZxtr.js","_app/immutable/chunks/BkkJV3kJ.js","_app/immutable/chunks/CCBZD8dC.js","_app/immutable/chunks/a5UqIVsx.js","_app/immutable/chunks/CaW4ROi3.js","_app/immutable/chunks/DE88kTLm.js","_app/immutable/chunks/DRZ80QfY.js","_app/immutable/chunks/F5-ZH1RO.js","_app/immutable/chunks/B74BmesG.js","_app/immutable/chunks/DeFfsTcJ.js","_app/immutable/chunks/JXOPGk3f.js"];
export const stylesheets = ["_app/immutable/assets/SocialIcon.Bd-I6Alq.css"];
export const fonts = [];
