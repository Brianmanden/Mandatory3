function gulpConfig() {
	var nodeServer 	= './app/',
		client 		= nodeServer + 'public/',
		nodeApp 	= nodeServer + 'app.js';

	var config = {
		browserSyncFiles: [client + '**/*', nodeApp, nodeServer + 'views/**/*', nodeServer + 'routes/**/*.js'],
		browserSyncPort: 4000,
		client: client,
		nodeApp: nodeApp,
		nodePort: 3000,
		nodeServer: nodeServer
	};

	return config;
};


module.exports = gulpConfig;