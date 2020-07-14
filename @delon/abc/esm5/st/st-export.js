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
            if (val) {
                switch (col.type) {
                    case 'currency':
                        ret.t = 'n';
                        break;
                    case 'date':
                        ret.t = 'd';
                        break;
                    case 'yn':
                        ret.v = ret.v === col.ynTruth ? col.ynYes || '是' : col.ynNo || '否';
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
        var colData = (/** @type {?} */ (opt._c)).filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0); }));
        /** @type {?} */
        var colLen = colData.length;
        /** @type {?} */
        var dataLen = (/** @type {?} */ (opt._d)).length;
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
                sheet["" + this.xlsxSrv.numberToSchema(j + 1) + (i + 2)] = this._stGet((/** @type {?} */ (opt._d))[i], colData[j], i);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXRDO0lBRUUsa0JBQWdDLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFBRyxDQUFDOzs7Ozs7OztJQUVoRCx5QkFBTTs7Ozs7OztJQUFkLFVBQWUsSUFBUyxFQUFFLEdBQWEsRUFBRSxLQUFhOztZQUM5QyxHQUFHLEdBQTJCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBRXJELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNkLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07O2dCQUNDLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLEVBQVksRUFBRSxFQUFFLENBQUM7WUFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDWixJQUFJLEdBQUcsRUFBRTtnQkFDUCxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ2hCLEtBQUssVUFBVTt3QkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixNQUFNO29CQUNSLEtBQUssSUFBSTt3QkFDUCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdB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OztnQkFyRUYsVUFBVTs7OztnQkFMRixXQUFXLHVCQU9MLFFBQVE7O0lBb0V2QixlQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FyRVksUUFBUTs7Ozs7O0lBQ1AsMkJBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNURXhwb3J0T3B0aW9ucyB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVEV4cG9ydCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBfc3RHZXQoaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBjb25zdCByZXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7IHQ6ICdzJywgdjogJycgfTtcblxuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICByZXQudiA9IGNvbC5mb3JtYXQoaXRlbSwgY29sLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCAnJyk7XG4gICAgICByZXQudiA9IHZhbDtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICAgIHJldC50ID0gJ24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICByZXQudCA9ICdkJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICAgIHJldC52ID0gcmV0LnYgPT09IGNvbC55blRydXRoID8gY29sLnluWWVzIHx8ICfmmK8nIDogY29sLnluTm8gfHwgJ+WQpic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldC52ID0gcmV0LnYgfHwgJyc7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiB7fSB9IHtcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9IH0gPSB7fTtcbiAgICBjb25zdCBzaGVldDogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IChzaGVldHNbb3B0LnNoZWV0bmFtZSB8fCAnU2hlZXQxJ10gPSB7fSk7XG4gICAgY29uc3QgY29sRGF0YSA9IG9wdC5fYyEuZmlsdGVyKHcgPT4gdy5leHBvcnRlZCAhPT0gZmFsc2UgJiYgdy5pbmRleCAmJiAoIXcuYnV0dG9ucyB8fCB3LmJ1dHRvbnMubGVuZ3RoID09PSAwKSk7XG4gICAgY29uc3QgY29sTGVuID0gY29sRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgZGF0YUxlbiA9IG9wdC5fZCEubGVuZ3RoO1xuXG4gICAgLy8gY29sdW1uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xMZW47IGkrKykge1xuICAgICAgY29uc3QgdGl0ID0gY29sRGF0YVtpXS50aXRsZTtcbiAgICAgIHNoZWV0W2Ake3RoaXMueGxzeFNydi5udW1iZXJUb1NjaGVtYShpICsgMSl9MWBdID0ge1xuICAgICAgICB0OiAncycsXG4gICAgICAgIHY6IHR5cGVvZiB0aXQgPT09ICdvYmplY3QnID8gdGl0LnRleHQgOiB0aXQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNvbnRlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMZW47IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xMZW47IGorKykge1xuICAgICAgICBzaGVldFtgJHt0aGlzLnhsc3hTcnYubnVtYmVyVG9TY2hlbWEoaiArIDEpfSR7aSArIDJ9YF0gPSB0aGlzLl9zdEdldChvcHQuX2QhW2ldLCBjb2xEYXRhW2pdLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29sTGVuID4gMCAmJiBkYXRhTGVuID4gMCkge1xuICAgICAgc2hlZXRbJyFyZWYnXSA9IGBBMToke3RoaXMueGxzeFNydi5udW1iZXJUb1NjaGVtYShjb2xMZW4pfSR7ZGF0YUxlbiArIDF9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hlZXRzO1xuICB9XG5cbiAgZXhwb3J0KG9wdDogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgY29uc3Qgc2hlZXRzID0gdGhpcy5nZW5TaGVldChvcHQpO1xuICAgIHJldHVybiB0aGlzLnhsc3hTcnYuZXhwb3J0KHtcbiAgICAgIHNoZWV0cyxcbiAgICAgIGZpbGVuYW1lOiBvcHQuZmlsZW5hbWUsXG4gICAgICBjYWxsYmFjazogb3B0LmNhbGxiYWNrLFxuICAgIH0pO1xuICB9XG59XG4iXX0=