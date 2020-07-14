/**
 * @fileoverview added by tsickle
 * Generated from: st-export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
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
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const sheets = this.genSheet(opt);
            return this.xlsxSrv.export({
                sheets,
                filename: opt.filename,
                callback: opt.callback,
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLdEMsTUFBTSxPQUFPLFFBQVE7Ozs7SUFDbkIsWUFBZ0MsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7Ozs7O0lBRWhELE1BQU0sQ0FBQyxJQUFTLEVBQUUsR0FBYSxFQUFFLEtBQWE7O2NBQzlDLEdBQUcsR0FBMkIsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFFckQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2QsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7YUFBTTs7a0JBQ0MsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsbUJBQUEsR0FBRyxDQUFDLEtBQUssRUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNwRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNaLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDZixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ2hCLEtBQUssVUFBVTt3QkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixNQUFNO29CQUNSLEtBQUssSUFBSTs7OEJBQ0QsRUFB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QUFDLFFBQVE7YUFDdkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBOzs7WUF0RUYsVUFBVTs7OztZQUxnQixXQUFXLHVCQU92QixRQUFROzs7Ozs7O0lBQVQsMkJBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhsc3hFeHBvcnRSZXN1bHQsIFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNURXhwb3J0T3B0aW9ucyB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVEV4cG9ydCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBfc3RHZXQoaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBjb25zdCByZXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7IHQ6ICdzJywgdjogJycgfTtcblxuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICByZXQudiA9IGNvbC5mb3JtYXQoaXRlbSwgY29sLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCAnJyk7XG4gICAgICByZXQudiA9IHZhbDtcbiAgICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgICAgcmV0LnQgPSAnbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIHJldC50ID0gJ2QnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAneW4nOlxuICAgICAgICAgICAgY29uc3QgeW4gPSBjb2wueW4hO1xuICAgICAgICAgICAgcmV0LnYgPSByZXQudiA9PT0geW4udHJ1dGggPyB5bi55ZXMgfHwgJ+aYrycgOiB5bi5ubyB8fCAn5ZCmJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0LnYgPSByZXQudiB8fCAnJztcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGdlblNoZWV0KG9wdDogU1RFeHBvcnRPcHRpb25zKTogeyBbc2hlZXQ6IHN0cmluZ106IHt9IH0ge1xuICAgIGNvbnN0IHNoZWV0czogeyBbc2hlZXQ6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gfSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0OiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0gKHNoZWV0c1tvcHQuc2hlZXRuYW1lIHx8ICdTaGVldDEnXSA9IHt9KTtcbiAgICBjb25zdCBjb2xEYXRhID0gb3B0LmNvbHVtZW5zIS5maWx0ZXIodyA9PiB3LmV4cG9ydGVkICE9PSBmYWxzZSAmJiB3LmluZGV4ICYmICghdy5idXR0b25zIHx8IHcuYnV0dG9ucy5sZW5ndGggPT09IDApKTtcbiAgICBjb25zdCBjb2xMZW4gPSBjb2xEYXRhLmxlbmd0aDtcbiAgICBjb25zdCBkYXRhTGVuID0gb3B0LmRhdGEhLmxlbmd0aDtcblxuICAgIC8vIGNvbHVtblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sTGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpdCA9IGNvbERhdGFbaV0udGl0bGU7XG4gICAgICBzaGVldFtgJHt0aGlzLnhsc3hTcnYubnVtYmVyVG9TY2hlbWEoaSArIDEpfTFgXSA9IHtcbiAgICAgICAgdDogJ3MnLFxuICAgICAgICB2OiB0eXBlb2YgdGl0ID09PSAnb2JqZWN0JyA/IHRpdC50ZXh0IDogdGl0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjb250ZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTGVuOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sTGVuOyBqKyspIHtcbiAgICAgICAgc2hlZXRbYCR7dGhpcy54bHN4U3J2Lm51bWJlclRvU2NoZW1hKGogKyAxKX0ke2kgKyAyfWBdID0gdGhpcy5fc3RHZXQob3B0LmRhdGEhW2ldLCBjb2xEYXRhW2pdLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29sTGVuID4gMCAmJiBkYXRhTGVuID4gMCkge1xuICAgICAgc2hlZXRbJyFyZWYnXSA9IGBBMToke3RoaXMueGxzeFNydi5udW1iZXJUb1NjaGVtYShjb2xMZW4pfSR7ZGF0YUxlbiArIDF9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hlZXRzO1xuICB9XG5cbiAgYXN5bmMgZXhwb3J0KG9wdDogU1RFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxYbHN4RXhwb3J0UmVzdWx0PiB7XG4gICAgY29uc3Qgc2hlZXRzID0gdGhpcy5nZW5TaGVldChvcHQpO1xuICAgIHJldHVybiB0aGlzLnhsc3hTcnYuZXhwb3J0KHtcbiAgICAgIHNoZWV0cyxcbiAgICAgIGZpbGVuYW1lOiBvcHQuZmlsZW5hbWUsXG4gICAgICBjYWxsYmFjazogb3B0LmNhbGxiYWNrLFxuICAgIH0pO1xuICB9XG59XG4iXX0=