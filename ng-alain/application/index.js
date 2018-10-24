"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const path = require("path");
const json_1 = require("../utils/json");
const lib_versions_1 = require("../utils/lib-versions");
const file_1 = require("../utils/file");
const project_1 = require("../utils/project");
const html_1 = require("../utils/html");
const alain_1 = require("../utils/alain");
const contents_1 = require("../utils/contents");
const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project;
/** Remove files to be overwrite */
function removeOrginalFiles() {
    return (host) => {
        [
            `${project.root}/README.md`,
            `${project.sourceRoot}/main.ts`,
            `${project.sourceRoot}/environments/environment.prod.ts`,
            `${project.sourceRoot}/environments/environment.ts`,
            `${project.sourceRoot}/styles.less`,
            `${project.sourceRoot}/app/app.module.ts`,
            `${project.sourceRoot}/app/app.component.spec.ts`,
            `${project.sourceRoot}/app/app.component.ts`,
            `${project.sourceRoot}/app/app.component.html`,
            `${project.sourceRoot}/app/app.component.less`,
        ]
            .filter(p => host.exists(p))
            .forEach(p => host.delete(p));
    };
}
function fixedNg6() {
    return (host) => {
        const pkg = json_1.getPackage(host);
        // all @angular/*
        ['dependencies', 'devDependencies'].forEach(type => {
            Object.keys(pkg[type]).filter(key => key.startsWith('@angular/')).forEach(key => {
                pkg[type][key] = "^6.1.10";
            });
        });
        pkg.devDependencies['@angular-devkit/build-angular'] = '~0.10.2';
        pkg.devDependencies['typescript'] = '~2.9.2';
        json_1.overwritePackage(host, pkg);
    };
}
function fixMain() {
    return (host) => {
        // fix: main.ts using no hmr file
        alain_1.tryAddFile(host, `${project.sourceRoot}/main.ts`, contents_1.HMR_CONTENT.NO_HMR_MAIN_DOT_TS);
    };
}
function addDependenciesToPackageJson(options) {
    return (host, context) => {
        // 3rd
        json_1.addPackageToPackageJson(host, [
            // allow ignore ng-zorro-antd becauce of @delon/theme dependency
            `ng-zorro-antd@${lib_versions_1.ZORROVERSION}`,
            // ng-zorro-antd need
            'screenfull@^3.3.1',
            'ajv@^6.4.0',
        ]);
        // add ajv
        json_1.scriptsToAngularJson(host, ['node_modules/ajv/dist/ajv.bundle.js'], 'add', [
            'build',
            'test',
        ]);
        // @delon/*
        json_1.addPackageToPackageJson(host, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(pkg => `@delon/${pkg}@${lib_versions_1.VERSION}`));
        // ng-alain
        json_1.addPackageToPackageJson(host, [
            `ng-alain@${lib_versions_1.VERSION}`,
            // color-less
            `less-bundle-promise@^1.0.7`,
        ], 'devDependencies');
        // i18n
        if (options.i18n) {
            json_1.addPackageToPackageJson(host, [
                `@ngx-translate/core@^10.0.1`,
                `@ngx-translate/http-loader@^3.0.1`,
            ]);
        }
        return host;
    };
}
function addRunScriptToPackageJson() {
    return (host, context) => {
        const json = json_1.getPackage(host, 'scripts');
        if (json == null)
            return host;
        json.scripts['start'] = `ng serve -o`;
        json.scripts['build'] = `ng build --prod --build-optimizer`;
        json.scripts['analyze'] = `ng build --prod --build-optimizer --stats-json`;
        json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
        json.scripts['color-less'] = `node scripts/color-less.js`;
        json_1.overwritePackage(host, json);
        return host;
    };
}
function addPathsToTsConfig() {
    return (host, context) => {
        [
            {
                path: 'tsconfig.json',
                baseUrl: `${project.sourceRoot}/`,
            },
            {
                path: `${project.sourceRoot}/tsconfig.app.json`,
                baseUrl: './',
            },
            {
                path: `${project.sourceRoot}/tsconfig.spec.json`,
                baseUrl: './',
            },
        ].forEach(item => {
            const json = json_1.getJSON(host, item.path, 'compilerOptions');
            if (json == null)
                return host;
            if (!json.compilerOptions)
                json.compilerOptions = {};
            if (!json.compilerOptions.paths)
                json.compilerOptions.paths = {};
            json.compilerOptions.baseUrl = item.baseUrl;
            const paths = json.compilerOptions.paths;
            paths['@shared'] = ['app/shared'];
            paths['@shared/*'] = ['app/shared/*'];
            paths['@core'] = ['app/core'];
            paths['@core/*'] = ['app/core/*'];
            paths['@testing'] = ['testing'];
            paths['@testing/*'] = ['testing/*'];
            paths['@env'] = ['environments'];
            paths['@env/*'] = ['environments/*'];
            json_1.overwriteJSON(host, item.path, json);
        });
        return host;
    };
}
function addCodeStylesToPackageJson() {
    return (host, context) => {
        const json = json_1.getPackage(host);
        if (json == null)
            return host;
        json.scripts['lint'] = `npm run lint:ts && npm run lint:style`;
        json.scripts['lint:ts'] = `tslint -p src/tsconfig.app.json -c tslint.json 'src/**/*.ts'`;
        json.scripts['lint:style'] = `stylelint \"{src}/**/*.less\" --syntax less`;
        json.scripts['lint-staged'] = `lint-staged`;
        json.scripts['tslint-check'] = `tslint-config-prettier-check ./tslint.json`;
        json['lint-staged'] = {
            '*.{cmd,html,json,md,sh,txt,xml,yml}': [
                'editorconfig-tools fix',
                'git add',
            ],
            '*.ts': ['npm run lint:ts', 'prettier --write', 'git add'],
            '*.less': ['npm run lint:style', 'prettier --write', 'git add'],
            'ignore': ['src/assets/*'],
        };
        json_1.overwritePackage(host, json);
        // tslint
        const tsLint = json_1.getJSON(host, 'tslint.json', 'rules');
        tsLint.rules['curly'] = false;
        tsLint.rules['use-host-property-decorator'] = false;
        tsLint.rules['directive-selector'] = [
            true,
            'attribute',
            [project.prefix, 'passport', 'exception', 'layout', 'header'],
            'camelCase',
        ];
        tsLint.rules['component-selector'] = [
            true,
            'element',
            [project.prefix, 'passport', 'exception', 'layout', 'header'],
            'kebab-case',
        ];
        json_1.overwriteJSON(host, 'tslint.json', tsLint);
        // app tslint
        const sourceTslint = `${project.sourceRoot}/tslint.json`;
        if (host.exists(sourceTslint)) {
            const appTsLint = json_1.getJSON(host, sourceTslint, 'rules');
            appTsLint.rules['directive-selector'] = [
                true,
                'attribute',
                [project.prefix, 'passport', 'exception', 'layout', 'header'],
                'camelCase',
            ];
            appTsLint.rules['component-selector'] = [
                true,
                'element',
                [project.prefix, 'passport', 'exception', 'layout', 'header'],
                'kebab-case',
            ];
            json_1.overwriteJSON(host, sourceTslint, appTsLint);
        }
        // dependencies
        json_1.addPackageToPackageJson(host, [
            `tslint-config-prettier@^1.12.0`,
            `tslint-language-service@^0.9.9`,
            `editorconfig-tools@^0.1.1`,
            `lint-staged@^7.1.2`,
            `husky@^0.14.3`,
            `prettier@^1.12.1`,
            `prettier-stylelint@^0.4.2`,
            `stylelint@^9.2.0`,
            `stylelint-config-standard@^18.2.0`,
        ]);
        return host;
    };
}
function addSchematics() {
    return (host, context) => {
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
function forceLess() {
    return (host, context) => {
        json_1.scriptsToAngularJson(host, ['src/styles.less'], 'add', ['build'], null, true);
    };
}
function addStyle(options) {
    return (host) => {
        html_1.addHeadStyle(host, project, `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`);
        html_1.addHtmlToBody(host, project, `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div>\n`);
        // add styles
        file_1.addFiles(host, [
            `${project.sourceRoot}/styles/index.less`,
            `${project.sourceRoot}/styles/theme.less`,
        ], overwriteDataFileRoot);
        return host;
    };
}
function mergeFiles(options, from, to) {
    return schematics_1.mergeWith(schematics_1.apply(schematics_1.url(from), [
        options.i18n ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('i18n') === -1),
        options.form ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('json-schema') === -1),
        schematics_1.template(Object.assign({ utils: core_1.strings }, options, { dot: '.', VERSION: lib_versions_1.VERSION,
            ZORROVERSION: lib_versions_1.ZORROVERSION })),
        schematics_1.move(to),
    ]));
}
function addFilesToRoot(options) {
    return schematics_1.chain([
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/src'), [
            options.i18n ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('i18n') === -1),
            options.form ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('json-schema') === -1),
            schematics_1.template(Object.assign({ utils: core_1.strings }, options, { dot: '.', VERSION: lib_versions_1.VERSION,
                ZORROVERSION: lib_versions_1.ZORROVERSION })),
            schematics_1.move(project.sourceRoot),
        ])),
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/root'), [
            options.i18n ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('i18n') === -1),
            options.form ? schematics_1.noop() : schematics_1.filter(p => p.indexOf('json-schema') === -1),
            schematics_1.template(Object.assign({ utils: core_1.strings }, options, { dot: '.', VERSION: lib_versions_1.VERSION,
                ZORROVERSION: lib_versions_1.ZORROVERSION })),
        ]), schematics_1.MergeStrategy.Overwrite),
    ]);
}
function installPackages() {
    return (host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function default_1(options) {
    return (host, context) => {
        project = project_1.getProject(host, options.project);
        return schematics_1.chain([
            // @delon/* dependencies
            addDependenciesToPackageJson(options),
            // ci
            addRunScriptToPackageJson(),
            addPathsToTsConfig(),
            // code style
            addCodeStylesToPackageJson(),
            addSchematics(),
            // files
            removeOrginalFiles(),
            addFilesToRoot(options),
            fixMain(),
            fixedNg6(),
            forceLess(),
            addStyle(options),
            installPackages(),
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map