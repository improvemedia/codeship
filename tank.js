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
  {path: '/admin/orders',                                                                             site: 'inmyroom', auth: true},
  {path: '/admin/product_categories/new',
  site: 'inmyroom', auth: true},
  {path: '/admin/posts',
  site: 'inmyroom', auth: true},
  {path: '/admin/sale_posts',
  site: 'inmyroom', auth: true},
  {path: '/admin/quizzes',
  site: 'inmyroom', auth: true},
  {path: '/admin/meter/posts',
  site: 'inmyroom', auth: true},
  {path: '/admin/meter/teasers',
  site: 'inmyroom', auth: true},
  {path: '/admin/orders/analytics',
  site: 'inmyroom', auth: true},
  {path: '/admin/chronology',
  site: 'inmyroom', auth: true},
  {path: '/admin/crm/employees',
  site: 'inmyroom', auth: true},
  {path: '/admin/crm/vendors',
  site: 'inmyroom', auth: true},
  {path: '/admin/inquiries',
  site: 'inmyroom', auth: true},
  {path: '/admin/inquiries/declined',
  site: 'inmyroom', auth: true},
  {path: '/admin/orders/logistic',
  site: 'inmyroom', auth: true},
  {path: '/admin/crm/logistic/calendars',
  site: 'inmyroom', auth: true},
  {path: '/admin/crm/logistic/delivery_calendars',
  site: 'inmyroom', auth: true},
  {path: '/admin/crm/logistic/payment_calendars',
  site: 'inmyroom', auth: true},
  {path: '/admin/orders/deleted',
  site: 'inmyroom', auth: true},
  {path: '/admin/crm/quality_controls',
  site: 'inmyroom', auth: true},
  {path: '/admin/regional_shipping_methods',
  site: 'inmyroom', auth: true},
  {path: '/admin/companies',
  site: 'inmyroom', auth: true},
  {path: '/admin/yml_imports',
  site: 'inmyroom', auth: true},
  {path: '/admin/moderator/products',
  site: 'inmyroom', auth: true},
  {path: '/admin/moderator/products/inbox',
  site: 'inmyroom', auth: true},
  {path: '/admin/brands',
  site: 'inmyroom', auth: true},
  {path: '/admin/moderator/photos',
  site: 'inmyroom', auth: true},
  {path: '/admin/moderator/comments',
  site: 'inmyroom', auth: true},
  {path: '/admin/promo_projects',
  site: 'inmyroom', auth: true},
  {path: '/admin/banner_places',
  site: 'inmyroom', auth: true},
  {path: '/admin/banners',
  site: 'inmyroom', auth: true},
  {path: '/admin/metatags',
  site: 'inmyroom', auth: true},
  {path: '/admin/metatag_variables',
  site: 'inmyroom', auth: true},
  {path: '/admin/declensions',
  site: 'inmyroom', auth: true},
  {path: '/admin/static_pages',
  site: 'inmyroom', auth: true},
  {path: '/admin/meter',
  site: 'inmyroom', auth: true},
  {path: '/admin/meter/companies',
  site: 'inmyroom', auth: true},
  {path: '/admin/search/stats',
  site: 'inmyroom', auth: true},
  {path: '/admin/search',
  site: 'inmyroom', auth: true},
  {path: '/admin/dashboard',
  site: 'inmyroom', auth: true},
  {path: '/admin/users',
  site: 'inmyroom', auth: true},
  {path: '/admin/badges',
  site: 'inmyroom', auth: true},
  {path: '/admin/user_professions',
  site: 'inmyroom', auth: true},
  {path: '/admin/company_types',
  site: 'inmyroom', auth: true},
  {path: '/admin/tags',
  site: 'inmyroom', auth: true},
  {path: '/admin/tag_categories',
  site: 'inmyroom', auth: true},
  {path: '/admin/tags/duplicates',
  site: 'inmyroom', auth: true},
  {path: '/admin/commerce_categories',
  site: 'inmyroom', auth: true},
  {path: '/admin/commerce_category_groups',
  site: 'inmyroom', auth: true},
  {path: '/admin/product_categories',
  site: 'inmyroom', auth: true},
  {path: '/admin/product_categories/stats',
  site: 'inmyroom', auth: true},
  {path: '/admin/uploads/1',
  site: 'inmyroom', auth: true},
  {path: '/admin/forums',
  site: 'inmyroom', auth: true},
  {path: '/admin/forums/pereplanirovki',
  site: 'inmyroom', auth: true},
  {path: '/admin/mail_rubrics',
  site: 'inmyroom', auth: true},
  {path: '/admin/mail_rubrics/1',
  site: 'inmyroom', auth: true},
  {path: '/admin/own_companies',
  site: 'inmyroom', auth: true}
];
var authLink = '/tank/authenticate';

var HOSTS = {inmyroom: 'https://staging.inmyroom.ru', kitchenmag: 'https://staging.kitchenmag.ru'};
var basicAuth = {inmyroom: 'imr', kitchenmag: 'km'};
var app = system.env.PROJECT;
console.log(app);

var credentials = 'imr';//basicAuth[app];

var publicLinks = links.filter(function(link) {return !link.auth})// && (link.site == app || link.site == '*')});
var authorizedLinks = links.filter(function(link) {return link.auth})// && (link.site == app || link.site == '*')});

var host = 'http://localhost:3000';//HOSTS[app];

casper.options.pageSettings.loadImages        = false;
casper.options.pageSettings.javascriptEnabled = false;
casper.options.pageSettings.loadPlugins       = false;
casper.options.waitTimeout = 10000;

casper.test.begin('links unauthorized', publicLinks.length, function(test) {
  casper.start();
  casper.setHttpAuth(credentials, credentials);

  publicLinks.forEach(function(link) {
    casper.thenOpen(host + link.path, function() {
      console.log(host + link.path)
      casper.test.assertHttpStatus(200, link.path);
    });
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('authorized links', authorizedLinks.length, function(test) {
  casper.start();
  casper.setHttpAuth(credentials, credentials);
  casper.thenOpen(host + authLink);
  authorizedLinks.forEach(function(link) {
    casper.thenOpen(host + link.path, function() {
      console.log(host + link.path)
      casper.test.assertHttpStatus(200, link.path);
    });
  });

  casper.run(function() {
    test.done();
  });
});
