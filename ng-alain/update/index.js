"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const update_1 = require("./update");
var TargetVersion;
(function (TargetVersion) {
    TargetVersion[TargetVersion["V2"] = 0] = "V2";
})(TargetVersion = exports.TargetVersion || (exports.TargetVersion = {}));
function updateToV2() {
    return () => console.log('Not yet!');
    return update_1.createUpdateRule(TargetVersion.V2);
}
exports.updateToV2 = updateToV2;
function postUpdate() {
    return () => console.log('\nComplete! Please check the output above for any issues that were detected but could not' +
        ' be automatically fixed.');
}
exports.postUpdate = postUpdate;
//# sourceMappingURL=index.js.map