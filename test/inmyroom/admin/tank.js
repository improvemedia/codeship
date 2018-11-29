let tank = require('../../../utils/tank');

tank('inmyroom / admin / tank', {
  auth: true,

  links: [
    '/admin/orders',
    '/admin/orders/18808',
    '/admin/orders/18808/manager_edit_items',
    '/admin/orders/18808/logist_edit_items',
    '/admin/orders/deleted',
    '/admin/orders/logistic',
    '/admin/orders/sales_funnels/order_funnel',
    '/admin/orders/sales_funnels/inquiry_funnel',
    '/admin/orders/sales_funnels/cart_funnel',
    '/admin/orders/sales_funnels/call_funnel',
    '/admin/crm/product_analytics',
    '/admin/crm/logistic/calendars',
    '/admin/crm/logistic/delivery_calendars',
    '/admin/crm/logistic/payment_calendars',
    '/admin/crm/employees',
    '/admin/crm/suppliers',
    '/admin/crm/quality_controls',
    '/admin/crm/stocks/standart_stock',
    '/admin/crm/stocks/return_stock',
    '/admin/product_categories/new',
    '/admin/posts',
    '/admin/sale_posts',
    '/admin/quizzes',
    '/admin/meter/posts',
    '/admin/meter/teasers',
    '/admin/chronology',
    '/admin/inquiries',
    '/admin/inquiries/declined',
    '/admin/shipping_methods',
    '/admin/companies',
    '/admin/brands',
    '/admin/yml_imports',
    '/admin/moderator/products',
    '/admin/moderator/products/inbox',
    '/admin/moderator/photos',
    '/admin/moderator/comments',
    '/admin/promo_projects',
    '/admin/banner_places',
    '/admin/banners',
    '/admin/metatags',
    '/admin/metatag_variables',
    '/admin/declensions',
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
    '/admin/uploads/1',
    '/admin/own_companies',
    '/admin/designers'
  ]
})
