import { ɵɵdefinePipe, ɵsetClassMetadata, Pipe, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { formatMask } from '@delon/util/format';

class FormatMaskPipe {
    /**
     * Format mask
     *
     * 格式化掩码
     * ```ts
     * formatMask('123', '(###)') => (123)
     * ```
     */
    transform(value, mask) {
        return formatMask(value, mask);
    }
}
/** @nocollapse */ FormatMaskPipe.ɵfac = function FormatMaskPipe_Factory(t) { return new (t || FormatMaskPipe)(); };
/** @nocollapse */ FormatMaskPipe.ɵpipe = ɵɵdefinePipe({ name: "mask", type: FormatMaskPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FormatMaskPipe, [{
        type: Pipe,
        args: [{ name: 'mask' }]
    }], null, null); })();

const PIPES = [FormatMaskPipe];
class FormatPipeModule {
}
/** @nocollapse */ FormatPipeModule.ɵmod = ɵɵdefineNgModule({ type: FormatPipeModule });
/** @nocollapse */ FormatPipeModule.ɵinj = ɵɵdefineInjector({ factory: function FormatPipeModule_Factory(t) { return new (t || FormatPipeModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormatPipeModule, { declarations: [FormatMaskPipe], exports: [FormatMaskPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FormatPipeModule, [{
        type: NgModule,
        args: [{
                declarations: PIPES,
                exports: PIPES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FormatMaskPipe, FormatPipeModule };
//# sourceMappingURL=delon-util-pipes-format.js.map
