/**
 * @fileoverview added by tsickle
 * Generated from: qr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { QRConfig } from './qr.config';
import { QRService } from './qr.service';
var QRComponent = /** @class */ (function () {
    // #endregion
    function QRComponent(cog, srv, cdr) {
        this.srv = srv;
        this.cdr = cdr;
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        Object.assign(this, __assign(__assign({}, new QRConfig()), cog));
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
                    template: " <img class=\"qr__img\" src=\"{{ dataURL }}\" /> ",
                    host: {
                        '[class.qr]': 'true',
                        '[style.height.px]': 'size',
                        '[style.width.px]': 'size',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], QRComponent.prototype, "padding", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDO0lBOEJFLGFBQWE7SUFFYixxQkFBWSxHQUFhLEVBQVUsR0FBYyxFQUFVLEdBQXNCO1FBQTlDLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUFKOUQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFLckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHdCQUFPLElBQUksUUFBUSxFQUFFLEdBQUssR0FBRyxFQUFHLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLG1EQUErQztvQkFDekQsSUFBSSxFQUFFO3dCQUNKLFlBQVksRUFBRSxNQUFNO3dCQUNwQixtQkFBbUIsRUFBRSxNQUFNO3dCQUMzQixrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWZRLFFBQVE7Z0JBQ1IsU0FBUztnQkFWaEIsaUJBQWlCOzs7NkJBOEJoQixLQUFLO2tDQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFFTCxNQUFNOztJQUppQjtRQUFkLFdBQVcsRUFBRTs7Z0RBQWlCO0lBQ2hCO1FBQWQsV0FBVyxFQUFFOzs2Q0FBYztJQTBCdkMsa0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQXRDWSxXQUFXOzs7SUFDdEIsOEJBQWdCOztJQUloQixpQ0FBNEI7O0lBQzVCLHNDQUFpQzs7SUFDakMsaUNBQTRCOztJQUM1QixzQ0FBaUM7O0lBQ2pDLDRCQUF1Qjs7SUFDdkIsMkJBQXNCOztJQUN0Qiw4QkFBd0M7O0lBQ3hDLDJCQUFxQzs7SUFDckMsNEJBQXVCOztJQUV2Qiw2QkFBdUQ7Ozs7O0lBSTVCLDBCQUFzQjs7Ozs7SUFBRSwwQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5pbXBvcnQgeyBRUlNlcnZpY2UgfSBmcm9tICcuL3FyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxcicsXG4gIGV4cG9ydEFzOiAncXInLFxuICB0ZW1wbGF0ZTogYCA8aW1nIGNsYXNzPVwicXJfX2ltZ1wiIHNyYz1cInt7IGRhdGFVUkwgfX1cIiAvPiBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5xcl0nOiAndHJ1ZScsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ3NpemUnLFxuICAgICdbc3R5bGUud2lkdGgucHhdJzogJ3NpemUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFFSQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgZGF0YVVSTDogc3RyaW5nO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgYmFja2dyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCkgZm9yZWdyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCkgbGV2ZWw6IHN0cmluZztcbiAgQElucHV0KCkgbWltZTogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwYWRkaW5nOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihjb2c6IFFSQ29uZmlnLCBwcml2YXRlIHNydjogUVJTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgLi4ubmV3IFFSQ29uZmlnKCksIC4uLmNvZyB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMuc3J2LnJlZnJlc2goe1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIG1pbWU6IHRoaXMubWltZSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZGF0YVVSTCk7XG4gIH1cbn1cbiJdfQ==