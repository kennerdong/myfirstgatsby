require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
const fs = require('fs');
fs.writeFileSync('./.env.production', `REACT_APP_TEST_KEY=${process.env.REACT_APP_TEST_KEY}`);