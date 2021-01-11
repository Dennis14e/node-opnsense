const packageJson = require('../package.json');

module.exports = {
    openapi: "3.0.0",
    info: {
        title: 'OPNsense',
        version: packageJson.version,
        description: 'OPNsense API',
    },
    servers: [
        {
            url: '/api/',
        },
    ],
};
