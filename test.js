let env = require('./env');

jest.setTimeout(25000);

require(`./test/${env.app}`);
