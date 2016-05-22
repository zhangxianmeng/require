require.config({
    //baseUrl: 'js/app',//���ҳ��script��ǩ·��
    //paths: {
    //    'jq' : 'jquery.min',
    //    'lazy' : 'jquery.lazyload.min'
    //},
    paths: {//���man.js��·��
        'jq' : 'app/jquery.min',
        'lazy' : 'app/jquery.lazyload.min'
    },
    shim: {//������AMD�淶��ģ��
    	'lazy': {
    		deps: ['jq'],//�������������ޱ����
    		exports: 'lazy'//require����֮����������
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