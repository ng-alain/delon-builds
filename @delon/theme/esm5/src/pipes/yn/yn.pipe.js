/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/yn/yn.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/** @type {?} */
var ICON_YES = "<svg viewBox=\"64 64 896 896\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\"><path d=\"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z\"></path></svg>";
/** @type {?} */
var ICON_NO = "<svg viewBox=\"64 64 896 896\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\"><path d=\"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z\"></path></svg>";
/** @type {?} */
var CLS_YES = "class=\"yn__yes\"";
/** @type {?} */
var CLS_NO = "class=\"yn__no\"";
var YNPipe = /** @class */ (function () {
    function YNPipe(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @param {?} mode
     * @return {?}
     */
    YNPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @param {?} mode
     * @return {?}
     */
    function (value, yes, no, mode) {
        /** @type {?} */
        var html = '';
        yes = yes || '是';
        no = no || '否';
        switch (mode) {
            case 'full':
                html = value ? "<i " + CLS_YES + ">" + ICON_YES + "<span>" + yes + "</span></i>" : "<i " + CLS_NO + ">" + ICON_NO + "<span>" + no + "</span></i>";
                break;
            case 'text':
                html = value ? "<i " + CLS_YES + ">" + yes + "</i>" : "<i " + CLS_NO + ">" + no + "</i>";
                break;
            default:
                html = value ? "<i " + CLS_YES + " title=\"" + yes + "\">" + ICON_YES + "</i>" : "<i " + CLS_NO + " title=\"" + no + "\">" + ICON_NO + "</i>";
                break;
        }
        return this.dom.bypassSecurityTrustHtml(html);
    };
    YNPipe.decorators = [
        { type: Pipe, args: [{ name: 'yn' },] }
    ];
    /** @nocollapse */
    YNPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return YNPipe;
}());
export { YNPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    YNPipe.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDOztJQUk3RCxRQUFRLEdBQUcsNFRBQWdUOztJQUMzVCxPQUFPLEdBQUcsNmJBQWliOztJQUMzYixPQUFPLEdBQUcsbUJBQWlCOztJQUMzQixNQUFNLEdBQUcsa0JBQWdCO0FBRS9CO0lBRUUsZ0JBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDOzs7Ozs7OztJQUV6QywwQkFBUzs7Ozs7OztJQUFULFVBQVUsS0FBYyxFQUFFLEdBQVcsRUFBRSxFQUFVLEVBQUUsSUFBWTs7WUFDekQsSUFBSSxHQUFHLEVBQUU7UUFDYixHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUNqQixFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNmLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxNQUFNO2dCQUNULElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQU0sT0FBTyxTQUFJLFFBQVEsY0FBUyxHQUFHLGdCQUFhLENBQUMsQ0FBQyxDQUFDLFFBQU0sTUFBTSxTQUFJLE9BQU8sY0FBUyxFQUFFLGdCQUFhLENBQUM7Z0JBQ3BILE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBTSxPQUFPLFNBQUksR0FBRyxTQUFNLENBQUMsQ0FBQyxDQUFDLFFBQU0sTUFBTSxTQUFJLEVBQUUsU0FBTSxDQUFDO2dCQUNyRSxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBTSxPQUFPLGlCQUFXLEdBQUcsV0FBSyxRQUFRLFNBQU0sQ0FBQyxDQUFDLENBQUMsUUFBTSxNQUFNLGlCQUFXLEVBQUUsV0FBSyxPQUFPLFNBQU0sQ0FBQztnQkFDNUcsTUFBTTtTQUNUO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQXBCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFOzs7O2dCQVRYLFlBQVk7O0lBOEJyQixhQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksTUFBTTs7Ozs7O0lBQ0wscUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5leHBvcnQgdHlwZSBZTk1vZGUgPSAnZnVsbCcgfCAnaWNvbicgfCAndGV4dCc7XG5cbmNvbnN0IElDT05fWUVTID0gYDxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48cGF0aCBkPVwiTTkxMiAxOTBoLTY5LjljLTkuOCAwLTE5LjEgNC41LTI1LjEgMTIuMkw0MDQuNyA3MjQuNSAyMDcgNDc0YTMyIDMyIDAgMCAwLTI1LjEtMTIuMkgxMTJjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45bDI3My45IDM0N2MxMi44IDE2LjIgMzcuNCAxNi4yIDUwLjMgMGw0ODguNC02MTguOWM0LjEtNS4xLjQtMTIuOC02LjMtMTIuOHpcIj48L3BhdGg+PC9zdmc+YDtcbmNvbnN0IElDT05fTk8gPSBgPHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNNTYzLjggNTEybDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyelwiPjwvcGF0aD48L3N2Zz5gO1xuY29uc3QgQ0xTX1lFUyA9IGBjbGFzcz1cInluX195ZXNcImA7XG5jb25zdCBDTFNfTk8gPSBgY2xhc3M9XCJ5bl9fbm9cImA7XG5cbkBQaXBlKHsgbmFtZTogJ3luJyB9KVxuZXhwb3J0IGNsYXNzIFlOUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbiwgeWVzOiBzdHJpbmcsIG5vOiBzdHJpbmcsIG1vZGU6IFlOTW9kZSk6IFNhZmVIdG1sIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIHllcyA9IHllcyB8fCAn5pivJztcbiAgICBubyA9IG5vIHx8ICflkKYnO1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIGh0bWwgPSB2YWx1ZSA/IGA8aSAke0NMU19ZRVN9PiR7SUNPTl9ZRVN9PHNwYW4+JHt5ZXN9PC9zcGFuPjwvaT5gIDogYDxpICR7Q0xTX05PfT4ke0lDT05fTk99PHNwYW4+JHtub308L3NwYW4+PC9pPmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGh0bWwgPSB2YWx1ZSA/IGA8aSAke0NMU19ZRVN9PiR7eWVzfTwvaT5gIDogYDxpICR7Q0xTX05PfT4ke25vfTwvaT5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGh0bWwgPSB2YWx1ZSA/IGA8aSAke0NMU19ZRVN9IHRpdGxlPVwiJHt5ZXN9XCI+JHtJQ09OX1lFU308L2k+YCA6IGA8aSAke0NMU19OT30gdGl0bGU9XCIke25vfVwiPiR7SUNPTl9OT308L2k+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgfVxufVxuIl19