"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statics_dev_router_1 = require("./routes/statics-dev-router");
const statics_router_1 = require("./routes/statics-router");
const config = require("./config");
const express = require("express");
const express_graphql = require("express-graphql");
const schema_1 = require("./schema");
console.log(config.SERVER_PORT);
const app = express();
app.use('/graphql', express_graphql({
    schema: schema_1.default,
    graphiql: true
}));
app.use(config.IS_PRODUCTION ? statics_router_1.StaticsRouter() : statics_dev_router_1.StaticsDevRouter());
app.listen(config.SERVER_PORT, () => {
    console.log(`Listening at http://localhost:${config.SERVER_PORT}/`);
});
//# sourceMappingURL=server.js.map