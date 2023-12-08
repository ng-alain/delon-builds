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
        if (!params)
            return content;
        if (typeof params === 'object') {
            const interpolation = this.cog.interpolation;
            const objParams = params;
            Object.keys(objParams).forEach(key => (content = content.replace(new RegExp(`${interpolation[0]}\\s?${key}\\s?${interpolation[1]}`, 'g'), `${objParams[key]}`)));
        }
        (Array.isArray(params) ? params : [params]).forEach((item, index) => (content = content.replace(new RegExp(`\\{\\s?${index}\\s?\\}`, 'g'), `${item}`)));
        return content;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlainI18nBaseService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlainI18nBaseService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlainI18nBaseService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.AlainConfigService }] });
export class AlainI18NServiceFake extends AlainI18nBaseService {
    use(lang, data) {
        this._data = this.flatData(data ?? {}, []);
        this._currentLang = lang;
        this._change$.next(lang);
    }
    getLangs() {
        return [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlainI18NServiceFake, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlainI18NServiceFake, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AlainI18NServiceFake, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNELE9BQU8sRUFBRSxrQkFBa0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBc0Q5RSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsZ0JBQWdCLEVBQUU7SUFDckYsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Q0FDcEUsQ0FBQyxDQUFDO0FBR0gsTUFBTSxPQUFnQixvQkFBb0I7SUFNeEMsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQXVCLENBQUM7SUFDekYsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVksTUFBMEI7UUFqQjVCLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsSUFBSSxDQUFDLENBQUM7UUFDcEQsaUJBQVksR0FBVyxFQUFFLENB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O0lBQzVELEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBNkI7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7OEdBVFUsb0JBQW9CO2tIQUFwQixvQkFBb0IsY0FEUCxNQUFNOzsyRkFDbkIsb0JBQW9CO2tCQURoQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5UaGVtZUkxOG5Db25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJy4uL2h0dHAvaHR0cC5jbGllbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluSTE4TlNlcnZpY2Uge1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG5cbiAgLyoqXG4gICAqIENhbGwgYHVzZWAgdG8gdHJpZ2dlciBjaGFuZ2Ugbm90aWZpY2F0aW9uXG4gICAqXG4gICAqIOiwg+eUqCBgdXNlYCDop6blj5Hlj5jmm7TpgJrnn6VcbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmF1bHQgbGFuZ3VhZ2VcbiAgICpcbiAgICog6I635Y+W6buY6K6k6K+t6KiAXG4gICAqL1xuICByZWFkb25seSBkZWZhdWx0TGFuZzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBsYW5ndWFnZVxuICAgKlxuICAgKiDojrflj5blvZPliY3or63oqIBcbiAgICovXG4gIHJlYWRvbmx5IGN1cnJlbnRMYW5nOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoYW5nZSBsYW5ndWFnZVxuICAgKlxuICAgKiDlj5jmm7Tor63oqIBcbiAgICpcbiAgICogQHBhcmFtIGVtaXQg5piv5ZCm6Kem5Y+RIGBjaGFuZ2Vg77yM6buY6K6k77yadHJ1ZSA7IFNob3VsZCBiZSByZW1vdmVkLCBwbGVhc2UgdXNlIGBjaGFuZ2VgIGV2ZW50IGluc3RlYWQuXG4gICAqL1xuICB1c2UobGFuZzogc3RyaW5nLCBkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdG8gdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgbGlzdFxuICAgKlxuICAgKiDov5Tlm57lvZPliY3or63oqIDliJfooahcbiAgICovXG4gIGdldExhbmdzKCk6IE56U2FmZUFueVtdO1xuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGUg57+76K+RXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMg5qih5p2/5omA6ZyA6KaB55qE5Y+C5pWw5a+56LGhXG4gICAqIEBwYXJhbSBpc1NhZmUg5piv5ZCm6L+U5Zue5a6J5YWo5a2X56ym77yM6Ieq5Yqo6LCD55SoIGBieXBhc3NTZWN1cml0eVRydXN0SHRtbGA7IFNob3VsZCBiZSByZW1vdmVkLCBJZiB5b3UgbmVlZCBTYWZlSHRtbCBzdXBwb3J0LCBwbGVhc2UgdXNlIGB8IGh0bWxgIHBpcGUgaW5zdGVhZC5cbiAgICovXG4gIGZhbnlpKHBhdGg6IHN0cmluZywgcGFyYW1zPzogdW5rbm93biB8IHVua25vd25bXSk6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX0kxOE5fVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWxhaW5JMThOU2VydmljZT4oJ2FsYWluSTE4blRva2VuJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6ICgpID0+IG5ldyBBbGFpbkkxOE5TZXJ2aWNlRmFrZShpbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSlcbn0pO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWxhaW5JMThuQmFzZVNlcnZpY2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluVGhlbWVJMThuQ29uZmlnO1xuICBwcm90ZWN0ZWQgX2NoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRMYW5nOiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIF9kZWZhdWx0TGFuZzogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBfZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQuYXNPYnNlcnZhYmxlKCkucGlwZShmaWx0ZXIodyA9PiB3ICE9IG51bGwpKSBhcyBPYnNlcnZhYmxlPHN0cmluZz47XG4gIH1cbiAgZ2V0IGRlZmF1bHRMYW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRMYW5nO1xuICB9XG4gIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZztcbiAgfVxuICBnZXQgZGF0YSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBjb2dTcnYubWVyZ2UoJ3RoZW1lSTE4bicsIHtcbiAgICAgIGludGVycG9sYXRpb246IFsne3snLCAnfX0nXVxuICAgIH0pITtcbiAgfVxuXG4gIC8qKlxuICAgKiBGbGF0dGVuZWQgZGF0YSBzb3VyY2VcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgKiAgIFwibmFtZVwiOiBcIk5hbWVcIixcbiAgICogICBcInN5c1wiOiB7XG4gICAqICAgICBcIlwiOiBcIlN5c3RlbVwiLFxuICAgKiAgICAgXCJ0aXRsZVwiOiBcIlRpdGxlXCJcbiAgICogICB9XG4gICAqIH1cbiAgICogPT5cbiAgICoge1xuICAgKiAgIFwibmFtZVwiOiBcIk5hbWVcIixcbiAgICogICBcInN5c1wiOiBcIlN5c3RlbVwiLFxuICAgKiAgIFwic3lzLnRpdGxlXCI6IFwiVGl0bGVcIlxuICAgKiB9XG4gICAqL1xuICBmbGF0RGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcGFyZW50S2V5OiBzdHJpbmdbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIGNvbnN0IHJlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5mbGF0RGF0YSh2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcGFyZW50S2V5LmNvbmNhdChrZXkpKTtcbiAgICAgICAgT2JqZWN0LmtleXMoY2hpbGQpLmZvckVhY2goY2hpbGRLZXkgPT4gKHJlc1tjaGlsZEtleV0gPSBjaGlsZFtjaGlsZEtleV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1soa2V5ID8gcGFyZW50S2V5LmNvbmNhdChrZXkpIDogcGFyZW50S2V5KS5qb2luKCcuJyldID0gYCR7dmFsdWV9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGFic3RyYWN0IHVzZShsYW5nOiBzdHJpbmcsIGRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgZ2V0TGFuZ3MoKTogTnpTYWZlQW55W107XG5cbiAgZmFueWkocGF0aDogc3RyaW5nLCBwYXJhbXM/OiB1bmtub3duIHwgdW5rbm93bltdKTogc3RyaW5nIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2RhdGFbcGF0aF0gfHwgJyc7XG4gICAgaWYgKCFjb250ZW50KSByZXR1cm4gcGF0aDtcblxuICAgIGlmICghcGFyYW1zKSByZXR1cm4gY29udGVudDtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IHRoaXMuY29nLmludGVycG9sYXRpb24hITtcbiAgICAgIGNvbnN0IG9ialBhcmFtcyA9IHBhcmFtcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgIE9iamVjdC5rZXlzKG9ialBhcmFtcykuZm9yRWFjaChcbiAgICAgICAga2V5ID0+XG4gICAgICAgICAgKGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICBuZXcgUmVnRXhwKGAke2ludGVycG9sYXRpb25bMF19XFxcXHM/JHtrZXl9XFxcXHM/JHtpbnRlcnBvbGF0aW9uWzFdfWAsICdnJyksXG4gICAgICAgICAgICBgJHtvYmpQYXJhbXNba2V5XX1gXG4gICAgICAgICAgKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgKEFycmF5LmlzQXJyYXkocGFyYW1zKSA/IHBhcmFtcyA6IFtwYXJhbXNdKS5mb3JFYWNoKFxuICAgICAgKGl0ZW0sIGluZGV4KSA9PiAoY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxce1xcXFxzPyR7aW5kZXh9XFxcXHM/XFxcXH1gLCAnZycpLCBgJHtpdGVtfWApKVxuICAgICk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpbkkxOE5TZXJ2aWNlRmFrZSBleHRlbmRzIEFsYWluSTE4bkJhc2VTZXJ2aWNlIHtcbiAgdXNlKGxhbmc6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5mbGF0RGF0YShkYXRhID8/IHt9LCBbXSk7XG4gICAgdGhpcy5fY3VycmVudExhbmcgPSBsYW5nO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dChsYW5nKTtcbiAgfVxuXG4gIGdldExhbmdzKCk6IE56U2FmZUFueVtdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiJdfQ==