/**
 * @fileoverview added by tsickle
 * Generated from: table-export.ts
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
        const colData = (/** @type {?} */ (opt._c)).filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0)));
        /** @type {?} */
        const cc = colData.length;
        /** @type {?} */
        const dc = (/** @type {?} */ (opt._d)).length;
        // column
        for (let i = 0; i < cc; i++) {
            /** @type {?} */
            const tit = colData[i].title;
            sheet[`${String.fromCharCode(i + 65)}1`] = {
                t: 's',
                v: typeof tit === 'object' ? tit.text : tit,
            };
        }
        // content
        for (let i = 0; i < dc; i++) {
            for (let j = 0; j < cc; j++) {
                sheet[`${String.fromCharCode(j + 65)}${i + 2}`] = this._stGet((/** @type {?} */ (opt._d))[i], colData[j], i);
            }
        }
        if (cc > 0 && dc > 0) {
            sheet['!ref'] = `A1:${String.fromCharCode(cc + 65 - 1)}${dc + 1}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXRDLE1BQU0sT0FBTyxRQUFROzs7O0lBQ25CLFlBQWdDLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFBRyxDQUFDOzs7Ozs7OztJQUVoRCxNQUFNLENBQUMsSUFBUyxFQUFFLEdBQWEsRUFBRSxLQUFhOztjQUM5QyxHQUFHLEdBQTJCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBRXJELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNkLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07O2tCQUNDLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLEVBQVksRUFBRSxFQUFFLENBQUM7WUFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDWixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLEtBQUssVUFBVTtvQkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDWixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDWixNQUFNO2dCQUNSLEtBQUssSUFBSTtvQkFDUCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFNUQ29sdW1uLCBTVEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RFeHBvcnQge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHhsc3hTcnY6IFhsc3hTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgX3N0R2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbiwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgcmV0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0geyB0OiAncycsIHY6ICcnIH07XG5cbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgcmV0LnYgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgJycpO1xuICAgICAgcmV0LnYgPSB2YWw7XG4gICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICByZXQudCA9ICduJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgcmV0LnQgPSAnZCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICByZXQudiA9IHJldC52ID09PSBjb2wueW5UcnV0aCA/IGNvbC55blllcyB8fCAn5pivJyA6IGNvbC55bk5vIHx8ICflkKYnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldC52ID0gcmV0LnYgfHwgJyc7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiB7fSB9IHtcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiB7fSB9ID0ge307XG4gICAgY29uc3Qgc2hlZXQgPSAoc2hlZXRzW29wdC5zaGVldG5hbWUgfHwgJ1NoZWV0MSddID0ge30pO1xuICAgIGNvbnN0IGNvbERhdGEgPSBvcHQuX2MhLmZpbHRlcih3ID0+IHcuZXhwb3J0ZWQgIT09IGZhbHNlICYmIHcuaW5kZXggJiYgKCF3LmJ1dHRvbnMgfHwgdy5idXR0b25zLmxlbmd0aCA9PT0gMCkpO1xuICAgIGNvbnN0IGNjID0gY29sRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgZGMgPSBvcHQuX2QhLmxlbmd0aDtcblxuICAgIC8vIGNvbHVtblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2M7IGkrKykge1xuICAgICAgY29uc3QgdGl0ID0gY29sRGF0YVtpXS50aXRsZTtcbiAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KX0xYF0gPSB7XG4gICAgICAgIHQ6ICdzJyxcbiAgICAgICAgdjogdHlwZW9mIHRpdCA9PT0gJ29iamVjdCcgPyB0aXQudGV4dCA6IHRpdCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY29udGVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGM7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYzsgaisrKSB7XG4gICAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoaiArIDY1KX0ke2kgKyAyfWBdID0gdGhpcy5fc3RHZXQob3B0Ll9kIVtpXSwgY29sRGF0YVtqXSwgaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNjID4gMCAmJiBkYyA+IDApIHtcbiAgICAgIHNoZWV0WychcmVmJ10gPSBgQTE6JHtTdHJpbmcuZnJvbUNoYXJDb2RlKGNjICsgNjUgLSAxKX0ke2RjICsgMX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldHM7XG4gIH1cblxuICBleHBvcnQob3B0OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XG4gICAgcmV0dXJuIHRoaXMueGxzeFNydi5leHBvcnQoe1xuICAgICAgc2hlZXRzLFxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcbiAgICAgIGNhbGxiYWNrOiBvcHQuY2FsbGJhY2ssXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==