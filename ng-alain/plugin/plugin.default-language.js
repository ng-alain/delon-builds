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
exports.pluginDefaultLanguage = pluginDefaultLanguage;
const schematics_1 = require("@angular-devkit/schematics");
const lang_config_1 = require("../core/lang.config");
const utils_1 = require("../utils");
function pluginDefaultLanguage(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        if (options.type !== 'add') {
            throw new schematics_1.SchematicsException(`Can't be specified the "type" parameter`);
        }
        if (options.defaultLanguage == null) {
            throw new schematics_1.SchematicsException(`Must be specified the "defaultLanguage" parameter`);
        }
        const project = (yield (0, utils_1.getProject)(tree, options.project)).project;
        const appConfigPath = `${project.sourceRoot}/app/app.config.ts`;
        if (!tree.exists(appConfigPath)) {
            throw new schematics_1.SchematicsException(`App config file (${appConfigPath}) not found`);
        }
        let content = tree.read(appConfigPath).toString('utf-8');
        const oldMatch = content.match(/@angular\/common\/locales\/([^']+)/);
        const oldLang = oldMatch != null ? oldMatch[1] : 'zh-Hans';
        if (oldLang === options.defaultLanguage) {
            return;
        }
        const targetLang = (0, lang_config_1.getLangConfig)(options.defaultLanguage);
        if (targetLang == null) {
            console.warn(`Target language not supported, refer to https://ng-alain.com/cli/plugin#defaultLanguage`);
            return;
        }
        console.log(`Changes default languare [${oldLang}] to [${options.defaultLanguage}]`);
        // angular
        content = content
            .replace(/@angular\/common\/locales\/([^']+)/, `@angular/common/locales/${options.defaultLanguage}`)
            .replace(/abbr: '([^']+)/, `abbr: '${options.defaultLanguage}`);
        // zorro
        content = content.replace(/ ([^ ]+) as zorroLang/, ` ${targetLang.zorro} as zorroLang`);
        content = content.replace(/ ([^ ]+) as dateLang/, ` ${targetLang.date} as dateLang`);
        // delon
        content = content.replace(/ ([^ ]+) as delonLang/, ` ${targetLang.delon} as delonLang`);
        tree.overwrite(appConfigPath, content);
    });
}
//# sourceMappingURL=plugin.default-language.js.map