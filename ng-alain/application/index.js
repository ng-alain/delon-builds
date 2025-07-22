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
exports.default = default_1;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
const lang_config_1 = require("../core/lang.config");
const utils_1 = require("../utils");
const versions_1 = require("../utils/versions");
let project;
let projectName;
let mulitProject = false;
/** Remove files to be overwrite */
function removeOrginalFiles() {
    return (tree) => {
        [
            `${project.root}/README.md`,
            `${project.sourceRoot}/main.ts`,
            `${project.sourceRoot}/styles.less`,
            `${project.sourceRoot}/public/favicon.ico`,
            `${project.sourceRoot}/app/app.component.spec.ts`,
            `${project.sourceRoot}/app/app.component.ts`,
            `${project.sourceRoot}/app/app.component.html`,
            `${project.sourceRoot}/app/app.component.less`,
            `${project.sourceRoot}/app/app.config.ts`,
            `${project.sourceRoot}/app/app.routes.ts`
        ]
            .filter(p => tree.exists(p))
            .forEach(p => tree.delete(p));
    };
}
function fixAngularJson() {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const p = (0, utils_1.getProjectFromWorkspace)(workspace, projectName);
        // Add proxy.conf.js
        const serveTarget = (_a = p.targets) === null || _a === void 0 ? void 0 : _a.get(utils_1.BUILD_TARGET_SERVE);
        if (serveTarget.options == null)
            serveTarget.options = {};
        serveTarget.options.proxyConfig = 'proxy.conf.js';
        (0, utils_1.addStyleResources)(workspace, projectName);
        (0, utils_1.addStylePreprocessorOptions)(workspace, projectName);
        (0, utils_1.addSchematicCollections)(workspace);
        (0, utils_1.addFileReplacements)(workspace, projectName);
    }));
}
/**
 * Fix https://github.com/ng-alain/ng-alain/issues/2359
 */
function fixBrowserBuilderBudgets() {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const json = (0, utils_1.readJSON)(tree, utils_1.DEFAULT_WORKSPACE_PATH);
        const budgets = json.projects[projectName].architect.build.configurations.production.budgets;
        if (budgets && budgets.length > 0) {
            const initial = budgets.find(w => w.type === 'initial');
            if (initial) {
                initial.maximumWarning = '2mb';
                initial.maximumError = '3mb';
                (0, utils_1.writeJSON)(tree, utils_1.DEFAULT_WORKSPACE_PATH, json);
            }
        }
    });
}
function addDependenciesToPackageJson() {
    return (tree) => {
        (0, versions_1.UpgradeMainVersions)(tree);
        // 3rd
        (0, utils_1.addPackage)(tree, ['screenfull@^6.0.2']);
        return tree;
    };
}
function addRunScriptToPackageJson() {
    return (tree) => {
        const json = (0, utils_1.readPackage)(tree, 'scripts');
        if (json == null)
            return tree;
        const commandPrefix = mulitProject ? `${projectName}:` : '';
        const commandFragment = mulitProject ? ` ${projectName}` : '';
        json.scripts['ng-high-memory'] = `node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng`;
        json.scripts[commandFragment ? commandFragment.trim() : 'start'] = `ng s${commandFragment} -o`;
        json.scripts[`${commandPrefix}hmr`] = `ng s${commandFragment} -o --hmr`;
        json.scripts[`${commandPrefix}build`] = `npm run ng-high-memory build${commandFragment}`;
        json.scripts[`${commandPrefix}analyze`] = `npm run ng-high-memory build${commandFragment} -- --source-map`;
        json.scripts[`${commandPrefix}analyze:view`] =
            `source-map-explorer dist/${mulitProject ? `${projectName}/` : ''}**/*.js`;
        json.scripts[`${commandPrefix}test-coverage`] = `ng test${commandFragment} --code-coverage --watch=false`;
        const themeCommand = mulitProject ? ` -n=${projectName}` : '';
        json.scripts[`${commandPrefix}color-less`] = `ng-alain-plugin-theme -t=colorLess${themeCommand}`;
        json.scripts[`${commandPrefix}theme`] = `ng-alain-plugin-theme -t=themeCss${themeCommand}`;
        json.scripts[`${commandPrefix}icon`] =
            `ng g ng-alain:plugin icon${mulitProject ? ` --project ${projectName}` : ''}`;
        json.scripts.prepare = `husky install`;
        (0, utils_1.writePackage)(tree, json);
        return tree;
    };
}
function addPathsToTsConfig() {
    return (tree) => {
        var _a, _b, _c;
        const tsconfigPath = (_c = (_b = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get(utils_1.BUILD_TARGET_BUILD)) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.tsConfig;
        if (tsconfigPath == null) {
            console.warn(`Cannot find tsconfig file in project ${projectName}`);
            return tree;
        }
        const commandPrefix = mulitProject ? `projects/${projectName}/` : '';
        const tsConfigPath = 'tsconfig.json';
        (0, utils_1.modifyJSON)(tree, tsConfigPath, { path: ['compilerOptions', 'baseUrl'], value: './' });
        const basePath = ['compilerOptions', 'paths'];
        (0, utils_1.modifyJSON)(tree, tsConfigPath, { path: basePath, value: {} });
        (0, utils_1.modifyJSON)(tree, tsConfigPath, { path: [...basePath, `@shared`], value: [`${commandPrefix}src/app/shared/index`] });
        (0, utils_1.modifyJSON)(tree, tsConfigPath, { path: [...basePath, `@core`], value: [`${commandPrefix}src/app/core/index`] });
        (0, utils_1.modifyJSON)(tree, tsConfigPath, { path: [...basePath, `@env/*`], value: [`${commandPrefix}src/environments/*`] });
        (0, utils_1.modifyJSON)(tree, tsConfigPath, { path: [...basePath, `@_mock`], value: [`_mock/index`] });
        return tree;
    };
}
function addCodeStylesToPackageJson() {
    return (tree) => {
        const json = (0, utils_1.readPackage)(tree);
        if (json == null)
            return tree;
        json.scripts.lint = `npm run lint:ts && npm run lint:style`;
        json.scripts['lint:ts'] = `npx eslint --cache --fix`;
        json.scripts['lint:style'] = `npx stylelint \\"src/**/*.less\\" --fix`;
        json.scripts['prepare'] = 'husky install';
        (0, utils_1.writePackage)(tree, json);
        // fix polyfills.ts
        const polyfillsPath = `${project.sourceRoot}/polyfills.ts`;
        if (tree.exists(polyfillsPath)) {
            const polyfillsContent = `/* eslint-disable import/no-unassigned-import */\n${(0, utils_1.readContent)(tree, polyfillsPath)}`;
            (0, utils_1.writeFile)(tree, polyfillsPath, polyfillsContent);
        }
        // dependencies
        (0, utils_1.addPackage)(tree, [
            `husky@^9.1.7`,
            `lint-staged@^16.1.2`,
            `prettier@^3.5.3`,
            `stylelint@^16.18.0`,
            `stylelint-config-standard@^38.0.0`,
            `stylelint-declaration-block-no-ignored-properties@^2.8.0`,
            `stylelint-config-clean-order@^7.0.0`
        ], 'devDependencies');
        return tree;
    };
}
function addSchematics(options) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        const p = (0, utils_1.getProjectFromWorkspace)(workspace, options.project);
        const schematics = p.extensions.schematics;
        schematics['ng-alain:module'] = {
            routing: true
        };
        schematics['ng-alain:list'] = {
            skipTests: false
        };
        schematics['ng-alain:edit'] = {
            skipTests: false,
            modal: true
        };
        schematics['ng-alain:view'] = {
            skipTests: false,
            modal: true
        };
        schematics['ng-alain:curd'] = {
            skipTests: false
        };
        schematics['@schematics/angular:module'] = {
            routing: true
        };
        schematics['@schematics/angular:component'] = Object.assign({ skipTests: false, flat: false, inlineStyle: true, inlineTemplate: false }, schematics['@schematics/angular:component']);
        schematics['@schematics/angular:directive'] = {
            skipTests: false
        };
        schematics['@schematics/angular:service'] = {
            skipTests: false
        };
    }));
}
function forceLess() {
    return (0, utils_1.addAssetsToTarget)([{ type: 'style', value: `${mulitProject ? `projects/${projectName}/` : ''}src/styles.less` }], 'add', [utils_1.BUILD_TARGET_BUILD], projectName, false);
}
function addStyle() {
    return (tree) => {
        (0, utils_1.addHeadStyle)(tree, project, `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`);
        (0, utils_1.addHtmlToBody)(tree, project, `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div></div>\n`);
        // // add styles
        // [`${project.sourceRoot}/styles/index.less`, `${project.sourceRoot}/styles/theme.less`].forEach(p => {
        //   overwriteFile({ tree, filePath: p, content: path.join(overwriteDataFileRoot, p), overwrite: true });
        // });
        return tree;
    };
}
function addFilesToRoot(options) {
    return (0, schematics_1.chain)([
        (0, schematics_1.mergeWith)((0, schematics_1.apply)((0, schematics_1.url)('./files/src'), [
            options.i18n ? (0, schematics_1.noop)() : (0, schematics_1.filter)(p => p.indexOf('i18n') === -1),
            options.form ? (0, schematics_1.noop)() : (0, schematics_1.filter)(p => p.indexOf('json-schema') === -1),
            (0, schematics_1.template)(Object.assign(Object.assign({ utils: core_1.strings }, options), { dot: '.', VERSION: utils_1.VERSION,
                ZORROVERSION: utils_1.ZORROVERSION })),
            (0, schematics_1.move)(project.sourceRoot)
        ]), schematics_1.MergeStrategy.Overwrite),
        (0, schematics_1.mergeWith)((0, schematics_1.apply)((0, schematics_1.url)('./files/root'), [
            options.i18n ? (0, schematics_1.noop)() : (0, schematics_1.filter)(p => p.indexOf('i18n') === -1),
            options.form ? (0, schematics_1.noop)() : (0, schematics_1.filter)(p => p.indexOf('json-schema') === -1),
            (0, schematics_1.template)(Object.assign(Object.assign({ utils: core_1.strings }, options), { dot: '.', VERSION: utils_1.VERSION,
                ZORROVERSION: utils_1.ZORROVERSION }))
            // move('/')
        ]), schematics_1.MergeStrategy.Overwrite)
    ]);
}
function fixLang(options) {
    return (tree, context) => {
        if (options.i18n)
            return;
        const langs = (0, lang_config_1.getLangData)(options.defaultLanguage);
        if (!langs)
            return;
        context.logger.info(`Translating template into ${options.defaultLanguage} language, please wait...`);
        tree.visit(p => {
            if (~p.indexOf(`/node_modules/`))
                return;
            fixLangInHtml(tree, p, langs);
        });
    };
}
function fixLangInHtml(tree, p, langs) {
    let html = tree.get(p).content.toString('utf8');
    let matchCount = 0;
    // {{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | i18n }}
    // {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | i18n }}
    html = html.replace(/\{\{[ ]?\(status \? '([^']+)' : '([^']+)'\) \| i18n \}\}/g, (_word, key1, key2) => {
        ++matchCount;
        return `{{ status ? '${langs[key1] || key1}' : '${langs[key2] || key2}' }}`;
    });
    // {{ 'app.register-result.msg' | i18n: { email } }}
    html = html.replace(/\{\{[ ]?'([^']+)'[ ]? \| i18n: \{ [^ ]+ \} \}\}/g, (_word, key) => {
        ++matchCount;
        return langs[key] || key;
    });
    // {{ 'app.register-result.msg' | i18n: params }}
    html = html.replace(/\{\{[ ]?'([^']+)'[ ]? \| i18n: [^ ]+ \}\}/g, (_word, key) => {
        ++matchCount;
        return langs[key] || key;
    });
    // {{ 'Please enter mobile number!' | i18n }}
    html = html.replace(/\{\{[ ]?'([^']+)' \| i18n[ ]?\}\}/g, (_word, key) => {
        ++matchCount;
        return langs[key] || key;
    });
    // [nzTitle]="'app.login.tab-login-credentials' | i18n"
    html = html.replace(/'([^']+)' \| i18n[ ]?/g, (_word, key) => {
        ++matchCount;
        const value = langs[key] || key;
        return `'${value}'`;
    });
    // 'app.register.get-verification-code' | i18n
    html = html.replace(/'([^']+)' \| i18n/g, (_word, key) => {
        ++matchCount;
        return langs[key] || key;
    });
    // removed `header-i18n`
    if (~html.indexOf(`<header-i18n showLangText="false" class="langs" />`)) {
        ++matchCount;
        html = html.replace(`<header-i18n showLangText="false" class="langs" />`, ``);
    }
    if (matchCount > 0) {
        tree.overwrite(p, html);
    }
}
function fixNgAlainJson() {
    return (tree) => {
        const json = (0, utils_1.getNgAlainJson)(tree);
        if (json == null)
            return;
        if (typeof json.projects !== 'object')
            json.projects = {};
        if (!json.projects[projectName])
            json.projects[projectName] = {};
        (0, utils_1.writeNgAlainJson)(tree, json);
    };
}
function default_1(options) {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, utils_1.getProject)(tree, options.project);
        mulitProject = (0, utils_1.isMulitProject)(tree);
        project = res.project;
        projectName = res.name;
        context.logger.info(`Generating NG-ALAIN scaffold to ${projectName} project...`);
        return (0, schematics_1.chain)([
            // @delon/* dependencies
            addDependenciesToPackageJson(),
            // Configuring CommonJS dependencies
            // https://angular.io/guide/build#configuring-commonjs-dependencies
            (0, utils_1.addAllowedCommonJsDependencies)([]),
            (0, utils_1.addAllowSyntheticDefaultImports)(),
            // ci
            addRunScriptToPackageJson(),
            addPathsToTsConfig(),
            // code style
            addCodeStylesToPackageJson(),
            addSchematics(options),
            (0, versions_1.addESLintRule)(res.name),
            // files
            removeOrginalFiles(),
            addFilesToRoot(options),
            forceLess(),
            addStyle(),
            fixLang(options),
            fixAngularJson(),
            fixBrowserBuilderBudgets(),
            fixNgAlainJson()
        ]);
    });
}
//# sourceMappingURL=index.js.map