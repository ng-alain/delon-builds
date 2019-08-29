/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7O0lBSTdELFFBQVEsR0FBRyw0VEFBZ1Q7O0lBQzNULE9BQU8sR0FBRyw2YkFBaWI7O0lBQzNiLE9BQU8sR0FBRyxtQkFBaUI7O0lBQzNCLE1BQU0sR0FBRyxrQkFBZ0I7QUFFL0I7SUFFRSxnQkFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7Ozs7Ozs7O0lBRXpDLDBCQUFTOzs7Ozs7O0lBQVQsVUFBVSxLQUFjLEVBQUUsR0FBVyxFQUFFLEVBQVUsRUFBRSxJQUFZOztZQUN6RCxJQUFJLEdBQUcsRUFBRTtRQUNiLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ2pCLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDO1FBQ2YsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBTSxPQUFPLFNBQUksUUFBUSxjQUFTLEdBQUcsZ0JBQWEsQ0FBQyxDQUFDLENBQUMsUUFBTSxNQUFNLFNBQUksT0FBTyxjQUFTLEVBQUUsZ0JBQWEsQ0FBQztnQkFDcEgsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFNLE9BQU8sU0FBSSxHQUFHLFNBQU0sQ0FBQyxDQUFDLENBQUMsUUFBTSxNQUFNLFNBQUksRUFBRSxTQUFNLENBQUM7Z0JBQ3JFLE1BQU07WUFDUjtnQkFDRSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFNLE9BQU8saUJBQVcsR0FBRyxXQUFLLFFBQVEsU0FBTSxDQUFDLENBQUMsQ0FBQyxRQUFNLE1BQU0saUJBQVcsRUFBRSxXQUFLLE9BQU8sU0FBTSxDQUFDO2dCQUM1RyxNQUFNO1NBQ1Q7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBcEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Ozs7Z0JBVFgsWUFBWTs7SUE4QnJCLGFBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxNQUFNOzs7Ozs7SUFDTCxxQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmV4cG9ydCB0eXBlIFlOTW9kZSA9ICdmdWxsJyB8ICdpY29uJyB8ICd0ZXh0JztcblxuY29uc3QgSUNPTl9ZRVMgPSBgPHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNOTEyIDE5MGgtNjkuOWMtOS44IDAtMTkuMSA0LjUtMjUuMSAxMi4yTDQwNC43IDcyNC41IDIwNyA0NzRhMzIgMzIgMCAwIDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44elwiPjwvcGF0aD48L3N2Zz5gO1xuY29uc3QgSUNPTl9OTyA9IGA8c3ZnIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIk01NjMuOCA1MTJsMjYyLjUtMzEyLjljNC40LTUuMi43LTEzLjEtNi4xLTEzLjFoLTc5LjhjLTQuNyAwLTkuMiAyLjEtMTIuMyA1LjdMNTExLjYgNDQ5LjggMjk1LjEgMTkxLjdjLTMtMy42LTcuNS01LjctMTIuMy01LjdIMjAzYy02LjggMC0xMC41IDcuOS02LjEgMTMuMUw0NTkuNCA1MTIgMTk2LjkgODI0LjlBNy45NSA3Ljk1IDAgMCAwIDIwMyA4MzhoNzkuOGM0LjcgMCA5LjItMi4xIDEyLjMtNS43bDIxNi41LTI1OC4xIDIxNi41IDI1OC4xYzMgMy42IDcuNSA1LjcgMTIuMyA1LjdoNzkuOGM2LjggMCAxMC41LTcuOSA2LjEtMTMuMUw1NjMuOCA1MTJ6XCI+PC9wYXRoPjwvc3ZnPmA7XG5jb25zdCBDTFNfWUVTID0gYGNsYXNzPVwieW5fX3llc1wiYDtcbmNvbnN0IENMU19OTyA9IGBjbGFzcz1cInluX19ub1wiYDtcblxuQFBpcGUoeyBuYW1lOiAneW4nIH0pXG5leHBvcnQgY2xhc3MgWU5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBib29sZWFuLCB5ZXM6IHN0cmluZywgbm86IHN0cmluZywgbW9kZTogWU5Nb2RlKTogU2FmZUh0bWwge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgeWVzID0geWVzIHx8ICfmmK8nO1xuICAgIG5vID0gbm8gfHwgJ+WQpic7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgaHRtbCA9IHZhbHVlID8gYDxpICR7Q0xTX1lFU30+JHtJQ09OX1lFU308c3Bhbj4ke3llc308L3NwYW4+PC9pPmAgOiBgPGkgJHtDTFNfTk99PiR7SUNPTl9OT308c3Bhbj4ke25vfTwvc3Bhbj48L2k+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgaHRtbCA9IHZhbHVlID8gYDxpICR7Q0xTX1lFU30+JHt5ZXN9PC9pPmAgOiBgPGkgJHtDTFNfTk99PiR7bm99PC9pPmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaHRtbCA9IHZhbHVlID8gYDxpICR7Q0xTX1lFU30gdGl0bGU9XCIke3llc31cIj4ke0lDT05fWUVTfTwvaT5gIDogYDxpICR7Q0xTX05PfSB0aXRsZT1cIiR7bm99XCI+JHtJQ09OX05PfTwvaT5gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICB9XG59XG4iXX0=