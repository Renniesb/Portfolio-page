module.exports = function(grunt){
	grunt.initConfig({
		responsive_images: {
			options: {
				//Task-specific options go here.
			},
			files: [{
     				expand: true,
    				src: ['img/**/*.{gif,png,jpg,jpge}'],
     				cwd: 'src/',
     				dest: 'dist/'
   			}]
 }
		}
	});
	grunt.loadNpmTasks('grunt-responsive-images');
}