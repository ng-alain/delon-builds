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
     * @param {?=} isSafeHtml
     * @return {?}
     */
    YNPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @param {?} mode
     * @param {?=} isSafeHtml
     * @return {?}
     */
    function (value, yes, no, mode, isSafeHtml) {
        if (isSafeHtml === void 0) { isSafeHtml = true; }
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
        return isSafeHtml ? this.dom.bypassSecurityTrustHtml(html) : html;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDOztJQUk3RCxRQUFRLEdBQUcsNFRBQWdUOztJQUMzVCxPQUFPLEdBQUcsNmJBQWliOztJQUMzYixPQUFPLEdBQUcsbUJBQWlCOztJQUMzQixNQUFNLEdBQUcsa0JBQWdCO0FBRS9CO0lBRUUsZ0JBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFFekMsMEJBQVM7Ozs7Ozs7O0lBQVQsVUFBVSxLQUFjLEVBQUUsR0FBVyxFQUFFLEVBQVUsRUFBRSxJQUFZLEVBQUUsVUFBaUI7UUFBakIsMkJBQUEsRUFBQSxpQkFBaUI7O1lBQzVFLElBQUksR0FBRyxFQUFFO1FBQ2IsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDakIsRUFBRSxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDZixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssTUFBTTtnQkFDVCxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFNLE9BQU8sU0FBSSxRQUFRLGNBQVMsR0FBRyxnQkFBYSxDQUFDLENBQUMsQ0FBQyxRQUFNLE1BQU0sU0FBSSxPQUFPLGNBQVMsRUFBRSxnQkFBYSxDQUFDO2dCQUNwSCxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQU0sT0FBTyxTQUFJLEdBQUcsU0FBTSxDQUFDLENBQUMsQ0FBQyxRQUFNLE1BQU0sU0FBSSxFQUFFLFNBQU0sQ0FBQztnQkFDckUsTUFBTTtZQUNSO2dCQUNFLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQU0sT0FBTyxpQkFBVyxHQUFHLFdBQUssUUFBUSxTQUFNLENBQUMsQ0FBQyxDQUFDLFFBQU0sTUFBTSxpQkFBVyxFQUFFLFdBQUssT0FBTyxTQUFNLENBQUM7Z0JBQzVHLE1BQU07U0FDVDtRQUNELE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQzs7Z0JBcEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Ozs7Z0JBVFgsWUFBWTs7SUE4QnJCLGFBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxNQUFNOzs7Ozs7SUFDTCxxQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmV4cG9ydCB0eXBlIFlOTW9kZSA9ICdmdWxsJyB8ICdpY29uJyB8ICd0ZXh0JztcblxuY29uc3QgSUNPTl9ZRVMgPSBgPHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNOTEyIDE5MGgtNjkuOWMtOS44IDAtMTkuMSA0LjUtMjUuMSAxMi4yTDQwNC43IDcyNC41IDIwNyA0NzRhMzIgMzIgMCAwIDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44elwiPjwvcGF0aD48L3N2Zz5gO1xuY29uc3QgSUNPTl9OTyA9IGA8c3ZnIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIk01NjMuOCA1MTJsMjYyLjUtMzEyLjljNC40LTUuMi43LTEzLjEtNi4xLTEzLjFoLTc5LjhjLTQuNyAwLTkuMiAyLjEtMTIuMyA1LjdMNTExLjYgNDQ5LjggMjk1LjEgMTkxLjdjLTMtMy42LTcuNS01LjctMTIuMy01LjdIMjAzYy02LjggMC0xMC41IDcuOS02LjEgMTMuMUw0NTkuNCA1MTIgMTk2LjkgODI0LjlBNy45NSA3Ljk1IDAgMCAwIDIwMyA4MzhoNzkuOGM0LjcgMCA5LjItMi4xIDEyLjMtNS43bDIxNi41LTI1OC4xIDIxNi41IDI1OC4xYzMgMy42IDcuNSA1LjcgMTIuMyA1LjdoNzkuOGM2LjggMCAxMC41LTcuOSA2LjEtMTMuMUw1NjMuOCA1MTJ6XCI+PC9wYXRoPjwvc3ZnPmA7XG5jb25zdCBDTFNfWUVTID0gYGNsYXNzPVwieW5fX3llc1wiYDtcbmNvbnN0IENMU19OTyA9IGBjbGFzcz1cInluX19ub1wiYDtcblxuQFBpcGUoeyBuYW1lOiAneW4nIH0pXG5leHBvcnQgY2xhc3MgWU5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBib29sZWFuLCB5ZXM6IHN0cmluZywgbm86IHN0cmluZywgbW9kZTogWU5Nb2RlLCBpc1NhZmVIdG1sID0gdHJ1ZSk6IFNhZmVIdG1sIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIHllcyA9IHllcyB8fCAn5pivJztcbiAgICBubyA9IG5vIHx8ICflkKYnO1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgIGh0bWwgPSB2YWx1ZSA/IGA8aSAke0NMU19ZRVN9PiR7SUNPTl9ZRVN9PHNwYW4+JHt5ZXN9PC9zcGFuPjwvaT5gIDogYDxpICR7Q0xTX05PfT4ke0lDT05fTk99PHNwYW4+JHtub308L3NwYW4+PC9pPmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGh0bWwgPSB2YWx1ZSA/IGA8aSAke0NMU19ZRVN9PiR7eWVzfTwvaT5gIDogYDxpICR7Q0xTX05PfT4ke25vfTwvaT5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGh0bWwgPSB2YWx1ZSA/IGA8aSAke0NMU19ZRVN9IHRpdGxlPVwiJHt5ZXN9XCI+JHtJQ09OX1lFU308L2k+YCA6IGA8aSAke0NMU19OT30gdGl0bGU9XCIke25vfVwiPiR7SUNPTl9OT308L2k+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBpc1NhZmVIdG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCkgOiBodG1sO1xuICB9XG59XG4iXX0=