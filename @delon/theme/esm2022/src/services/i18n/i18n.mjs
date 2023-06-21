import { inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export const ALAIN_I18N_TOKEN = new InjectionToken('alainI18nToken', {
    providedIn: 'root',
    factory: () => new AlainI18NServiceFake(inject(AlainConfigService))
});
class AlainI18nBaseService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: AlainI18nBaseService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: AlainI18nBaseService }); }
}
export { AlainI18nBaseService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: AlainI18nBaseService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; } });
class AlainI18NServiceFake extends AlainI18nBaseService {
    use(lang, data) {
        this._data = this.flatData(data ?? {}, []);
        this._currentLang = lang;
        this._change$.next(lang);
    }
    getLangs() {
        return [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: AlainI18NServiceFake, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: AlainI18NServiceFake, providedIn: 'root' }); }
}
export { AlainI18NServiceFake };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: AlainI18NServiceFake, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNELE9BQU8sRUFBRSxrQkFBa0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBc0Q5RSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsZ0JBQWdCLEVBQUU7SUFDckYsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Q0FDcEUsQ0FBQyxDQUFDO0FBRUgsTUFDc0Isb0JBQW9CO0lBTXhDLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUF1QixDQUFDO0lBQ3pGLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxZQUFZLE1BQTBCO1FBakI1QixhQUFRLEdBQUcsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3BELGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FB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TSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblRoZW1lSTE4bkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnLi4vaHR0cC9odHRwLmNsaWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5JMThOU2VydmljZSB7XG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcblxuICAvKipcbiAgICogQ2FsbCBgdXNlYCB0byB0cmlnZ2VyIGNoYW5nZSBub3RpZmljYXRpb25cbiAgICpcbiAgICog6LCD55SoIGB1c2VgIOinpuWPkeWPmOabtOmAmuefpVxuICAgKi9cbiAgcmVhZG9ubHkgY2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBsYW5ndWFnZVxuICAgKlxuICAgKiDojrflj5bpu5jorqTor63oqIBcbiAgICovXG4gIHJlYWRvbmx5IGRlZmF1bHRMYW5nOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IGxhbmd1YWdlXG4gICAqXG4gICAqIOiOt+WPluW9k+WJjeivreiogFxuICAgKi9cbiAgcmVhZG9ubHkgY3VycmVudExhbmc6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hhbmdlIGxhbmd1YWdlXG4gICAqXG4gICAqIOWPmOabtOivreiogFxuICAgKlxuICAgKiBAcGFyYW0gZW1pdCDmmK/lkKbop6blj5EgYGNoYW5nZWDvvIzpu5jorqTvvJp0cnVlIDsgU2hvdWxkIGJlIHJlbW92ZWQsIHBsZWFzZSB1c2UgYGNoYW5nZWAgZXZlbnQgaW5zdGVhZC5cbiAgICovXG4gIHVzZShsYW5nOiBzdHJpbmcsIGRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybiB0byB0aGUgY3VycmVudCBsYW5ndWFnZSBsaXN0XG4gICAqXG4gICAqIOi/lOWbnuW9k+WJjeivreiogOWIl+ihqFxuICAgKi9cbiAgZ2V0TGFuZ3MoKTogTnpTYWZlQW55W107XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZSDnv7vor5FcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyDmqKHmnb/miYDpnIDopoHnmoTlj4LmlbDlr7nosaFcbiAgICogQHBhcmFtIGlzU2FmZSDmmK/lkKbov5Tlm57lronlhajlrZfnrKbvvIzoh6rliqjosIPnlKggYGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sYDsgU2hvdWxkIGJlIHJlbW92ZWQsIElmIHlvdSBuZWVkIFNhZmVIdG1sIHN1cHBvcnQsIHBsZWFzZSB1c2UgYHwgaHRtbGAgcGlwZSBpbnN0ZWFkLlxuICAgKi9cbiAgZmFueWkocGF0aDogc3RyaW5nLCBwYXJhbXM/OiB1bmtub3duKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPignYWxhaW5JMThuVG9rZW4nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogKCkgPT4gbmV3IEFsYWluSTE4TlNlcnZpY2VGYWtlKGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpKVxufSk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbGFpbkkxOG5CYXNlU2VydmljZSBpbXBsZW1lbnRzIEFsYWluSTE4TlNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5UaGVtZUkxOG5Db25maWc7XG4gIHByb3RlY3RlZCBfY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIHByb3RlY3RlZCBfY3VycmVudExhbmc6IHN0cmluZyA9ICcnO1xuICBwcm90ZWN0ZWQgX2RlZmF1bHRMYW5nOiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIF9kYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpIGFzIE9ic2VydmFibGU8c3RyaW5nPjtcbiAgfVxuICBnZXQgZGVmYXVsdExhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmc7XG4gIH1cbiAgZ2V0IGN1cnJlbnRMYW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5nO1xuICB9XG4gIGdldCBkYXRhKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGNvZ1Nydi5tZXJnZSgndGhlbWVJMThuJywge1xuICAgICAgaW50ZXJwb2xhdGlvbjogWyd7eycsICd9fSddXG4gICAgfSkhO1xuICB9XG5cbiAgLyoqXG4gICAqIEZsYXR0ZW5lZCBkYXRhIHNvdXJjZVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAqICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxuICAgKiAgIFwic3lzXCI6IHtcbiAgICogICAgIFwiXCI6IFwiU3lzdGVtXCIsXG4gICAqICAgICBcInRpdGxlXCI6IFwiVGl0bGVcIlxuICAgKiAgIH1cbiAgICogfVxuICAgKiA9PlxuICAgKiB7XG4gICAqICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxuICAgKiAgIFwic3lzXCI6IFwiU3lzdGVtXCIsXG4gICAqICAgXCJzeXMudGl0bGVcIjogXCJUaXRsZVwiXG4gICAqIH1cbiAgICovXG4gIGZsYXREYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBwYXJlbnRLZXk6IHN0cmluZ1tdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgY29uc3QgcmVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmZsYXREYXRhKHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBwYXJlbnRLZXkuY29uY2F0KGtleSkpO1xuICAgICAgICBPYmplY3Qua2V5cyhjaGlsZCkuZm9yRWFjaChjaGlsZEtleSA9PiAocmVzW2NoaWxkS2V5XSA9IGNoaWxkW2NoaWxkS2V5XSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzWyhrZXkgPyBwYXJlbnRLZXkuY29uY2F0KGtleSkgOiBwYXJlbnRLZXkpLmpvaW4oJy4nKV0gPSBgJHt2YWx1ZX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgYWJzdHJhY3QgdXNlKGxhbmc6IHN0cmluZywgZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZDtcblxuICBhYnN0cmFjdCBnZXRMYW5ncygpOiBOelNhZmVBbnlbXTtcblxuICBmYW55aShwYXRoOiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogc3RyaW5nIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2RhdGFbcGF0aF0gfHwgJyc7XG4gICAgaWYgKCFjb250ZW50KSByZXR1cm4gcGF0aDtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGNvbnN0IGludGVycG9sYXRpb24gPSB0aGlzLmNvZy5pbnRlcnBvbGF0aW9uISE7XG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goXG4gICAgICAgIGtleSA9PlxuICAgICAgICAgIChjb250ZW50ID0gY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgbmV3IFJlZ0V4cChgJHtpbnRlcnBvbGF0aW9uWzBdfVxccz8ke2tleX1cXHM/JHtpbnRlcnBvbGF0aW9uWzFdfWAsICdnJyksXG4gICAgICAgICAgICBgJHtwYXJhbXNba2V5XX1gXG4gICAgICAgICAgKSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5JMThOU2VydmljZUZha2UgZXh0ZW5kcyBBbGFpbkkxOG5CYXNlU2VydmljZSB7XG4gIHVzZShsYW5nOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZCB7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZmxhdERhdGEoZGF0YSA/PyB7fSwgW10pO1xuICAgIHRoaXMuX2N1cnJlbnRMYW5nID0gbGFuZztcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQobGFuZyk7XG4gIH1cblxuICBnZXRMYW5ncygpOiBOelNhZmVBbnlbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iXX0=