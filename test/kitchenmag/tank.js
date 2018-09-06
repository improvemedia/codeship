let tank = require('../../utils/tank');

tank('kitchenmag / tank / desktop', {
  device: 'desktop',

  links: [
    '/',
    '/news',
    '/posts',
    '/recipes',
    '/recipes/10645-nut-s-zelenyu',
    '/posts/10503-desyat-samyh-zdorovyh-i-vkusnyh-perekusov-dlya-tekh-kto-vsegda-sledit-za-figuroj',
  ]
})

tank('kitchenmag / tank / mobile', {
  device: 'mobile',

  links: [
    '/recipes/10645-nut-s-zelenyu',
    '/posts/10503-desyat-samyh-zdorovyh-i-vkusnyh-perekusov-dlya-tekh-kto-vsegda-sledit-za-figuroj',
  ]
})
