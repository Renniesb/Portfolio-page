module.exports = function(grunt){
	grunt.initConfig({
		  responsive_images: {
    		dev: {
      			files: [{
        		expand: true,
        		src: ['img/**/*.{jpg,gif,png}'],
        		cwd: 'src/',
        		dest: 'dist/'
      			}]
    }
  },
	})
	grunt.loadNpmTasks('grunt-responsive-images');
}