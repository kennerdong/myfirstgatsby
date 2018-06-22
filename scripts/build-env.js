require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const content = 
`TEST_KEY=${process.env.TEST_KEY}\n`+
`MAILCHIMP_API_ENDPOINT=${process.env.MAILCHIMP_API_ENDPOINT}\r\n`;

const fs = require('fs');
fs.writeFileSync(
    './.env.production', 
    content
);
console.log(fs.readFileSync(`./.env.production`).toString());