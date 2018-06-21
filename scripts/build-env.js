require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
const fs = require('fs');
fs.writeFileSync('./.env.production', `TEST_KEY=${process.env.TEST_KEY}`);