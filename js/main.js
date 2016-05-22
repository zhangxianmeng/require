require.config({
    //baseUrl: 'js/app',//相对页面script标签路径
    //paths: {
    //    'jq' : 'jquery.min',
    //    'lazy' : 'jquery.lazyload.min'
    //},
    paths: {//相对man.js的路径
        'jq' : 'app/jquery.min',
        'lazy' : 'app/jquery.lazyload.min'
    },
    shim: {//不符合AMD规范的模块
    	'lazy': {
    		deps: ['jq'],//！！！依赖项无比添加
    		exports: 'lazy'//require加载之后的输出变量
    	}
    }
});

require(['jq','lazy'], function() {
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