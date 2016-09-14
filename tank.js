var system = require('system');
var links = [
  {path: '/',                                                                                          site: '*'},
  {path: '/news',                                                                                      site: '*'},
  {path: '/posts',                                                                                     site: '*'},
  {path: '/profi',                                                                                     site: 'inmyroom'},
  {path: '/photos',                                                                                    site: 'inmyroom'},
  {path: '/products',                                                                                  site: 'inmyroom'},
  {path: '/discussions',                                                                               site: '*'},
  {path: '/products/27400',                                                                            site: 'inmyroom'},
  {path: '/photos?mobile=1',                                                                           site: 'inmyroom'},
  {path: '/products?mobile=1',                                                                         site: 'inmyroom'},
  {path: '/products/myagkaya-mebel',                                                                   site: 'inmyroom'},
  {path: '/products/27400?mobile=1',                                                                   site: 'inmyroom'},
  {path: '/products/myagkaya-mebel?mobile=1',                                                          site: 'inmyroom'},
  {path: '/posts/12437-test-inmyroom-kakoy-ty-dachnik',                                                site: 'inmyroom'},
  {path: '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni',                                   site: 'inmyroom'},
  {path: '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni.webview',                           site: 'inmyroom'},
  {path: '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni?mobile=1',                          site: 'inmyroom'},
  {path: '/posts/11247-6-nestandartnyh-sistem-hraneniya-dlya-ochen-malenkoy-kvartiry',                 site: 'inmyroom'},
  {path: '/news/1924-shkola-milly-rezanovoy-zapuskaet-onlayn-kurs-interiernogo-risunka',               site: 'inmyroom'},
  {path: '/posts/11096-novyy-sposob-oformleniya-derevyannogo-doma-kottedzh-v-nikolo-prozorovo',        site: 'inmyroom'},
  {path: '/discussions/dizayn-interjera/topics/1912-kak-vam-neoklassicheskiy-stil-v-interiere-spalni', site: 'inmyroom'},
  {path: '/admin2/orders',                                                                             site: 'inmyroom', auth: true}
];
var authLink = '/tank/authenticate';


var HOSTS = {inmyroom: 'https://staging.inmyroom.ru', kitchenmag: 'https://staging.kitchenmag.ru'};
var app = system.env.PROJECT;
console.log(app);

var publicLinks = links.filter(function(link) {return !link.auth && (link.site == app || link.site == '*')});
var authorizedLinks = links.filter(function(link) {return link.auth && (link.site == app || link.site == '*')});

var host = HOSTS[app];

casper.options.pageSettings.loadImages        = false;
casper.options.pageSettings.javascriptEnabled = false;
casper.options.pageSettings.loadPlugins       = false;
casper.options.waitTimeout = 10000;

casper.test.begin('links unauthorized', publicLinks.length, function(test) {
  casper.start();
  casper.setHttpAuth('imr', 'imr');

  publicLinks.forEach(function(link) {
    casper.thenOpen(host + link.path, function() {
      casper.test.assertHttpStatus(200, link.path);
    });
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('authorized links', authorizedLinks.length, function(test) {
  casper.start();
  casper.setHttpAuth('imr', 'imr');
  casper.thenOpen(host + authLink);
  authorizedLinks.forEach(function(link) {
    casper.thenOpen(host + link.path, function() {
      casper.test.assertHttpStatus(200, link.path);
    });
  });

  casper.run(function() {
    test.done();
  });
});
