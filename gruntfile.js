module.exports = function(grunt){
	grunt.initConfig({
		  responsive_images: {
    		dev: {
    			options: {
	     			sizes: [{
	     			name: 'small',
	       			width: 100
	     			}, {
	     			name: 'medium',
	       			width: 200
	    			},
	    			{
	    			name: 'large',
	    			width:320
	    			}]
	   			},
      			files: [{
	        		expand: true,
	        		src: ['img/**/*.{jpg,gif,png}'],
	        		cwd: 'src/',
	        		dest: 'dist'
      			}]
   			},
   			smallest: {
   				options: {
	     			sizes: [{
	     			name: 'small',
	       			width: 31
	     			}, {
	     			name: 'medium',
	       			width: 63
	    			},
	    			{
	    			name: 'large',
	    			width:100
	    			}]
   				},
   				files: [{
	        		expand: true,
	        		src: ['img2/mouse_logo.jpg'],
	        		cwd: 'src/',
	        		dest: 'dist'
      			}]
   			},
   			largest: {
   				files: [{
	        		expand: true,
	        		src: ['img2/guell.jpg'],
	        		cwd: 'src/',
	        		dest: 'dist'
      			}]
   			}
  		  },
  		  responsive_images_extender: {
 			main: {
  			 options: {
   			  sizes: [{
     		  	selector: 'img',
       		  	sizeList: [{
           	  		cond: 'min-width: 300px',
           	  		size: '50vw'
             		},
             		{
           				cond: 'min-width: 700px',
          				size: '70vw'
        			},
        			{
           				cond: 'default',
           				size: '100vw'
       				}]
    			}]
   			  },
   			files: [{
     			expand: true,
     			src: ['**/*.{html,htm,php}'],
     			cwd: 'src/',
     			dest: 'dist/'
  			 }]
 		  }
		}
	})
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-responsive-images-extender');
	grunt.registerTask('default',['responsive_images','responsive_images_extender']);
}