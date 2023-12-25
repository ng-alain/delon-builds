"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNljep = void 0;
const utils_1 = require("../../../utils");
const PACKAGE_NAME = 'ng-less-javascript-enabled-patch';
function addNljep() {
    return (tree, context) => {
        const json = (0, utils_1.readPackage)(tree);
        if (json == null)
            return;
        if (json.devDependencies[PACKAGE_NAME])
            return;
        if (typeof json.scripts.postinstall !== 'string')
            json.scripts.postinstall = '';
        if (json.scripts.postinstall.length > 0)
            json.scripts.postinstall += ' && ';
        json.scripts.postinstall += PACKAGE_NAME;
        json.devDependencies[PACKAGE_NAME] = '^17.0.0';
        (0, utils_1.writePackage)(tree, json);
        (0, utils_1.logInfo)(context, `Add [https://github.com/cipchk/${PACKAGE_NAME}] for devDependencies`);
    };
}
exports.addNljep = addNljep;
//# sourceMappingURL=nljep.js.map