let env = require('./env');

jest.setTimeout(10000);

require(`./test/${env.app}`);
