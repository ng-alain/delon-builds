import { Injectable, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, of } from 'rxjs';
import { yn } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { formatDate } from '@delon/util/date-time';
import { CurrencyService, formatMask } from '@delon/util/format';
import { deepMerge } from '@delon/util/other';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export class CellService {
    constructor() {
        this.nzI18n = inject(NzI18nService);
        this.currency = inject(CurrencyService);
        this.dom = inject(DomSanitizer);
        this.configSrv = inject(AlainConfigService);
        this.globalOptions = this.configSrv.merge('cell', {
            date: { format: 'yyyy-MM-dd HH:mm:ss' },
            img: { size: 32 },
            default: { text: '-' }
        });
        this.widgets = {
            date: {
                type: 'fn',
                ref: (value, opt) => {
                    return {
                        text: formatDate(value, opt.date.format, {
                            locale: this.nzI18n.getDateLocale(),
                            customFormat: this.configSrv.get('themePipe')?.dateFormatCustom
                        })
                    };
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: CellService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: CellService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: CellService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2NlbGwvY2VsbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsR0FBRyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYW5ELE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRW1CLFdBQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsYUFBUSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxRQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxrQkFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUU7WUFDdkMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUNqQixPQUFPLEVB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SyxRQUFRO29CQUNYLElBQUksVUFBVTt3QkFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztvQkFDMUMsTUFBTTtZQUNWLENBQUM7WUFDRCxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksUUFBUSxFQUFFLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdEUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxDQUFDO1lBQ0QsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzhHQW5KVSxXQUFXO2tIQUFYLFdBQVcsY0FERSxNQUFNOzsyRkFDbkIsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgbWFwLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB5biB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UsIGZvcm1hdE1hc2sgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB0eXBlIHtcbiAgQ2VsbEZ1VmFsdWUsXG4gIENlbGxPcHRpb25zLFxuICBDZWxsVGV4dFJlc3VsdCxcbiAgQ2VsbFRleHRVbml0LFxuICBDZWxsVHlwZSxcbiAgQ2VsbFdpZGdldCxcbiAgQ2VsbFdpZGdldEZuXG59IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2VsbFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IG56STE4biA9IGluamVjdChOekkxOG5TZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW5jeSA9IGluamVjdChDdXJyZW5jeVNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvbSA9IGluamVjdChEb21TYW5pdGl6ZXIpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NydiA9IGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpO1xuICBwcml2YXRlIGdsb2JhbE9wdGlvbnMgPSB0aGlzLmNvbmZpZ1Nydi5tZXJnZSgnY2VsbCcsIHtcbiAgICBkYXRlOiB7IGZvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MnIH0sXG4gICAgaW1nOiB7IHNpemU6IDMyIH0sXG4gICAgZGVmYXVsdDogeyB0ZXh0OiAnLScgfVxuICB9KSE7XG4gIHByaXZhdGUgd2lkZ2V0czogeyBba2V5OiBzdHJpbmddOiBDZWxsV2lkZ2V0IH0gPSB7XG4gICAgZGF0ZToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiBmb3JtYXREYXRlKHZhbHVlIGFzIHN0cmluZywgb3B0LmRhdGUhLmZvcm1hdCEsIHtcbiAgICAgICAgICAgIGxvY2FsZTogdGhpcy5uekkxOG4uZ2V0RGF0ZUxvY2FsZSgpLFxuICAgICAgICAgICAgY3VzdG9tRm9ybWF0OiB0aGlzLmNvbmZpZ1Nydi5nZXQoJ3RoZW1lUGlwZScpPy5kYXRlRm9ybWF0Q3VzdG9tXG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lZ2E6IHtcbiAgICAgIHR5cGU6ICdmbicsXG4gICAgICByZWY6ICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuY3VycmVuY3kubWVnYSh2YWx1ZSBhcyBudW1iZXIsIG9wdC5tZWdhKTtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogcmVzLnZhbHVlLCB1bml0OiByZXMudW5pdEkxOG4gfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGN1cnJlbmN5OiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiAodmFsdWUsIG9wdCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiB0aGlzLmN1cnJlbmN5LmZvcm1hdCh2YWx1ZSBhcyBudW1iZXIsIG9wdC5jdXJyZW5jeSkgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNueToge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5jdXJyZW5jeS5jbnkodmFsdWUgYXMgbnVtYmVyLCBvcHQuY255KSB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgYm9vbGVhbjoge1xuICAgICAgdHlwZTogJ2ZuJyxcbiAgICAgIHJlZjogKHZhbHVlLCBvcHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoeW4odmFsdWUgYXMgYm9vbGVhbiwgb3B0LmJvb2xlYW4pKSB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICB0eXBlOiAnZm4nLFxuICAgICAgcmVmOiB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlZ2lzdGVyV2lkZ2V0KGtleTogc3RyaW5nLCB3aWRnZXQ6IFR5cGU8dW5rbm93bj4pOiB2b2lkIHtcbiAgICB0aGlzLndpZGdldHNba2V5XSA9IHsgdHlwZTogJ3dpZGdldCcsIHJlZjogd2lkZ2V0IH07XG4gIH1cblxuICBnZXRXaWRnZXQoa2V5OiBzdHJpbmcpOiBDZWxsV2lkZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXRzW2tleV07XG4gIH1cblxuICBwcml2YXRlIGdlblR5cGUodmFsdWU6IHVua25vd24sIG9wdGlvbnM6IENlbGxPcHRpb25zKTogQ2VsbFR5cGUge1xuICAgIGlmIChvcHRpb25zLnR5cGUgIT0gbnVsbCkgcmV0dXJuIG9wdGlvbnMudHlwZTtcblxuICAgIGNvbnN0IHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcbiAgICAvLyBXaGVuIGlzIHRpbWVzdGFtcFxuICAgIGlmICh0eXBlT2YgPT09ICdudW1iZXInICYmIC9eWzAtOV17MTN9JC9nLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkgcmV0dXJuICdkYXRlJztcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IG9wdGlvbnMuZGF0ZSAhPSBudWxsKSByZXR1cm4gJ2RhdGUnO1xuXG4gICAgLy8gQXV0byBkZXRlY3Rpb25cbiAgICBpZiAob3B0aW9ucy53aWRnZXQgIT0gbnVsbCkgcmV0dXJuICd3aWRnZXQnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMubWVnYSAhPSBudWxsKSByZXR1cm4gJ21lZ2EnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuY3VycmVuY3kgIT0gbnVsbCkgcmV0dXJuICdjdXJyZW5jeSc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5jbnkgIT0gbnVsbCkgcmV0dXJuICdjbnknO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMuaW1nICE9IG51bGwpIHJldHVybiAnaW1nJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmxpbmsgIT0gbnVsbCkgcmV0dXJuICdsaW5rJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmh0bWwgIT0gbnVsbCkgcmV0dXJuICdodG1sJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmJhZGdlICE9IG51bGwpIHJldHVybiAnYmFkZ2UnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMudGFnICE9IG51bGwpIHJldHVybiAndGFnJztcbiAgICBlbHNlIGlmIChvcHRpb25zLmNoZWNrYm94ICE9IG51bGwpIHJldHVybiAnY2hlY2tib3gnO1xuICAgIGVsc2UgaWYgKG9wdGlvbnMucmFkaW8gIT0gbnVsbCkgcmV0dXJuICdyYWRpbyc7XG4gICAgZWxzZSBpZiAob3B0aW9ucy5lbnVtICE9IG51bGwpIHJldHVybiAnZW51bSc7XG4gICAgZWxzZSBpZiAodHlwZU9mID09PSAnbnVtYmVyJykgcmV0dXJuICdudW1iZXInO1xuICAgIGVsc2UgaWYgKHR5cGVPZiA9PT0gJ2Jvb2xlYW4nIHx8IG9wdGlvbnMuYm9vbGVhbiAhPSBudWxsKSByZXR1cm4gJ2Jvb2xlYW4nO1xuICAgIGVsc2UgcmV0dXJuICdzdHJpbmcnO1xuICB9XG5cbiAgZml4T3B0aW9ucyhvcHRpb25zPzogQ2VsbE9wdGlvbnMpOiBDZWxsT3B0aW9ucyB7XG4gICAgcmV0dXJuIGRlZXBNZXJnZSh7fSwgdGhpcy5nbG9iYWxPcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldCh2YWx1ZTogdW5rbm93biwgb3B0aW9ucz86IENlbGxPcHRpb25zKTogT2JzZXJ2YWJsZTxDZWxsVGV4dFJlc3VsdD4ge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdlblR5cGUodmFsdWUsIHsgLi4ub3B0aW9ucyB9KTtcbiAgICBjb25zdCBvcHQgPSB0aGlzLmZpeE9wdGlvbnMob3B0aW9ucyk7XG4gICAgb3B0LnR5cGUgPSB0eXBlO1xuICAgIGNvbnN0IGlzU2FmZUh0bWwgPVxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mICh2YWx1ZSBhcyBOelNhZmVBbnkpPy5nZXRUeXBlTmFtZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKHZhbHVlIGFzIE56U2FmZUFueSk/LmdldFR5cGVOYW1lKCkgIT0gbnVsbDtcblxuICAgIGxldCByZXM6IENlbGxUZXh0UmVzdWx0ID0ge1xuICAgICAgcmVzdWx0OlxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFpc1NhZmVIdG1sXG4gICAgICAgICAgPyAodmFsdWUgYXMgQ2VsbFRleHRVbml0KVxuICAgICAgICAgIDogeyB0ZXh0OiB2YWx1ZSA9PSBudWxsID8gJycgOiBpc1NhZmVIdG1sID8gdmFsdWUgOiBgJHt2YWx1ZX1gIH0sXG4gICAgICBvcHRpb25zOiBvcHRcbiAgICB9O1xuXG4gICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy53aWRnZXRzW3R5cGVdO1xuICAgIGlmICh3aWRnZXQ/LnR5cGUgPT09ICdmbicpIHtcbiAgICAgIHJlcy5yZXN1bHQgPSAod2lkZ2V0LnJlZiBhcyBDZWxsV2lkZ2V0Rm4pKHZhbHVlLCBvcHQpO1xuICAgIH1cblxuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gKHZhbHVlIGFzIENlbGxGdVZhbHVlKSh2YWx1ZSwgb3B0KSA6IG9mKHJlcy5yZXN1bHQpKS5waXBlKFxuICAgICAgbWFwKHRleHQgPT4ge1xuICAgICAgICByZXMucmVzdWx0ID0gdGV4dDtcbiAgICAgICAgbGV0IGRpY3REYXRhOiB7IHRvb2x0aXA/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYmFkZ2UnOlxuICAgICAgICAgICAgZGljdERhdGEgPSAob3B0LmJhZGdlPy5kYXRhID8/IHt9KVt2YWx1ZSBhcyBzdHJpbmddO1xuICAgICAgICAgICAgcmVzLnJlc3VsdCA9IHsgY29sb3I6ICdkZWZhdWx0JywgLi4uZGljdERhdGEgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgICAgICBkaWN0RGF0YSA9IChvcHQudGFnPy5kYXRhID8/IHt9KVt2YWx1ZSBhcyBzdHJpbmddO1xuICAgICAgICAgICAgcmVzLnJlc3VsdCA9IGRpY3REYXRhIGFzIENlbGxUZXh0VW5pdDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VudW0nOlxuICAgICAgICAgICAgcmVzLnJlc3VsdCA9IHsgdGV4dDogKG9wdC5lbnVtID8/IHt9KVt2YWx1ZSBhcyBzdHJpbmddIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgICAgIHJlcy5zYWZlSHRtbCA9IG9wdC5odG1sPy5zYWZlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGlmIChpc1NhZmVIdG1sKSByZXMuc2FmZUh0bWwgPSAnc2FmZUh0bWwnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0eXBlID09PSAnYmFkZ2UnIHx8IHR5cGUgPT09ICd0YWcnKSAmJiBkaWN0RGF0YT8udG9vbHRpcCAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzLm9wdGlvbnMudG9vbHRpcCA9IGRpY3REYXRhLnRvb2x0aXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5tYXNrICE9IG51bGwpIHtcbiAgICAgICAgICByZXMucmVzdWx0LnRleHQgPSBmb3JtYXRNYXNrKHJlcy5yZXN1bHQudGV4dCBhcyBzdHJpbmcsIG9wdC5tYXNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=