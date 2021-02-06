import { __awaiter } from "tslib";
import { Injectable, Optional } from '@angular/core';
import { XlsxService } from '@delon/abc/xlsx';
import { deepGet } from '@delon/util/other';
export class STExport {
    constructor(xlsxSrv) {
        this.xlsxSrv = xlsxSrv;
    }
    _stGet(item, col, index) {
        const ret = { t: 's', v: '' };
        if (col.format) {
            ret.v = col.format(item, col, index);
        }
        else {
            const val = deepGet(item, col.index, '');
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
                        const yn = col.yn;
                        ret.v = ret.v === yn.truth ? yn.yes || '是' : yn.no || '否';
                        break;
                }
            }
        }
        ret.v = ret.v || '';
        return ret;
    }
    genSheet(opt) {
        const sheets = {};
        const sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
        const colData = opt.columens.filter(w => w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0));
        const colLen = colData.length;
        const dataLen = opt.data.length;
        // column
        for (let i = 0; i < colLen; i++) {
            const tit = colData[i].title;
            sheet[`${this.xlsxSrv.numberToSchema(i + 1)}1`] = {
                t: 's',
                v: typeof tit === 'object' ? tit.text : tit,
            };
        }
        // content
        for (let i = 0; i < dataLen; i++) {
            for (let j = 0; j < colLen; j++) {
                sheet[`${this.xlsxSrv.numberToSchema(j + 1)}${i + 2}`] = this._stGet(opt.data[i], colData[j], i);
            }
        }
        if (colLen > 0 && dataLen > 0) {
            sheet['!ref'] = `A1:${this.xlsxSrv.numberToSchema(colLen)}${dataLen + 1}`;
        }
        return sheets;
    }
    export(opt) {
        return __awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFvQixXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLNUMsTUFBTSxPQUFPLFFBQVE7SUFDbkIsWUFBZ0MsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7SUFFaEQsTUFBTSxDQUFDLElBQVMsRUFBRSxHQUFhLEVBQUUsS0FBYTtRQUNwRCxNQUFNLEdBQUcsR0FBMkIsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUV0RCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNaLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDZixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ2hCLEtBQUssVUFBVTt3QkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixNQUFNO29CQUNSLEtBQUssSUFBSTt3QkFDUCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRyxDQUFDO3dCQUNuQixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDO3dCQUMxRCxNQUFNO2lCQUNUO2FBQ0Y7U0FDRjtRQUVELEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFcEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sUUFBUSxDQUFDLEdBQW9CO1FBQ25DLE1BQU0sTUFBTSxHQUFzRCxFQUFFLENBQUM7UUFDckUsTUFBTSxLQUFLLEdBQWlDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckYsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckgsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM5QixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSyxDQUFDLE1BQU0sQ0FBQztRQUVqQyxTQUFTO1FBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUc7Z0JBQ2hELENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7YUFDNUMsQ0FBQztTQUNIO1FBRUQsVUFBVTtRQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbkc7U0FDRjtRQUVELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUMzRTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFSyxNQUFNLENBQUMsR0FBb0I7O1lBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsTUFBTTtnQkFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7Z0JBQ3RCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7OztZQXRFRixVQUFVOzs7O1lBTGdCLFdBQVcsdUJBT3ZCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWGxzeEV4cG9ydFJlc3VsdCwgWGxzeFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTVENvbHVtbiwgU1RFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURXhwb3J0IHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSB4bHN4U3J2OiBYbHN4U2VydmljZSkge31cblxuICBwcml2YXRlIF9zdEdldChpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4sIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIGNvbnN0IHJldDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHsgdDogJ3MnLCB2OiAnJyB9O1xuXG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIHJldC52ID0gY29sLmZvcm1hdChpdGVtLCBjb2wsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sICcnKTtcbiAgICAgIHJldC52ID0gdmFsO1xuICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgICAgICByZXQudCA9ICduJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgcmV0LnQgPSAnZCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd5bic6XG4gICAgICAgICAgICBjb25zdCB5biA9IGNvbC55biE7XG4gICAgICAgICAgICByZXQudiA9IHJldC52ID09PSB5bi50cnV0aCA/IHluLnllcyB8fCAn5pivJyA6IHluLm5vIHx8ICflkKYnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXQudiA9IHJldC52IHx8ICcnO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU2hlZXQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiB7IFtzaGVldDogc3RyaW5nXToge30gfSB7XG4gICAgY29uc3Qgc2hlZXRzOiB7IFtzaGVldDogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSB9ID0ge307XG4gICAgY29uc3Qgc2hlZXQ6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSAoc2hlZXRzW29wdC5zaGVldG5hbWUgfHwgJ1NoZWV0MSddID0ge30pO1xuICAgIGNvbnN0IGNvbERhdGEgPSBvcHQuY29sdW1lbnMhLmZpbHRlcih3ID0+IHcuZXhwb3J0ZWQgIT09IGZhbHNlICYmIHcuaW5kZXggJiYgKCF3LmJ1dHRvbnMgfHwgdy5idXR0b25zLmxlbmd0aCA9PT0gMCkpO1xuICAgIGNvbnN0IGNvbExlbiA9IGNvbERhdGEubGVuZ3RoO1xuICAgIGNvbnN0IGRhdGFMZW4gPSBvcHQuZGF0YSEubGVuZ3RoO1xuXG4gICAgLy8gY29sdW1uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xMZW47IGkrKykge1xuICAgICAgY29uc3QgdGl0ID0gY29sRGF0YVtpXS50aXRsZTtcbiAgICAgIHNoZWV0W2Ake3RoaXMueGxzeFNydi5udW1iZXJUb1NjaGVtYShpICsgMSl9MWBdID0ge1xuICAgICAgICB0OiAncycsXG4gICAgICAgIHY6IHR5cGVvZiB0aXQgPT09ICdvYmplY3QnID8gdGl0LnRleHQgOiB0aXQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNvbnRlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMZW47IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xMZW47IGorKykge1xuICAgICAgICBzaGVldFtgJHt0aGlzLnhsc3hTcnYubnVtYmVyVG9TY2hlbWEoaiArIDEpfSR7aSArIDJ9YF0gPSB0aGlzLl9zdEdldChvcHQuZGF0YSFbaV0sIGNvbERhdGFbal0sIGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2xMZW4gPiAwICYmIGRhdGFMZW4gPiAwKSB7XG4gICAgICBzaGVldFsnIXJlZiddID0gYEExOiR7dGhpcy54bHN4U3J2Lm51bWJlclRvU2NoZW1hKGNvbExlbil9JHtkYXRhTGVuICsgMX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldHM7XG4gIH1cblxuICBhc3luYyBleHBvcnQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPFhsc3hFeHBvcnRSZXN1bHQ+IHtcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XG4gICAgcmV0dXJuIHRoaXMueGxzeFNydi5leHBvcnQoe1xuICAgICAgc2hlZXRzLFxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcbiAgICAgIGNhbGxiYWNrOiBvcHQuY2FsbGJhY2ssXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==