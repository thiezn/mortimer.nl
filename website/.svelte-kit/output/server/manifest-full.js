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
		client: {start:"_app/immutable/entry/start.wfim_7mL.js",app:"_app/immutable/entry/app.BqZQpUBT.js",imports:["_app/immutable/entry/start.wfim_7mL.js","_app/immutable/chunks/C65M9lFy.js","_app/immutable/chunks/8DrdZxtr.js","_app/immutable/chunks/CCBZD8dC.js","_app/immutable/entry/app.BqZQpUBT.js","_app/immutable/chunks/8DrdZxtr.js","_app/immutable/chunks/DE88kTLm.js","_app/immutable/chunks/BLxti61K.js","_app/immutable/chunks/CCBZD8dC.js","_app/immutable/chunks/F5-ZH1RO.js","_app/immutable/chunks/CaW4ROi3.js","_app/immutable/chunks/D7yyjRg9.js","_app/immutable/chunks/CU3-ZCkP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/articles/[slug]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
