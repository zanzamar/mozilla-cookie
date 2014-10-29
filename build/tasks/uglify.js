module.exports = function( grunt ) {
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.config( "uglify", {
		release: {
			options: {
				preserveComments: 'some'
			},
			files: {
				"dist/source.min.js": [ "dev/mozillaCookie.js" ]
			}
		}
	});
};