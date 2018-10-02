/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var NumberWidget = /** @class */ (function (_super) {
    tslib_1.__extends(NumberWidget, _super);
    function NumberWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formatter = function (value) { return value; };
        _this.parser = function (value) { return value; };
        return _this;
    }
    /**
     * @return {?}
     */
    NumberWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this, schema = _a.schema, ui = _a.ui;
        if (typeof schema.minimum !== 'undefined') {
            this.min = schema.exclusiveMinimum ? schema.minimum + 1 : schema.minimum;
        }
        if (typeof schema.maximum !== 'undefined') {
            this.max = schema.exclusiveMaximum ? schema.maximum - 1 : schema.maximum;
        }
        this.step = schema.multipleOf || 1;
        if (schema.type === 'integer') {
            this.min = Math.trunc(this.min);
            this.max = Math.trunc(this.max);
            this.step = Math.trunc(this.step);
        }
        if (ui["prefix"] != null) {
            ui["formatter"] = function (value) { return ui["prefix"] + " " + value; };
            ui["parser"] = function (value) { return value.replace(ui["prefix"] + " ", ''); };
        }
        if (ui["unit"] != null) {
            ui["formatter"] = function (value) { return value + " " + ui["unit"]; };
            ui["parser"] = function (value) { return value.replace(" " + ui["unit"], ''); };
        }
        if (ui["formatter"])
            this.formatter = ui["formatter"];
        if (ui["parser"])
            this.parser = ui["parser"];
    };
    NumberWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-number',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <nz-input-number\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzMin]=\"min\"\n      [nzMax]=\"max\"\n      [nzStep]=\"step\"\n      [nzFormatter]=\"formatter\"\n      [nzParser]=\"parser\"\n      [nzPrecision]=\"ui.precision\"\n      [nzPlaceHolder]=\"ui.placeholder || ''\">\n    </nz-input-number>\n  </sf-item-wrap>",
                    preserveWhitespaces: false
                }] }
    ];
    return NumberWidget;
}(ControlWidget));
export { NumberWidget };
if (false) {
    /** @type {?} */
    NumberWidget.prototype.min;
    /** @type {?} */
    NumberWidget.prototype.max;
    /** @type {?} */
    NumberWidget.prototype.step;
    /** @type {?} */
    NumberWidget.prototype.formatter;
    /** @type {?} */
    NumberWidget.prototype.parser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7O0lBc0JYLHdDQUFhOzs7MEJBSWpDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxFQUFMLENBQUs7dUJBQ2pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxFQUFMLENBQUs7Ozs7OztJQUV2QiwrQkFBUTs7O0lBQVI7UUFDRSxlQUFRLGtCQUFNLEVBQUUsVUFBRSxDQUFVO1FBQzVCLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDMUU7UUFDRCxJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLGNBQVcsSUFBSSxFQUFFO1lBQ3JCLEVBQUUsZ0JBQWEsVUFBQSxLQUFLLElBQUksT0FBRyxFQUFFLG1CQUFXLEtBQU8sRUFBdkIsQ0FBdUIsQ0FBQztZQUNoRCxFQUFFLGFBQVUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFJLEVBQUUsZ0JBQVUsRUFBRSxFQUFFLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztTQUN6RDtRQUNELElBQUksRUFBRSxZQUFTLElBQUksRUFBRTtZQUNuQixFQUFFLGdCQUFhLFVBQUEsS0FBSyxJQUFJLE9BQUcsS0FBSyxTQUFJLEVBQUUsUUFBTyxFQUFyQixDQUFxQixDQUFDO1lBQzlDLEVBQUUsYUFBVSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBSSxFQUFFLFFBQU8sRUFBRSxFQUFFLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztTQUN2RDtRQUNELElBQUksRUFBRTtZQUFZLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxhQUFVLENBQUM7UUFDaEQsSUFBSSxFQUFFO1lBQVMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLFVBQU8sQ0FBQztLQUN4Qzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDRpQkFlTTtvQkFDaEIsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3VCQXRCRDtFQXVCa0MsYUFBYTtTQUFsQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLW51bWJlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG4gICAgPG56LWlucHV0LW51bWJlclxyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxyXG4gICAgICBbbnpNYXhdPVwibWF4XCJcclxuICAgICAgW256U3RlcF09XCJzdGVwXCJcclxuICAgICAgW256Rm9ybWF0dGVyXT1cImZvcm1hdHRlclwiXHJcbiAgICAgIFtuelBhcnNlcl09XCJwYXJzZXJcIlxyXG4gICAgICBbbnpQcmVjaXNpb25dPVwidWkucHJlY2lzaW9uXCJcclxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIgfHwgJydcIj5cclxuICAgIDwvbnotaW5wdXQtbnVtYmVyPlxyXG4gIDwvc2YtaXRlbS13cmFwPmAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxuICBzdGVwOiBudW1iZXI7XHJcbiAgZm9ybWF0dGVyID0gdmFsdWUgPT4gdmFsdWU7XHJcbiAgcGFyc2VyID0gdmFsdWUgPT4gdmFsdWU7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBzY2hlbWEsIHVpIH0gPSB0aGlzO1xyXG4gICAgaWYgKHR5cGVvZiBzY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5taW4gPSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA/IHNjaGVtYS5taW5pbXVtICsgMSA6IHNjaGVtYS5taW5pbXVtO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBzY2hlbWEubWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5tYXggPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA/IHNjaGVtYS5tYXhpbXVtIC0gMSA6IHNjaGVtYS5tYXhpbXVtO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGVwID0gc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcclxuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB7XHJcbiAgICAgIHRoaXMubWluID0gTWF0aC50cnVuYyh0aGlzLm1pbik7XHJcbiAgICAgIHRoaXMubWF4ID0gTWF0aC50cnVuYyh0aGlzLm1heCk7XHJcbiAgICAgIHRoaXMuc3RlcCA9IE1hdGgudHJ1bmModGhpcy5zdGVwKTtcclxuICAgIH1cclxuICAgIGlmICh1aS5wcmVmaXggIT0gbnVsbCkge1xyXG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBgJHt1aS5wcmVmaXh9ICR7dmFsdWV9YDtcclxuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgJHt1aS5wcmVmaXh9IGAsICcnKTtcclxuICAgIH1cclxuICAgIGlmICh1aS51bml0ICE9IG51bGwpIHtcclxuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gYCR7dmFsdWV9ICR7dWkudW5pdH1gO1xyXG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAgJHt1aS51bml0fWAsICcnKTtcclxuICAgIH1cclxuICAgIGlmICh1aS5mb3JtYXR0ZXIpIHRoaXMuZm9ybWF0dGVyID0gdWkuZm9ybWF0dGVyO1xyXG4gICAgaWYgKHVpLnBhcnNlcikgdGhpcy5wYXJzZXIgPSB1aS5wYXJzZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ==