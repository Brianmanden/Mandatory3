var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodemon		= require('nodemon');
var config 		= require("./gulp.config")();

gulp.task("nodemon", function(){
	var options = {
		script: config.nodeApp,
		watch: config.nodeServer
	};

	return nodemon(options)
		.on("start", function(){
			console.log("nodemon started");
			startBrowserSync();
		})
		.on("restart", function(){
			console.log("nodemon REstarted");
		})
})

gulp.task("default", ["nodemon"]);

function startBrowserSync(){
	if(browserSync.active){
		return;
	}
	console.log("browserSync starting");

	var options = {
		proxy: 'localhost:' + config.nodePort,
        port: config.browserSyncPort,
		ghostMode: {
			scroll: false
		},
		browser: ["google chrome"],
		files: config.browserSyncFiles
	}
	browserSync(options);
}