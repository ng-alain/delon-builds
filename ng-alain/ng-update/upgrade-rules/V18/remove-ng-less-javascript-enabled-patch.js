"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNljep = removeNljep;
const utils_1 = require("../../../utils");
const PACKAGE_NAME = 'ng-less-javascript-enabled-patch';
function removeNljep() {
    return (tree, context) => {
        const json = (0, utils_1.readPackage)(tree);
        if (json == null)
            return;
        const postinstall = json.scripts.postinstall;
        if (typeof postinstall === 'string' && postinstall.includes(PACKAGE_NAME)) {
            json.scripts.postinstall = postinstall.replace(`${PACKAGE_NAME}`, '');
        }
        if (json.devDependencies[PACKAGE_NAME]) {
            delete json.devDependencies[PACKAGE_NAME];
        }
        (0, utils_1.writePackage)(tree, json);
        (0, utils_1.logInfo)(context, `Remove [https://github.com/cipchk/${PACKAGE_NAME}] for devDependencies`);
    };
}
//# sourceMappingURL=remove-ng-less-javascript-enabled-patch.js.map