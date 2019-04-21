/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { QRConfig } from './qr.config';
import { QRService } from './qr.service';
var QRComponent = /** @class */ (function () {
    // #endregion
    function QRComponent(cog, srv, cdr) {
        this.srv = srv;
        this.cdr = cdr;
        this.change = new EventEmitter();
        Object.assign(this, tslib_1.__assign({}, new QRConfig(), cog));
    }
    /**
     * @return {?}
     */
    QRComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.dataURL = this.srv.refresh({
            background: this.background,
            backgroundAlpha: this.backgroundAlpha,
            foreground: this.foreground,
            foregroundAlpha: this.foregroundAlpha,
            level: this.level,
            mime: this.mime,
            padding: this.padding,
            size: this.size,
            value: this.value,
        });
        this.cdr.detectChanges();
        this.change.emit(this.dataURL);
    };
    QRComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qr',
                    exportAs: 'qr',
                    template: "\n    <img class=\"qr__img\" src=\"{{ dataURL }}\" />\n  ",
                    host: {
                        '[class.qr]': 'true',
                        '[style.height.px]': 'size',
                        '[style.width.px]': 'size',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    QRComponent.ctorParameters = function () { return [
        { type: QRConfig },
        { type: QRService },
        { type: ChangeDetectorRef }
    ]; };
    QRComponent.propDecorators = {
        background: [{ type: Input }],
        backgroundAlpha: [{ type: Input }],
        foreground: [{ type: Input }],
        foregroundAlpha: [{ type: Input }],
        level: [{ type: Input }],
        mime: [{ type: Input }],
        padding: [{ type: Input }],
        size: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], QRComponent.prototype, "padding", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], QRComponent.prototype, "size", void 0);
    return QRComponent;
}());
export { QRComponent };
if (false) {
    /** @type {?} */
    QRComponent.prototype.dataURL;
    /** @type {?} */
    QRComponent.prototype.background;
    /** @type {?} */
    QRComponent.prototype.backgroundAlpha;
    /** @type {?} */
    QRComponent.prototype.foreground;
    /** @type {?} */
    QRComponent.prototype.foregroundAlpha;
    /** @type {?} */
    QRComponent.prototype.level;
    /** @type {?} */
    QRComponent.prototype.mime;
    /** @type {?} */
    QRComponent.prototype.padding;
    /** @type {?} */
    QRComponent.prototype.size;
    /** @type {?} */
    QRComponent.prototype.value;
    /** @type {?} */
    QRComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQTZCRSxhQUFhO0lBRWIscUJBQVksR0FBYSxFQUFVLEdBQWMsRUFBVSxHQUFzQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFKOUQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFLckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHVCQUFPLElBQUksUUFBUSxFQUFFLEVBQUssR0FBRyxFQUFHLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLDJEQUVUO29CQUNELElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsTUFBTTt3QkFDcEIsbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0Isa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWZRLFFBQVE7Z0JBQ1IsU0FBUztnQkFWaEIsaUJBQWlCOzs7NkJBOEJoQixLQUFLO2tDQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQUhpQjtRQUFkLFdBQVcsRUFBRTs7Z0RBQWlCO0lBQ2hCO1FBQWQsV0FBVyxFQUFFOzs2Q0FBYztJQXlCdkMsa0JBQUM7Q0FBQSxBQWxERCxJQWtEQztTQXJDWSxXQUFXOzs7SUFDdEIsOEJBQWdCOztJQUloQixpQ0FBNEI7O0lBQzVCLHNDQUFpQzs7SUFDakMsaUNBQTRCOztJQUM1QixzQ0FBaUM7O0lBQ2pDLDRCQUF1Qjs7SUFDdkIsMkJBQXNCOztJQUN0Qiw4QkFBd0M7O0lBQ3hDLDJCQUFxQzs7SUFDckMsNEJBQXVCOztJQUN2Qiw2QkFBdUQ7Ozs7O0lBSTVCLDBCQUFzQjs7Ozs7SUFBRSwwQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xuaW1wb3J0IHsgUVJTZXJ2aWNlIH0gZnJvbSAnLi9xci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXInLFxuICBleHBvcnRBczogJ3FyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW1nIGNsYXNzPVwicXJfX2ltZ1wiIHNyYz1cInt7IGRhdGFVUkwgfX1cIiAvPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5xcl0nOiAndHJ1ZScsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ3NpemUnLFxuICAgICdbc3R5bGUud2lkdGgucHhdJzogJ3NpemUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBkYXRhVVJMOiBzdHJpbmc7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRBbHBoYTogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xuICBASW5wdXQoKSBsZXZlbDogc3RyaW5nO1xuICBASW5wdXQoKSBtaW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBhZGRpbmc6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKGNvZzogUVJDb25maWcsIHByaXZhdGUgc3J2OiBRUlNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgUVJDb25maWcoKSwgLi4uY29nIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhVVJMID0gdGhpcy5zcnYucmVmcmVzaCh7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgbWltZTogdGhpcy5taW1lLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgfVxufVxuIl19