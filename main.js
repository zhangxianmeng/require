require.config({
    baseUrl: 'app',
    shim: {
    	'l': {
    		deps: ['jq'],
    		exports: 'lazy'
    		
    	},
    	'jq': {
    		exports: '$'
    	}
    },
    paths: {
    	'jq' : 'jquery.min',
    	'l' : 'jquery.lazyload.min'
    }
});

require(['jq','l'], function($) {
	console.log($)
    var imgLazuLoad = $("img");
            imgLazuLoad.css({
                'width':'500px',
                'height':'500px'
            });

            imgLazuLoad.lazyload({
                placeholder : "img/loading.gif",
                effect: "fadeIn"
            });
});