/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * @see https://ng-alain.com/docs/common#%E5%8F%AF%E8%BF%AD%E4%BB%A3-keys
 */
export class KeysPipe {
    /**
     * @param {?} value
     * @param {?=} keyIsNumber
     * @return {?}
     */
    transform(value, keyIsNumber = false) {
        /** @type {?} */
        const ret = [];
        // tslint:disable-next-line:forin
        for (const key in value) {
            ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
        }
        return ret;
    }
}
KeysPipe.decorators = [
    { type: Pipe, args: [{ name: 'keys' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL2tleXMva2V5cy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU1wRCxNQUFNOzs7Ozs7SUFDSixTQUFTLENBQUMsS0FBVSxFQUFFLGNBQXVCLEtBQUs7O1FBQ2hELE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQzs7UUFFZixLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtZQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7OztZQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2NvbW1vbiMlRTUlOEYlQUYlRTglQkYlQUQlRTQlQkIlQTMta2V5c1xyXG4gKi9cclxuQFBpcGUoeyBuYW1lOiAna2V5cycgfSlcclxuZXhwb3J0IGNsYXNzIEtleXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGtleUlzTnVtYmVyOiBib29sZWFuID0gZmFsc2UpOiBhbnlbXSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgcmV0LnB1c2goeyBrZXk6IGtleUlzTnVtYmVyID8gK2tleSA6IGtleSwgdmFsdWU6IHZhbHVlW2tleV0gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxufVxyXG4iXX0=