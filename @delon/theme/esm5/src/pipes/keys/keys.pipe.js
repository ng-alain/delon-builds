/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * @see https://ng-alain.com/docs/common#%E5%8F%AF%E8%BF%AD%E4%BB%A3-keys
 */
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} keyIsNumber
     * @return {?}
     */
    KeysPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} keyIsNumber
     * @return {?}
     */
    function (value, keyIsNumber) {
        if (keyIsNumber === void 0) { keyIsNumber = false; }
        /** @type {?} */
        var ret = [];
        // tslint:disable-next-line:forin
        for (var key in value) {
            ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
        }
        return ret;
    };
    KeysPipe.decorators = [
        { type: Pipe, args: [{ name: 'keys' },] }
    ];
    return KeysPipe;
}());
export { KeysPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2tleXMva2V5cy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lBT2xELDRCQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLFdBQTRCO1FBQTVCLDRCQUFBLEVBQUEsbUJBQTRCOztRQUNoRCxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7O1FBRWYsS0FBSyxJQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNaOztnQkFURixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzttQkFMdEI7O1NBTWEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvY29tbW9uIyVFNSU4RiVBRiVFOCVCRiVBRCVFNCVCQiVBMy1rZXlzXHJcbiAqL1xyXG5AUGlwZSh7IG5hbWU6ICdrZXlzJyB9KVxyXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwga2V5SXNOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZSk6IGFueVtdIHtcclxuICAgIGNvbnN0IHJldCA9IFtdO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xyXG4gICAgICByZXQucHVzaCh7IGtleToga2V5SXNOdW1iZXIgPyAra2V5IDoga2V5LCB2YWx1ZTogdmFsdWVba2V5XSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==