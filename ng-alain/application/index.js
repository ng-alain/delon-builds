"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spinner_1 = require("@angular-devkit/build-angular/src/utils/spinner");
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const path = require("path");
const lang_config_1 = require("../core/lang.config");
const file_1 = require("../utils/file");
const html_1 = require("../utils/html");
const json_1 = require("../utils/json");
const lib_versions_1 = require("../utils/lib-versions");
const project_1 = require("../utils/project");
const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project;
const spinner = new spinner_1.Spinner();
/** Remove files to be overwrite */
function removeOrginalFiles() {
    return (host) => {
        [
            `${project.root}/README.md`,
            `${project.root}/tslint.json`,
            `${project.sourceRoot}/main.ts`,
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
            .filter(p => host.exists(p))
            .forEach(p => host.delete(p));
    };
}
function fixAngularJson(options) {
    return (host) => {
        const json = json_1.getAngular(host);
        const _project = project_1.getProjectFromWorkspace(json, options.project);
        // Add proxy.conf.json
        (_project.targets || _project.architect).serve.options.proxyConfig = 'proxy.conf.json';
        json_1.overwriteAngular(host, json);
        return host;
    };
}
function addDependenciesToPackageJson(options) {
    return (host) => {
        // 3rd
        json_1.addPackageToPackageJson(host, [
            // allow ignore ng-zorro-antd becauce of @delon/theme dependency
            `ng-zorro-antd@${lib_versions_1.ZORROVERSION}`,
            // ng-zorro-antd need
            'screenfull@^5.0.2',
            'ajv@^6.12.4',
        ]);
        // add ajv
        json_1.scriptsToAngularJson(host, ['node_modules/ajv/dist/ajv.bundle.js'], 'add', ['build', 'test']);
        // @delon/*
        json_1.addPackageToPackageJson(host, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(pkg => `@delon/${pkg}@${lib_versions_1.VERSION}`));
        // ng-alain
        json_1.addPackageToPackageJson(host, [
            `ng-alain@${lib_versions_1.VERSION}`,
            `ng-alain-codelyzer@^0.0.1`,
            `ng-alain-plugin-theme@^11.0.0`,
            `@delon/testing@${lib_versions_1.VERSION}`,
        ], 'devDependencies');
        // i18n
        if (options.i18n) {
            json_1.addPackageToPackageJson(host, [`@ngx-translate/core@^13.0.0`, `@ngx-translate/http-loader@^6.0.0`]);
        }
        // Configuring CommonJS dependencies
        // https://angular.io/guide/build#configuring-commonjs-dependencies
        json_1.addAllowedCommonJsDependencies(host);
        return host;
    };
}
function addRunScriptToPackageJson() {
    return (host) => {
        const json = json_1.getPackage(host, 'scripts');
        if (json == null)
            return host;
        json.scripts.start = `ng s -o`;
        json.scripts.hmr = `ng s -o --hmr`;
        json.scripts.build = `node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod`;
        json.scripts.analyze = `node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod --stats-json`;
        json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
        json.scripts['color-less'] = `ng-alain-plugin-theme -t=colorLess`;
        json.scripts.theme = `ng-alain-plugin-theme -t=themeCss`;
        json.scripts.icon = `ng g ng-alain:plugin icon`;
        json_1.overwritePackage(host, json);
        return host;
    };
}
function addPathsToTsConfig() {
    return (host) => {
        const json = json_1.getJSON(host, 'tsconfig.json', 'compilerOptions');
        if (json == null)
            return host;
        if (!json.compilerOptions)
            json.compilerOptions = {};
        if (!json.compilerOptions.paths)
            json.compilerOptions.paths = {};
        const paths = json.compilerOptions.paths;
        paths['@shared'] = ['src/app/shared/index'];
        paths['@core'] = ['src/app/core/index'];
        paths['@env/*'] = ['src/environments/*'];
        json_1.overwriteJSON(host, 'tsconfig.json', json);
        return host;
    };
}
function addCodeStylesToPackageJson() {
    return (host) => {
        const json = json_1.getPackage(host);
        if (json == null)
            return host;
        json.scripts.lint = `npm run lint:ts && npm run lint:style`;
        json.scripts['lint:ts'] = `ng lint --fix`;
        json.scripts['lint:style'] = `stylelint \"src/**/*.less\" --syntax less --fix`;
        json.scripts['pretty-quick'] = `pretty-quick`;
        json.scripts['tslint-check'] = `tslint-config-prettier-check ./tslint.json`;
        json_1.overwritePackage(host, json);
        // dependencies
        json_1.addPackageToPackageJson(host, [
            `tslint-config-prettier@^1.18.0`,
            `tslint-language-service@^0.9.9`,
            `pretty-quick@^3.0.2`,
            `husky@^4.2.3`,
            `prettier@^2.1.2`,
            `stylelint@^13.7.0`,
            `stylelint-config-prettier@^8.0.2`,
            `stylelint-config-rational-order@^0.1.2`,
            `stylelint-config-standard@^20.0.0`,
            `stylelint-declaration-block-no-ignored-properties@^2.3.0`,
            `stylelint-order@^4.1.0`,
        ], 'devDependencies');
        return host;
    };
}
function addSchematics() {
    return (host) => {
        const angularJsonFile = 'angular.json';
        const json = json_1.getJSON(host, angularJsonFile, 'schematics');
        if (json == null)
            return host;
        json.schematics['ng-alain:module'] = {
            routing: true,
            spec: false,
        };
        json.schematics['ng-alain:list'] = {
            spec: false,
        };
        json.schematics['ng-alain:edit'] = {
            spec: false,
            modal: true,
        };
        json.schematics['ng-alain:view'] = {
            spec: false,
            modal: true,
        };
        json.schematics['ng-alain:curd'] = {
            spec: false,
        };
        json.schematics['@schematics/angular:module'] = {
            routing: true,
            spec: false,
        };
        json.schematics['@schematics/angular:component'] = {
            spec: false,
            flat: false,
            inlineStyle: true,
            inlineTemplate: false,
        };
        json.schematics['@schematics/angular:directive'] = {
            spec: false,
        };
        json.schematics['@schematics/angular:service'] = {
            spec: false,
        };
        json_1.overwriteJSON(host, angularJsonFile, json);
    };
}
function addNzLintRules() {
    return (host) => {
        json_1.addPackageToPackageJson(host, ['nz-tslint-rules@^0.901.2'], 'devDependencies');
        const json = json_1.getJSON(host, 'tslint.json');
        if (json == null)
            return host;
        json.rulesDirectory.push(`nz-tslint-rules`);
        json.rules['nz-secondary-entry-imports'] = true;
        json_1.overwriteJSON(host, 'tslint.json', json);
        return host;
    };
}
function forceLess() {
    return (host) => {
        json_1.scriptsToAngularJson(host, ['src/styles.less'], 'add', ['build'], null, true);
    };
}
function addStyle() {
    return (host) => {
        html_1.addHeadStyle(host, project, `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`);
        html_1.addHtmlToBody(host, project, `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div></div>\n`);
        // add styles
        file_1.addFiles(host, [`${project.sourceRoot}/styles/index.less`, `${project.sourceRoot}/styles/theme.less`], overwriteDataFileRoot);
        return host;
    };
}
function mergeFiles(options, from, to) {
    return schematics_1.mergeWith(schematics_1.apply(schematics_1.url(from), [
        options.i18n ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('i18n') === -1),
        options.form ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('json-schema') === -1),
        schematics_1.template(Object.assign(Object.assign({ utils: core_1.strings }, options), { dot: '.', VERSION: lib_versions_1.VERSION,
            ZORROVERSION: lib_versions_1.ZORROVERSION })),
        schematics_1.move(to),
    ]));
}
function addFilesToRoot(options) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/src'), [
            options.i18n ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('i18n') === -1),
            options.form ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('json-schema') === -1),
            schematics_1.template(Object.assign(Object.assign({ utils: core_1.strings }, options), { dot: '.', VERSION: lib_versions_1.VERSION,
                ZORROVERSION: lib_versions_1.ZORROVERSION })),
            schematics_1.move(project.sourceRoot),
        ])),
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/root'), [
            options.i18n ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('i18n') === -1),
            options.form ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('json-schema') === -1),
            schematics_1.template(Object.assign(Object.assign({ utils: core_1.strings }, options), { dot: '.', VERSION: lib_versions_1.VERSION,
                ZORROVERSION: lib_versions_1.ZORROVERSION })),
        ]), schematics_1.MergeStrategy.Overwrite),
    ]);
}
function fixLang(options) {
    return (host) => {
        if (options.i18n)
            return;
        const langs = lang_config_1.getLangData(options.defaultLanguage);
        if (!langs)
            return;
        spinner.text = `Translating template into ${options.defaultLanguage} language, please wait...`;
        host.visit(p => {
            if (~p.indexOf(`/node_modules/`))
                return;
            fixLangInHtml(host, p, langs);
        });
    };
}
function fixLangInHtml(host, p, langs) {
    let html = host.get(p).content.toString('utf8');
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
        host.overwrite(p, html);
    }
}
function fixVsCode() {
    return (host) => {
        const filePath = '.vscode/extensions.json';
        let json = json_1.getJSON(host, filePath);
        if (json == null) {
            host.create(filePath, '');
            json = {};
        }
        json.recommendations = ['cipchk.ng-alain-extension-pack'];
        json_1.overwriteJSON(host, filePath, json);
    };
}
function install() {
    return (_host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function finished() {
    return (_host, _context) => {
        spinner.succeed(`Congratulations, NG-ALAIN scaffold generation complete.`);
    };
}
function default_1(options) {
    return (host, context) => {
        project = project_1.getProject(host, options.project);
        spinner.start(`Generating NG-ALAIN scaffold...`);
        return schematics_1.chain([
            // @delon/* dependencies
            addDependenciesToPackageJson(options),
            // ci
            addRunScriptToPackageJson(),
            addPathsToTsConfig(),
            // code style
            addCodeStylesToPackageJson(),
            addSchematics(),
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
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map