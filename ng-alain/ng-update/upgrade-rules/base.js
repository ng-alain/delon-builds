"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMockPath = void 0;
const utils_1 = require("../../utils");
function updateMockPath() {
    return (tree) => {
        const json = (0, utils_1.readJSON)(tree, 'tsconfig.json', 'compilerOptions');
        if (json == null)
            return tree;
        if (!json.compilerOptions)
            json.compilerOptions = {};
        if (!json.compilerOptions.paths)
            json.compilerOptions.paths = {};
        const paths = json.compilerOptions.paths;
        paths[`@_mock`] = [`_mock/index`];
        (0, utils_1.writeJSON)(tree, 'tsconfig.json', json);
        return tree;
    };
}
exports.updateMockPath = updateMockPath;
//# sourceMappingURL=base.js.map