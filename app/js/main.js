require.config({

    paths: {
        'angular': '../lib/angular/angular',
		'ui-router': '../lib/angular-ui-router/release/angular-ui-router.min',
		'domReady': '../lib/requirejs-domready/domReady',
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular']
        }
    },

    deps: [
        './bootstrap'
    ]
});
