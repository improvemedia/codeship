let env = require('./env');

jest.setTimeout(35000);

require(`./test/${env.app}`);
