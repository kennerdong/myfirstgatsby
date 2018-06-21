const fs = require('fs');
fs.writeFileSync('./.env.production', `TEST_KEY=${process.env.TEST_KEY}`);