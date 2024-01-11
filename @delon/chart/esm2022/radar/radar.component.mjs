import { __decorate } from "tslib";
import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/grid";
export class G2RadarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.legendData = [];
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
        this.data = [];
        this.colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
        this.clickItem = new EventEmitter();
    }
    // #endregion
    getHeight() {
        return this.height - (this.hasLegend ? 80 : 22);
    }
    install() {
        const { node, padding, theme, tickCount } = this;
        const chart = (this._chart = new this.winG2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme
        }));
        chart.coordinate('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            label: {
                offset: 8
            },
            grid: {
                line: {
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0]
                    }
                }
            }
        });
        chart.axis('value', {
            grid: {
                line: {
                    type: 'polygon',
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0]
                    }
                }
            }
        });
        chart.scale({
            value: {
                min: 0,
                tickCount
            }
        });
        chart.filter('name', (name) => {
            const legendItem = this.legendData.find(w => w.name === name);
            return legendItem ? legendItem.checked !== false : true;
        });
        chart.line().position('label*value').color('name', this.colors);
        chart.point().position('label*value').shape('circle').size(3);
        chart.on(`point:click`, (ev) => {
            this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        _chart.changeData(data);
        this.ngZone.run(() => this.genLegend());
    }
    genLegend() {
        const { hasLegend, cdr, _chart } = this;
        if (!hasLegend)
            return;
        this.legendData = _chart.geometries[0].dataArray.map(item => {
            const origin = item[0]._origin;
            const result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce((p, n) => p + n._origin.value, 0)
            };
            return result;
        });
        cdr.detectChanges();
    }
    _click(i) {
        const { legendData, _chart } = this;
        legendData[i].checked = !legendData[i].checked;
        _chart.render(true);
    }
    onChanges() {
        this.legendData.forEach(i => (i.checked = true));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2RadarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: G2RadarComponent, isStandalone: true, selector: "g2-radar", inputs: { title: "title", height: "height", padding: "padding", hasLegend: "hasLegend", tickCount: "tickCount", data: "data", colors: "colors" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height", "class.g2-radar": "true" } }, exportAs: ["g2Radar"], usesInheritance: true, ngImport: i0, template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n@if (hasLegend) {\n  <div nz-row class=\"g2-radar__legend\">\n    @for (i of legendData; track $index) {\n      <div nz-col [nzSpan]=\"24 / legendData.length\" (click)=\"_click($index)\" class=\"g2-radar__legend-item\">\n        <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{ 'background-color': !i.checked ? '#aaa' : i.color }\"></i>\n        {{ i.name }}\n        <h6 class=\"g2-radar__legend-title\">{{ i.value }}</h6>\n      </div>\n    }\n  </div>\n}\n", dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "ngmodule", type: NzGridModule }, { kind: "directive", type: i1.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i1.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], G2RadarComponent.prototype, "height", void 0);
__decorate([
    InputBoolean()
], G2RadarComponent.prototype, "hasLegend", void 0);
__decorate([
    InputNumber()
], G2RadarComponent.prototype, "tickCount", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2RadarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-radar', exportAs: 'g2Radar', host: {
                        '[style.height.px]': 'height',
                        '[class.g2-radar]': 'true'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzGridModule, NgStyle], template: "@if (!loaded) {\n  <nz-skeleton />\n}\n<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n@if (hasLegend) {\n  <div nz-row class=\"g2-radar__legend\">\n    @for (i of legendData; track $index) {\n      <div nz-col [nzSpan]=\"24 / legendData.length\" (click)=\"_click($index)\" class=\"g2-radar__legend-item\">\n        <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{ 'background-color': !i.checked ? '#aaa' : i.color }\"></i>\n        {{ i.name }}\n        <h6 class=\"g2-radar__legend-title\">{{ i.value }}</h6>\n      </div>\n    }\n  </div>\n}\n" }]
        }], propDecorators: { title: [{
                type: Input
            }], height: [{
                type: Input
            }], padding: [{
                type: Input
            }], hasLegend: [{
                type: Input
            }], tickCount: [{
                type: Input
            }], data: [{
                type: Input
            }], colors: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcmFkYXIvcmFkYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcmFkYXIvcmFkYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBNEI3RCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBZTtJQWRyRDs7UUFtQkUsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFLTCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFlBQU8sR0FBK0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0IsU0FBSSxHQUFrQixFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUs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Z0JBQ2tCLE1BQU07c0JBQTdCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNtQixTQUFTO3NCQUFqQyxLQUFLO2dCQUNrQixTQUFTO3NCQUFoQyxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ2EsU0FBUztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgQ2hhcnQsIEV2ZW50IH0gZnJvbSAnQGFudHYvZzInO1xuXG5pbXBvcnQgeyBHMkJhc2VDb21wb25lbnQgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56R3JpZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XG5pbXBvcnQgeyBOelNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9za2VsZXRvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJSYWRhckRhdGEge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMlJhZGFyQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJSYWRhckRhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcmFkYXInLFxuICBleHBvcnRBczogJ2cyUmFkYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkYXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gICAgJ1tjbGFzcy5nMi1yYWRhcl0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTnpTa2VsZXRvbkNvbXBvbmVudCwgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSwgTnpHcmlkTW9kdWxlLCBOZ1N0eWxlXVxufSlcbmV4cG9ydCBjbGFzcyBHMlJhZGFyQ29tcG9uZW50IGV4dGVuZHMgRzJCYXNlQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNMZWdlbmQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RpY2tDb3VudDogTnVtYmVySW5wdXQ7XG5cbiAgbGVnZW5kRGF0YTogTnpTYWZlQW55W10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFs0NCwgMzAsIDE2LCAzMF07XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0aWNrQ291bnQgPSA0O1xuICBASW5wdXQoKSBkYXRhOiBHMlJhZGFyRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9ycyA9IFsnIzE4OTBGRicsICcjRkFDQzE0JywgJyMyRkMyNUInLCAnIzg1NDNFMCcsICcjRjA0ODY0JywgJyMxM0MyQzInLCAnI2ZhOGMxNicsICcjYTBkOTExJ107XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyUmFkYXJDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC0gKHRoaXMuaGFzTGVnZW5kID8gODAgOiAyMik7XG4gIH1cblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbm9kZSwgcGFkZGluZywgdGhlbWUsIHRpY2tDb3VudCB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNoYXJ0OiBDaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyB0aGlzLndpbkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZVxuICAgIH0pKTtcblxuICAgIGNoYXJ0LmNvb3JkaW5hdGUoJ3BvbGFyJyk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKCdsYWJlbCcsIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBsYWJlbDoge1xuICAgICAgICBvZmZzZXQ6IDhcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBncmlkOiB7XG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICB0eXBlOiAncG9seWdvbicsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgbGluZURhc2g6IFswLCAwXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNoYXJ0LnNjYWxlKHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGlja0NvdW50XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2hhcnQuZmlsdGVyKCduYW1lJywgKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbGVnZW5kSXRlbSA9IHRoaXMubGVnZW5kRGF0YS5maW5kKHcgPT4gdy5uYW1lID09PSBuYW1lKTtcbiAgICAgIHJldHVybiBsZWdlbmRJdGVtID8gbGVnZW5kSXRlbS5jaGVja2VkICE9PSBmYWxzZSA6IHRydWU7XG4gICAgfSk7XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ2xhYmVsKnZhbHVlJykuY29sb3IoJ25hbWUnLCB0aGlzLmNvbG9ycyk7XG4gICAgY2hhcnQucG9pbnQoKS5wb3NpdGlvbignbGFiZWwqdmFsdWUnKS5zaGFwZSgnY2lyY2xlJykuc2l6ZSgzKTtcblxuICAgIGNoYXJ0Lm9uKGBwb2ludDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogZXYuZGF0YT8uZGF0YSwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWFkeS5uZXh0KGNoYXJ0KTtcblxuICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBjaGFuZ2VEYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBkYXRhIH0gPSB0aGlzO1xuICAgIGlmICghX2NoYXJ0IHx8ICFBcnJheS5pc0FycmF5KGRhdGEpIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICBfY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcblxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmdlbkxlZ2VuZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGVnZW5kKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaGFzTGVnZW5kLCBjZHIsIF9jaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gX2NoYXJ0Lmdlb21ldHJpZXNbMF0uZGF0YUFycmF5Lm1hcChpdGVtID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgIGNvbG9yOiBpdGVtWzBdLmNvbG9yLFxuICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICB2YWx1ZTogaXRlbS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLl9vcmlnaW4udmFsdWUsIDApXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxlZ2VuZERhdGEsIF9jaGFydCB9ID0gdGhpcztcbiAgICBsZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhbGVnZW5kRGF0YVtpXS5jaGVja2VkO1xuICAgIF9jaGFydC5yZW5kZXIodHJ1ZSk7XG4gIH1cblxuICBvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sZWdlbmREYXRhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gdHJ1ZSkpO1xuICB9XG59XG4iLCJAaWYgKCFsb2FkZWQpIHtcbiAgPG56LXNrZWxldG9uIC8+XG59XG48bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj5cbiAgPGg0Pnt7IHRpdGxlIH19PC9oND5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuQGlmIChoYXNMZWdlbmQpIHtcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJnMi1yYWRhcl9fbGVnZW5kXCI+XG4gICAgQGZvciAoaSBvZiBsZWdlbmREYXRhOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiMjQgLyBsZWdlbmREYXRhLmxlbmd0aFwiIChjbGljayk9XCJfY2xpY2soJGluZGV4KVwiIGNsYXNzPVwiZzItcmFkYXJfX2xlZ2VuZC1pdGVtXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZzItcmFkYXJfX2xlZ2VuZC1kb3RcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogIWkuY2hlY2tlZCA/ICcjYWFhJyA6IGkuY29sb3IgfVwiPjwvaT5cbiAgICAgICAge3sgaS5uYW1lIH19XG4gICAgICAgIDxoNiBjbGFzcz1cImcyLXJhZGFyX19sZWdlbmQtdGl0bGVcIj57eyBpLnZhbHVlIH19PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgPC9kaXY+XG59XG4iXX0=