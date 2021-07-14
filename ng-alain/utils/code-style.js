"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINT_STAGED_CONFIG = exports.LINT_STAGED = void 0;
exports.LINT_STAGED = 'lint-staged';
exports.LINT_STAGED_CONFIG = {
    '(src)/**/*.{html,ts}': ['eslint --fix'],
    '(src)/**/*.less': ['stylelint --syntax less --fix']
};
//# sourceMappingURL=code-style.js.map