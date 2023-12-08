import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core/outlet";
export class ResultComponent {
    set type(value) {
        this._type = value;
        switch (value) {
            case 'success':
                this._icon = 'check-circle';
                break;
            case 'error':
                this._icon = 'close-circle';
                break;
            default:
                this._icon = value;
                break;
        }
    }
    constructor(directionality, cdr) {
        this.directionality = directionality;
        this.cdr = cdr;
        this.dir$ = this.directionality.change?.pipe(takeUntilDestroyed());
        this._type = '';
        this._icon = '';
        this.dir = 'ltr';
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.dir$.subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ResultComponent, deps: [{ token: i1.Directionality, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: ResultComponent, selector: "result", inputs: { type: "type", title: "title", description: "description", extra: "extra" }, host: { properties: { "class.result": "true", "class.result-rtl": "dir === 'rtl'" } }, exportAs: ["result"], ngImport: i0, template: "<div class=\"result__icon\">\n  <i nz-icon [nzType]=\"_icon\" class=\"result__icon-{{ _type }}\"></i>\n</div>\n<div class=\"result__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n@if (description) {\n  <div class=\"result__desc\">\n    <ng-container *nzStringTemplateOutlet=\"description\">{{ description }}</ng-container>\n  </div>\n}\n@if (extra) {\n  <div class=\"result__extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n}\n<div class=\"result__actions\">\n  <ng-content />\n</div>\n", dependencies: [{ kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ResultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'result', exportAs: 'result', host: {
                        '[class.result]': 'true',
                        '[class.result-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"result__icon\">\n  <i nz-icon [nzType]=\"_icon\" class=\"result__icon-{{ _type }}\"></i>\n</div>\n<div class=\"result__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n@if (description) {\n  <div class=\"result__desc\">\n    <ng-container *nzStringTemplateOutlet=\"description\">{{ description }}</ng-container>\n  </div>\n}\n@if (extra) {\n  <div class=\"result__extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n}\n<div class=\"result__actions\">\n  <ng-content />\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { type: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], extra: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULEtBQUssRUFFTCxRQUFRLEVBRVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQWNoRSxNQUFNLE9BQU8sZUFBZTtJQUkxQixJQUNJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QixNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE1BQU07U0FDVDtJQUNILENBQUM7SUFPRCxZQUNzQixjQUE4QixFQUMxQyxHQUFzQjtRQURWLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMxQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTFCeEIsU0FBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDdEUsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFvQlgsUUFBRyxHQUFjLEtBQUssQ0FBQztJQUtwQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBcENVLGVBQWU7a0dBQWYsZUFBZSxpUEN6QjVCLDRrQkFtQkE7OzJGRE1hLGVBQWU7a0JBWjNCLFNBQVM7K0JBQ0UsUUFBUSxZQUNSLFFBQVEsUUFFWjt3QkFDSixnQkFBZ0IsRUFBRSxNQUFNO3dCQUN4QixvQkFBb0IsRUFBRSxlQUFlO3FCQUN0Qyx1QkFDb0IsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkE0QmxDLFFBQVE7eUVBckJQLElBQUk7c0JBRFAsS0FBSztnQkFnQkcsS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXN1bHQnLFxuICBleHBvcnRBczogJ3Jlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5yZXN1bHRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MucmVzdWx0LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZGlyJCA9IHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKTtcbiAgX3R5cGUgPSAnJztcbiAgX2ljb24gPSAnJztcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjaGVjay1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5faWNvbiA9ICdjbG9zZS1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpciQuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJyZXN1bHRfX2ljb25cIj5cbiAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIl9pY29uXCIgY2xhc3M9XCJyZXN1bHRfX2ljb24te3sgX3R5cGUgfX1cIj48L2k+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyZXN1bHRfX3RpdGxlXCI+XG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbkBpZiAoZGVzY3JpcHRpb24pIHtcbiAgPGRpdiBjbGFzcz1cInJlc3VsdF9fZGVzY1wiPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJkZXNjcmlwdGlvblwiPnt7IGRlc2NyaXB0aW9uIH19PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxufVxuQGlmIChleHRyYSkge1xuICA8ZGl2IGNsYXNzPVwicmVzdWx0X19leHRyYVwiPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJleHRyYVwiPnt7IGV4dHJhIH19PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxufVxuPGRpdiBjbGFzcz1cInJlc3VsdF9fYWN0aW9uc1wiPlxuICA8bmctY29udGVudCAvPlxuPC9kaXY+XG4iXX0=