import { inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export const ALAIN_I18N_TOKEN = new InjectionToken('alainI18nToken', {
    providedIn: 'root',
    factory: () => new AlainI18NServiceFake(inject(AlainConfigService))
});
export class AlainI18nBaseService {
    get change() {
        return this._change$.asObservable().pipe(filter(w => w != null));
    }
    get defaultLang() {
        return this._defaultLang;
    }
    get currentLang() {
        return this._currentLang;
    }
    get data() {
        return this._data;
    }
    constructor(cogSrv) {
        this._change$ = new BehaviorSubject(null);
        this._currentLang = '';
        this._defaultLang = '';
        this._data = {};
        this.cog = cogSrv.merge('themeI18n', {
            interpolation: ['{{', '}}']
        });
    }
    /**
     * Flattened data source
     *
     * @example
     * {
     *   "name": "Name",
     *   "sys": {
     *     "": "System",
     *     "title": "Title"
     *   }
     * }
     * =>
     * {
     *   "name": "Name",
     *   "sys": "System",
     *   "sys.title": "Title"
     * }
     */
    flatData(data, parentKey) {
        const res = {};
        for (const key of Object.keys(data)) {
            const value = data[key];
            if (typeof value === 'object') {
                const child = this.flatData(value, parentKey.concat(key));
                Object.keys(child).forEach(childKey => (res[childKey] = child[childKey]));
            }
            else {
                res[(key ? parentKey.concat(key) : parentKey).join('.')] = `${value}`;
            }
        }
        return res;
    }
    fanyi(path, params) {
        let content = this._data[path] || '';
        if (!content)
            return path;
        if (params) {
            const interpolation = this.cog.interpolation;
            Object.keys(params).forEach(key => (content = content.replace(new RegExp(`${interpolation[0]}\s?${key}\s?${interpolation[1]}`, 'g'), `${params[key]}`)));
        }
        return content;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18nBaseService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18nBaseService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18nBaseService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; } });
export class AlainI18NServiceFake extends AlainI18nBaseService {
    use(lang, data) {
        this._data = this.flatData(data ?? {}, []);
        this._currentLang = lang;
        this._change$.next(lang);
    }
    getLangs() {
        return [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18NServiceFake, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18NServiceFake, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18NServiceFake, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNELE9BQU8sRUFBRSxrQkFBa0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBc0Q5RSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsZ0JBQWdCLEVBQUU7SUFDckYsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Q0FDcEUsQ0FBQyxDQUFDO0FBR0gsTUFBTSxPQUFnQixvQkFBb0I7SUFNeEMsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQXVCLENBQUM7SUFDekYsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVksTUFBMEI7UUFqQjVCLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsSUFBSSxDQUFDLENBQUM7UUFDcEQsaUJBQVksR0FBVyxFQUFFLENB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Q29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVGhlbWVJMThuQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICcuLi9odHRwL2h0dHAuY2xpZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xuXG4gIC8qKlxuICAgKiBDYWxsIGB1c2VgIHRvIHRyaWdnZXIgY2hhbmdlIG5vdGlmaWNhdGlvblxuICAgKlxuICAgKiDosIPnlKggYHVzZWAg6Kem5Y+R5Y+Y5pu06YCa55+lXG4gICAqL1xuICByZWFkb25seSBjaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IGxhbmd1YWdlXG4gICAqXG4gICAqIOiOt+WPlum7mOiupOivreiogFxuICAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdExhbmc6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICpcbiAgICog6I635Y+W5b2T5YmN6K+t6KiAXG4gICAqL1xuICByZWFkb25seSBjdXJyZW50TGFuZzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGFuZ2UgbGFuZ3VhZ2VcbiAgICpcbiAgICog5Y+Y5pu06K+t6KiAXG4gICAqXG4gICAqIEBwYXJhbSBlbWl0IOaYr+WQpuinpuWPkSBgY2hhbmdlYO+8jOm7mOiupO+8mnRydWUgOyBTaG91bGQgYmUgcmVtb3ZlZCwgcGxlYXNlIHVzZSBgY2hhbmdlYCBldmVudCBpbnN0ZWFkLlxuICAgKi9cbiAgdXNlKGxhbmc6IHN0cmluZywgZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJuIHRvIHRoZSBjdXJyZW50IGxhbmd1YWdlIGxpc3RcbiAgICpcbiAgICog6L+U5Zue5b2T5YmN6K+t6KiA5YiX6KGoXG4gICAqL1xuICBnZXRMYW5ncygpOiBOelNhZmVBbnlbXTtcblxuICAvKipcbiAgICogVHJhbnNsYXRlIOe/u+ivkVxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIOaooeadv+aJgOmcgOimgeeahOWPguaVsOWvueixoVxuICAgKiBAcGFyYW0gaXNTYWZlIOaYr+WQpui/lOWbnuWuieWFqOWtl+espu+8jOiHquWKqOiwg+eUqCBgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWxgOyBTaG91bGQgYmUgcmVtb3ZlZCwgSWYgeW91IG5lZWQgU2FmZUh0bWwgc3VwcG9ydCwgcGxlYXNlIHVzZSBgfCBodG1sYCBwaXBlIGluc3RlYWQuXG4gICAqL1xuICBmYW55aShwYXRoOiBzdHJpbmcsIHBhcmFtcz86IHVua25vd24pOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBTEFJTl9JMThOX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEFsYWluSTE4TlNlcnZpY2U+KCdhbGFpbkkxOG5Ub2tlbicsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiAoKSA9PiBuZXcgQWxhaW5JMThOU2VydmljZUZha2UoaW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSkpXG59KTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFsYWluSTE4bkJhc2VTZXJ2aWNlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBBbGFpblRoZW1lSTE4bkNvbmZpZztcbiAgcHJvdGVjdGVkIF9jaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgcHJvdGVjdGVkIF9jdXJyZW50TGFuZzogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBfZGVmYXVsdExhbmc6IHN0cmluZyA9ICcnO1xuICBwcm90ZWN0ZWQgX2RhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSkgYXMgT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICB9XG4gIGdldCBkZWZhdWx0TGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZztcbiAgfVxuICBnZXQgY3VycmVudExhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmc7XG4gIH1cbiAgZ2V0IGRhdGEoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuY29nID0gY29nU3J2Lm1lcmdlKCd0aGVtZUkxOG4nLCB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiBbJ3t7JywgJ319J11cbiAgICB9KSE7XG4gIH1cblxuICAvKipcbiAgICogRmxhdHRlbmVkIGRhdGEgc291cmNlXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHtcbiAgICogICBcIm5hbWVcIjogXCJOYW1lXCIsXG4gICAqICAgXCJzeXNcIjoge1xuICAgKiAgICAgXCJcIjogXCJTeXN0ZW1cIixcbiAgICogICAgIFwidGl0bGVcIjogXCJUaXRsZVwiXG4gICAqICAgfVxuICAgKiB9XG4gICAqID0+XG4gICAqIHtcbiAgICogICBcIm5hbWVcIjogXCJOYW1lXCIsXG4gICAqICAgXCJzeXNcIjogXCJTeXN0ZW1cIixcbiAgICogICBcInN5cy50aXRsZVwiOiBcIlRpdGxlXCJcbiAgICogfVxuICAgKi9cbiAgZmxhdERhdGEoZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHBhcmVudEtleTogc3RyaW5nW10pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICBjb25zdCByZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZmxhdERhdGEodmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHBhcmVudEtleS5jb25jYXQoa2V5KSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGNoaWxkKS5mb3JFYWNoKGNoaWxkS2V5ID0+IChyZXNbY2hpbGRLZXldID0gY2hpbGRbY2hpbGRLZXldKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNbKGtleSA/IHBhcmVudEtleS5jb25jYXQoa2V5KSA6IHBhcmVudEtleSkuam9pbignLicpXSA9IGAke3ZhbHVlfWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBhYnN0cmFjdCB1c2UobGFuZzogc3RyaW5nLCBkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkO1xuXG4gIGFic3RyYWN0IGdldExhbmdzKCk6IE56U2FmZUFueVtdO1xuXG4gIGZhbnlpKHBhdGg6IHN0cmluZywgcGFyYW1zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBzdHJpbmcge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZGF0YVtwYXRoXSB8fCAnJztcbiAgICBpZiAoIWNvbnRlbnQpIHJldHVybiBwYXRoO1xuXG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IHRoaXMuY29nLmludGVycG9sYXRpb24hITtcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChcbiAgICAgICAga2V5ID0+XG4gICAgICAgICAgKGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICBuZXcgUmVnRXhwKGAke2ludGVycG9sYXRpb25bMF19XFxzPyR7a2V5fVxccz8ke2ludGVycG9sYXRpb25bMV19YCwgJ2cnKSxcbiAgICAgICAgICAgIGAke3BhcmFtc1trZXldfWBcbiAgICAgICAgICApKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpbkkxOE5TZXJ2aWNlRmFrZSBleHRlbmRzIEFsYWluSTE4bkJhc2VTZXJ2aWNlIHtcbiAgdXNlKGxhbmc6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5mbGF0RGF0YShkYXRhID8/IHt9LCBbXSk7XG4gICAgdGhpcy5fY3VycmVudExhbmcgPSBsYW5nO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dChsYW5nKTtcbiAgfVxuXG4gIGdldExhbmdzKCk6IE56U2FmZUFueVtdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiJdfQ==