var system = require('system');

function addLinks(options, paths) {
  return paths.map(function(path) {
    return { site: options.site, auth: options.auth, path: path };
  });
}

var links = [].concat(
  addLinks({ site: '*' }, [
    '/',
    '/news',
    '/posts',
    '/discussions',
  ]),

  addLinks({ site: 'inmyroom' }, [
    '/?_mobile=1',
    '/profi',
    '/photos',
    '/products',
    '/products/27400',
    '/posts?_mobile=1',
    '/photos?_mobile=1',
    '/products?_mobile=1',
    '/products/myagkaya-mebel',
    '/products/27400?_mobile=1',
    '/products/myagkaya-mebel?_mobile=1',
    '/tags/kukhnya-i-stolovaya',
    '/tags/kukhnya-i-stolovaya?_mobile=1',
    '/posts/12437-test-inmyroom-kakoy-ty-dachnik',
    '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni',
    '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni.webview',
    '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni?mobile=1',
    '/posts/11247-6-nestandartnyh-sistem-hraneniya-dlya-ochen-malenkoy-kvartiry',
    '/posts/11096-novyy-sposob-oformleniya-derevyannogo-doma-kottedzh-v-nikolo-prozorovo',
    '/news/1924-shkola-milly-rezanovoy-zapuskaet-onlayn-kurs-interiernogo-risunka',
    '/discussions/dizayn-interjera/topics/1912-kak-vam-neoklassicheskiy-stil-v-interiere-spalni',
  ]),

  addLinks({ site: 'kitchenmag' }, [
    '/recipes',
    '/recipes/10645-nut-s-zelenyu',
    '/recipes/10645-nut-s-zelenyu?_mobile=1',
    '/posts/10503-desyat-samyh-zdorovyh-i-vkusnyh-perekusov-dlya-tekh-kto-vsegda-sledit-za-figuroj',
    '/posts/10503-desyat-samyh-zdorovyh-i-vkusnyh-perekusov-dlya-tekh-kto-vsegda-sledit-za-figuroj?_mobile=1',
  ]),

  addLinks({ site: 'inmyroom', auth: true }, [
    '/admin/orders',
    '/admin/orders/deleted',
    '/admin/orders/logistic',
    '/admin/orders/analytics',
    '/admin/product_categories/new',
    '/admin/posts',
    '/admin/sale_posts',
    '/admin/quizzes',
    '/admin/meter/posts',
    '/admin/meter/teasers',
    '/admin/chronology',
    '/admin/crm/employees',
    '/admin/crm/suppliers',
    '/admin/inquiries',
    '/admin/inquiries/declined',
    '/admin/crm/logistic/calendars',
    '/admin/crm/logistic/delivery_calendars',
    '/admin/crm/logistic/payment_calendars',
    '/admin/crm/quality_controls',
    '/admin/regional_shipping_methods',
    '/admin/companies',
    '/admin/yml_imports',
    '/admin/moderator/products',
    '/admin/moderator/products/inbox',
    '/admin/brands',
    '/admin/moderator/photos',
    '/admin/moderator/comments',
    '/admin/promo_projects',
    '/admin/banner_places',
    '/admin/banners',
    '/admin/metatags',
    '/admin/metatag_variables',
    '/admin/declensions',
    '/admin/static_pages',
    '/admin/meter',
    '/admin/meter/companies',
    '/admin/search/stats',
    '/admin/search',
    '/admin/dashboard',
    '/admin/users',
    '/admin/badges',
    '/admin/user_professions',
    '/admin/company_types',
    '/admin/tags',
    '/admin/tag_categories',
    '/admin/tags/duplicates',
    '/admin/commerce_categories',
    '/admin/commerce_category_groups',
    '/admin/product_categories',
    '/admin/product_categories/stats',
    '/admin/crm/stocks/standart_stock',
    '/admin/crm/stocks/return_stock',
    '/admin/uploads/1',
    '/admin/forums',
    '/admin/forums/pereplanirovki',
    '/admin/mail_rubrics',
    '/admin/mail_rubrics/1',
    '/admin/own_companies',
  ])
);

var authLink = '/tank/authenticate';

var APP_HOSTS = {
  inmyroom:   'https://staging.inmyroom.ru',
  kitchenmag: 'https://staging.kitchenmag.ru'
};

var APP_CREDENTIALS = {
  inmyroom: 'imr',
  kitchenmag: 'km'
};

var app         = system.env.PROJECT;
var host        = APP_HOSTS[app];
var credentials = APP_CREDENTIALS[app];

console.log(app);

var publicLinks     = links.filter(function(link) {return !link.auth && (link.site == app || link.site == '*')});
var authorizedLinks = links.filter(function(link) {return link.auth  && (link.site == app || link.site == '*')});

casper.options.pageSettings.loadImages        = false;
casper.options.pageSettings.javascriptEnabled = false;
casper.options.pageSettings.loadPlugins       = false;
casper.options.waitTimeout = 10000;

casper.test.begin('links unauthorized', publicLinks.length, function(test) {
  casper.start();
  casper.setHttpAuth(credentials, credentials);

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
  casper.setHttpAuth(credentials, credentials);
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
