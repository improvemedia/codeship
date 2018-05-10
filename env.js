var app = process.env.PROJECT;

const APP_HOSTS = {
  inmyroom:   'https://staging.inmyroom.ru',
  kitchenmag: 'https://staging.kitchenmag.ru'
}

const APP_CREDENTIALS = {
  inmyroom: {
    username: 'imr',
    password: 'imr'
  },

  kitchenmag: {
    username: 'km',
    password: 'km'
  }
}

module.exports = {
  app: app,
  host: APP_HOSTS[app],
  credentials: APP_CREDENTIALS[app],
  authUrl: '/tank/authenticate',
}
