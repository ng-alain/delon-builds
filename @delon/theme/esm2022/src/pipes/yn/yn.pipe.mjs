import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
const ICON_YES = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>`;
const ICON_NO = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>`;
const CLS_YES = `class="yn__yes"`;
const CLS_NO = `class="yn__no"`;
export class YNPipe {
    constructor(dom) {
        this.dom = dom;
    }
    transform(value, yes, no, mode, isSafeHtml = true) {
        let html = '';
        yes = yes || '是';
        no = no || '否';
        switch (mode) {
            case 'full':
                html = value
                    ? `<i ${CLS_YES}>${ICON_YES}<span>${yes}</span></i>`
                    : `<i ${CLS_NO}>${ICON_NO}<span>${no}</span></i>`;
                break;
            case 'text':
                html = value ? `<i ${CLS_YES}>${yes}</i>` : `<i ${CLS_NO}>${no}</i>`;
                break;
            default:
                html = value ? `<i ${CLS_YES} title="${yes}">${ICON_YES}</i>` : `<i ${CLS_NO} title="${no}">${ICON_NO}</i>`;
                break;
        }
        return isSafeHtml ? this.dom.bypassSecurityTrustHtml(html) : html;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: YNPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.7", ngImport: i0, type: YNPipe, name: "yn" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: YNPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'yn' }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFLcEQsTUFBTSxRQUFRLEdBQUcsZ1RBQWdULENBQUM7QUFDbFUsTUFBTSxPQUFPLEdBQUcsaWJBQWliLENBQUM7QUFDbGMsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7QUFHaEMsTUFBTSxPQUFPLE1BQU07SUFDakIsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsU0FBUyxDQUFDLEtBQWMsRUFBRSxHQUFZLEVBQUUsRUFBVyxFQUFFLElBQWEsRUFBRSxhQUFzQixJQUFJO1FBQzVGLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ2pCLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDO1FBQ2YsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxHQUFHLEtBQUs7b0JBQ1YsQ0FBQyxDQUFDLE1BQU0sT0FBTyxJQUFJLFFBQVEsU0FBUyxHQUFHLGFBQWE7b0JBQ3BELENBQUMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxPQUFPLFNBQVMsRUFBRSxhQUFhLENBQUM7Z0JBQ3BELE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxJQUFJLEVBQUUsTUFBTSxDQUFDO2dCQUNyRSxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLFdBQVcsR0FBRyxLQUFLLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sV0FBVyxFQUFFLEtBQUssT0FBTyxNQUFNLENBQUM7Z0JBQzVHLE1BQU07U0FDVDtRQUNELE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQzs4R0FyQlUsTUFBTTs0R0FBTixNQUFNOzsyRkFBTixNQUFNO2tCQURsQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZXhwb3J0IHR5cGUgWU5Nb2RlID0gJ2Z1bGwnIHwgJ2ljb24nIHwgJ3RleHQnO1xuXG5jb25zdCBJQ09OX1lFUyA9IGA8c3ZnIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIk05MTIgMTkwaC02OS45Yy05LjggMC0xOS4xIDQuNS0yNS4xIDEyLjJMNDA0LjcgNzI0LjUgMjA3IDQ3NGEzMiAzMiAwIDAgMC0yNS4xLTEyLjJIMTEyYy02LjcgMC0xMC40IDcuNy02LjMgMTIuOWwyNzMuOSAzNDdjMTIuOCAxNi4yIDM3LjQgMTYuMiA1MC4zIDBsNDg4LjQtNjE4LjljNC4xLTUuMS40LTEyLjgtNi4zLTEyLjh6XCI+PC9wYXRoPjwvc3ZnPmA7XG5jb25zdCBJQ09OX05PID0gYDxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48cGF0aCBkPVwiTTU2My44IDUxMmwyNjIuNS0zMTIuOWM0LjQtNS4yLjctMTMuMS02LjEtMTMuMWgtNzkuOGMtNC43IDAtOS4yIDIuMS0xMi4zIDUuN0w1MTEuNiA0NDkuOCAyOTUuMSAxOTEuN2MtMy0zLjYtNy41LTUuNy0xMi4zLTUuN0gyMDNjLTYuOCAwLTEwLjUgNy45LTYuMSAxMy4xTDQ1OS40IDUxMiAxOTYuOSA4MjQuOUE3Ljk1IDcuOTUgMCAwIDAgMjAzIDgzOGg3OS44YzQuNyAwIDkuMi0yLjEgMTIuMy01LjdsMjE2LjUtMjU4LjEgMjE2LjUgMjU4LjFjMyAzLjYgNy41IDUuNyAxMi4zIDUuN2g3OS44YzYuOCAwIDEwLjUtNy45IDYuMS0xMy4xTDU2My44IDUxMnpcIj48L3BhdGg+PC9zdmc+YDtcbmNvbnN0IENMU19ZRVMgPSBgY2xhc3M9XCJ5bl9feWVzXCJgO1xuY29uc3QgQ0xTX05PID0gYGNsYXNzPVwieW5fX25vXCJgO1xuXG5AUGlwZSh7IG5hbWU6ICd5bicgfSlcbmV4cG9ydCBjbGFzcyBZTlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IGJvb2xlYW4sIHllcz86IHN0cmluZywgbm8/OiBzdHJpbmcsIG1vZGU/OiBZTk1vZGUsIGlzU2FmZUh0bWw6IGJvb2xlYW4gPSB0cnVlKTogU2FmZUh0bWwge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgeWVzID0geWVzIHx8ICfmmK8nO1xuICAgIG5vID0gbm8gfHwgJ+WQpic7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgaHRtbCA9IHZhbHVlXG4gICAgICAgICAgPyBgPGkgJHtDTFNfWUVTfT4ke0lDT05fWUVTfTxzcGFuPiR7eWVzfTwvc3Bhbj48L2k+YFxuICAgICAgICAgIDogYDxpICR7Q0xTX05PfT4ke0lDT05fTk99PHNwYW4+JHtub308L3NwYW4+PC9pPmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGh0bWwgPSB2YWx1ZSA/IGA8aSAke0NMU19ZRVN9PiR7eWVzfTwvaT5gIDogYDxpICR7Q0xTX05PfT4ke25vfTwvaT5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGh0bWwgPSB2YWx1ZSA/IGA8aSAke0NMU19ZRVN9IHRpdGxlPVwiJHt5ZXN9XCI+JHtJQ09OX1lFU308L2k+YCA6IGA8aSAke0NMU19OT30gdGl0bGU9XCIke25vfVwiPiR7SUNPTl9OT308L2k+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBpc1NhZmVIdG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCkgOiBodG1sO1xuICB9XG59XG4iXX0=