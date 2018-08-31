"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("../../app/server/schema");
var fs = require("fs");
var from_schema_1 = require("@gql2ts/from-schema");
var humps = require("humps");
var path = require("path");
var from_query_1 = require("@gql2ts/from-query");
var gqlFilePath = '../../app/typings/gql.d.ts';
var clientPath = path.join(__dirname, '../../app/client');
var walkSync = function (dir, filelist) {
    if (dir[dir.length - 1] != '/')
        dir = dir.concat('/');
    var fs = fs || require('fs'), files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = walkSync(dir + file + '/', filelist);
        }
        else {
            filelist.push(dir + file);
        }
    });
    return filelist;
};
try {
    var ns = from_schema_1.generateNamespace('GQL', schema_1.default, null, {
        generateInterfaceName: function (name) { return humps.pascalize(name); },
        generateDocumentation: function (documentation) {
            return documentation.description ? "/** " + documentation.description + " */" : '';
        },
        addSemicolon: function (str) { return "" + str; },
        formatInput: function (name, isOptional, type) {
            return "" + name + (isOptional ? '?:' : ':') + " " + type;
        },
        generateNamespace: function (_, interfaces) { return interfaces + " "; }
    });
    fs.writeFileSync(gqlFilePath, "// graphql typescript definitions\n\ndeclare namespace GQL {\n" + ns + "\n");
    var files = walkSync(clientPath, []);
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        if (path.extname(file) === '.graphql' || path.extname(file) === '.gql') {
            var query = fs.readFileSync(file);
            var tsDefinitions = from_query_1.default(schema_1.default, query.toString(), {}, {});
            var allDefinitions = tsDefinitions
                .map(function (_a) {
                var result = _a.result;
                return result;
            })
                .join('\n');
            fs.appendFileSync(gqlFilePath, allDefinitions);
            fs.appendFileSync(gqlFilePath, '\n');
        }
    }
    fs.appendFileSync(gqlFilePath, "}");
    console.log('Successfully created gql.d.ts file');
}
catch (err) {
    console.log('Error creating gql.d.ts file');
    throw err;
}
