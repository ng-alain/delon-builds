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
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const plugin_asdf_1 = require("./plugin.asdf");
const plugin_code_style_1 = require("./plugin.code-style");
const plugin_default_language_1 = require("./plugin.default-language");
const plugin_docker_1 = require("./plugin.docker");
const plugin_icon_1 = require("./plugin.icon");
const plugin_rtl_1 = require("./plugin.rtl");
const plugin_sts_1 = require("./plugin.sts");
const utils_1 = require("../utils");
function installPackages() {
    return (_host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function default_1(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, utils_1.getProject)(tree, options.project);
        const project = res.project;
        const pluginOptions = {
            type: options.type,
            name: res.name,
            projectPrefix: project.prefix,
            root: project.root,
            sourceRoot: project.sourceRoot,
            project: options.project
        };
        const rules = [];
        switch (options.name) {
            case 'codeStyle':
                rules.push((0, plugin_code_style_1.pluginCodeStyle)(pluginOptions), installPackages());
                break;
            case 'docker':
                rules.push((0, plugin_docker_1.pluginDocker)(pluginOptions));
                break;
            case 'defaultLanguage':
                rules.push((0, plugin_default_language_1.pluginDefaultLanguage)(Object.assign(Object.assign({}, pluginOptions), { defaultLanguage: options.defaultLanguage })));
                break;
            case 'icon':
                rules.push((0, plugin_icon_1.pluginIcon)(pluginOptions));
                break;
            case 'sts':
                rules.push(...(0, plugin_sts_1.pluginSTS)(pluginOptions));
                break;
            case 'rtl':
                rules.push((0, plugin_rtl_1.pluginRTL)(pluginOptions));
                break;
            case 'asdf':
                rules.push((0, plugin_asdf_1.pluginAsdf)());
                break;
            default:
                throw new schematics_1.SchematicsException(`Could not find plugin name: ${options.name}`);
        }
        return (0, schematics_1.chain)(rules);
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map