"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular-devkit/schematics/testing");
const path_1 = require("path");
exports.APPNAME = 'foo';
function createNgRunner() {
    return new testing_1.SchematicTestRunner('schematics', path_1.join('./node_modules/@schematics/angular/collection.json'));
}
exports.createNgRunner = createNgRunner;
function createAlainRunner() {
    return new testing_1.SchematicTestRunner('schematics', path_1.join(__dirname, '../collection.json'));
}
exports.createAlainRunner = createAlainRunner;
function createAlainApp(ngAddOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseRunner = createNgRunner();
        const workspaceTree = yield baseRunner
            .runSchematicAsync('workspace', {
            name: 'workspace',
            newProjectRoot: 'projects',
            version: '6.0.0',
        })
            .toPromise();
        const appTree = yield baseRunner
            .runSchematicAsync('application', {
            name: exports.APPNAME,
            inlineStyle: false,
            inlineTemplate: false,
            routing: false,
            style: 'css',
            skipTests: false,
            skipPackageJson: false,
        }, workspaceTree)
            .toPromise();
        const alainRunner = createAlainRunner();
        const tree = yield alainRunner
            .runSchematicAsync('ng-add', Object.assign({ skipPackageJson: false }, ngAddOptions), appTree)
            .toPromise();
        return { runner: alainRunner, tree };
    });
}
exports.createAlainApp = createAlainApp;
function createAlainAndModuleApp(name = 'trade', ngAddOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield createAlainApp(ngAddOptions);
        res.tree = yield res.runner
            .runSchematicAsync('module', { name, project: exports.APPNAME, routing: true }, res.tree)
            .toPromise();
        return res;
    });
}
exports.createAlainAndModuleApp = createAlainAndModuleApp;
function createTestApp() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield createNgRunner()
            .runSchematicAsync('ng-new', {
            name: exports.APPNAME,
            directory: '',
            version: '6.0.0',
            routing: true,
            style: 'less',
        })
            .toPromise();
        return res;
    });
}
exports.createTestApp = createTestApp;
//# sourceMappingURL=testing.js.map