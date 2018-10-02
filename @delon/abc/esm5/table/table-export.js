/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { deepGet } from '@delon/util';
import { XlsxService } from '@delon/abc/xlsx';
var STExport = /** @class */ (function () {
    function STExport(xlsxSrv) {
        this.xlsxSrv = xlsxSrv;
    }
    /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    STExport.prototype._stGet = /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    function (item, col) {
        /** @type {?} */
        var ret = { t: 's', v: '' };
        if (col.format) {
            ret.v = col.format(item, col);
        }
        else {
            /** @type {?} */
            var val = deepGet(item, /** @type {?} */ (col.index), '');
            ret.v = val;
            switch (col.type) {
                case 'currency':
                    ret.t = 'n';
                    break;
                case 'date':
                    ret.t = 'd';
                    break;
                case 'yn':
                    ret.v = ret.v === col["ynTruth"] ? col["ynYes"] || '是' : col["ynNo"] || '否';
                    break;
            }
        }
        return ret;
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    STExport.prototype.genSheet = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        /** @type {?} */
        var sheets = {};
        /** @type {?} */
        var sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
        /** @type {?} */
        var colData = opt._c.filter(function (w) {
            return w.exported !== false &&
                w.index &&
                (!w.buttons || w.buttons.length === 0);
        });
        /** @type {?} */
        var cc = colData.length;
        /** @type {?} */
        var dc = opt._d.length;
        // region: column
        for (var i = 0; i < cc; i++) {
            sheet[String.fromCharCode(65 + i) + "1"] = {
                t: 's',
                v: colData[i].title,
            };
        }
        // endregion
        // region: content
        for (var i = 0; i < dc; i++) {
            for (var j = 0; j < cc; j++) {
                sheet["" + String.fromCharCode(65 + j) + (i + 2)] = this._stGet(opt._d[i], colData[j]);
            }
        }
        // endregion
        if (cc > 0 && dc > 0) {
            sheet['!ref'] = "A1:" + String.fromCharCode(65 + cc - 1) + (dc + 1);
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
        if (!this.xlsxSrv)
            throw new Error("muse be import 'XlsxModule' module, but got null");
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
    /** @type {?} */
    STExport.prototype.xlsxSrv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBTTVDLGtCQUFnQyxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0tBQUk7Ozs7OztJQUVoRCx5QkFBTTs7Ozs7Y0FBQyxJQUFTLEVBQUUsR0FBYTs7UUFDckMsSUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUVuQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07O1lBQ0wsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksb0JBQUUsR0FBRyxDQUFDLEtBQWlCLEdBQUUsRUFBRSxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDWixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLEtBQUssVUFBVTtvQkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDWixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDWixNQUFNO2dCQUNSLEtBQUssSUFBSTtvQkFDUCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxXQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBUyxHQUFHLENBQUM7b0JBQ25FLE1BQU07YUFDVDtTQUNGO1FBRUQsT0FBTyxHQUFHLENBQUM7Ozs7OztJQUdMLDJCQUFROzs7O2NBQUMsR0FBb0I7O1FBQ25DLElBQU0sTUFBTSxHQUE2QixFQUFFLENBQUM7O1FBQzVDLElBQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7O1FBQ3ZELElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUMzQixVQUFBLENBQUM7WUFDQyxPQUFBLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSztnQkFDcEIsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBRnRDLENBRXNDLENBQ3pDLENBQUM7O1FBQ0YsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FDSjs7UUFEckIsSUFDRSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7O1FBRXJCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsS0FBSyxDQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFHLENBQUMsR0FBRztnQkFDekMsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO2FBQ3BCLENBQUM7U0FDSDs7O1FBSUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixLQUFLLENBQUMsS0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUMzRCxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNULE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUFDO2FBQ0g7U0FDRjs7UUFHRCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUcsRUFBRSxHQUFHLENBQUMsQ0FBRSxDQUFDO1NBQ25FO1FBRUQsT0FBTyxNQUFNLENBQUM7Ozs7OztJQUdoQix5QkFBTTs7OztJQUFOLFVBQU8sR0FBb0I7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDOztRQUN0RSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsTUFBTSxRQUFBO1lBQ04sUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO1lBQ3RCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtTQUN2QixDQUFDLENBQUM7S0FDSjs7Z0JBM0VGLFVBQVU7Ozs7Z0JBSkYsV0FBVyx1QkFNTCxRQUFROzttQkFSdkI7O1NBT2EsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcclxuXHJcbmltcG9ydCB7IFNUQ29sdW1uLCBTVEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU1RFeHBvcnQge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgX3N0R2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbik6IGFueSB7XHJcbiAgICBjb25zdCByZXQ6IGFueSA9IHsgdDogJ3MnLCB2OiAnJyB9O1xyXG5cclxuICAgIGlmIChjb2wuZm9ybWF0KSB7XHJcbiAgICAgIHJldC52ID0gY29sLmZvcm1hdChpdGVtLCBjb2wpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdmFsID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sICcnKTtcclxuICAgICAgcmV0LnYgPSB2YWw7XHJcbiAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdjdXJyZW5jeSc6XHJcbiAgICAgICAgICByZXQudCA9ICduJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgcmV0LnQgPSAnZCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5bic6XHJcbiAgICAgICAgICByZXQudiA9IHJldC52ID09PSBjb2wueW5UcnV0aCA/IGNvbC55blllcyB8fCAn5pivJyA6IGNvbC55bk5vIHx8ICflkKYnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgY29uc3Qgc2hlZXQgPSAoc2hlZXRzW29wdC5zaGVldG5hbWUgfHwgJ1NoZWV0MSddID0ge30pO1xyXG4gICAgY29uc3QgY29sRGF0YSA9IG9wdC5fYy5maWx0ZXIoXHJcbiAgICAgIHcgPT5cclxuICAgICAgICB3LmV4cG9ydGVkICE9PSBmYWxzZSAmJlxyXG4gICAgICAgIHcuaW5kZXggJiZcclxuICAgICAgICAoIXcuYnV0dG9ucyB8fCB3LmJ1dHRvbnMubGVuZ3RoID09PSAwKSxcclxuICAgICk7XHJcbiAgICBjb25zdCBjYyA9IGNvbERhdGEubGVuZ3RoLFxyXG4gICAgICBkYyA9IG9wdC5fZC5sZW5ndGg7XHJcbiAgICAvLyByZWdpb246IGNvbHVtblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYzsgaSsrKSB7XHJcbiAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKX0xYF0gPSB7XHJcbiAgICAgICAgdDogJ3MnLFxyXG4gICAgICAgIHY6IGNvbERhdGFbaV0udGl0bGUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBlbmRyZWdpb25cclxuXHJcbiAgICAvLyByZWdpb246IGNvbnRlbnRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGM7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNjOyBqKyspIHtcclxuICAgICAgICBzaGVldFtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgail9JHtpICsgMn1gXSA9IHRoaXMuX3N0R2V0KFxyXG4gICAgICAgICAgb3B0Ll9kW2ldLFxyXG4gICAgICAgICAgY29sRGF0YVtqXSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBlbmRyZWdpb25cclxuXHJcbiAgICBpZiAoY2MgPiAwICYmIGRjID4gMCkge1xyXG4gICAgICBzaGVldFsnIXJlZiddID0gYEExOiR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNjIC0gMSl9JHtkYyArIDF9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2hlZXRzO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0KG9wdDogU1RFeHBvcnRPcHRpb25zKSB7XHJcbiAgICBpZiAoIXRoaXMueGxzeFNydilcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtdXNlIGJlIGltcG9ydCAnWGxzeE1vZHVsZScgbW9kdWxlLCBidXQgZ290IG51bGxgKTtcclxuICAgIGNvbnN0IHNoZWV0cyA9IHRoaXMuZ2VuU2hlZXQob3B0KTtcclxuICAgIHJldHVybiB0aGlzLnhsc3hTcnYuZXhwb3J0KHtcclxuICAgICAgc2hlZXRzLFxyXG4gICAgICBmaWxlbmFtZTogb3B0LmZpbGVuYW1lLFxyXG4gICAgICBjYWxsYmFjazogb3B0LmNhbGxiYWNrLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==