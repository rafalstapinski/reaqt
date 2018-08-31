"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proxy = require("http-proxy-middleware");
const express_1 = require("express");
exports.StaticsDevRouter = () => {
    const router = express_1.Router();
    // All the assets are hosted by Webpack on localhost:8080 (Webpack-dev-server)
    router.use('/public', proxy({
        target: 'http://localhost:8080/'
    }));
    // Any route should render the web app html (hosted by by Webpack-dev-server)
    router.use('**', proxy({
        target: 'http://localhost:8080/',
        pathRewrite: path => '/public/index.html'
    }));
    return router;
};
exports.default = exports.StaticsDevRouter;
//# sourceMappingURL=statics-dev-router.js.map