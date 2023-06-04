import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { yn } from '@delon/theme';
import { formatDate } from '@delon/util/date-time';
import { formatMask } from '@delon/util/format';
import { deepMerge } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@delon/util/format";
import * as i4 from "@angular/platform-browser";
class CellService {
    constructor(configSrv, nzI18n, currency, dom) {
        this.nzI18n = nzI18n;
        this.currency = currency;
        this.dom = dom;
        this.widgets = {
            date: {
                type: 'fn',
                ref: (value, opt) => {
                    return { text: formatDate(value, opt.date.format, this.nzI18n.getDateLocale()) };
                }
            },
            mega: {
                type: 'fn',
                ref: (value, opt) => {
                    const res = this.currency.mega(value, opt.mega);
                    return { text: res.value, unit: res.unitI18n };
                }
            },
            currency: {
                type: 'fn',
                ref: (value, opt) => {
                    return { text: this.currency.format(value, opt.currency) };
                }
            },
            cny: {
                type: 'fn',
                ref: (value, opt) => {
                    return { text: this.currency.cny(value, opt.cny) };
                }
            },
            boolean: {
                type: 'fn',
                ref: (value, opt) => {
                    return { text: this.dom.bypassSecurityTrustHtml(yn(value, opt.boolean)) };
                }
            },
            img: {
                type: 'fn',
                ref: value => {
                    return { text: Array.isArray(value) ? value : [value] };
                }
            }
        };
        this.globalOptions = configSrv.merge('cell', {
            date: { format: 'yyyy-MM-dd HH:mm:ss' },
            img: { size: 32, big: true }
        });
    }
    registerWidget(key, widget) {
        this.widgets[key] = { type: 'widget', ref: widget };
    }
    getWidget(key) {
        return this.widgets[key];
    }
    genType(value, options) {
        if (options.type != null)
            return options.type;
        const typeOf = typeof value;
        // When is timestamp
        if (typeOf === 'number' && /^[0-9]{13}$/g.test(value))
            return 'date';
        if (value instanceof Date || options.date != null)
            return 'date';
        // Auto detection
        if (options.widget != null)
            return 'widget';
        else if (options.mega != null)
            return 'mega';
        else if (options.currency != null)
            return 'currency';
        else if (options.cny != null)
            return 'cny';
        else if (options.img != null)
            return 'img';
        else if (options.link != null)
            return 'link';
        else if (options.html != null)
            return 'html';
        else if (options.badge != null)
            return 'badge';
        else if (options.tag != null)
            return 'tag';
        else if (options.checkbox != null)
            return 'checkbox';
        else if (options.radio != null)
            return 'radio';
        else if (typeOf === 'number')
            return 'number';
        else if (typeOf === 'boolean' || options.boolean != null)
            return 'boolean';
        else
            return 'string';
    }
    fixOptions(options) {
        return deepMerge({}, this.globalOptions, options);
    }
    get(value, options) {
        const type = this.genType(value, { ...options });
        const opt = this.fixOptions(options);
        opt.type = type;
        let res = {
            result: typeof value === 'object' ? value : { text: value == null ? '' : `${value}` },
            options: opt
        };
        const widget = this.widgets[type];
        if (widget?.type === 'fn') {
            res.result = widget.ref(value, opt);
        }
        return (typeof value === 'function' ? value(value, opt) : of(res.result)).pipe(map(text => {
            res.result = text;
            switch (type) {
                case 'badge':
                    res.result = { color: 'default', ...(opt.badge?.data ?? {})[value] };
                    break;
                case 'tag':
                    res.result = (opt.tag?.data ?? {})[value];
                    break;
                case 'html':
                    res.safeHtml = opt.html?.safe;
                    break;
            }
            if (opt.mask != null) {
                res.result.text = formatMask(res.result.text, opt.mask);
            }
            return res;
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellService, deps: [{ token: i1.AlainConfigService }, { token: i2.NzI18nService }, { token: i3.CurrencyService }, { token: i4.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellService, providedIn: 'root' }); }
}
export { CellService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: i2.NzI18nService }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2NlbGwvY2VsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLEdBQUcsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFtQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQWE5QyxNQUNhLFdBQVc7SUEwQ3RCLFlBQ0UsU0FBNkIsRUFDckIsTUFBcUIsRUFDckIsUUFBeUIsRUFDekIsR0FBaUI7UUFGakIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBNUNuQixZQUFPLEdBQWtDO1lBQy9DLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSTtnQkFDVixHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ2xCLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQWUsRUFBRSxHQUFHLENBQUMsSUFBSyxDQUFDLE1BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDL0YsQ0FBQzthQUNGO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDbEIsTUFBTSxHQUFHLEdBQUcs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SSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQWUsQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO29CQUM5QixNQUFNO2FBQ1Q7WUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs4R0E3SFUsV0FBVztrSEFBWCxXQUFXLGNBREUsTUFBTTs7U0FDbkIsV0FBVzsyRkFBWCxXQUFXO2tCQUR2QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgbWFwLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB5biB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNlbGxDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSwgZm9ybWF0TWFzayB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuaW1wb3J0IHR5cGUge1xuICBDZWxsRnVWYWx1ZSxcbiAgQ2VsbE9wdGlvbnMsXG4gIENlbGxUZXh0UmVzdWx0LFxuICBDZWxsVGV4dFVuaXQsXG4gIENlbGxUeXBlLFxuICBDZWxsV2lkZ2V0LFxuICBDZWxsV2lkZ2V0Rm5cbn0gZnJvbSAnLi9jZWxsLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDZWxsU2VydmljZSB7XG4gIHByaXZhdGUgZ2xvYmFsT3B0aW9ucyE6IEFsYWluQ2VsbENvbmZpZztcbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFtrZXk6IHN0cmluZ106IENlbGxXaWRnZXQgfSA9IHtcbiAgICBkYXRlOiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiBmb3JtYXREYXRlKHZhbHVlIGFzIHN0cmluZywgb3B0LmRhdGUhLmZvcm1hdCEsIHRoaXMubnpJMThuLmdldERhdGVMb2NhbGUoKSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lZ2E6IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuY3VycmVuY3kubWVnYSh2YWx1ZSBhcyBudW1iZXIsIG9wdC5tZWdhKTtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogcmVzLnZhbHVlLCB1bml0OiByZXMudW5pdEkxOG4gfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGN1cnJlbmN5OiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiB0aGlzLmN1cnJlbmN5LmZvcm1hdCh2YWx1ZSBhcyBudW1iZXIsIG9wdC5jdXJyZW5jeSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNueToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5jdXJyZW5jeS5jbnkodmFsdWUgYXMgbnVtYmVyLCBvcHQuY255KSB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgYm9vbGVhbjoge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoeW4odmFsdWUgYXMgYm9vbGVhbiwgb3B0LmJvb2xlYW4pKSB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbnpJMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VycmVuY3k6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyXG4gICkge1xuICAgIHRoaXMuZ2xvYmFsT3B0aW9ucyA9IGNvbmZpZ1Nydi5tZXJnZSgnY2VsbCcsIHtcbiAgICAgIGRhdGU6IHsgZm9ybWF0OiAneXl5eS1NTS1kZCBISDptbTpzcycgfSxcbiAgICAgIGltZzogeyBzaXplOiAzMiwgYmlnOiB0cnVlIH1cbiAgICB9KSE7XG4gIH1cblxuICByZWdpc3RlcldpZGdldChrZXk6IHN0cmluZywgd2lkZ2V0OiBUeXBlPHVua25vd24+KTogdm9pZCB7XG4gICAgdGhpcy53aWRnZXRzW2tleV0gPSB7IHR5cGU6ICd3aWRnZXQnLCByZWY6IHdpZGdldCB9O1xuICB9XG5cbiAgZ2V0V2lkZ2V0KGtleTogc3RyaW5nKTogQ2VsbFdpZGdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0c1trZXldO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UeXBlKHZhbHVlOiB1bmtub3duLCBvcHRpb25zOiBDZWxsT3B0aW9ucyk6IENlbGxUeXBlIHtcbiAgICBpZiAob3B0aW9ucy50eXBlICE9IG51bGwpIHJldHVybiBvcHRpb25zLnR5cGU7XG5cbiAgICBjb25zdCB0eXBlT2YgPSB0eXBlb2YgdmFsdWU7XG4gICAgLy8gV2hlbiBpcyB0aW1lc3RhbXBcbiAgICBpZiAodHlwZU9mID09PSAnbnVtYmVyJyAmJiAvXlswLTldezEzfSQvZy50ZXN0KHZhbHVlIGFzIHN0cmluZykpIHJldHVybiAnZGF0ZSc7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBvcHRpb25zLmRhdGUgIT0gbnVsbCkgcmV0dXJuICdkYXRlJztcblxuICAgIC8vIEF1dG8gZGV0ZWN0aW9uXG4gICAgaWYgKG9wdGlvbnMud2lkZ2V0ICE9IG51bGwpIHJldHVybiAnd2lkZ2V0JztcbiAgICBlbHNlIGlmIChvcHRpb25zLm1lZ2EgIT0gbnVsbCkgcmV0dXJuICdtZWdhJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmN1cnJlbmN5ICE9IG51bGwpIHJldHVybiAnY3VycmVuY3knO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuY255ICE9IG51bGwpIHJldHVybiAnY255JztcbiAgICBlbHNlIGlmIChvcHRpb25zLmltZyAhPSBudWxsKSByZXR1cm4gJ2ltZyc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5saW5rICE9IG51bGwpIHJldHVybiAnbGluayc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5odG1sICE9IG51bGwpIHJldHVybiAnaHRtbCc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5iYWRnZSAhPSBudWxsKSByZXR1cm4gJ2JhZGdlJztcbiAgICBlbHNlIGlmIChvcHRpb25zLnRhZyAhPSBudWxsKSByZXR1cm4gJ3RhZyc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5jaGVja2JveCAhPSBudWxsKSByZXR1cm4gJ2NoZWNrYm94JztcbiAgICBlbHNlIGlmIChvcHRpb25zLnJhZGlvICE9IG51bGwpIHJldHVybiAncmFkaW8nO1xuICAgIGVsc2UgaWYgKHR5cGVPZiA9PT0gJ251bWJlcicpIHJldHVybiAnbnVtYmVyJztcbiAgICBlbHNlIGlmICh0eXBlT2YgPT09ICdib29sZWFuJyB8fCBvcHRpb25zLmJvb2xlYW4gIT0gbnVsbCkgcmV0dXJuICdib29sZWFuJztcbiAgICBlbHNlIHJldHVybiAnc3RyaW5nJztcbiAgfVxuXG4gIGZpeE9wdGlvbnMob3B0aW9ucz86IENlbGxPcHRpb25zKTogQ2VsbE9wdGlvbnMge1xuICAgIHJldHVybiBkZWVwTWVyZ2Uoe30sIHRoaXMuZ2xvYmFsT3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBnZXQodmFsdWU6IHVua25vd24sIG9wdGlvbnM/OiBDZWxsT3B0aW9ucyk6IE9ic2VydmFibGU8Q2VsbFRleHRSZXN1bHQ+IHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZW5UeXBlKHZhbHVlLCB7IC4uLm9wdGlvbnMgfSk7XG4gICAgY29uc3Qgb3B0ID0gdGhpcy5maXhPcHRpb25zKG9wdGlvbnMpO1xuICAgIG9wdC50eXBlID0gdHlwZTtcbiAgICBsZXQgcmVzOiBDZWxsVGV4dFJlc3VsdCA9IHtcbiAgICAgIHJlc3VsdDogdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/ICh2YWx1ZSBhcyBDZWxsVGV4dFVuaXQpIDogeyB0ZXh0OiB2YWx1ZSA9PSBudWxsID8gJycgOiBgJHt2YWx1ZX1gIH0sXG4gICAgICBvcHRpb25zOiBvcHRcbiAgICB9O1xuXG4gICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy53aWRnZXRzW3R5cGVdO1xuICAgIGlmICh3aWRnZXQ/LnR5cGUgPT09ICdmbicpIHtcbiAgICAgIHJlcy5yZXN1bHQgPSAod2lkZ2V0LnJlZiBhcyBDZWxsV2lkZ2V0Rm4pKHZhbHVlLCBvcHQpO1xuICAgIH1cblxuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gKHZhbHVlIGFzIENlbGxGdVZhbHVlKSh2YWx1ZSwgb3B0KSA6IG9mKHJlcy5yZXN1bHQpKS5waXBlKFxuICAgICAgbWFwKHRleHQgPT4ge1xuICAgICAgICByZXMucmVzdWx0ID0gdGV4dDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYmFkZ2UnOlxuICAgICAgICAgICAgcmVzLnJlc3VsdCA9IHsgY29sb3I6ICdkZWZhdWx0JywgLi4uKG9wdC5iYWRnZT8uZGF0YSA/PyB7fSlbdmFsdWUgYXMgc3RyaW5nXSB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgICAgIHJlcy5yZXN1bHQgPSAob3B0LnRhZz8uZGF0YSA/PyB7fSlbdmFsdWUgYXMgc3RyaW5nXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgICAgcmVzLnNhZmVIdG1sID0gb3B0Lmh0bWw/LnNhZmU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0Lm1hc2sgIT0gbnVsbCkge1xuICAgICAgICAgIHJlcy5yZXN1bHQudGV4dCA9IGZvcm1hdE1hc2socmVzLnJlc3VsdC50ZXh0IGFzIHN0cmluZywgb3B0Lm1hc2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==