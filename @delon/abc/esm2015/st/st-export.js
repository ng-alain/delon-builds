/**
 * @fileoverview added by tsickle
 * Generated from: st-export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { XlsxService } from '@delon/abc/xlsx';
import { deepGet } from '@delon/util';
export class STExport {
    /**
     * @param {?} xlsxSrv
     */
    constructor(xlsxSrv) {
        this.xlsxSrv = xlsxSrv;
    }
    /**
     * @private
     * @param {?} item
     * @param {?} col
     * @param {?} index
     * @return {?}
     */
    _stGet(item, col, index) {
        /** @type {?} */
        const ret = { t: 's', v: '' };
        if (col.format) {
            ret.v = col.format(item, col, index);
        }
        else {
            /** @type {?} */
            const val = deepGet(item, (/** @type {?} */ (col.index)), '');
            ret.v = val;
            if (val != null) {
                switch (col.type) {
                    case 'currency':
                        ret.t = 'n';
                        break;
                    case 'date':
                        ret.t = 'd';
                        break;
                    case 'yn':
                        /** @type {?} */
                        const yn = (/** @type {?} */ (col.yn));
                        ret.v = ret.v === yn.truth ? yn.yes || '是' : yn.no || '否';
                        break;
                }
            }
        }
        ret.v = ret.v || '';
        return ret;
    }
    /**
     * @private
     * @param {?} opt
     * @return {?}
     */
    genSheet(opt) {
        /** @type {?} */
        const sheets = {};
        /** @type {?} */
        const sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
        /** @type {?} */
        const colData = (/** @type {?} */ (opt.columens)).filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0)));
        /** @type {?} */
        const colLen = colData.length;
        /** @type {?} */
        const dataLen = (/** @type {?} */ (opt.data)).length;
        // column
        for (let i = 0; i < colLen; i++) {
            /** @type {?} */
            const tit = colData[i].title;
            sheet[`${this.xlsxSrv.numberToSchema(i + 1)}1`] = {
                t: 's',
                v: typeof tit === 'object' ? tit.text : tit,
            };
        }
        // content
        for (let i = 0; i < dataLen; i++) {
            for (let j = 0; j < colLen; j++) {
                sheet[`${this.xlsxSrv.numberToSchema(j + 1)}${i + 2}`] = this._stGet((/** @type {?} */ (opt.data))[i], colData[j], i);
            }
        }
        if (colLen > 0 && dataLen > 0) {
            sheet['!ref'] = `A1:${this.xlsxSrv.numberToSchema(colLen)}${dataLen + 1}`;
        }
        return sheets;
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    export(opt) {
        /** @type {?} */
        const sheets = this.genSheet(opt);
        return this.xlsxSrv.export({
            sheets,
            filename: opt.filename,
            callback: opt.callback,
        });
    }
}
STExport.decorators = [
    { type: Injectable }
];
/** @nocollapse */
STExport.ctorParameters = () => [
    { type: XlsxService, decorators: [{ type: Optional }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    STExport.prototype.xlsxSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBS3RDLE1BQU0sT0FBTyxRQUFROzs7O0lBQ25CLFlBQWdDLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFBRyxDQUFDOzs7Ozs7OztJQUVoRCxNQUFNLENBQUMsSUFBWSxFQUFFLEdBQWEsRUFBRSxLQUFhOztjQUNqRCxHQUFHLEdBQXNDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBRWhFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNkLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07O2tCQUNDLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLEVBQVksRUFBRSxFQUFFLENBQUM7WUFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDWixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ2YsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNoQixLQUFLLFVBQVU7d0JBQ2IsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ1osTUFBTTtvQkFDUixLQUFLLE1BQU07d0JBQ1QsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ1osTUFBTTtvQkFDUixLQUFLLElBQUk7OzhCQUNELEVBQUUs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UTtTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0RUYsVUFBVTs7OztZQUxGLFdBQVcsdUJBT0wsUUFBUTs7Ozs7OztJQUFULDJCQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMveGxzeCc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFNUQ29sdW1uLCBTVERhdGEsIFNURXhwb3J0T3B0aW9ucyB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVEV4cG9ydCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBfc3RHZXQoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCByZXQ6IHsgdDogJ3MnIHwgJ24nIHwgJ2QnOyB2OiBzdHJpbmcgfSA9IHsgdDogJ3MnLCB2OiAnJyB9O1xuXG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIHJldC52ID0gY29sLmZvcm1hdChpdGVtLCBjb2wsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sICcnKTtcbiAgICAgIHJldC52ID0gdmFsO1xuICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgICAgICByZXQudCA9ICduJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgcmV0LnQgPSAnZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd5bic6XG4gICAgICAgICAgICBjb25zdCB5biA9IGNvbC55biE7XG4gICAgICAgICAgICByZXQudiA9IHJldC52ID09PSB5bi50cnV0aCA/IHluLnllcyB8fCAn5pivJyA6IHluLm5vIHx8ICflkKYnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXQudiA9IHJldC52IHx8ICcnO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU2hlZXQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiB7IFtzaGVldDogc3RyaW5nXToge30gfSB7XG4gICAgY29uc3Qgc2hlZXRzOiB7IFtzaGVldDogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSB9ID0ge307XG4gICAgY29uc3Qgc2hlZXQ6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSAoc2hlZXRzW29wdC5zaGVldG5hbWUgfHwgJ1NoZWV0MSddID0ge30pO1xuICAgIGNvbnN0IGNvbERhdGEgPSBvcHQuY29sdW1lbnMhLmZpbHRlcih3ID0+IHcuZXhwb3J0ZWQgIT09IGZhbHNlICYmIHcuaW5kZXggJiYgKCF3LmJ1dHRvbnMgfHwgdy5idXR0b25zLmxlbmd0aCA9PT0gMCkpO1xuICAgIGNvbnN0IGNvbExlbiA9IGNvbERhdGEubGVuZ3RoO1xuICAgIGNvbnN0IGRhdGFMZW4gPSBvcHQuZGF0YSEubGVuZ3RoO1xuXG4gICAgLy8gY29sdW1uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xMZW47IGkrKykge1xuICAgICAgY29uc3QgdGl0ID0gY29sRGF0YVtpXS50aXRsZTtcbiAgICAgIHNoZWV0W2Ake3RoaXMueGxzeFNydi5udW1iZXJUb1NjaGVtYShpICsgMSl9MWBdID0ge1xuICAgICAgICB0OiAncycsXG4gICAgICAgIHY6IHR5cGVvZiB0aXQgPT09ICdvYmplY3QnID8gdGl0LnRleHQgOiB0aXQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNvbnRlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMZW47IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xMZW47IGorKykge1xuICAgICAgICBzaGVldFtgJHt0aGlzLnhsc3hTcnYubnVtYmVyVG9TY2hlbWEoaiArIDEpfSR7aSArIDJ9YF0gPSB0aGlzLl9zdEdldChvcHQuZGF0YSFbaV0sIGNvbERhdGFbal0sIGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2xMZW4gPiAwICYmIGRhdGFMZW4gPiAwKSB7XG4gICAgICBzaGVldFsnIXJlZiddID0gYEExOiR7dGhpcy54bHN4U3J2Lm51bWJlclRvU2NoZW1hKGNvbExlbil9JHtkYXRhTGVuICsgMX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldHM7XG4gIH1cblxuICBleHBvcnQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XG4gICAgcmV0dXJuIHRoaXMueGxzeFNydi5leHBvcnQoe1xuICAgICAgc2hlZXRzLFxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcbiAgICAgIGNhbGxiYWNrOiBvcHQuY2FsbGJhY2ssXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==