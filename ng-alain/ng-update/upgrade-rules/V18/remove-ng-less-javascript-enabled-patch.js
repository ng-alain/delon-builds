"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNljep = void 0;
const utils_1 = require("../../../utils");
const PACKAGE_NAME = 'ng-less-javascript-enabled-patch';
function removeNljep() {
    return (tree, context) => {
        const json = (0, utils_1.readPackage)(tree);
        if (json == null)
            return;
        if (!json.devDependencies[PACKAGE_NAME])
            return;
        const postinstall = json.scripts.postinstall;
        if (typeof postinstall !== 'string')
            return;
        if (!postinstall.includes(PACKAGE_NAME))
            return;
        json.scripts.postinstall = postinstall.replace(`${PACKAGE_NAME}`, '');
        delete json.devDependencies[PACKAGE_NAME];
        (0, utils_1.writePackage)(tree, json);
        (0, utils_1.logInfo)(context, `Remove [https://github.com/cipchk/${PACKAGE_NAME}] for devDependencies`);
    };
}
exports.removeNljep = removeNljep;
//# sourceMappingURL=remove-ng-less-javascript-enabled-patch.js.map