let env = require('./env');

jest.setTimeout(20000);

require(`./test/${env.app}`);
