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
        // column
        for (var i = 0; i < cc; i++) {
            sheet[String.fromCharCode(65 + i) + "1"] = {
                t: 's',
                v: colData[i].title,
            };
        }
        // content
        for (var i = 0; i < dc; i++) {
            for (var j = 0; j < cc; j++) {
                sheet["" + String.fromCharCode(65 + j) + (i + 2)] = this._stGet(opt._d[i], colData[j]);
            }
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBTTVDLGtCQUFnQyxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0tBQUk7Ozs7OztJQUVoRCx5QkFBTTs7Ozs7Y0FBQyxJQUFTLEVBQUUsR0FBYTs7UUFDckMsSUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUVuQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07O1lBQ0wsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksb0JBQUUsR0FBRyxDQUFDLEtBQWlCLEdBQUUsRUFBRSxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDWixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLEtBQUssVUFBVTtvQkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDWixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDWixNQUFNO2dCQUNSLEtBQUssSUFBSTtvQkFDUCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxXQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBUyxHQUFHLENBQUM7b0JBQ25FLE1BQU07YUFDVDtTQUNGO1FBRUQsT0FBTyxHQUFHLENBQUM7Ozs7OztJQUdMLDJCQUFROzs7O2NBQUMsR0FBb0I7O1FBQ25DLElBQU0sTUFBTSxHQUE2QixFQUFFLENBQUM7O1FBQzVDLElBQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7O1FBQ3ZELElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUMzQixVQUFBLENBQUM7WUFDQyxPQUFBLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSztnQkFDcEIsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBRnRDLENBRXNDLENBQ3pDLENBQUM7O1FBQ0YsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FDSjs7UUFEckIsSUFDRSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7O1FBR3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsS0FBSyxDQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFHLENBQUMsR0FBRztnQkFDekMsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO2FBQ3BCLENBQUM7U0FDSDs7UUFHRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNCLEtBQUssQ0FBQyxLQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQzNELEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQUM7YUFDSDtTQUNGO1FBRUQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFHLEVBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQztTQUNuRTtRQUVELE9BQU8sTUFBTSxDQUFDOzs7Ozs7SUFHaEIseUJBQU07Ozs7SUFBTixVQUFPLEdBQW9CO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQzs7UUFDdEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLE1BQU0sUUFBQTtZQUNOLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUN0QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7U0FDdkIsQ0FBQyxDQUFDO0tBQ0o7O2dCQTFFRixVQUFVOzs7O2dCQUpGLFdBQVcsdUJBTUwsUUFBUTs7bUJBUnZCOztTQU9hLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcblxuaW1wb3J0IHsgU1RDb2x1bW4sIFNURXhwb3J0T3B0aW9ucyB9IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVEV4cG9ydCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBfc3RHZXQoaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uKTogYW55IHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHsgdDogJ3MnLCB2OiAnJyB9O1xuXG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIHJldC52ID0gY29sLmZvcm1hdChpdGVtLCBjb2wpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgJycpO1xuICAgICAgcmV0LnYgPSB2YWw7XG4gICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICByZXQudCA9ICduJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgcmV0LnQgPSAnZCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICByZXQudiA9IHJldC52ID09PSBjb2wueW5UcnV0aCA/IGNvbC55blllcyB8fCAn5pivJyA6IGNvbC55bk5vIHx8ICflkKYnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGdlblNoZWV0KG9wdDogU1RFeHBvcnRPcHRpb25zKTogeyBbc2hlZXQ6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0ID0gKHNoZWV0c1tvcHQuc2hlZXRuYW1lIHx8ICdTaGVldDEnXSA9IHt9KTtcbiAgICBjb25zdCBjb2xEYXRhID0gb3B0Ll9jLmZpbHRlcihcbiAgICAgIHcgPT5cbiAgICAgICAgdy5leHBvcnRlZCAhPT0gZmFsc2UgJiZcbiAgICAgICAgdy5pbmRleCAmJlxuICAgICAgICAoIXcuYnV0dG9ucyB8fCB3LmJ1dHRvbnMubGVuZ3RoID09PSAwKSxcbiAgICApO1xuICAgIGNvbnN0IGNjID0gY29sRGF0YS5sZW5ndGgsXG4gICAgICBkYyA9IG9wdC5fZC5sZW5ndGg7XG5cbiAgICAvLyBjb2x1bW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNjOyBpKyspIHtcbiAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKX0xYF0gPSB7XG4gICAgICAgIHQ6ICdzJyxcbiAgICAgICAgdjogY29sRGF0YVtpXS50aXRsZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY29udGVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGM7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYzsgaisrKSB7XG4gICAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBqKX0ke2kgKyAyfWBdID0gdGhpcy5fc3RHZXQoXG4gICAgICAgICAgb3B0Ll9kW2ldLFxuICAgICAgICAgIGNvbERhdGFbal0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNjID4gMCAmJiBkYyA+IDApIHtcbiAgICAgIHNoZWV0WychcmVmJ10gPSBgQTE6JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY2MgLSAxKX0ke2RjICsgMX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldHM7XG4gIH1cblxuICBleHBvcnQob3B0OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMueGxzeFNydilcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbXVzZSBiZSBpbXBvcnQgJ1hsc3hNb2R1bGUnIG1vZHVsZSwgYnV0IGdvdCBudWxsYCk7XG4gICAgY29uc3Qgc2hlZXRzID0gdGhpcy5nZW5TaGVldChvcHQpO1xuICAgIHJldHVybiB0aGlzLnhsc3hTcnYuZXhwb3J0KHtcbiAgICAgIHNoZWV0cyxcbiAgICAgIGZpbGVuYW1lOiBvcHQuZmlsZW5hbWUsXG4gICAgICBjYWxsYmFjazogb3B0LmNhbGxiYWNrLFxuICAgIH0pO1xuICB9XG59XG4iXX0=