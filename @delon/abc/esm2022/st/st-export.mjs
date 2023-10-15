import { Injectable, Optional } from '@angular/core';
import { deepGet } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "@delon/abc/xlsx";
export class STExport {
    constructor(xlsxSrv) {
        this.xlsxSrv = xlsxSrv;
    }
    _stGet(item, col, index, colIndex) {
        const ret = { t: 's', v: '' };
        if (col.format) {
            ret.v = col.format(item, col, index);
        }
        else {
            const val = item._values ? item._values[colIndex].text : deepGet(item, col.index, '');
            ret.v = val;
            if (val != null) {
                switch (col.type) {
                    case 'currency':
                        ret.t = 'n';
                        break;
                    case 'date':
                        // Can't be a empty value, it will cause `#NULL!`
                        // See https://github.com/SheetJS/sheetjs/blob/master/docbits/52_datatype.md
                        if (`${val}`.length > 0) {
                            ret.t = 'd';
                            // Number Formats: https://github.com/SheetJS/sheetjs/blob/master/docbits/63_numfmt.md
                            ret.z = col.dateFormat;
                        }
                        break;
                    case 'yn':
                        const yn = col.yn;
                        ret.v = val === yn.truth ? yn.yes : yn.no;
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
        const dataLen = opt.data.length;
        let validColCount = 0;
        const columns = opt.columens.filter(col => !(col.exported === false || !col.index || !(!col.buttons || col.buttons.length === 0)));
        if (columns.findIndex(w => w._width != null) !== -1) {
            // wpx: width in screen pixels https://github.com/SheetJS/sheetjs#column-properties
            sheet['!cols'] = columns.map(col => ({ wpx: col._width }));
        }
        for (let colIdx = 0; colIdx < columns.length; colIdx++) {
            const col = columns[colIdx];
            ++validColCount;
            const columnName = this.xlsxSrv.numberToSchema(colIdx + 1);
            sheet[`${columnName}1`] = {
                t: 's',
                v: typeof col.title === 'object' ? col.title.text : col.title
            };
            for (let dataIdx = 0; dataIdx < dataLen; dataIdx++) {
                sheet[`${columnName}${dataIdx + 2}`] = this._stGet(opt.data[dataIdx], col, dataIdx, colIdx);
            }
        }
        if (validColCount > 0 && dataLen > 0) {
            sheet['!ref'] = `A1:${this.xlsxSrv.numberToSchema(validColCount)}${dataLen + 1}`;
        }
        return sheets;
    }
    async export(opt) {
        const sheets = this.genSheet(opt);
        return this.xlsxSrv.export({
            sheets,
            filename: opt.filename,
            callback: opt.callback
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: STExport, deps: [{ token: i1.XlsxService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: STExport }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: STExport, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.XlsxService, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQU81QyxNQUFNLE9BQU8sUUFBUTtJQUNuQixZQUFnQyxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxNQUFNLENBQUMsSUFBZSxFQUFFLEdBQWEsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7UUFDNUUsTUFBTSxHQUFHLEdBQWlDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFNUQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2QsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ1osSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNmLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRTtvQkFDaEIsS0FBSyxVQUFVO3dCQUNiLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNaLE1BQU07b0JBQ1IsS0FBSyxNQUFNO3dCQUNULGlEQUFpRDt3QkFDakQsNEVBQTRFO3dCQUM1RSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDdkIsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7NEJBQ1osc0ZBQXNGOzRCQUN0RixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7eUJBQ3hCO3dCQUNELE1BQU07b0JBQ1IsS0FBSyxJQUFJO3dCQUNQLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFHLENBQUM7d0JBQ25CLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQzFDLE1BQU07aUJBQ1Q7YUFDRjtTQUNGO1FBRUQsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTyxRQUFRLENBQUMsR0FBb0I7UUFDbkMsTUFBTSxNQUFNLEdBQXNELEVBQUUsQ0FBQztRQUNyRSxNQUFNLEtBQUssR0FBaUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyRixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdEIsTUFBTSxPQUFPLEdBQUksR0FBRyxDQUFDLFFBQXlCLENBQUMsTUFBTSxDQUNuRCxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUM5RixDQUFDO1FBQ0YsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNuRCxtRkFBbUY7WUFDbkYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0RCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsRUFBRSxhQUFhLENBQUM7WUFDaEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUssQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEdBQUc7Z0JBQ3hCLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUs7YUFDOUQsQ0FBQztZQUNGLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ2xELEtBQUssQ0FBQyxHQUFHLFVBQVUsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM5RjtTQUNGO1FBRUQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBb0I7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLE1BQU07WUFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDdEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBN0VVLFFBQVE7a0hBQVIsUUFBUTs7MkZBQVIsUUFBUTtrQkFEcEIsVUFBVTs7MEJBRUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFhsc3hFeHBvcnRSZXN1bHQsIFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNUQ29sdW1uLCBTVEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgX1NUQ29sdW1uIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVEV4cG9ydCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBfc3RHZXQoaXRlbTogTnpTYWZlQW55LCBjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCByZXQ6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB7IHQ6ICdzJywgdjogJycgfTtcblxuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICByZXQudiA9IGNvbC5mb3JtYXQoaXRlbSwgY29sLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbCA9IGl0ZW0uX3ZhbHVlcyA/IGl0ZW0uX3ZhbHVlc1tjb2xJbmRleF0udGV4dCA6IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCAnJyk7XG4gICAgICByZXQudiA9IHZhbDtcbiAgICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgICAgcmV0LnQgPSAnbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIC8vIENhbid0IGJlIGEgZW1wdHkgdmFsdWUsIGl0IHdpbGwgY2F1c2UgYCNOVUxMIWBcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vU2hlZXRKUy9zaGVldGpzL2Jsb2IvbWFzdGVyL2RvY2JpdHMvNTJfZGF0YXR5cGUubWRcbiAgICAgICAgICAgIGlmIChgJHt2YWx9YC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldC50ID0gJ2QnO1xuICAgICAgICAgICAgICAvLyBOdW1iZXIgRm9ybWF0czogaHR0cHM6Ly9naXRodWIuY29tL1NoZWV0SlMvc2hlZXRqcy9ibG9iL21hc3Rlci9kb2NiaXRzLzYzX251bWZtdC5tZFxuICAgICAgICAgICAgICByZXQueiA9IGNvbC5kYXRlRm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAneW4nOlxuICAgICAgICAgICAgY29uc3QgeW4gPSBjb2wueW4hO1xuICAgICAgICAgICAgcmV0LnYgPSB2YWwgPT09IHluLnRydXRoID8geW4ueWVzIDogeW4ubm87XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldC52ID0gcmV0LnYgfHwgJyc7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiB1bmtub3duIH0ge1xuICAgIGNvbnN0IHNoZWV0czogeyBbc2hlZXQ6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gfSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0OiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0gKHNoZWV0c1tvcHQuc2hlZXRuYW1lIHx8ICdTaGVldDEnXSA9IHt9KTtcbiAgICBjb25zdCBkYXRhTGVuID0gb3B0LmRhdGEhLmxlbmd0aDtcbiAgICBsZXQgdmFsaWRDb2xDb3VudCA9IDA7XG4gICAgY29uc3QgY29sdW1ucyA9IChvcHQuY29sdW1lbnMhIGFzIF9TVENvbHVtbltdKS5maWx0ZXIoXG4gICAgICBjb2wgPT4gIShjb2wuZXhwb3J0ZWQgPT09IGZhbHNlIHx8ICFjb2wuaW5kZXggfHwgISghY29sLmJ1dHRvbnMgfHwgY29sLmJ1dHRvbnMubGVuZ3RoID09PSAwKSlcbiAgICApO1xuICAgIGlmIChjb2x1bW5zLmZpbmRJbmRleCh3ID0+IHcuX3dpZHRoICE9IG51bGwpICE9PSAtMSkge1xuICAgICAgLy8gd3B4OiB3aWR0aCBpbiBzY3JlZW4gcGl4ZWxzIGh0dHBzOi8vZ2l0aHViLmNvbS9TaGVldEpTL3NoZWV0anMjY29sdW1uLXByb3BlcnRpZXNcbiAgICAgIHNoZWV0WychY29scyddID0gY29sdW1ucy5tYXAoY29sID0+ICh7IHdweDogY29sLl93aWR0aCB9KSk7XG4gICAgfVxuICAgIGZvciAobGV0IGNvbElkeCA9IDA7IGNvbElkeCA8IGNvbHVtbnMubGVuZ3RoOyBjb2xJZHgrKykge1xuICAgICAgY29uc3QgY29sID0gY29sdW1uc1tjb2xJZHhdO1xuICAgICAgKyt2YWxpZENvbENvdW50O1xuICAgICAgY29uc3QgY29sdW1uTmFtZSA9IHRoaXMueGxzeFNydi5udW1iZXJUb1NjaGVtYShjb2xJZHggKyAxKTtcbiAgICAgIHNoZWV0W2Ake2NvbHVtbk5hbWV9MWBdID0ge1xuICAgICAgICB0OiAncycsXG4gICAgICAgIHY6IHR5cGVvZiBjb2wudGl0bGUgPT09ICdvYmplY3QnID8gY29sLnRpdGxlLnRleHQgOiBjb2wudGl0bGVcbiAgICAgIH07XG4gICAgICBmb3IgKGxldCBkYXRhSWR4ID0gMDsgZGF0YUlkeCA8IGRhdGFMZW47IGRhdGFJZHgrKykge1xuICAgICAgICBzaGVldFtgJHtjb2x1bW5OYW1lfSR7ZGF0YUlkeCArIDJ9YF0gPSB0aGlzLl9zdEdldChvcHQuZGF0YSFbZGF0YUlkeF0sIGNvbCwgZGF0YUlkeCwgY29sSWR4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRDb2xDb3VudCA+IDAgJiYgZGF0YUxlbiA+IDApIHtcbiAgICAgIHNoZWV0WychcmVmJ10gPSBgQTE6JHt0aGlzLnhsc3hTcnYubnVtYmVyVG9TY2hlbWEodmFsaWRDb2xDb3VudCl9JHtkYXRhTGVuICsgMX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldHM7XG4gIH1cblxuICBhc3luYyBleHBvcnQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPFhsc3hFeHBvcnRSZXN1bHQ+IHtcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XG4gICAgcmV0dXJuIHRoaXMueGxzeFNydi5leHBvcnQoe1xuICAgICAgc2hlZXRzLFxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcbiAgICAgIGNhbGxiYWNrOiBvcHQuY2FsbGJhY2tcbiAgICB9KTtcbiAgfVxufVxuIl19