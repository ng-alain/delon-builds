/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/yn/yn.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} yes
     * @param {?} no
     * @param {?} mode
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDOztNQUk3RCxRQUFRLEdBQUcsZ1RBQWdUOztNQUMzVCxPQUFPLEdBQUcsaWJBQWliOztNQUMzYixPQUFPLEdBQUcsaUJBQWlCOztNQUMzQixNQUFNLEdBQUcsZ0JBQWdCO0FBRy9CLE1BQU0sT0FBTyxNQUFNOzs7O0lBQ2pCLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFFekMsU0FBUyxDQUFDLEtBQWMsRUFBRSxHQUFXLEVBQUUsRUFBVSxFQUFFLElBQVksRUFBRSxVQUFVLEdBQUcsSUFBSTs7WUFDNUUsSUFBSSxHQUFHLEVBQUU7UUFDYixHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUNqQixFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNmLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxNQUFNO2dCQUNULElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxJQUFJLFFBQVEsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFNLElBQUksT0FBTyxTQUFTLEVBQUUsYUFBYSxDQUFDO2dCQUNwSCxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxFQUFFLE1BQU0sQ0FBQztnQkFDckUsTUFBTTtZQUNSO2dCQUNFLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxXQUFXLEdBQUcsS0FBSyxRQUFRLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFNLFdBQVcsRUFBRSxLQUFLLE9BQU8sTUFBTSxDQUFDO2dCQUM1RyxNQUFNO1NBQ1Q7UUFDRCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BFLENBQUM7OztZQXBCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFOzs7O1lBVFgsWUFBWTs7Ozs7OztJQVdQLHFCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZXhwb3J0IHR5cGUgWU5Nb2RlID0gJ2Z1bGwnIHwgJ2ljb24nIHwgJ3RleHQnO1xuXG5jb25zdCBJQ09OX1lFUyA9IGA8c3ZnIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIk05MTIgMTkwaC02OS45Yy05LjggMC0xOS4xIDQuNS0yNS4xIDEyLjJMNDA0LjcgNzI0LjUgMjA3IDQ3NGEzMiAzMiAwIDAgMC0yNS4xLTEyLjJIMTEyYy02LjcgMC0xMC40IDcuNy02LjMgMTIuOWwyNzMuOSAzNDdjMTIuOCAxNi4yIDM3LjQgMTYuMiA1MC4zIDBsNDg4LjQtNjE4LjljNC4xLTUuMS40LTEyLjgtNi4zLTEyLjh6XCI+PC9wYXRoPjwvc3ZnPmA7XG5jb25zdCBJQ09OX05PID0gYDxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48cGF0aCBkPVwiTTU2My44IDUxMmwyNjIuNS0zMTIuOWM0LjQtNS4yLjctMTMuMS02LjEtMTMuMWgtNzkuOGMtNC43IDAtOS4yIDIuMS0xMi4zIDUuN0w1MTEuNiA0NDkuOCAyOTUuMSAxOTEuN2MtMy0zLjYtNy41LTUuNy0xMi4zLTUuN0gyMDNjLTYuOCAwLTEwLjUgNy45LTYuMSAxMy4xTDQ1OS40IDUxMiAxOTYuOSA4MjQuOUE3Ljk1IDcuOTUgMCAwIDAgMjAzIDgzOGg3OS44YzQuNyAwIDkuMi0yLjEgMTIuMy01LjdsMjE2LjUtMjU4LjEgMjE2LjUgMjU4LjFjMyAzLjYgNy41IDUuNyAxMi4zIDUuN2g3OS44YzYuOCAwIDEwLjUtNy45IDYuMS0xMy4xTDU2My44IDUxMnpcIj48L3BhdGg+PC9zdmc+YDtcbmNvbnN0IENMU19ZRVMgPSBgY2xhc3M9XCJ5bl9feWVzXCJgO1xuY29uc3QgQ0xTX05PID0gYGNsYXNzPVwieW5fX25vXCJgO1xuXG5AUGlwZSh7IG5hbWU6ICd5bicgfSlcbmV4cG9ydCBjbGFzcyBZTlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IGJvb2xlYW4sIHllczogc3RyaW5nLCBubzogc3RyaW5nLCBtb2RlOiBZTk1vZGUsIGlzU2FmZUh0bWwgPSB0cnVlKTogU2FmZUh0bWwge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgeWVzID0geWVzIHx8ICfmmK8nO1xuICAgIG5vID0gbm8gfHwgJ+WQpic7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgaHRtbCA9IHZhbHVlID8gYDxpICR7Q0xTX1lFU30+JHtJQ09OX1lFU308c3Bhbj4ke3llc308L3NwYW4+PC9pPmAgOiBgPGkgJHtDTFNfTk99PiR7SUNPTl9OT308c3Bhbj4ke25vfTwvc3Bhbj48L2k+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgaHRtbCA9IHZhbHVlID8gYDxpICR7Q0xTX1lFU30+JHt5ZXN9PC9pPmAgOiBgPGkgJHtDTFNfTk99PiR7bm99PC9pPmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaHRtbCA9IHZhbHVlID8gYDxpICR7Q0xTX1lFU30gdGl0bGU9XCIke3llc31cIj4ke0lDT05fWUVTfTwvaT5gIDogYDxpICR7Q0xTX05PfSB0aXRsZT1cIiR7bm99XCI+JHtJQ09OX05PfTwvaT5gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzU2FmZUh0bWwgPyB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKSA6IGh0bWw7XG4gIH1cbn1cbiJdfQ==