/**
 * @fileoverview added by tsickle
 * Generated from: st-export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __generator } from "tslib";
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
        return __awaiter(this, void 0, void 0, function () {
            var sheets;
            return __generator(this, function (_a) {
                sheets = this.genSheet(opt);
                return [2 /*return*/, this.xlsxSrv.export({
                        sheets: sheets,
                        filename: opt.filename,
                        callback: opt.callback,
                    })];
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJdEM7SUFFRSxrQkFBZ0MsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7Ozs7O0lBRWhELHlCQUFNOzs7Ozs7O0lBQWQsVUFBZSxJQUFTLEVBQUUsR0FBYSxFQUFFLEtBQWE7O1lBQzlDLEdBQUcsR0FBMkIsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFFckQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2QsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7YUFBTTs7Z0JBQ0MsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsbUJBQUEsR0FBRyxDQUFDLEtBQUssRUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNwRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNaLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDZixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ2hCLEtBQUssVUFBVTt3QkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixNQUFNO29CQUNSLEtBQUssSUFBSTs7NEJBQ0QsRUFBRSxHQUFHLG1CQUFBLEdBQUcsQ0FBQyxFQUFFLEVBQUM7d0JBQ2xCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUM7d0JBQzFELE1BQU07aUJBQ1Q7YUFDRjtTQUNGO1FBRUQsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVPLDJCQUFROzs7OztJQUFoQixVQUFpQixHQUFvQjs7WUFDN0IsTUFBTSxHQUFzRCxFQUFFOztZQUM5RCxLQUFLLEdBQWlDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDOztZQUM5RSxPQUFPLEdBQUcsbUJBQUEsR0FBRyxDQUFDLFFBQVEsRUFBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQXpFLENBQXlFLEVBQUM7O1lBQzlHLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTs7WUFDdkIsT0FBTyxHQUFHLG1CQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxNQUFNO1FBRWhDLFNBQVM7UUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDekIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzVCLEtBQUssQ0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQUcsQ0FBQyxHQUFHO2dCQUNoRCxDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHO2FBQzVDLENBQUM7U0FDSDtRQUVELFVBQVU7UUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbkc7U0FDRjtRQUVELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFHLE9BQU8sR0FBRyxDQUFDLENBQUUsQ0FBQztTQUMzRTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUsseUJBQU07Ozs7SUFBWixVQUFhLEdBQW9COzs7O2dCQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pDLHNCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUN6QixNQUFNLFFBQUE7d0JBQ04sUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO3dCQUN0QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7cUJBQ3ZCLENBQUMsRUFBQzs7O0tBQ0o7O2dCQXRFRixVQUFVOzs7O2dCQUxnQixXQUFXLHVCQU92QixRQUFROztJQXFFdkIsZUFBQztDQUFBLEFBdkVELElBdUVDO1NBdEVZLFFBQVE7Ozs7OztJQUNQLDJCQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYbHN4RXhwb3J0UmVzdWx0LCBYbHN4U2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMveGxzeCc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFNUQ29sdW1uLCBTVEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RFeHBvcnQge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHhsc3hTcnY6IFhsc3hTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgX3N0R2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbiwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgcmV0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0geyB0OiAncycsIHY6ICcnIH07XG5cbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgcmV0LnYgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgJycpO1xuICAgICAgcmV0LnYgPSB2YWw7XG4gICAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICAgIHJldC50ID0gJ24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICByZXQudCA9ICdkJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICAgIGNvbnN0IHluID0gY29sLnluITtcbiAgICAgICAgICAgIHJldC52ID0gcmV0LnYgPT09IHluLnRydXRoID8geW4ueWVzIHx8ICfmmK8nIDogeW4ubm8gfHwgJ+WQpic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldC52ID0gcmV0LnYgfHwgJyc7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiB7fSB9IHtcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9IH0gPSB7fTtcbiAgICBjb25zdCBzaGVldDogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IChzaGVldHNbb3B0LnNoZWV0bmFtZSB8fCAnU2hlZXQxJ10gPSB7fSk7XG4gICAgY29uc3QgY29sRGF0YSA9IG9wdC5jb2x1bWVucyEuZmlsdGVyKHcgPT4gdy5leHBvcnRlZCAhPT0gZmFsc2UgJiYgdy5pbmRleCAmJiAoIXcuYnV0dG9ucyB8fCB3LmJ1dHRvbnMubGVuZ3RoID09PSAwKSk7XG4gICAgY29uc3QgY29sTGVuID0gY29sRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgZGF0YUxlbiA9IG9wdC5kYXRhIS5sZW5ndGg7XG5cbiAgICAvLyBjb2x1bW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbExlbjsgaSsrKSB7XG4gICAgICBjb25zdCB0aXQgPSBjb2xEYXRhW2ldLnRpdGxlO1xuICAgICAgc2hlZXRbYCR7dGhpcy54bHN4U3J2Lm51bWJlclRvU2NoZW1hKGkgKyAxKX0xYF0gPSB7XG4gICAgICAgIHQ6ICdzJyxcbiAgICAgICAgdjogdHlwZW9mIHRpdCA9PT0gJ29iamVjdCcgPyB0aXQudGV4dCA6IHRpdCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY29udGVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxlbjsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbExlbjsgaisrKSB7XG4gICAgICAgIHNoZWV0W2Ake3RoaXMueGxzeFNydi5udW1iZXJUb1NjaGVtYShqICsgMSl9JHtpICsgMn1gXSA9IHRoaXMuX3N0R2V0KG9wdC5kYXRhIVtpXSwgY29sRGF0YVtqXSwgaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbExlbiA+IDAgJiYgZGF0YUxlbiA+IDApIHtcbiAgICAgIHNoZWV0WychcmVmJ10gPSBgQTE6JHt0aGlzLnhsc3hTcnYubnVtYmVyVG9TY2hlbWEoY29sTGVuKX0ke2RhdGFMZW4gKyAxfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoZWV0cztcbiAgfVxuXG4gIGFzeW5jIGV4cG9ydChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IFByb21pc2U8WGxzeEV4cG9ydFJlc3VsdD4ge1xuICAgIGNvbnN0IHNoZWV0cyA9IHRoaXMuZ2VuU2hlZXQob3B0KTtcbiAgICByZXR1cm4gdGhpcy54bHN4U3J2LmV4cG9ydCh7XG4gICAgICBzaGVldHMsXG4gICAgICBmaWxlbmFtZTogb3B0LmZpbGVuYW1lLFxuICAgICAgY2FsbGJhY2s6IG9wdC5jYWxsYmFjayxcbiAgICB9KTtcbiAgfVxufVxuIl19