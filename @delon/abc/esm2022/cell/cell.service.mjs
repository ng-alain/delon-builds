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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: CellService, deps: [{ token: i1.AlainConfigService }, { token: i2.NzI18nService }, { token: i3.CurrencyService }, { token: i4.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: CellService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: CellService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }, { type: i2.NzI18nService }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2NlbGwvY2VsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLEdBQUcsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFtQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQWU5QyxNQUFNLE9BQU8sV0FBVztJQTBDdEIsWUFDRSxTQUE2QixFQUNyQixNQUFxQixFQUNyQixRQUF5QixFQUN6QixHQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUE1Q25CLFlBQU8sR0FBa0M7WUFDL0MsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDbEIsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsS0FBZSxFQUFFLEdBQUcsQ0FBQyxJQUFLLENBQUMsTUFBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUMvRixDQUFDO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNsQixNQUFNLEdBQUcs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Q0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBYyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuRTtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OEdBbkpVLFdBQVc7a0hBQVgsV0FBVyxjQURFLE1BQU07OzJGQUNuQixXQUFXO2tCQUR2QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgbWFwLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB5biB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNlbGxDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSwgZm9ybWF0TWFzayB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuaW1wb3J0IHR5cGUge1xuICBDZWxsRnVWYWx1ZSxcbiAgQ2VsbE9wdGlvbnMsXG4gIENlbGxUZXh0UmVzdWx0LFxuICBDZWxsVGV4dFVuaXQsXG4gIENlbGxUeXBlLFxuICBDZWxsV2lkZ2V0LFxuICBDZWxsV2lkZ2V0Rm5cbn0gZnJvbSAnLi9jZWxsLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDZWxsU2VydmljZSB7XG4gIHByaXZhdGUgZ2xvYmFsT3B0aW9ucyE6IEFsYWluQ2VsbENvbmZpZztcbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFtrZXk6IHN0cmluZ106IENlbGxXaWRnZXQgfSA9IHtcbiAgICBkYXRlOiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiBmb3JtYXREYXRlKHZhbHVlIGFzIHN0cmluZywgb3B0LmRhdGUhLmZvcm1hdCEsIHRoaXMubnpJMThuLmdldERhdGVMb2NhbGUoKSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lZ2E6IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuY3VycmVuY3kubWVnYSh2YWx1ZSBhcyBudW1iZXIsIG9wdC5tZWdhKTtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogcmVzLnZhbHVlLCB1bml0OiByZXMudW5pdEkxOG4gfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGN1cnJlbmN5OiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiB0aGlzLmN1cnJlbmN5LmZvcm1hdCh2YWx1ZSBhcyBudW1iZXIsIG9wdC5jdXJyZW5jeSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNueToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5jdXJyZW5jeS5jbnkodmFsdWUgYXMgbnVtYmVyLCBvcHQuY255KSB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgYm9vbGVhbjoge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoeW4odmFsdWUgYXMgYm9vbGVhbiwgb3B0LmJvb2xlYW4pKSB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbnpJMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VycmVuY3k6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyXG4gICkge1xuICAgIHRoaXMuZ2xvYmFsT3B0aW9ucyA9IGNvbmZpZ1Nydi5tZXJnZSgnY2VsbCcsIHtcbiAgICAgIGRhdGU6IHsgZm9ybWF0OiAneXl5eS1NTS1kZCBISDptbTpzcycgfSxcbiAgICAgIGltZzogeyBzaXplOiAzMiB9LFxuICAgICAgZGVmYXVsdDogeyB0ZXh0OiAnLScgfVxuICAgIH0pITtcbiAgfVxuXG4gIHJlZ2lzdGVyV2lkZ2V0KGtleTogc3RyaW5nLCB3aWRnZXQ6IFR5cGU8dW5rbm93bj4pOiB2b2lkIHtcbiAgICB0aGlzLndpZGdldHNba2V5XSA9IHsgdHlwZTogJ3dpZGdldCcsIHJlZjogd2lkZ2V0IH07XG4gIH1cblxuICBnZXRXaWRnZXQoa2V5OiBzdHJpbmcpOiBDZWxsV2lkZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXRzW2tleV07XG4gIH1cblxuICBwcml2YXRlIGdlblR5cGUodmFsdWU6IHVua25vd24sIG9wdGlvbnM6IENlbGxPcHRpb25zKTogQ2VsbFR5cGUge1xuICAgIGlmIChvcHRpb25zLnR5cGUgIT0gbnVsbCkgcmV0dXJuIG9wdGlvbnMudHlwZTtcblxuICAgIGNvbnN0IHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcbiAgICAvLyBXaGVuIGlzIHRpbWVzdGFtcFxuICAgIGlmICh0eXBlT2YgPT09ICdudW1iZXInICYmIC9eWzAtOV17MTN9JC9nLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkgcmV0dXJuICdkYXRlJztcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IG9wdGlvbnMuZGF0ZSAhPSBudWxsKSByZXR1cm4gJ2RhdGUnO1xuXG4gICAgLy8gQXV0byBkZXRlY3Rpb25cbiAgICBpZiAob3B0aW9ucy53aWRnZXQgIT0gbnVsbCkgcmV0dXJuICd3aWRnZXQnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMubWVnYSAhPSBudWxsKSByZXR1cm4gJ21lZ2EnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuY3VycmVuY3kgIT0gbnVsbCkgcmV0dXJuICdjdXJyZW5jeSc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5jbnkgIT0gbnVsbCkgcmV0dXJuICdjbnknO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuaW1nICE9IG51bGwpIHJldHVybiAnaW1nJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmxpbmsgIT0gbnVsbCkgcmV0dXJuICdsaW5rJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmh0bWwgIT0gbnVsbCkgcmV0dXJuICdodG1sJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmJhZGdlICE9IG51bGwpIHJldHVybiAnYmFkZ2UnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMudGFnICE9IG51bGwpIHJldHVybiAndGFnJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmNoZWNrYm94ICE9IG51bGwpIHJldHVybiAnY2hlY2tib3gnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMucmFkaW8gIT0gbnVsbCkgcmV0dXJuICdyYWRpbyc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5lbnVtICE9IG51bGwpIHJldHVybiAnZW51bSc7XG4gICAgZWxzZSBpZiAodHlwZU9mID09PSAnbnVtYmVyJykgcmV0dXJuICdudW1iZXInO1xuICAgIGVsc2UgaWYgKHR5cGVPZiA9PT0gJ2Jvb2xlYW4nIHx8IG9wdGlvbnMuYm9vbGVhbiAhPSBudWxsKSByZXR1cm4gJ2Jvb2xlYW4nO1xuICAgIGVsc2UgcmV0dXJuICdzdHJpbmcnO1xuICB9XG5cbiAgZml4T3B0aW9ucyhvcHRpb25zPzogQ2VsbE9wdGlvbnMpOiBDZWxsT3B0aW9ucyB7XG4gICAgcmV0dXJuIGRlZXBNZXJnZSh7fSwgdGhpcy5nbG9iYWxPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldCh2YWx1ZTogdW5rbm93biwgb3B0aW9ucz86IENlbGxPcHRpb25zKTogT2JzZXJ2YWJsZTxDZWxsVGV4dFJlc3VsdD4ge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdlblR5cGUodmFsdWUsIHsgLi4ub3B0aW9ucyB9KTtcbiAgICBjb25zdCBvcHQgPSB0aGlzLmZpeE9wdGlvbnMob3B0aW9ucyk7XG4gICAgb3B0LnR5cGUgPSB0eXBlO1xuICAgIGNvbnN0IGlzU2FmZUh0bWwgPVxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mICh2YWx1ZSBhcyBOelNhZmVBbnkpPy5nZXRUeXBlTmFtZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKHZhbHVlIGFzIE56U2FmZUFueSk/LmdldFR5cGVOYW1lKCkgIT0gbnVsbDtcblxuICAgIGxldCByZXM6IENlbGxUZXh0UmVzdWx0ID0ge1xuICAgICAgcmVzdWx0OlxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFpc1NhZmVIdG1sXG4gICAgICAgICAgPyAodmFsdWUgYXMgQ2VsbFRleHRVbml0KVxuICAgICAgICAgIDogeyB0ZXh0OiB2YWx1ZSA9PSBudWxsID8gJycgOiBpc1NhZmVIdG1sID8gdmFsdWUgOiBgJHt2YWx1ZX1gIH0sXG4gICAgICBvcHRpb25zOiBvcHRcbiAgICB9O1xuXG4gICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy53aWRnZXRzW3R5cGVdO1xuICAgIGlmICh3aWRnZXQ/LnR5cGUgPT09ICdmbicpIHtcbiAgICAgIHJlcy5yZXN1bHQgPSAod2lkZ2V0LnJlZiBhcyBDZWxsV2lkZ2V0Rm4pKHZhbHVlLCBvcHQpO1xuICAgIH1cblxuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gKHZhbHVlIGFzIENlbGxGdVZhbHVlKSh2YWx1ZSwgb3B0KSA6IG9mKHJlcy5yZXN1bHQpKS5waXBlKFxuICAgICAgbWFwKHRleHQgPT4ge1xuICAgICAgICByZXMucmVzdWx0ID0gdGV4dDtcbiAgICAgICAgbGV0IGRpY3REYXRhOiB7IHRvb2x0aXA/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYmFkZ2UnOlxuICAgICAgICAgICAgZGljdERhdGEgPSAob3B0LmJhZGdlPy5kYXRhID8/IHt9KVt2YWx1ZSBhcyBzdHJpbmddO1xuICAgICAgICAgICAgcmVzLnJlc3VsdCA9IHsgY29sb3I6ICdkZWZhdWx0JywgLi4uZGljdERhdGEgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgICAgICBkaWN0RGF0YSA9IChvcHQudGFnPy5kYXRhID8/IHt9KVt2YWx1ZSBhcyBzdHJpbmddO1xuICAgICAgICAgICAgcmVzLnJlc3VsdCA9IGRpY3REYXRhIGFzIENlbGxUZXh0VW5pdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VudW0nOlxuICAgICAgICAgICAgcmVzLnJlc3VsdCA9IHsgdGV4dDogKG9wdC5lbnVtID8/IHt9KVt2YWx1ZSBhcyBzdHJpbmddIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgICAgIHJlcy5zYWZlSHRtbCA9IG9wdC5odG1sPy5zYWZlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGlmIChpc1NhZmVIdG1sKSByZXMuc2FmZUh0bWwgPSAnc2FmZUh0bWwnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0eXBlID09PSAnYmFkZ2UnIHx8IHR5cGUgPT09ICd0YWcnKSAmJiBkaWN0RGF0YT8udG9vbHRpcCAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzLm9wdGlvbnMudG9vbHRpcCA9IGRpY3REYXRhLnRvb2x0aXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5tYXNrICE9IG51bGwpIHtcbiAgICAgICAgICByZXMucmVzdWx0LnRleHQgPSBmb3JtYXRNYXNrKHJlcy5yZXN1bHQudGV4dCBhcyBzdHJpbmcsIG9wdC5tYXNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=