export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt","social-card.svg"]),
	mimeTypes: {".txt":"text/plain",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.RCLtLhhZ.js",app:"_app/immutable/entry/app.Cts77Xo9.js",imports:["_app/immutable/entry/start.RCLtLhhZ.js","_app/immutable/chunks/BkkJV3kJ.js","_app/immutable/chunks/8DrdZxtr.js","_app/immutable/chunks/CCBZD8dC.js","_app/immutable/entry/app.Cts77Xo9.js","_app/immutable/chunks/8DrdZxtr.js","_app/immutable/chunks/DE88kTLm.js","_app/immutable/chunks/BLxti61K.js","_app/immutable/chunks/CCBZD8dC.js","_app/immutable/chunks/F5-ZH1RO.js","_app/immutable/chunks/CaW4ROi3.js","_app/immutable/chunks/D7yyjRg9.js","_app/immutable/chunks/CU3-ZCkP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/articles","/contact","/articles/hello-world","/articles/rust-cli-observability","/articles/python-automation-checklist"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
