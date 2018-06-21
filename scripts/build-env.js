require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
const fs = require('fs');
fs.writeFileSync(
    './.env.production', 
    `TEST_KEY=${process.env.TEST_KEY}\n`
    `MAILCHIMP_API_ENDPOINT=${process.env.MAILCHIMP_API_ENDPOINT}\n`
);