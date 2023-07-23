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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2NlbGwvY2VsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLEdBQUcsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFtQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQWU5QyxNQUFNLE9BQU8sV0FBVztJQTBDdEIsWUFDRSxTQUE2QixFQUNyQixNQUFxQixFQUNyQixRQUF5QixFQUN6QixHQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUE1Q25CLFlBQU8sR0FBa0M7WUFDL0MsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDbEIsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsS0FBZSxFQUFFLEdBQUcsQ0FBQyxJQUFLLENBQUMsTUFBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUMvRixDQUFDO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNsQixNQUFNLEdBQUcs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RyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQWUsQ0FBQyxFQUFFLENBQUM7b0JBQy9FLE1BQU07Z0JBQ1IsS0FBSyxLQUFLO29CQUNSLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFlLENBQUMsQ0FBQztvQkFDcEQsTUFBTTtnQkFDUixLQUFLLE1BQU07b0JBQ1QsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztvQkFDOUIsTUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsSUFBSSxVQUFVO3dCQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO29CQUMxQyxNQUFNO2FBQ1Q7WUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs4R0F2SVUsV0FBVztrSEFBWCxXQUFXLGNBREUsTUFBTTs7MkZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBtYXAsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHluIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ2VsbENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlLCBmb3JtYXRNYXNrIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgdHlwZSB7XG4gIENlbGxGdVZhbHVlLFxuICBDZWxsT3B0aW9ucyxcbiAgQ2VsbFRleHRSZXN1bHQsXG4gIENlbGxUZXh0VW5pdCxcbiAgQ2VsbFR5cGUsXG4gIENlbGxXaWRnZXQsXG4gIENlbGxXaWRnZXRGblxufSBmcm9tICcuL2NlbGwudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENlbGxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnbG9iYWxPcHRpb25zITogQWxhaW5DZWxsQ29uZmlnO1xuICBwcml2YXRlIHdpZGdldHM6IHsgW2tleTogc3RyaW5nXTogQ2VsbFdpZGdldCB9ID0ge1xuICAgIGRhdGU6IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IGZvcm1hdERhdGUodmFsdWUgYXMgc3RyaW5nLCBvcHQuZGF0ZSEuZm9ybWF0ISwgdGhpcy5uekkxOG4uZ2V0RGF0ZUxvY2FsZSgpKSB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgbWVnYToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5jdXJyZW5jeS5tZWdhKHZhbHVlIGFzIG51bWJlciwgb3B0Lm1lZ2EpO1xuICAgICAgICByZXR1cm4geyB0ZXh0OiByZXMudmFsdWUsIHVuaXQ6IHJlcy51bml0STE4biB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgY3VycmVuY3k6IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHRoaXMuY3VycmVuY3kuZm9ybWF0KHZhbHVlIGFzIG51bWJlciwgb3B0LmN1cnJlbmN5KSB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgY255OiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiB0aGlzLmN1cnJlbmN5LmNueSh2YWx1ZSBhcyBudW1iZXIsIG9wdC5jbnkpIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBib29sZWFuOiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh5bih2YWx1ZSBhcyBib29sZWFuLCBvcHQuYm9vbGVhbikpIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0gfTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBuekkxOG46IE56STE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXJyZW5jeTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXJcbiAgKSB7XG4gICAgdGhpcy5nbG9iYWxPcHRpb25zID0gY29uZmlnU3J2Lm1lcmdlKCdjZWxsJywge1xuICAgICAgZGF0ZTogeyBmb3JtYXQ6ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyB9LFxuICAgICAgaW1nOiB7IHNpemU6IDMyLCBiaWc6IHRydWUgfVxuICAgIH0pITtcbiAgfVxuXG4gIHJlZ2lzdGVyV2lkZ2V0KGtleTogc3RyaW5nLCB3aWRnZXQ6IFR5cGU8dW5rbm93bj4pOiB2b2lkIHtcbiAgICB0aGlzLndpZGdldHNba2V5XSA9IHsgdHlwZTogJ3dpZGdldCcsIHJlZjogd2lkZ2V0IH07XG4gIH1cblxuICBnZXRXaWRnZXQoa2V5OiBzdHJpbmcpOiBDZWxsV2lkZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXRzW2tleV07XG4gIH1cblxuICBwcml2YXRlIGdlblR5cGUodmFsdWU6IHVua25vd24sIG9wdGlvbnM6IENlbGxPcHRpb25zKTogQ2VsbFR5cGUge1xuICAgIGlmIChvcHRpb25zLnR5cGUgIT0gbnVsbCkgcmV0dXJuIG9wdGlvbnMudHlwZTtcblxuICAgIGNvbnN0IHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcbiAgICAvLyBXaGVuIGlzIHRpbWVzdGFtcFxuICAgIGlmICh0eXBlT2YgPT09ICdudW1iZXInICYmIC9eWzAtOV17MTN9JC9nLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkgcmV0dXJuICdkYXRlJztcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IG9wdGlvbnMuZGF0ZSAhPSBudWxsKSByZXR1cm4gJ2RhdGUnO1xuXG4gICAgLy8gQXV0byBkZXRlY3Rpb25cbiAgICBpZiAob3B0aW9ucy53aWRnZXQgIT0gbnVsbCkgcmV0dXJuICd3aWRnZXQnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMubWVnYSAhPSBudWxsKSByZXR1cm4gJ21lZ2EnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuY3VycmVuY3kgIT0gbnVsbCkgcmV0dXJuICdjdXJyZW5jeSc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5jbnkgIT0gbnVsbCkgcmV0dXJuICdjbnknO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuaW1nICE9IG51bGwpIHJldHVybiAnaW1nJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmxpbmsgIT0gbnVsbCkgcmV0dXJuICdsaW5rJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmh0bWwgIT0gbnVsbCkgcmV0dXJuICdodG1sJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmJhZGdlICE9IG51bGwpIHJldHVybiAnYmFkZ2UnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMudGFnICE9IG51bGwpIHJldHVybiAndGFnJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmNoZWNrYm94ICE9IG51bGwpIHJldHVybiAnY2hlY2tib3gnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMucmFkaW8gIT0gbnVsbCkgcmV0dXJuICdyYWRpbyc7XG4gICAgZWxzZSBpZiAodHlwZU9mID09PSAnbnVtYmVyJykgcmV0dXJuICdudW1iZXInO1xuICAgIGVsc2UgaWYgKHR5cGVPZiA9PT0gJ2Jvb2xlYW4nIHx8IG9wdGlvbnMuYm9vbGVhbiAhPSBudWxsKSByZXR1cm4gJ2Jvb2xlYW4nO1xuICAgIGVsc2UgcmV0dXJuICdzdHJpbmcnO1xuICB9XG5cbiAgZml4T3B0aW9ucyhvcHRpb25zPzogQ2VsbE9wdGlvbnMpOiBDZWxsT3B0aW9ucyB7XG4gICAgcmV0dXJuIGRlZXBNZXJnZSh7fSwgdGhpcy5nbG9iYWxPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldCh2YWx1ZTogdW5rbm93biwgb3B0aW9ucz86IENlbGxPcHRpb25zKTogT2JzZXJ2YWJsZTxDZWxsVGV4dFJlc3VsdD4ge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdlblR5cGUodmFsdWUsIHsgLi4ub3B0aW9ucyB9KTtcbiAgICBjb25zdCBvcHQgPSB0aGlzLmZpeE9wdGlvbnMob3B0aW9ucyk7XG4gICAgb3B0LnR5cGUgPSB0eXBlO1xuICAgIGNvbnN0IGlzU2FmZUh0bWwgPVxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mICh2YWx1ZSBhcyBOelNhZmVBbnkpPy5nZXRUeXBlTmFtZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKHZhbHVlIGFzIE56U2FmZUFueSk/LmdldFR5cGVOYW1lKCkgIT0gbnVsbDtcbiAgICBsZXQgcmVzOiBDZWxsVGV4dFJlc3VsdCA9IHtcbiAgICAgIHJlc3VsdDpcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhaXNTYWZlSHRtbFxuICAgICAgICAgID8gKHZhbHVlIGFzIENlbGxUZXh0VW5pdClcbiAgICAgICAgICA6IHsgdGV4dDogdmFsdWUgPT0gbnVsbCA/ICcnIDogaXNTYWZlSHRtbCA/IHZhbHVlIDogYCR7dmFsdWV9YCB9LFxuICAgICAgb3B0aW9uczogb3B0XG4gICAgfTtcblxuICAgIGNvbnN0IHdpZGdldCA9IHRoaXMud2lkZ2V0c1t0eXBlXTtcbiAgICBpZiAod2lkZ2V0Py50eXBlID09PSAnZm4nKSB7XG4gICAgICByZXMucmVzdWx0ID0gKHdpZGdldC5yZWYgYXMgQ2VsbFdpZGdldEZuKSh2YWx1ZSwgb3B0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/ICh2YWx1ZSBhcyBDZWxsRnVWYWx1ZSkodmFsdWUsIG9wdCkgOiBvZihyZXMucmVzdWx0KSkucGlwZShcbiAgICAgIG1hcCh0ZXh0ID0+IHtcbiAgICAgICAgcmVzLnJlc3VsdCA9IHRleHQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2JhZGdlJzpcbiAgICAgICAgICAgIHJlcy5yZXN1bHQgPSB7IGNvbG9yOiAnZGVmYXVsdCcsIC4uLihvcHQuYmFkZ2U/LmRhdGEgPz8ge30pW3ZhbHVlIGFzIHN0cmluZ10gfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgICAgICByZXMucmVzdWx0ID0gKG9wdC50YWc/LmRhdGEgPz8ge30pW3ZhbHVlIGFzIHN0cmluZ107XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgICAgIHJlcy5zYWZlSHRtbCA9IG9wdC5odG1sPy5zYWZlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGlmIChpc1NhZmVIdG1sKSByZXMuc2FmZUh0bWwgPSAnc2FmZUh0bWwnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5tYXNrICE9IG51bGwpIHtcbiAgICAgICAgICByZXMucmVzdWx0LnRleHQgPSBmb3JtYXRNYXNrKHJlcy5yZXN1bHQudGV4dCBhcyBzdHJpbmcsIG9wdC5tYXNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=