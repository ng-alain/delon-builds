/**
 * @fileoverview added by tsickle
 * Generated from: st-export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { XlsxService } from '@delon/abc/xlsx';
import { deepGet } from '@delon/util';
var STExport = /** @class */ (function () {
    function STExport(xlsxSrv) {
        this.xlsxSrv = xlsxSrv;
    }
    /**
     * @private
     * @param {?} item
     * @param {?} col
     * @param {?} index
     * @return {?}
     */
    STExport.prototype._stGet = /**
     * @private
     * @param {?} item
     * @param {?} col
     * @param {?} index
     * @return {?}
     */
    function (item, col, index) {
        /** @type {?} */
        var ret = { t: 's', v: '' };
        if (col.format) {
            ret.v = col.format(item, col, index);
        }
        else {
            /** @type {?} */
            var val = deepGet(item, (/** @type {?} */ (col.index)), '');
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
                        var yn = (/** @type {?} */ (col.yn));
                        ret.v = ret.v === yn.truth ? yn.yes || '是' : yn.no || '否';
                        break;
                }
            }
        }
        ret.v = ret.v || '';
        return ret;
    };
    /**
     * @private
     * @param {?} opt
     * @return {?}
     */
    STExport.prototype.genSheet = /**
     * @private
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        /** @type {?} */
        var sheets = {};
        /** @type {?} */
        var sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
        /** @type {?} */
        var colData = (/** @type {?} */ (opt.columens)).filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0); }));
        /** @type {?} */
        var colLen = colData.length;
        /** @type {?} */
        var dataLen = (/** @type {?} */ (opt.data)).length;
        // column
        for (var i = 0; i < colLen; i++) {
            /** @type {?} */
            var tit = colData[i].title;
            sheet[this.xlsxSrv.numberToSchema(i + 1) + "1"] = {
                t: 's',
                v: typeof tit === 'object' ? tit.text : tit,
            };
        }
        // content
        for (var i = 0; i < dataLen; i++) {
            for (var j = 0; j < colLen; j++) {
                sheet["" + this.xlsxSrv.numberToSchema(j + 1) + (i + 2)] = this._stGet((/** @type {?} */ (opt.data))[i], colData[j], i);
            }
        }
        if (colLen > 0 && dataLen > 0) {
            sheet['!ref'] = "A1:" + this.xlsxSrv.numberToSchema(colLen) + (dataLen + 1);
        }
        return sheets;
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    STExport.prototype.export = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        /** @type {?} */
        var sheets = this.genSheet(opt);
        return this.xlsxSrv.export({
            sheets: sheets,
            filename: opt.filename,
            callback: opt.callback,
        });
    };
    STExport.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    STExport.ctorParameters = function () { return [
        { type: XlsxService, decorators: [{ type: Optional }] }
    ]; };
    return STExport;
}());
export { STExport };
if (false) {
    /**
     * @type {?}
     * @private
     */
    STExport.prototype.xlsxSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXRDO0lBRUUsa0JBQWdDLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFBRyxDQUFDOzs7Ozs7OztJQUVoRCx5QkFBTTs7Ozs7OztJQUFkLFVBQWUsSUFBWSxFQUFFLEdBQWEsRUFBRSxLQUFhOztZQUNqRCxHQUFHLEdBQXNDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBRWhFLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNkLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07O2dCQUNDLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLEVBQVksRUFBRSxFQUFFLENBQUM7WUFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDWixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ2YsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNoQixLQUFLLFVBQVU7d0JBQ2IsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ1osTUFBTTtvQkFDUixLQUFLLE1BQU07d0JBQ1QsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ1osTUFBTTtvQkFDUixLQUFLLElBQUk7OzRCQUNELEVBQUUsR0FBRyxt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Q3RCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF0RUYsVUFBVTs7OztnQkFMRixXQUFXLHVCQU9MLFFBQVE7O0lBcUV2QixlQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0F0RVksUUFBUTs7Ozs7O0lBQ1AsMkJBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNURGF0YSwgU1RFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURXhwb3J0IHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSB4bHN4U3J2OiBYbHN4U2VydmljZSkge31cblxuICBwcml2YXRlIF9zdEdldChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGluZGV4OiBudW1iZXIpOiBOelNhZmVBbnkge1xuICAgIGNvbnN0IHJldDogeyB0OiAncycgfCAnbicgfCAnZCc7IHY6IHN0cmluZyB9ID0geyB0OiAncycsIHY6ICcnIH07XG5cbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgcmV0LnYgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgJycpO1xuICAgICAgcmV0LnYgPSB2YWw7XG4gICAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICAgIHJldC50ID0gJ24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICByZXQudCA9ICdkJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICAgIGNvbnN0IHluID0gY29sLnluITtcbiAgICAgICAgICAgIHJldC52ID0gcmV0LnYgPT09IHluLnRydXRoID8geW4ueWVzIHx8ICfmmK8nIDogeW4ubm8gfHwgJ+WQpic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldC52ID0gcmV0LnYgfHwgJyc7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiB7fSB9IHtcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9IH0gPSB7fTtcbiAgICBjb25zdCBzaGVldDogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IChzaGVldHNbb3B0LnNoZWV0bmFtZSB8fCAnU2hlZXQxJ10gPSB7fSk7XG4gICAgY29uc3QgY29sRGF0YSA9IG9wdC5jb2x1bWVucyEuZmlsdGVyKHcgPT4gdy5leHBvcnRlZCAhPT0gZmFsc2UgJiYgdy5pbmRleCAmJiAoIXcuYnV0dG9ucyB8fCB3LmJ1dHRvbnMubGVuZ3RoID09PSAwKSk7XG4gICAgY29uc3QgY29sTGVuID0gY29sRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgZGF0YUxlbiA9IG9wdC5kYXRhIS5sZW5ndGg7XG5cbiAgICAvLyBjb2x1bW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbExlbjsgaSsrKSB7XG4gICAgICBjb25zdCB0aXQgPSBjb2xEYXRhW2ldLnRpdGxlO1xuICAgICAgc2hlZXRbYCR7dGhpcy54bHN4U3J2Lm51bWJlclRvU2NoZW1hKGkgKyAxKX0xYF0gPSB7XG4gICAgICAgIHQ6ICdzJyxcbiAgICAgICAgdjogdHlwZW9mIHRpdCA9PT0gJ29iamVjdCcgPyB0aXQudGV4dCA6IHRpdCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY29udGVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxlbjsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbExlbjsgaisrKSB7XG4gICAgICAgIHNoZWV0W2Ake3RoaXMueGxzeFNydi5udW1iZXJUb1NjaGVtYShqICsgMSl9JHtpICsgMn1gXSA9IHRoaXMuX3N0R2V0KG9wdC5kYXRhIVtpXSwgY29sRGF0YVtqXSwgaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbExlbiA+IDAgJiYgZGF0YUxlbiA+IDApIHtcbiAgICAgIHNoZWV0WychcmVmJ10gPSBgQTE6JHt0aGlzLnhsc3hTcnYubnVtYmVyVG9TY2hlbWEoY29sTGVuKX0ke2RhdGFMZW4gKyAxfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoZWV0cztcbiAgfVxuXG4gIGV4cG9ydChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNoZWV0cyA9IHRoaXMuZ2VuU2hlZXQob3B0KTtcbiAgICByZXR1cm4gdGhpcy54bHN4U3J2LmV4cG9ydCh7XG4gICAgICBzaGVldHMsXG4gICAgICBmaWxlbmFtZTogb3B0LmZpbGVuYW1lLFxuICAgICAgY2FsbGJhY2s6IG9wdC5jYWxsYmFjayxcbiAgICB9KTtcbiAgfVxufVxuIl19