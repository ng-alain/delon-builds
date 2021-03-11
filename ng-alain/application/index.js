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
const spinner_1 = require("@angular-devkit/build-angular/src/utils/spinner");
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const workspace_1 = require("@schematics/angular/utility/workspace");
const path = require("path");
const lang_config_1 = require("../core/lang.config");
const utils_1 = require("../utils");
const versions_1 = require("../utils/versions");
const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project;
const spinner = new spinner_1.Spinner();
/** Remove files to be overwrite */
function removeOrginalFiles() {
    return (tree) => {
        [
            `${project.root}/README.md`,
            `${project.root}/tslint.json`,
            `${project.sourceRoot}/main.ts`,
            `${project.sourceRoot}/test.ts`,
            `${project.sourceRoot}/environments/environment.prod.ts`,
            `${project.sourceRoot}/environments/environment.ts`,
            `${project.sourceRoot}/styles.less`,
            `${project.sourceRoot}/favicon.ico`,
            `${project.sourceRoot}/app/app.module.ts`,
            `${project.sourceRoot}/app/app.component.spec.ts`,
            `${project.sourceRoot}/app/app.component.ts`,
            `${project.sourceRoot}/app/app.component.html`,
            `${project.sourceRoot}/app/app.component.less`,
            `${project.sourceRoot}/app/app-routing.module.ts`,
        ]
            .filter(p => tree.exists(p))
            .forEach(p => tree.delete(p));
    };
}
function fixAngularJson(options) {
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        const p = utils_1.getProjectFromWorkspace(workspace, options.project);
        // Add proxy.conf.json
        utils_1.getProjectTarget(p, utils_1.BUILD_TARGET_SERVE).proxyConfig = 'proxy.conf.json';
        // 调整budgets
        const budgets = utils_1.getProjectTarget(p, utils_1.BUILD_TARGET_BUILD, 'configurations').production.budgets;
        if (budgets && budgets.length > 0) {
            const initial = budgets.find(w => w.type === 'initial');
            if (initial) {
                initial.maximumWarning = '2mb';
                initial.maximumError = '3mb';
            }
        }
    }));
}
function addDependenciesToPackageJson(options) {
    return (tree) => {
        versions_1.UpgradeMainVersions(tree);
        // 3rd
        utils_1.addPackage(tree, ['screenfull@^5.1.0']);
        // i18n
        if (options.i18n) {
            utils_1.addPackage(tree, [`@ngx-translate/core@^13.0.0`, `@ngx-translate/http-loader@^6.0.0`]);
        }
        return tree;
    };
}
function addRunScriptToPackageJson() {
    return (tree) => {
        const json = utils_1.readPackage(tree, 'scripts');
        if (json == null)
            return tree;
        json.scripts['ng-high-memory'] = `node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng`;
        json.scripts.start = `ng s -o`;
        json.scripts.hmr = `ng s -o --hmr`;
        json.scripts.build = `npm run ng-high-memory build -- --prod`;
        json.scripts.analyze = `npm run ng-high-memory build -- --prod --source-map`;
        json.scripts['analyze:view'] = `source-map-explorer dist/**/*.js`;
        json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
        json.scripts['color-less'] = `ng-alain-plugin-theme -t=colorLess`;
        json.scripts.theme = `ng-alain-plugin-theme -t=themeCss`;
        json.scripts.icon = `ng g ng-alain:plugin icon`;
        utils_1.writePackage(tree, json);
        return tree;
    };
}
function addPathsToTsConfig() {
    return (tree) => {
        const json = utils_1.readJSON(tree, 'tsconfig.json', 'compilerOptions');
        if (json == null)
            return tree;
        if (!json.compilerOptions)
            json.compilerOptions = {};
        if (!json.compilerOptions.paths)
            json.compilerOptions.paths = {};
        const paths = json.compilerOptions.paths;
        paths['@shared'] = ['src/app/shared/index'];
        paths['@core'] = ['src/app/core/index'];
        paths['@env/*'] = ['src/environments/*'];
        utils_1.writeJSON(tree, 'tsconfig.json', json);
        return tree;
    };
}
function addCodeStylesToPackageJson() {
    return (tree) => {
        const json = utils_1.readPackage(tree);
        if (json == null)
            return tree;
        json.scripts.lint = `npm run lint:ts && npm run lint:style`;
        json.scripts['lint:ts'] = `ng lint --fix`;
        json.scripts['lint:style'] = `stylelint \"src/**/*.less\" --syntax less --fix`;
        json.scripts['pretty-quick'] = `pretty-quick`;
        json.scripts['tslint-check'] = `tslint-config-prettier-check ./tslint.json`;
        utils_1.writePackage(tree, json);
        // dependencies
        utils_1.addPackage(tree, [
            `tslint-config-prettier@^1.18.0`,
            `pretty-quick@^3.1.0`,
            `husky@^4.2.3`,
            `prettier@^2.2.1`,
            `stylelint@^13.8.0`,
            `stylelint-config-prettier@^8.0.2`,
            `stylelint-config-rational-order@^0.1.2`,
            `stylelint-config-standard@^20.0.0`,
            `stylelint-declaration-block-no-ignored-properties@^2.3.0`,
            `stylelint-order@^4.1.0`,
        ], 'devDependencies');
        return tree;
    };
}
function addSchematics(options) {
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        const p = utils_1.getProjectFromWorkspace(workspace, options.project);
        const schematics = p.extensions.schematics;
        schematics['ng-alain:module'] = {
            routing: true,
            spec: false,
        };
        schematics['ng-alain:list'] = {
            spec: false,
        };
        schematics['ng-alain:edit'] = {
            spec: false,
            modal: true,
        };
        schematics['ng-alain:view'] = {
            spec: false,
            modal: true,
        };
        schematics['ng-alain:curd'] = {
            spec: false,
        };
        schematics['@schematics/angular:module'] = {
            routing: true,
            spec: false,
        };
        schematics['@schematics/angular:component'] = Object.assign({ spec: false, flat: false, inlineStyle: true, inlineTemplate: false }, schematics['@schematics/angular:component']);
        schematics['@schematics/angular:directive'] = {
            spec: false,
        };
        schematics['@schematics/angular:service'] = {
            spec: false,
        };
    }));
}
function addNzLintRules() {
    return (tree) => {
        utils_1.addPackage(tree, ['nz-tslint-rules@^0.901.2'], 'devDependencies');
        const json = utils_1.readJSON(tree, 'tslint.json');
        if (json == null)
            return tree;
        json.rulesDirectory.push(`nz-tslint-rules`);
        json.rules['nz-secondary-entry-imports'] = true;
        utils_1.writeJSON(tree, 'tslint.json', json);
        return tree;
    };
}
function forceLess() {
    return () => {
        utils_1.addAssetsToTarget([{ type: 'style', value: 'src/styles.less' }], 'add', [utils_1.BUILD_TARGET_BUILD], null, true);
    };
}
function addStyle() {
    return (tree) => {
        utils_1.addHeadStyle(tree, project, `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`);
        utils_1.addHtmlToBody(tree, project, `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div></div>\n`);
        // add styles
        [`${project.sourceRoot}/styles/index.less`, `${project.sourceRoot}/styles/theme.less`].forEach(p => {
            utils_1.overwriteFile({ tree, filePath: p, content: path.join(overwriteDataFileRoot, p), overwrite: true });
        });
        return tree;
    };
}
function addFilesToRoot(options) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/src'), [
            options.i18n ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('i18n') === -1),
            options.form ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('json-schema') === -1),
            schematics_1.template(Object.assign(Object.assign({ utils: core_1.strings }, options), { dot: '.', VERSION: utils_1.VERSION,
                ZORROVERSION: utils_1.ZORROVERSION })),
            schematics_1.move(project.sourceRoot),
        ])),
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/root'), [
            options.i18n ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('i18n') === -1),
            options.form ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('json-schema') === -1),
            schematics_1.template(Object.assign(Object.assign({ utils: core_1.strings }, options), { dot: '.', VERSION: utils_1.VERSION,
                ZORROVERSION: utils_1.ZORROVERSION })),
        ]), schematics_1.MergeStrategy.Overwrite),
    ]);
}
function fixLang(options) {
    return (tree) => {
        if (options.i18n)
            return;
        const langs = lang_config_1.getLangData(options.defaultLanguage);
        if (!langs)
            return;
        spinner.text = `Translating template into ${options.defaultLanguage} language, please wait...`;
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
    // {{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
    // {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
    html = html.replace(/\{\{[ ]?\(status \? '([^']+)' : '([^']+)'\) \| translate \}\}/g, (_word, key1, key2) => {
        ++matchCount;
        return `{{ status ? '${langs[key1] || key1}' : '${langs[key2] || key2}' }}`;
    });
    // {{ 'app.register-result.msg' | translate: params }}
    html = html.replace(/\{\{[ ]?'([^']+)'[ ]? \| translate: [^ ]+ \}\}/g, (_word, key) => {
        ++matchCount;
        return langs[key] || key;
    });
    // {{ 'Please enter mobile number!' | translate }}
    html = html.replace(/\{\{[ ]?'([^']+)' \| translate[ ]?\}\}/g, (_word, key) => {
        ++matchCount;
        return langs[key] || key;
    });
    // [nzTitle]="'app.login.tab-login-credentials' | translate"
    html = html.replace(/'([^']+)' \| translate[ ]?/g, (_word, key) => {
        ++matchCount;
        const value = langs[key] || key;
        return `'${value}'`;
    });
    // 'app.register.get-verification-code' | translate
    html = html.replace(/'([^']+)' \| translate/g, (_word, key) => {
        ++matchCount;
        return langs[key] || key;
    });
    // removed `header-i18n`
    if (~html.indexOf(`<header-i18n [showLang]="false" class="langs"></header-i18n>`)) {
        ++matchCount;
        html = html.replace(`<header-i18n [showLang]="false" class="langs"></header-i18n>`, ``);
    }
    if (matchCount > 0) {
        tree.overwrite(p, html);
    }
}
function fixVsCode() {
    return (tree) => {
        const filePath = '.vscode/extensions.json';
        let json = utils_1.readJSON(tree, filePath);
        if (json == null) {
            tree.create(filePath, '');
            json = {};
        }
        json.recommendations = ['cipchk.ng-alain-extension-pack'];
        utils_1.writeJSON(tree, filePath, json);
    };
}
function install() {
    return (_host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function finished() {
    return () => {
        spinner.succeed(`Congratulations, NG-ALAIN scaffold generation complete.`);
    };
}
function default_1(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        project = (yield utils_1.getProject(tree, options.project)).project;
        spinner.start(`Generating NG-ALAIN scaffold...`);
        return schematics_1.chain([
            // @delon/* dependencies
            addDependenciesToPackageJson(options),
            // Configuring CommonJS dependencies
            // https://angular.io/guide/build#configuring-commonjs-dependencies
            utils_1.addAllowedCommonJsDependencies([]),
            // ci
            addRunScriptToPackageJson(),
            addPathsToTsConfig(),
            // code style
            addCodeStylesToPackageJson(),
            addSchematics(options),
            addNzLintRules(),
            // files
            removeOrginalFiles(),
            addFilesToRoot(options),
            forceLess(),
            addStyle(),
            fixLang(options),
            fixVsCode(),
            fixAngularJson(options),
            install(),
            finished(),
        ]);
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map