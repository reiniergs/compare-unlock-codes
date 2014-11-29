

require.config({
   baseUrl : 'js/',
   paths : {
   		jquery         : 'vendor/jquery',
   		backbone       : 'vendor/backbone-min',
   		underscore     : 'vendor/underscore-min',
   		react          : 'vendor/react',
   		firebase       : 'vendor/firebase',
   		reactfire      : 'vendor/reactfire.min'
   },
   shim : {
   	    'backbone' : {
   	    	deps : ['underscore','jquery'],
   	    	exports : 'Backbone'

   	    },
   	    'underscore' : {
   	    	exports : '_'
   	    },
   	    'react' : {
   	    	deps : []
   	    },
   	    'reactfire' : {
   	    	deps : ['firebase']
   	    } 
   }

});