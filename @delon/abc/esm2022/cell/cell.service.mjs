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
            switch (type) {
                case 'badge':
                    res.result = { color: 'default', ...(opt.badge?.data ?? {})[value] };
                    break;
                case 'tag':
                    res.result = (opt.tag?.data ?? {})[value];
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
            if (opt.mask != null) {
                res.result.text = formatMask(res.result.text, opt.mask);
            }
            return res;
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: CellService, deps: [{ token: i1.AlainConfigService }, { token: i2.NzI18nService }, { token: i3.CurrencyService }, { token: i4.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: CellService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: CellService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: i2.NzI18nService }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2NlbGwvY2VsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLEdBQUcsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFtQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQWU5QyxNQUFNLE9BQU8sV0FBVztJQTBDdEIsWUFDRSxTQUE2QixFQUNyQixNQUFxQixFQUNyQixRQUF5QixFQUN6QixHQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUE1Q25CLFlBQU8sR0FBa0M7WUFDL0MsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDbEIsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsS0FBZSxFQUFFLEdBQUcsQ0FBQyxJQUFLLENBQUMsTUFBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUMvRixDQUFDO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNsQixNQUFNLEdBQUcs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bXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG1hcCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgeW4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5DZWxsQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UsIGZvcm1hdE1hc2sgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB0eXBlIHtcbiAgQ2VsbEZ1VmFsdWUsXG4gIENlbGxPcHRpb25zLFxuICBDZWxsVGV4dFJlc3VsdCxcbiAgQ2VsbFRleHRVbml0LFxuICBDZWxsVHlwZSxcbiAgQ2VsbFdpZGdldCxcbiAgQ2VsbFdpZGdldEZuXG59IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2VsbFNlcnZpY2Uge1xuICBwcml2YXRlIGdsb2JhbE9wdGlvbnMhOiBBbGFpbkNlbGxDb25maWc7XG4gIHByaXZhdGUgd2lkZ2V0czogeyBba2V5OiBzdHJpbmddOiBDZWxsV2lkZ2V0IH0gPSB7XG4gICAgZGF0ZToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogZm9ybWF0RGF0ZSh2YWx1ZSBhcyBzdHJpbmcsIG9wdC5kYXRlIS5mb3JtYXQhLCB0aGlzLm56STE4bi5nZXREYXRlTG9jYWxlKCkpIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBtZWdhOiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLmN1cnJlbmN5Lm1lZ2EodmFsdWUgYXMgbnVtYmVyLCBvcHQubWVnYSk7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHJlcy52YWx1ZSwgdW5pdDogcmVzLnVuaXRJMThuIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBjdXJyZW5jeToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5jdXJyZW5jeS5mb3JtYXQodmFsdWUgYXMgbnVtYmVyLCBvcHQuY3VycmVuY3kpIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBjbnk6IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHRoaXMuY3VycmVuY3kuY255KHZhbHVlIGFzIG51bWJlciwgb3B0LmNueSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJvb2xlYW46IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHluKHZhbHVlIGFzIGJvb2xlYW4sIG9wdC5ib29sZWFuKSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSB9O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIG56STE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcml2YXRlIGN1cnJlbmN5OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplclxuICApIHtcbiAgICB0aGlzLmdsb2JhbE9wdGlvbnMgPSBjb25maWdTcnYubWVyZ2UoJ2NlbGwnLCB7XG4gICAgICBkYXRlOiB7IGZvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MnIH0sXG4gICAgICBpbWc6IHsgc2l6ZTogMzIsIGJpZzogdHJ1ZSB9XG4gICAgfSkhO1xuICB9XG5cbiAgcmVnaXN0ZXJXaWRnZXQoa2V5OiBzdHJpbmcsIHdpZGdldDogVHlwZTx1bmtub3duPik6IHZvaWQge1xuICAgIHRoaXMud2lkZ2V0c1trZXldID0geyB0eXBlOiAnd2lkZ2V0JywgcmVmOiB3aWRnZXQgfTtcbiAgfVxuXG4gIGdldFdpZGdldChrZXk6IHN0cmluZyk6IENlbGxXaWRnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLndpZGdldHNba2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVHlwZSh2YWx1ZTogdW5rbm93biwgb3B0aW9uczogQ2VsbE9wdGlvbnMpOiBDZWxsVHlwZSB7XG4gICAgaWYgKG9wdGlvbnMudHlwZSAhPSBudWxsKSByZXR1cm4gb3B0aW9ucy50eXBlO1xuXG4gICAgY29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuICAgIC8vIFdoZW4gaXMgdGltZXN0YW1wXG4gICAgaWYgKHR5cGVPZiA9PT0gJ251bWJlcicgJiYgL15bMC05XXsxM30kL2cudGVzdCh2YWx1ZSBhcyBzdHJpbmcpKSByZXR1cm4gJ2RhdGUnO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgb3B0aW9ucy5kYXRlICE9IG51bGwpIHJldHVybiAnZGF0ZSc7XG5cbiAgICAvLyBBdXRvIGRldGVjdGlvblxuICAgIGlmIChvcHRpb25zLndpZGdldCAhPSBudWxsKSByZXR1cm4gJ3dpZGdldCc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5tZWdhICE9IG51bGwpIHJldHVybiAnbWVnYSc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5jdXJyZW5jeSAhPSBudWxsKSByZXR1cm4gJ2N1cnJlbmN5JztcbiAgICBlbHNlIGlmIChvcHRpb25zLmNueSAhPSBudWxsKSByZXR1cm4gJ2NueSc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5pbWcgIT0gbnVsbCkgcmV0dXJuICdpbWcnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMubGluayAhPSBudWxsKSByZXR1cm4gJ2xpbmsnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuaHRtbCAhPSBudWxsKSByZXR1cm4gJ2h0bWwnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuYmFkZ2UgIT0gbnVsbCkgcmV0dXJuICdiYWRnZSc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy50YWcgIT0gbnVsbCkgcmV0dXJuICd0YWcnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuY2hlY2tib3ggIT0gbnVsbCkgcmV0dXJuICdjaGVja2JveCc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5yYWRpbyAhPSBudWxsKSByZXR1cm4gJ3JhZGlvJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmVudW0gIT0gbnVsbCkgcmV0dXJuICdlbnVtJztcbiAgICBlbHNlIGlmICh0eXBlT2YgPT09ICdudW1iZXInKSByZXR1cm4gJ251bWJlcic7XG4gICAgZWxzZSBpZiAodHlwZU9mID09PSAnYm9vbGVhbicgfHwgb3B0aW9ucy5ib29sZWFuICE9IG51bGwpIHJldHVybiAnYm9vbGVhbic7XG4gICAgZWxzZSByZXR1cm4gJ3N0cmluZyc7XG4gIH1cblxuICBmaXhPcHRpb25zKG9wdGlvbnM/OiBDZWxsT3B0aW9ucyk6IENlbGxPcHRpb25zIHtcbiAgICByZXR1cm4gZGVlcE1lcmdlKHt9LCB0aGlzLmdsb2JhbE9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0KHZhbHVlOiB1bmtub3duLCBvcHRpb25zPzogQ2VsbE9wdGlvbnMpOiBPYnNlcnZhYmxlPENlbGxUZXh0UmVzdWx0PiB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2VuVHlwZSh2YWx1ZSwgeyAuLi5vcHRpb25zIH0pO1xuICAgIGNvbnN0IG9wdCA9IHRoaXMuZml4T3B0aW9ucyhvcHRpb25zKTtcbiAgICBvcHQudHlwZSA9IHR5cGU7XG4gICAgY29uc3QgaXNTYWZlSHRtbCA9XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2YgKHZhbHVlIGFzIE56U2FmZUFueSk/LmdldFR5cGVOYW1lID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAodmFsdWUgYXMgTnpTYWZlQW55KT8uZ2V0VHlwZU5hbWUoKSAhPSBudWxsO1xuXG4gICAgbGV0IHJlczogQ2VsbFRleHRSZXN1bHQgPSB7XG4gICAgICByZXN1bHQ6XG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWlzU2FmZUh0bWxcbiAgICAgICAgICA/ICh2YWx1ZSBhcyBDZWxsVGV4dFVuaXQpXG4gICAgICAgICAgOiB7IHRleHQ6IHZhbHVlID09IG51bGwgPyAnJyA6IGlzU2FmZUh0bWwgPyB2YWx1ZSA6IGAke3ZhbHVlfWAgfSxcbiAgICAgIG9wdGlvbnM6IG9wdFxuICAgIH07XG5cbiAgICBjb25zdCB3aWRnZXQgPSB0aGlzLndpZGdldHNbdHlwZV07XG4gICAgaWYgKHdpZGdldD8udHlwZSA9PT0gJ2ZuJykge1xuICAgICAgcmVzLnJlc3VsdCA9ICh3aWRnZXQucmVmIGFzIENlbGxXaWRnZXRGbikodmFsdWUsIG9wdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyAodmFsdWUgYXMgQ2VsbEZ1VmFsdWUpKHZhbHVlLCBvcHQpIDogb2YocmVzLnJlc3VsdCkpLnBpcGUoXG4gICAgICBtYXAodGV4dCA9PiB7XG4gICAgICAgIHJlcy5yZXN1bHQgPSB0ZXh0O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdiYWRnZSc6XG4gICAgICAgICAgICByZXMucmVzdWx0ID0geyBjb2xvcjogJ2RlZmF1bHQnLCAuLi4ob3B0LmJhZGdlPy5kYXRhID8/IHt9KVt2YWx1ZSBhcyBzdHJpbmddIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICAgICAgcmVzLnJlc3VsdCA9IChvcHQudGFnPy5kYXRhID8/IHt9KVt2YWx1ZSBhcyBzdHJpbmddO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgICByZXMucmVzdWx0ID0geyB0ZXh0OiAob3B0LmVudW0gPz8ge30pW3ZhbHVlIGFzIHN0cmluZ10gfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgICAgcmVzLnNhZmVIdG1sID0gb3B0Lmh0bWw/LnNhZmU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgaWYgKGlzU2FmZUh0bWwpIHJlcy5zYWZlSHRtbCA9ICdzYWZlSHRtbCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0Lm1hc2sgIT0gbnVsbCkge1xuICAgICAgICAgIHJlcy5yZXN1bHQudGV4dCA9IGZvcm1hdE1hc2socmVzLnJlc3VsdC50ZXh0IGFzIHN0cmluZywgb3B0Lm1hc2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==