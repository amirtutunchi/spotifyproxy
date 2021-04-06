const ProxyChain = require('proxy-chain');
const server = new ProxyChain.Server({
    port: 8000,
    verbose: false,
    prepareRequestFunction: ({ request, username, password, hostname, port, isHttp }) => {
        return {
                requestAuthentication: username !== 'amir' || password !== 'amirbt22'
        };
    },
});

server.listen(() => {
    console.log(`Proxy server is listening on port ${8000}`);
});
