const fs = require('fs');
fs.writeFileSync('./.env', `TEST_KEY=${process.env.TEST_KEY}`);