import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
export class G2SingleBarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        // #region fields
        this.plusColor = '#40a9ff';
        this.minusColor = '#ff4d4f';
        this.height = 60;
        this.barSize = 30;
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.line = false;
        this.padding = 0;
        this.textStyle = { fontSize: 12, color: '#595959' };
        this.onlyChangeData = (changes) => {
            return Object.keys(changes).length === 1 && !!changes.value;
        };
    }
    // #endregion
    install() {
        const { el, height, padding, textStyle, line, format, theme, min, max, plusColor, minusColor, barSize } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme
        }));
        chart.legend(false);
        chart.axis(false);
        chart.scale({ value: { max, min } });
        chart.tooltip(false);
        chart.coordinate().transpose();
        chart
            .interval()
            .position('1*value')
            .color('value', (val) => (val > 0 ? plusColor : minusColor))
            .size(barSize)
            .label('value', () => ({
            formatter: format,
            style: Object.assign({}, textStyle)
        }));
        if (line) {
            chart.annotation().line({
                start: ['50%', '0%'],
                end: ['50%', '100%'],
                style: {
                    stroke: '#e8e8e8',
                    lineDash: [0, 0]
                }
            });
        }
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, value } = this;
        if (!_chart)
            return;
        _chart.changeData([{ value }]);
    }
}
G2SingleBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-single-bar',
                exportAs: 'g2SingleBar',
                template: ``,
                host: {
                    '[style.height.px]': 'height'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
G2SingleBarComponent.propDecorators = {
    plusColor: [{ type: Input }],
    minusColor: [{ type: Input }],
    height: [{ type: Input }],
    barSize: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    value: [{ type: Input }],
    line: [{ type: Input }],
    format: [{ type: Input }],
    padding: [{ type: Input }],
    textStyle: [{ type: Input }]
};
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "height", void 0);
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "barSize", void 0);
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "min", void 0);
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "max", void 0);
__decorate([
    InputNumber()
], G2SingleBarComponent.prototype, "value", void 0);
__decorate([
    InputBoolean()
], G2SingleBarComponent.prototype, "line", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9zaW5nbGUtYmFyL3NpbmdsZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNNUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBYTdGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxlQUFlO0lBWHpEOztRQW1CRSxpQkFBaUI7UUFFUixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDUixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxLQUFLLENBQUM7UUFFN0IsWUFBTyxHQUErQixDQUFDLENBQUM7UUFDeEMsY0FBUyxHQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7UUE4QzdELG1CQUFjLEdBQUcsQ0FBQyxPQUFzQixFQUFXLEVBQUU7WUFDbkQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDOUQsQ0FBQyxDQUFDO0lBT0osQ0FBQztJQXJEQyxhQUFhO0lBRWIsT0FBTztRQUNMLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFF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QUFDVjtJQUFkLFdBQVcsRUFBRTttREFBVztBQUNUO0lBQWYsWUFBWSxFQUFFO2tEQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgQ2hhcnQgfSBmcm9tICdAYW50di9nMic7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1zaW5nbGUtYmFyJyxcbiAgZXhwb3J0QXM6ICdnMlNpbmdsZUJhcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHMlNpbmdsZUJhckNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYmFyU2l6ZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9taW46IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWF4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZhbHVlOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmU6IEJvb2xlYW5JbnB1dDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHBsdXNDb2xvciA9ICcjNDBhOWZmJztcbiAgQElucHV0KCkgbWludXNDb2xvciA9ICcjZmY0ZDRmJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gNjA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJhclNpemUgPSAzMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWluID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4ID0gMTAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2YWx1ZSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcm1hdDogKHZhbHVlOiBudW1iZXIsIGl0ZW06IE56U2FmZUFueSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IDA7XG4gIEBJbnB1dCgpIHRleHRTdHlsZTogYW55ID0geyBmb250U2l6ZTogMTIsIGNvbG9yOiAnIzU5NTk1OScgfTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIHRleHRTdHlsZSwgbGluZSwgZm9ybWF0LCB0aGVtZSwgbWluLCBtYXgsIHBsdXNDb2xvciwgbWludXNDb2xvciwgYmFyU2l6ZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWVcbiAgICB9KSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC5zY2FsZSh7IHZhbHVlOiB7IG1heCwgbWluIH0gfSk7XG4gICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgY2hhcnQuY29vcmRpbmF0ZSgpLnRyYW5zcG9zZSgpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLnBvc2l0aW9uKCcxKnZhbHVlJylcbiAgICAgIC5jb2xvcigndmFsdWUnLCAodmFsOiBudW1iZXIpID0+ICh2YWwgPiAwID8gcGx1c0NvbG9yIDogbWludXNDb2xvcikpXG4gICAgICAuc2l6ZShiYXJTaXplKVxuICAgICAgLmxhYmVsKCd2YWx1ZScsICgpID0+ICh7XG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIC4uLnRleHRTdHlsZVxuICAgICAgICB9XG4gICAgICB9KSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQuYW5ub3RhdGlvbigpLmxpbmUoe1xuICAgICAgICBzdGFydDogWyc1MCUnLCAnMCUnXSxcbiAgICAgICAgZW5kOiBbJzUwJScsICcxMDAlJ10sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U4ZThlOCcsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZURhdGEoKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgb25seUNoYW5nZURhdGEgPSAoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGggPT09IDEgJiYgISFjaGFuZ2VzLnZhbHVlO1xuICB9O1xuXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGlmICghX2NoYXJ0KSByZXR1cm47XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoW3sgdmFsdWUgfV0pO1xuICB9XG59XG4iXX0=