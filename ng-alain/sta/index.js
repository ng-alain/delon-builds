"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("@angular/cli/utilities/color");
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const fs_1 = require("fs");
const path_1 = require("path");
const swagger_typescript_api_1 = require("swagger-typescript-api");
const json_1 = require("../utils/json");
const workspace_1 = require("../utils/workspace");
let project;
const filePrefix = `/* eslint-disable */
/*
 * Automatically generated by 'ng g ng-alain:sta'
 * @see https://ng-alain.com/cli/sta
 *
 * Inspired by: https://github.com/acacode/swagger-typescript-api
 */

`;
function addPathInTsConfig(name) {
    return (tree) => {
        const json = json_1.readJSON(tree, 'tsconfig.json', 'compilerOptions');
        if (json == null)
            return tree;
        if (!json.compilerOptions)
            json.compilerOptions = {};
        if (!json.compilerOptions.paths)
            json.compilerOptions.paths = {};
        const paths = json.compilerOptions.paths;
        paths[`@${name}`] = [`src/app/_${name}/index`];
        paths[`@${name}/*`] = [`src/app/_${name}/*`];
        json_1.writeJSON(tree, 'tsconfig.json', json);
        return tree;
    };
}
function cleanOutput(p) {
    try {
        fs_1.rmdirSync(p, { recursive: true });
        fs_1.mkdirSync(p);
    }
    catch (e) { }
}
function fix(output, res, tree, context) {
    const indexList = [`models`, `_base.service`];
    const basePath = core_1.normalize(path_1.join(project.root, output.replace(process.cwd(), '')));
    try {
        // definitions
        const dataTpl = res.getTemplate({ name: 'dataContracts', fileName: 'data-contracts.eta' });
        const dataContent = res.renderTemplate(dataTpl, Object.assign({}, res.configuration));
        tree.create(`${basePath}/models.ts`, filePrefix + res.formatTSContent(dataContent));
        // Base Service
        const baseServiceTpl = res.getTemplate({ name: 'baseService', fileName: 'base.service.eta' });
        const baseServiceContent = res.renderTemplate(baseServiceTpl, Object.assign({}, res.configuration));
        tree.create(`${basePath}/_base.service.ts`, filePrefix + res.formatTSContent(baseServiceContent));
        // Tag Service
        const dtoTypeTpl = res.getTemplate({ name: 'dto-type', fileName: 'dto-type.eta' });
        const serviceTpl = res.getTemplate({ name: 'service', fileName: 'service.eta' });
        res.configuration.routes.combined.forEach(route => {
            const routeIndex = [];
            // dto
            const dtoContent = res.formatTSContent(res.renderTemplate(dtoTypeTpl, Object.assign(Object.assign({}, res.configuration), { route })));
            if (dtoContent.trim().length > 10) {
                tree.create(`${basePath}/${route.moduleName}/dtos.ts`, filePrefix + dtoContent);
                routeIndex.push(`dtos`);
            }
            // service
            const serviceContent = res.renderTemplate(serviceTpl, Object.assign(Object.assign({}, res.configuration), { route }));
            tree.create(`${basePath}/${route.moduleName}/service.ts`, filePrefix + res.formatTSContent(serviceContent));
            routeIndex.push(`service`);
            // index.ts
            tree.create(`${basePath}/${route.moduleName}/index.ts`, filePrefix + routeIndex.map(name => `export * from './${name}';`).join('\n'));
            indexList.push(`${route.moduleName}/index`);
        });
        // Index
        tree.create(`${basePath}/index.ts`, filePrefix + indexList.map(name => `export * from './${name}';`).join('\n'));
    }
    catch (ex) {
        throw new schematics_1.SchematicsException(`Parse error: ${ex}`);
    }
}
function genProxy(config) {
    return (tree, context) => {
        var _a;
        context.logger.info(color_1.colors.blue(`- Name: ${config.name}`));
        const output = (config.output = path_1.resolve(process.cwd(), (_a = config.output) !== null && _a !== void 0 ? _a : `./src/app/_${config.name}`));
        const templates = path_1.resolve(__dirname, './templates');
        if (config.url) {
            context.logger.info(color_1.colors.blue(`- Using url data: ${config.url}`));
        }
        else if (config.filePath) {
            context.logger.info(color_1.colors.blue(`- Using file data: ${config.filePath}`));
        }
        context.logger.info(color_1.colors.blue(`- Output: ${output}`));
        return new Promise(resolve => {
            context.logger.info(color_1.colors.blue(`Start generating...`));
            swagger_typescript_api_1.generateApi(Object.assign({ name: `${config.name}.ts`, url: config.url, input: config.filePath, spec: config.spec, output,
                templates, toJS: false, modular: true, cleanOutput: true, generateUnionEnums: true, generateClient: true, extractRequestParams: false, generateResponses: false, generateRouteTypes: true, generateApi: true, silent: true, disableStrictSSL: true, moduleNameFirstTag: true, hooks: {
                    onInit: c => {
                        c.httpClientType = config.httpClientType;
                        return c;
                    },
                    onPrepareConfig: c => {
                        var _a;
                        if (!config.responseDataField)
                            return c;
                        (_a = c.routes.combined) === null || _a === void 0 ? void 0 : _a.forEach(moduleInfo => {
                            moduleInfo.routes.forEach(routeInfo => {
                                var _a, _b, _c, _d;
                                const responseBodyContentFirstType = Object.keys((_a = routeInfo.responseBodySchema) === null || _a === void 0 ? void 0 : _a.content).pop();
                                if (!responseBodyContentFirstType)
                                    return;
                                const responseBodyRef = c.utils.getComponentByRef(routeInfo.responseBodySchema.content[responseBodyContentFirstType].schema.$ref);
                                if (!responseBodyRef)
                                    return;
                                const fieldProperty = (_c = (_b = responseBodyRef.typeData) === null || _b === void 0 ? void 0 : _b.properties) === null || _c === void 0 ? void 0 : _c[config.responseDataField];
                                if (!fieldProperty)
                                    return;
                                routeInfo.response.type = (_d = fieldProperty.$parsed.content) !== null && _d !== void 0 ? _d : 'any';
                            });
                        });
                        return c;
                    }
                } }, config.generateApiParams
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ))
                .then((res) => {
                cleanOutput(output);
                fix(output, res, tree, context);
                resolve();
            })
                .catch(ex => {
                throw new schematics_1.SchematicsException(`Generate error: ${ex}`);
            });
        });
    };
}
function finished() {
    return (_, context) => {
        context.logger.info(color_1.colors.green(`✓  Finished, refer to: https://ng-alain.com/cli/sta`));
    };
}
function tryLoadConfig(configPath) {
    if (!configPath || configPath.length <= 0)
        return null;
    try {
        const configFile = path_1.resolve(process.cwd(), configPath);
        if (fs_1.existsSync(configFile)) {
            return require(configFile);
        }
    }
    catch (err) {
        console.error('Invalid config file', err);
    }
}
function default_1(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        project = (yield workspace_1.getProject(tree, options.project)).project;
        const config = Object.assign(Object.assign({ name: 'sta' }, tryLoadConfig(options.config)), options);
        return schematics_1.chain([addPathInTsConfig(config.name), genProxy(config), finished()]);
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map