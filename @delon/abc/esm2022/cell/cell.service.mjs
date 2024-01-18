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
export class CellService {
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
            img: { size: 32 },
            default: { text: '-' }
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
        else if (options.enum != null)
            return 'enum';
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
        const isSafeHtml = typeof value === 'object' &&
            typeof value?.getTypeName === 'function' &&
            value?.getTypeName() != null;
        let res = {
            result: typeof value === 'object' && !isSafeHtml
                ? value
                : { text: value == null ? '' : isSafeHtml ? value : `${value}` },
            options: opt
        };
        const widget = this.widgets[type];
        if (widget?.type === 'fn') {
            res.result = widget.ref(value, opt);
        }
        return (typeof value === 'function' ? value(value, opt) : of(res.result)).pipe(map(text => {
            res.result = text;
            let dictData;
            switch (type) {
                case 'badge':
                    dictData = (opt.badge?.data ?? {})[value];
                    res.result = { color: 'default', ...dictData };
                    break;
                case 'tag':
                    dictData = (opt.tag?.data ?? {})[value];
                    res.result = dictData;
                    break;
                case 'enum':
                    res.result = { text: (opt.enum ?? {})[value] };
                    break;
                case 'html':
                    res.safeHtml = opt.html?.safe;
                    break;
                case 'string':
                    if (isSafeHtml)
                        res.safeHtml = 'safeHtml';
                    break;
            }
            if ((type === 'badge' || type === 'tag') && dictData?.tooltip != null) {
                res.options.tooltip = dictData.tooltip;
            }
            if (opt.mask != null) {
                res.result.text = formatMask(res.result.text, opt.mask);
            }
            return res;
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CellService, deps: [{ token: i1.AlainConfigService }, { token: i2.NzI18nService }, { token: i3.CurrencyService }, { token: i4.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CellService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CellService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }, { type: i2.NzI18nService }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2NlbGwvY2VsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLEdBQUcsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFtQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQWU5QyxNQUFNLE9BQU8sV0FBVztJQTBDdEIsWUFDRSxTQUE2QixFQUNyQixNQUFxQixFQUNyQixRQUF5QixFQUN6QixHQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUE1Q25CLFlBQU8sR0FBa0M7WUFDL0MsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDbEIsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsS0FBZSxFQUFFLEdBQUcsQ0FBQyxJQUFLLENBQUMsTUFBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUMvRixDQUFDO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNsQixNQUFNLEdBQUcs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QUksRUFBRSxDQUFDO2dCQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzhHQW5KVSxXQUFXO2tIQUFYLFdBQVcsY0FERSxNQUFNOzsyRkFDbkIsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG1hcCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgeW4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5DZWxsQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UsIGZvcm1hdE1hc2sgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB0eXBlIHtcbiAgQ2VsbEZ1VmFsdWUsXG4gIENlbGxPcHRpb25zLFxuICBDZWxsVGV4dFJlc3VsdCxcbiAgQ2VsbFRleHRVbml0LFxuICBDZWxsVHlwZSxcbiAgQ2VsbFdpZGdldCxcbiAgQ2VsbFdpZGdldEZuXG59IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2VsbFNlcnZpY2Uge1xuICBwcml2YXRlIGdsb2JhbE9wdGlvbnMhOiBBbGFpbkNlbGxDb25maWc7XG4gIHByaXZhdGUgd2lkZ2V0czogeyBba2V5OiBzdHJpbmddOiBDZWxsV2lkZ2V0IH0gPSB7XG4gICAgZGF0ZToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogZm9ybWF0RGF0ZSh2YWx1ZSBhcyBzdHJpbmcsIG9wdC5kYXRlIS5mb3JtYXQhLCB0aGlzLm56STE4bi5nZXREYXRlTG9jYWxlKCkpIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBtZWdhOiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLmN1cnJlbmN5Lm1lZ2EodmFsdWUgYXMgbnVtYmVyLCBvcHQubWVnYSk7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHJlcy52YWx1ZSwgdW5pdDogcmVzLnVuaXRJMThuIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBjdXJyZW5jeToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5jdXJyZW5jeS5mb3JtYXQodmFsdWUgYXMgbnVtYmVyLCBvcHQuY3VycmVuY3kpIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBjbnk6IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHRoaXMuY3VycmVuY3kuY255KHZhbHVlIGFzIG51bWJlciwgb3B0LmNueSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJvb2xlYW46IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHluKHZhbHVlIGFzIGJvb2xlYW4sIG9wdC5ib29sZWFuKSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSB9O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIG56STE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcml2YXRlIGN1cnJlbmN5OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplclxuICApIHtcbiAgICB0aGlzLmdsb2JhbE9wdGlvbnMgPSBjb25maWdTcnYubWVyZ2UoJ2NlbGwnLCB7XG4gICAgICBkYXRlOiB7IGZvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MnIH0sXG4gICAgICBpbWc6IHsgc2l6ZTogMzIgfSxcbiAgICAgIGRlZmF1bHQ6IHsgdGV4dDogJy0nIH1cbiAgICB9KSE7XG4gIH1cblxuICByZWdpc3RlcldpZGdldChrZXk6IHN0cmluZywgd2lkZ2V0OiBUeXBlPHVua25vd24+KTogdm9pZCB7XG4gICAgdGhpcy53aWRnZXRzW2tleV0gPSB7IHR5cGU6ICd3aWRnZXQnLCByZWY6IHdpZGdldCB9O1xuICB9XG5cbiAgZ2V0V2lkZ2V0KGtleTogc3RyaW5nKTogQ2VsbFdpZGdldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0c1trZXldO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UeXBlKHZhbHVlOiB1bmtub3duLCBvcHRpb25zOiBDZWxsT3B0aW9ucyk6IENlbGxUeXBlIHtcbiAgICBpZiAob3B0aW9ucy50eXBlICE9IG51bGwpIHJldHVybiBvcHRpb25zLnR5cGU7XG5cbiAgICBjb25zdCB0eXBlT2YgPSB0eXBlb2YgdmFsdWU7XG4gICAgLy8gV2hlbiBpcyB0aW1lc3RhbXBcbiAgICBpZiAodHlwZU9mID09PSAnbnVtYmVyJyAmJiAvXlswLTldezEzfSQvZy50ZXN0KHZhbHVlIGFzIHN0cmluZykpIHJldHVybiAnZGF0ZSc7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBvcHRpb25zLmRhdGUgIT0gbnVsbCkgcmV0dXJuICdkYXRlJztcblxuICAgIC8vIEF1dG8gZGV0ZWN0aW9uXG4gICAgaWYgKG9wdGlvbnMud2lkZ2V0ICE9IG51bGwpIHJldHVybiAnd2lkZ2V0JztcbiAgICBlbHNlIGlmIChvcHRpb25zLm1lZ2EgIT0gbnVsbCkgcmV0dXJuICdtZWdhJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmN1cnJlbmN5ICE9IG51bGwpIHJldHVybiAnY3VycmVuY3knO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuY255ICE9IG51bGwpIHJldHVybiAnY255JztcbiAgICBlbHNlIGlmIChvcHRpb25zLmltZyAhPSBudWxsKSByZXR1cm4gJ2ltZyc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5saW5rICE9IG51bGwpIHJldHVybiAnbGluayc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5odG1sICE9IG51bGwpIHJldHVybiAnaHRtbCc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5iYWRnZSAhPSBudWxsKSByZXR1cm4gJ2JhZGdlJztcbiAgICBlbHNlIGlmIChvcHRpb25zLnRhZyAhPSBudWxsKSByZXR1cm4gJ3RhZyc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5jaGVja2JveCAhPSBudWxsKSByZXR1cm4gJ2NoZWNrYm94JztcbiAgICBlbHNlIGlmIChvcHRpb25zLnJhZGlvICE9IG51bGwpIHJldHVybiAncmFkaW8nO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuZW51bSAhPSBudWxsKSByZXR1cm4gJ2VudW0nO1xuICAgIGVsc2UgaWYgKHR5cGVPZiA9PT0gJ251bWJlcicpIHJldHVybiAnbnVtYmVyJztcbiAgICBlbHNlIGlmICh0eXBlT2YgPT09ICdib29sZWFuJyB8fCBvcHRpb25zLmJvb2xlYW4gIT0gbnVsbCkgcmV0dXJuICdib29sZWFuJztcbiAgICBlbHNlIHJldHVybiAnc3RyaW5nJztcbiAgfVxuXG4gIGZpeE9wdGlvbnMob3B0aW9ucz86IENlbGxPcHRpb25zKTogQ2VsbE9wdGlvbnMge1xuICAgIHJldHVybiBkZWVwTWVyZ2Uoe30sIHRoaXMuZ2xvYmFsT3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBnZXQodmFsdWU6IHVua25vd24sIG9wdGlvbnM/OiBDZWxsT3B0aW9ucyk6IE9ic2VydmFibGU8Q2VsbFRleHRSZXN1bHQ+IHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZW5UeXBlKHZhbHVlLCB7IC4uLm9wdGlvbnMgfSk7XG4gICAgY29uc3Qgb3B0ID0gdGhpcy5maXhPcHRpb25zKG9wdGlvbnMpO1xuICAgIG9wdC50eXBlID0gdHlwZTtcbiAgICBjb25zdCBpc1NhZmVIdG1sID1cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiAodmFsdWUgYXMgTnpTYWZlQW55KT8uZ2V0VHlwZU5hbWUgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICh2YWx1ZSBhcyBOelNhZmVBbnkpPy5nZXRUeXBlTmFtZSgpICE9IG51bGw7XG5cbiAgICBsZXQgcmVzOiBDZWxsVGV4dFJlc3VsdCA9IHtcbiAgICAgIHJlc3VsdDpcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhaXNTYWZlSHRtbFxuICAgICAgICAgID8gKHZhbHVlIGFzIENlbGxUZXh0VW5pdClcbiAgICAgICAgICA6IHsgdGV4dDogdmFsdWUgPT0gbnVsbCA/ICcnIDogaXNTYWZlSHRtbCA/IHZhbHVlIDogYCR7dmFsdWV9YCB9LFxuICAgICAgb3B0aW9uczogb3B0XG4gICAgfTtcblxuICAgIGNvbnN0IHdpZGdldCA9IHRoaXMud2lkZ2V0c1t0eXBlXTtcbiAgICBpZiAod2lkZ2V0Py50eXBlID09PSAnZm4nKSB7XG4gICAgICByZXMucmVzdWx0ID0gKHdpZGdldC5yZWYgYXMgQ2VsbFdpZGdldEZuKSh2YWx1ZSwgb3B0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/ICh2YWx1ZSBhcyBDZWxsRnVWYWx1ZSkodmFsdWUsIG9wdCkgOiBvZihyZXMucmVzdWx0KSkucGlwZShcbiAgICAgIG1hcCh0ZXh0ID0+IHtcbiAgICAgICAgcmVzLnJlc3VsdCA9IHRleHQ7XG4gICAgICAgIGxldCBkaWN0RGF0YTogeyB0b29sdGlwPzogc3RyaW5nIH0gfCB1bmRlZmluZWQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2JhZGdlJzpcbiAgICAgICAgICAgIGRpY3REYXRhID0gKG9wdC5iYWRnZT8uZGF0YSA/PyB7fSlbdmFsdWUgYXMgc3RyaW5nXTtcbiAgICAgICAgICAgIHJlcy5yZXN1bHQgPSB7IGNvbG9yOiAnZGVmYXVsdCcsIC4uLmRpY3REYXRhIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICAgICAgZGljdERhdGEgPSAob3B0LnRhZz8uZGF0YSA/PyB7fSlbdmFsdWUgYXMgc3RyaW5nXTtcbiAgICAgICAgICAgIHJlcy5yZXN1bHQgPSBkaWN0RGF0YSBhcyBDZWxsVGV4dFVuaXQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICAgIHJlcy5yZXN1bHQgPSB7IHRleHQ6IChvcHQuZW51bSA/PyB7fSlbdmFsdWUgYXMgc3RyaW5nXSB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICByZXMuc2FmZUh0bWwgPSBvcHQuaHRtbD8uc2FmZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBpZiAoaXNTYWZlSHRtbCkgcmVzLnNhZmVIdG1sID0gJ3NhZmVIdG1sJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZSA9PT0gJ2JhZGdlJyB8fCB0eXBlID09PSAndGFnJykgJiYgZGljdERhdGE/LnRvb2x0aXAgIT0gbnVsbCkge1xuICAgICAgICAgIHJlcy5vcHRpb25zLnRvb2x0aXAgPSBkaWN0RGF0YS50b29sdGlwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHQubWFzayAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzLnJlc3VsdC50ZXh0ID0gZm9ybWF0TWFzayhyZXMucmVzdWx0LnRleHQgYXMgc3RyaW5nLCBvcHQubWFzayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19