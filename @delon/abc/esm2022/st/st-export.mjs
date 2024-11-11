import { Injectable, inject } from '@angular/core';
import { XlsxService } from '@delon/abc/xlsx';
import { deepGet } from '@delon/util/other';
import * as i0 from "@angular/core";
export class STExport {
    constructor() {
        this.xlsxSrv = inject(XlsxService);
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
        ret.v = ret.v ?? '';
        return ret;
    }
    genSheet(opt) {
        const sheets = {};
        const sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
        const dataLen = opt.data.length;
        const columns = opt.columens;
        let validColCount = 0;
        let wpx = false;
        const invalidFn = (col) => col.exported === false || !col.index || !(!col.buttons || col.buttons.length === 0);
        for (const [idx, col] of columns.entries()) {
            if (invalidFn(col))
                continue;
            if (!wpx && col._width != null)
                wpx = true;
            ++validColCount;
            const columnName = this.xlsxSrv.numberToSchema(validColCount);
            sheet[`${columnName}1`] = {
                t: 's',
                v: typeof col.title === 'object' ? col.title.text : col.title
            };
            for (let dataIdx = 0; dataIdx < dataLen; dataIdx++) {
                sheet[`${columnName}${dataIdx + 2}`] = this._stGet(opt.data[dataIdx], col, dataIdx, idx);
            }
        }
        if (wpx) {
            // wpx: width in screen pixels https://github.com/SheetJS/sheetjs#column-properties
            sheet['!cols'] = columns.filter(col => !invalidFn(col)).map(col => ({ wpx: col._width }));
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: STExport, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: STExport }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: STExport, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LWV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFPNUMsTUFBTSxPQUFPLFFBQVE7SUFEckI7UUFFbUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQStFaEQ7SUE3RVMsTUFBTSxDQUFDLElBQWUsRUFBRSxHQUFhLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQzVFLE1BQU0sR0FBRyxHQUFpQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTVELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2YsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNaLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNoQixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDakIsS0FBSyxVQUFVO3dCQUNiLEdB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RixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVGLENBQUM7UUFFRCxJQUFJLGFBQWEsR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNwRixDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBb0I7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLE1BQU07WUFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDdEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBL0VVLFFBQVE7bUhBQVIsUUFBUTs7NEZBQVIsUUFBUTtrQkFEcEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBYbHN4RXhwb3J0UmVzdWx0LCBYbHN4U2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMveGxzeCc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTVENvbHVtbiwgU1RFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RFeHBvcnQge1xuICBwcml2YXRlIHJlYWRvbmx5IHhsc3hTcnYgPSBpbmplY3QoWGxzeFNlcnZpY2UpO1xuXG4gIHByaXZhdGUgX3N0R2V0KGl0ZW06IE56U2FmZUFueSwgY29sOiBTVENvbHVtbiwgaW5kZXg6IG51bWJlciwgY29sSW5kZXg6IG51bWJlcik6IE56U2FmZUFueSB7XG4gICAgY29uc3QgcmV0OiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0geyB0OiAncycsIHY6ICcnIH07XG5cbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgcmV0LnYgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSBpdGVtLl92YWx1ZXMgPyBpdGVtLl92YWx1ZXNbY29sSW5kZXhdLnRleHQgOiBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgJycpO1xuICAgICAgcmV0LnYgPSB2YWw7XG4gICAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICAgIHJldC50ID0gJ24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAvLyBDYW4ndCBiZSBhIGVtcHR5IHZhbHVlLCBpdCB3aWxsIGNhdXNlIGAjTlVMTCFgXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1NoZWV0SlMvc2hlZXRqcy9ibG9iL21hc3Rlci9kb2NiaXRzLzUyX2RhdGF0eXBlLm1kXG4gICAgICAgICAgICBpZiAoYCR7dmFsfWAubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXQudCA9ICdkJztcbiAgICAgICAgICAgICAgLy8gTnVtYmVyIEZvcm1hdHM6IGh0dHBzOi8vZ2l0aHViLmNvbS9TaGVldEpTL3NoZWV0anMvYmxvYi9tYXN0ZXIvZG9jYml0cy82M19udW1mbXQubWRcbiAgICAgICAgICAgICAgcmV0LnogPSBjb2wuZGF0ZUZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICAgIGNvbnN0IHluID0gY29sLnluITtcbiAgICAgICAgICAgIHJldC52ID0gdmFsID09PSB5bi50cnV0aCA/IHluLnllcyA6IHluLm5vO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXQudiA9IHJldC52ID8/ICcnO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU2hlZXQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiB7IFtzaGVldDogc3RyaW5nXTogdW5rbm93biB9IHtcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9IH0gPSB7fTtcbiAgICBjb25zdCBzaGVldDogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IChzaGVldHNbb3B0LnNoZWV0bmFtZSB8fCAnU2hlZXQxJ10gPSB7fSk7XG4gICAgY29uc3QgZGF0YUxlbiA9IG9wdC5kYXRhIS5sZW5ndGg7XG4gICAgY29uc3QgY29sdW1ucyA9IG9wdC5jb2x1bWVucyEgYXMgX1NUQ29sdW1uW107XG4gICAgbGV0IHZhbGlkQ29sQ291bnQgPSAwO1xuICAgIGxldCB3cHggPSBmYWxzZTtcbiAgICBjb25zdCBpbnZhbGlkRm4gPSAoY29sOiBfU1RDb2x1bW4pOiBib29sZWFuID0+XG4gICAgICBjb2wuZXhwb3J0ZWQgPT09IGZhbHNlIHx8ICFjb2wuaW5kZXggfHwgISghY29sLmJ1dHRvbnMgfHwgY29sLmJ1dHRvbnMubGVuZ3RoID09PSAwKTtcbiAgICBmb3IgKGNvbnN0IFtpZHgsIGNvbF0gb2YgY29sdW1ucy5lbnRyaWVzKCkpIHtcbiAgICAgIGlmIChpbnZhbGlkRm4oY29sKSkgY29udGludWU7XG4gICAgICBpZiAoIXdweCAmJiBjb2wuX3dpZHRoICE9IG51bGwpIHdweCA9IHRydWU7XG4gICAgICArK3ZhbGlkQ29sQ291bnQ7XG4gICAgICBjb25zdCBjb2x1bW5OYW1lID0gdGhpcy54bHN4U3J2IS5udW1iZXJUb1NjaGVtYSh2YWxpZENvbENvdW50KTtcbiAgICAgIHNoZWV0W2Ake2NvbHVtbk5hbWV9MWBdID0ge1xuICAgICAgICB0OiAncycsXG4gICAgICAgIHY6IHR5cGVvZiBjb2wudGl0bGUgPT09ICdvYmplY3QnID8gY29sLnRpdGxlLnRleHQgOiBjb2wudGl0bGVcbiAgICAgIH07XG4gICAgICBmb3IgKGxldCBkYXRhSWR4ID0gMDsgZGF0YUlkeCA8IGRhdGFMZW47IGRhdGFJZHgrKykge1xuICAgICAgICBzaGVldFtgJHtjb2x1bW5OYW1lfSR7ZGF0YUlkeCArIDJ9YF0gPSB0aGlzLl9zdEdldChvcHQuZGF0YSFbZGF0YUlkeF0sIGNvbCwgZGF0YUlkeCwgaWR4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdweCkge1xuICAgICAgLy8gd3B4OiB3aWR0aCBpbiBzY3JlZW4gcGl4ZWxzIGh0dHBzOi8vZ2l0aHViLmNvbS9TaGVldEpTL3NoZWV0anMjY29sdW1uLXByb3BlcnRpZXNcbiAgICAgIHNoZWV0WychY29scyddID0gY29sdW1ucy5maWx0ZXIoY29sID0+ICFpbnZhbGlkRm4oY29sKSkubWFwKGNvbCA9PiAoeyB3cHg6IGNvbC5fd2lkdGggfSkpO1xuICAgIH1cblxuICAgIGlmICh2YWxpZENvbENvdW50ID4gMCAmJiBkYXRhTGVuID4gMCkge1xuICAgICAgc2hlZXRbJyFyZWYnXSA9IGBBMToke3RoaXMueGxzeFNydiEubnVtYmVyVG9TY2hlbWEodmFsaWRDb2xDb3VudCl9JHtkYXRhTGVuICsgMX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldHM7XG4gIH1cblxuICBhc3luYyBleHBvcnQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPFhsc3hFeHBvcnRSZXN1bHQ+IHtcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XG4gICAgcmV0dXJuIHRoaXMueGxzeFNydi5leHBvcnQoe1xuICAgICAgc2hlZXRzLFxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcbiAgICAgIGNhbGxiYWNrOiBvcHQuY2FsbGJhY2tcbiAgICB9KTtcbiAgfVxufVxuIl19