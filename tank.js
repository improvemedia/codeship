var system = require('system');
var links = ['/',
             '/products',
             '/photos',
             '/posts/11247-6-nestandartnyh-sistem-hraneniya-dlya-ochen-malenkoy-kvartiry'
            ];

var host = system.env.host || 'http://staging.inmyroom.ru';

casper.test.begin('links unauthorized', links.length, function suite(test) {
    casper.start();
    casper.setHttpAuth('imr', 'imr');

    links.forEach(function(link, _i, _a) {
      casper.thenOpen(host + links[0],function() {
          casper.test.assertHttpStatus(200, link);
      });
    });

    casper.run(function() {
        test.done();
    });
});
