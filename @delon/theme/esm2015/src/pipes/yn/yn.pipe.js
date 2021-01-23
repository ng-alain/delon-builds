/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/yn/yn.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/** @type {?} */
const ICON_YES = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>`;
/** @type {?} */
const ICON_NO = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>`;
/** @type {?} */
const CLS_YES = `class="yn__yes"`;
/** @type {?} */
const CLS_NO = `class="yn__no"`;
export class YNPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} value
     * @param {?=} yes
     * @param {?=} no
     * @param {?=} mode
     * @param {?=} isSafeHtml
     * @return {?}
     */
    transform(value, yes, no, mode, isSafeHtml = true) {
        /** @type {?} */
        let html = '';
        yes = yes || '是';
        no = no || '否';
        switch (mode) {
            case 'full':
                html = value ? `<i ${CLS_YES}>${ICON_YES}<span>${yes}</span></i>` : `<i ${CLS_NO}>${ICON_NO}<span>${no}</span></i>`;
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
}
YNPipe.decorators = [
    { type: Pipe, args: [{ name: 'yn' },] }
];
/** @nocollapse */
YNPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    YNPipe.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDOztNQUk3RCxRQUFRLEdBQUcsZ1RBQWdUOztNQUMzVCxPQUFPLEdBQUcsaWJBQWliOztNQUMzYixPQUFPLEdBQUcsaUJBQWlCOztNQUMzQixNQUFNLEdBQUcsZ0JBQWdCO0FBRy9CLE1BQU0sT0FBTyxNQUFNOzs7O0lBQ2pCLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFFekMsU0FBUyxDQUFDLEtBQWMsRUFBRSxHQUFZLEVBQUUsRUFBVyxFQUFFLElBQWEsRUFBRSxhQUFzQixJQUFJOztZQUN4RixJQUFJLEdBQUcsRUFBRTtRQUNiLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ2pCLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDO1FBQ2YsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLElBQUksUUFBUSxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxPQUFPLFNBQVMsRUFBRSxhQUFhLENBQUM7Z0JBQ3BILE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxJQUFJLEVBQUUsTUFBTSxDQUFDO2dCQUNyRSxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxPQUFPLFdBQVcsR0FBRyxLQUFLLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sV0FBVyxFQUFFLEtBQUssT0FBTyxNQUFNLENBQUM7Z0JBQzVHLE1BQU07U0FDVDtRQUNELE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQzs7O1lBcEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Ozs7WUFUWCxZQUFZOzs7Ozs7O0lBV1AscUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5leHBvcnQgdHlwZSBZTk1vZGUgPSAnZnVsbCcgfCAnaWNvbicgfCAndGV4dCc7XG5cbmNvbnN0IElDT05fWUVTID0gYDxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48cGF0aCBkPVwiTTkxMiAxOTBoLTY5LjljLTkuOCAwLTE5LjEgNC41LTI1LjEgMTIuMkw0MDQuNyA3MjQuNSAyMDcgNDc0YTMyIDMyIDAgMCAwLTI1LjEtMTIuMkgxMTJjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45bDI3My45IDM0N2MxMi44IDE2LjIgMzcuNCAxNi4yIDUwLjMgMGw0ODguNC02MTguOWM0LjEtNS4xLjQtMTIuOC02LjMtMTIuOHpcIj48L3BhdGg+PC9zdmc+YDtcbmNvbnN0IElDT05fTk8gPSBgPHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNNTYzLjggNTEybDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyelwiPjwvcGF0aD48L3N2Zz5gO1xuY29uc3QgQ0xTX1lFUyA9IGBjbGFzcz1cInluX195ZXNcImA7XG5jb25zdCBDTFNfTk8gPSBgY2xhc3M9XCJ5bl9fbm9cImA7XG5cbkBQaXBlKHsgbmFtZTogJ3luJyB9KVxuZXhwb3J0IGNsYXNzIFlOUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbiwgeWVzPzogc3RyaW5nLCBubz86IHN0cmluZywgbW9kZT86IFlOTW9kZSwgaXNTYWZlSHRtbDogYm9vbGVhbiA9IHRydWUpOiBTYWZlSHRtbCB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICB5ZXMgPSB5ZXMgfHwgJ+aYryc7XG4gICAgbm8gPSBubyB8fCAn5ZCmJztcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICBodG1sID0gdmFsdWUgPyBgPGkgJHtDTFNfWUVTfT4ke0lDT05fWUVTfTxzcGFuPiR7eWVzfTwvc3Bhbj48L2k+YCA6IGA8aSAke0NMU19OT30+JHtJQ09OX05PfTxzcGFuPiR7bm99PC9zcGFuPjwvaT5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBodG1sID0gdmFsdWUgPyBgPGkgJHtDTFNfWUVTfT4ke3llc308L2k+YCA6IGA8aSAke0NMU19OT30+JHtub308L2k+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBodG1sID0gdmFsdWUgPyBgPGkgJHtDTFNfWUVTfSB0aXRsZT1cIiR7eWVzfVwiPiR7SUNPTl9ZRVN9PC9pPmAgOiBgPGkgJHtDTFNfTk99IHRpdGxlPVwiJHtub31cIj4ke0lDT05fTk99PC9pPmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNTYWZlSHRtbCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpIDogaHRtbDtcbiAgfVxufVxuIl19