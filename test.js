let env = require('./env');

jest.setTimeout(60000);

require(`./test/${env.app}`);
