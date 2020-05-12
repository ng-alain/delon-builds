"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const path = require("path");
const lang_config_1 = require("../core/lang.config");
const alain_1 = require("../utils/alain");
const contents_1 = require("../utils/contents");
const file_1 = require("../utils/file");
const html_1 = require("../utils/html");
const json_1 = require("../utils/json");
const lib_versions_1 = require("../utils/lib-versions");
const project_1 = require("../utils/project");
const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project;
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
function fixMain() {
    return (host) => {
        // fix: main.ts using no hmr file
        alain_1.tryAddFile(host, `${project.sourceRoot}/main.ts`, contents_1.HMR_CONTENT.NO_HMR_MAIN_DOT_TS);
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
            'screenfull@^5.0.0',
            'ajv@^6.10.2',
        ]);
        // add ajv
        json_1.scriptsToAngularJson(host, ['node_modules/ajv/dist/ajv.bundle.js'], 'add', ['build', 'test']);
        // @delon/*
        json_1.addPackageToPackageJson(host, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(pkg => `@delon/${pkg}@${lib_versions_1.VERSION}`));
        // ng-alain
        json_1.addPackageToPackageJson(host, [
            `ng-alain@${lib_versions_1.VERSION}`,
            `ng-alain-codelyzer@^0.0.1`,
            `@delon/testing@${lib_versions_1.VERSION}`,
            // color-less
            `antd-theme-generator@^1.1.7`,
            `less-bundle-promise@^1.0.7`,
        ], 'devDependencies');
        // i18n
        if (options.i18n) {
            json_1.addPackageToPackageJson(host, [`@ngx-translate/core@^11.0.1`, `@ngx-translate/http-loader@^4.0.0`]);
        }
        return host;
    };
}
function addRunScriptToPackageJson() {
    return (host) => {
        const json = json_1.getPackage(host, 'scripts');
        if (json == null)
            return host;
        json.scripts.start = `npm run color-less && ng s -o`;
        json.scripts.build = `npm run color-less && node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod`;
        json.scripts.analyze = `npm run color-less && node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod --stats-json`;
        json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
        json.scripts['color-less'] = `node scripts/color-less.js`;
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
        paths['@shared/*'] = ['src/app/shared/*'];
        paths['@core'] = ['src/app/core/index'];
        paths['@core/*'] = ['src/app/core/*'];
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
        json.scripts['lint:ts'] = `tslint -c tslint.json \"src/**/*.ts\" --fix`;
        json.scripts['lint:style'] = `stylelint \"src/**/*.less\" --syntax less --fix`;
        json.scripts['lint-staged'] = `lint-staged`;
        json.scripts['tslint-check'] = `tslint-config-prettier-check ./tslint.json`;
        json['lint-staged'] = {
            linters: {
                'src/**/*.ts': ['npm run lint:ts', 'git add'],
                'src/**/*.less': ['npm run lint:style', 'git add'],
            },
            ignore: ['src/assets/*'],
        };
        json_1.overwritePackage(host, json);
        // dependencies
        json_1.addPackageToPackageJson(host, [
            `tslint-config-prettier@^1.18.0`,
            `tslint-language-service@^0.9.9`,
            `lint-staged@^8.2.1`,
            `husky@^3.0.9`,
            `prettier@^1.18.2`,
            `prettier-stylelint@^0.4.2`,
            `stylelint@^11.1.1`,
            `stylelint-config-prettier@^6.0.0`,
            `stylelint-config-rational-order@^0.1.2`,
            `stylelint-config-standard@^19.0.0`,
            `stylelint-declaration-block-no-ignored-properties@^2.1.0`,
            `stylelint-order@^3.1.1`,
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
function forceLess() {
    return (host) => {
        json_1.scriptsToAngularJson(host, ['src/styles.less'], 'add', ['build'], null, true);
    };
}
function addStyle() {
    return (host) => {
        html_1.addHeadStyle(host, project, `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`);
        html_1.addHtmlToBody(host, project, `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div>\n`);
        // add styles
        file_1.addFiles(host, [`${project.sourceRoot}/styles/index.less`, `${project.sourceRoot}/styles/theme.less`], overwriteDataFileRoot);
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
function addCliTpl() {
    const TPLS = {
        '__name@dasherize__.component.html': `<page-header></page-header>`,
        '__name@dasherize__.component.ts': `import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html',<% if(!inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= componentName %> implements OnInit {

  constructor(private http: _HttpClient, private msg: NzMessageService) { }

  ngOnInit() { }

}
`,
        '__name@dasherize__.component.spec.ts': `import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { <%= componentName %> } from './<%= dasherize(name) %>.component';

  describe('<%= componentName %>', () => {
    let component: <%= componentName %>;
    let fixture: ComponentFixture<<%= componentName %>>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ <%= componentName %> ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(<%= componentName %>);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  `,
    };
    return (host) => {
        const prefix = `${project.root}/_cli-tpl/test/__path__/__name@dasherize@if-flat__/`;
        Object.keys(TPLS).forEach(name => {
            const realPath = prefix + name;
            if (host.exists(realPath)) {
                host.overwrite(realPath, TPLS[name]);
            }
            else {
                host.create(realPath, TPLS[name]);
            }
        });
    };
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
function fixLang(options) {
    return (host) => {
        if (options.i18n)
            return;
        const langs = lang_config_1.getLangData(options.defaultLanguage);
        if (!langs)
            return;
        console.log(`Translating, please wait...`);
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
function installPackages() {
    return (_host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function cnpmTips() {
    return (_host) => {
        console.warn(`Don't use cnpm to install dependencies, pls refer to: https://ng-alain.com/docs/faq#Installation`);
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
            addCliTpl(),
            fixMain(),
            forceLess(),
            addStyle(),
            fixLang(options),
            fixVsCode(),
            fixAngularJson(options),
            installPackages(),
            cnpmTips(),
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map