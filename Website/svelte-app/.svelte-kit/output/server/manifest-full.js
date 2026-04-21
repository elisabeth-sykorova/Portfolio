export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Portfolio/_app",
	assets: new Set([".nojekyll","BuzzzFont.ttf","CV_Elisabeth_Sýkorová.pdf","images/aseprite.png","images/asilentherothumb.png","images/blender.png","images/buzz/font.png","images/buzz/gameplay1.png","images/buzz/gameplay2.png","images/buzz/gameplay3.png","images/buzz/hero.png","images/buzz/ui_elements.png","images/buzzz.png","images/copy.png","images/davinci.png","images/download.png","images/github.png","images/gregor/save_gregor_concept.pdf","images/gregor.png","images/ignite/project-assets.pdf","images/ignite_pixels.png","images/ink.png","images/ks/font.png","images/ks/KS_business_card_mockup_black_and_white.png","images/ks/KS_business_card_mockup_color.png","images/ks/KS_horizontal.png","images/ks/KS_horizontal_transparent.png","images/ks/KS_multicolor_vertical.png","images/ks/KS_tshirt_mockup1.png","images/ks/KS_tshirt_mockup1_dark.png","images/ks/KS_tshirt_mockup2.png","images/ks/primary.png","images/ks/secondary.png","images/ks/vertical_black.png","images/ks/vertical_darker.png","images/ks/vertical_lighter.png","images/ks/vertical_white.png","images/linkedin.png","images/logo_prototype.png","images/merch/Merch_Store_Moodboard.png","images/merch.png","images/oliva.jpg","images/penpot.png","images/ps.png","images/room.jpg","images/svelte.png","images/titleFINAL.png","images/visualclock.png","images/whodinedhere/who-dined-here-01.png","images/whodinedhere/who-dined-here-02.png","images/whodinedhere/who-dined-here-03.png","images/whodinedhere/who-dined-here-04.png","images/whodinedhere/who-dined-here-05.png","images/whodinedhere/who-dined-here-06.png","images/whodinedhere/who-dined-here-07.png","images/whodinedhere/who-dined-here-08.png","images/whodinedhere/who-dined-here-09.png","images/whodinedhere/who-dined-here-10.png","images/whodinedhere/who-dined-here-11.png","images/whodinedhere/who-dined-here-12.png","images/whodinedhere/who-dined-here-13.png","images/whodinedhere/who-dined-here-14.png","images/whodinedhere/who-dined-here-15.png","images/whodinedhere/who-dined-here-16.png","images/whodinedhere/who-dined-here-17.png","images/whodinedhere/who-dined-here-18.png","images/whodinedhere/who-dined-here-19.png","images/whodinedhere/who-dined-here-20.png","images/whodinedhere/who-dined-here.pdf","images/whodinedhere/who-dined-here.png","styles/global.css","VisualClock.mov","VisualClock.mp4"]),
	mimeTypes: {".ttf":"font/ttf",".pdf":"application/pdf",".png":"image/png",".jpg":"image/jpeg",".css":"text/css",".mov":"video/quicktime",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.BvgU97YY.js",app:"_app/immutable/entry/app.B7mDFr6X.js",imports:["_app/immutable/entry/start.BvgU97YY.js","_app/immutable/chunks/CQqMowDT.js","_app/immutable/chunks/DfF-AoOb.js","_app/immutable/chunks/EiXC-7kA.js","_app/immutable/chunks/CD3HZL-D.js","_app/immutable/entry/app.B7mDFr6X.js","_app/immutable/chunks/DfF-AoOb.js","_app/immutable/chunks/DQPn_T6y.js","_app/immutable/chunks/Qjaj5YtJ.js","_app/immutable/chunks/CgNxYvJP.js","_app/immutable/chunks/DH0vMXvz.js","_app/immutable/chunks/CD3HZL-D.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/asilenthero",
				pattern: /^\/asilenthero\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/buzz",
				pattern: /^\/buzz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gregor",
				pattern: /^\/gregor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/ignite",
				pattern: /^\/ignite\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/kronoshield",
				pattern: /^\/kronoshield\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/merch",
				pattern: /^\/merch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/visualclock",
				pattern: /^\/visualclock\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/whodinedhere",
				pattern: /^\/whodinedhere\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
