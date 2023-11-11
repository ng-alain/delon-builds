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
exports.fixAngularJson = void 0;
const workspace_1 = require("@schematics/angular/utility/workspace");
const utils_1 = require("../../../utils");
function fixAngularJson() {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        workspace.projects.forEach(project => {
            var _a;
            const build = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get(utils_1.BUILD_TARGET_BUILD);
            if (build == null)
                return;
            if (build.builder !== '@angular-devkit/build-angular:browser')
                return;
            build.builder = '@angular-devkit/build-angular:application';
            const options = build.options;
            options['browser'] = options.main;
            delete options.main;
            const dev = build.configurations.development;
            delete dev.buildOptimizer;
            delete dev.vendorChunk;
            delete dev.namedChunks;
        });
    }));
}
exports.fixAngularJson = fixAngularJson;
//# sourceMappingURL=angularJson.js.map