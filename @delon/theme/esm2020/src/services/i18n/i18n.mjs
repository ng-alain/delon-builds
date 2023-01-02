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
    constructor(cogSrv) {
        this._change$ = new BehaviorSubject(null);
        this._currentLang = '';
        this._defaultLang = '';
        this._data = {};
        this.cog = cogSrv.merge('themeI18n', {
            interpolation: ['{{', '}}']
        });
    }
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
}
AlainI18nBaseService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AlainI18nBaseService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
AlainI18nBaseService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AlainI18nBaseService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AlainI18nBaseService, decorators: [{
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
}
AlainI18NServiceFake.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AlainI18NServiceFake, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
AlainI18NServiceFake.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AlainI18NServiceFake, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AlainI18NServiceFake, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNELE9BQU8sRUFBRSxrQkFBa0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBc0Q5RSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsZ0JBQWdCLEVBQUU7SUFDckYsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Q0FDcEUsQ0FBQyxDQUFDO0FBR0gsTUFBTSxPQUFnQixvQkFBb0I7SUFtQnhDLFlBQVksTUFBMEI7UUFqQjVCLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsSUFBSSxDQUFDLENBQUM7UUFDcEQsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUEyQixFQUFFLENBQUM7UUFlM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNuQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzVCLENBQUUsQ0FBQztJQUNOLENBQUM7SUFqQkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQXVCLENB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ZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5UaGVtZUkxOG5Db25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJy4uL2h0dHAvaHR0cC5jbGllbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluSTE4TlNlcnZpY2Uge1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG5cbiAgLyoqXG4gICAqIENhbGwgYHVzZWAgdG8gdHJpZ2dlciBjaGFuZ2Ugbm90aWZpY2F0aW9uXG4gICAqXG4gICAqIOiwg+eUqCBgdXNlYCDop6blj5Hlj5jmm7TpgJrnn6VcbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmF1bHQgbGFuZ3VhZ2VcbiAgICpcbiAgICog6I635Y+W6buY6K6k6K+t6KiAXG4gICAqL1xuICByZWFkb25seSBkZWZhdWx0TGFuZzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBsYW5ndWFnZVxuICAgKlxuICAgKiDojrflj5blvZPliY3or63oqIBcbiAgICovXG4gIHJlYWRvbmx5IGN1cnJlbnRMYW5nOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoYW5nZSBsYW5ndWFnZVxuICAgKlxuICAgKiDlj5jmm7Tor63oqIBcbiAgICpcbiAgICogQHBhcmFtIGVtaXQg5piv5ZCm6Kem5Y+RIGBjaGFuZ2Vg77yM6buY6K6k77yadHJ1ZSA7IFNob3VsZCBiZSByZW1vdmVkLCBwbGVhc2UgdXNlIGBjaGFuZ2VgIGV2ZW50IGluc3RlYWQuXG4gICAqL1xuICB1c2UobGFuZzogc3RyaW5nLCBkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdG8gdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgbGlzdFxuICAgKlxuICAgKiDov5Tlm57lvZPliY3or63oqIDliJfooahcbiAgICovXG4gIGdldExhbmdzKCk6IE56U2FmZUFueVtdO1xuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGUg57+76K+RXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMg5qih5p2/5omA6ZyA6KaB55qE5Y+C5pWw5a+56LGhXG4gICAqIEBwYXJhbSBpc1NhZmUg5piv5ZCm6L+U5Zue5a6J5YWo5a2X56ym77yM6Ieq5Yqo6LCD55SoIGBieXBhc3NTZWN1cml0eVRydXN0SHRtbGA7IFNob3VsZCBiZSByZW1vdmVkLCBJZiB5b3UgbmVlZCBTYWZlSHRtbCBzdXBwb3J0LCBwbGVhc2UgdXNlIGB8IGh0bWxgIHBpcGUgaW5zdGVhZC5cbiAgICovXG4gIGZhbnlpKHBhdGg6IHN0cmluZywgcGFyYW1zPzogdW5rbm93bik6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX0kxOE5fVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWxhaW5JMThOU2VydmljZT4oJ2FsYWluSTE4blRva2VuJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6ICgpID0+IG5ldyBBbGFpbkkxOE5TZXJ2aWNlRmFrZShpbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSlcbn0pO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWxhaW5JMThuQmFzZVNlcnZpY2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluVGhlbWVJMThuQ29uZmlnO1xuICBwcm90ZWN0ZWQgX2NoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRMYW5nOiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIF9kZWZhdWx0TGFuZzogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBfZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQuYXNPYnNlcnZhYmxlKCkucGlwZShmaWx0ZXIodyA9PiB3ICE9IG51bGwpKSBhcyBPYnNlcnZhYmxlPHN0cmluZz47XG4gIH1cbiAgZ2V0IGRlZmF1bHRMYW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRMYW5nO1xuICB9XG4gIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZztcbiAgfVxuICBnZXQgZGF0YSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBjb2dTcnYubWVyZ2UoJ3RoZW1lSTE4bicsIHtcbiAgICAgIGludGVycG9sYXRpb246IFsne3snLCAnfX0nXVxuICAgIH0pITtcbiAgfVxuXG4gIC8qKlxuICAgKiBGbGF0dGVuZWQgZGF0YSBzb3VyY2VcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICoge1xuICAgKiAgIFwibmFtZVwiOiBcIk5hbWVcIixcbiAgICogICBcInN5c1wiOiB7XG4gICAqICAgICBcIlwiOiBcIlN5c3RlbVwiLFxuICAgKiAgICAgXCJ0aXRsZVwiOiBcIlRpdGxlXCJcbiAgICogICB9XG4gICAqIH1cbiAgICogPT5cbiAgICoge1xuICAgKiAgIFwibmFtZVwiOiBcIk5hbWVcIixcbiAgICogICBcInN5c1wiOiBcIlN5c3RlbVwiLFxuICAgKiAgIFwic3lzLnRpdGxlXCI6IFwiVGl0bGVcIlxuICAgKiB9XG4gICAqL1xuICBmbGF0RGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcGFyZW50S2V5OiBzdHJpbmdbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIGNvbnN0IHJlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5mbGF0RGF0YSh2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcGFyZW50S2V5LmNvbmNhdChrZXkpKTtcbiAgICAgICAgT2JqZWN0LmtleXMoY2hpbGQpLmZvckVhY2goY2hpbGRLZXkgPT4gKHJlc1tjaGlsZEtleV0gPSBjaGlsZFtjaGlsZEtleV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1soa2V5ID8gcGFyZW50S2V5LmNvbmNhdChrZXkpIDogcGFyZW50S2V5KS5qb2luKCcuJyldID0gYCR7dmFsdWV9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGFic3RyYWN0IHVzZShsYW5nOiBzdHJpbmcsIGRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgZ2V0TGFuZ3MoKTogTnpTYWZlQW55W107XG5cbiAgZmFueWkocGF0aDogc3RyaW5nLCBwYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHN0cmluZyB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9kYXRhW3BhdGhdIHx8ICcnO1xuICAgIGlmICghY29udGVudCkgcmV0dXJuIHBhdGg7XG5cbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gdGhpcy5jb2cuaW50ZXJwb2xhdGlvbiEhO1xuICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKFxuICAgICAgICBrZXkgPT5cbiAgICAgICAgICAoY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgIG5ldyBSZWdFeHAoYCR7aW50ZXJwb2xhdGlvblswXX1cXHM/JHtrZXl9XFxzPyR7aW50ZXJwb2xhdGlvblsxXX1gLCAnZycpLFxuICAgICAgICAgICAgYCR7cGFyYW1zW2tleV19YFxuICAgICAgICAgICkpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluSTE4TlNlcnZpY2VGYWtlIGV4dGVuZHMgQWxhaW5JMThuQmFzZVNlcnZpY2Uge1xuICB1c2UobGFuZzogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQge1xuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmZsYXREYXRhKGRhdGEgPz8ge30sIFtdKTtcbiAgICB0aGlzLl9jdXJyZW50TGFuZyA9IGxhbmc7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KGxhbmcpO1xuICB9XG5cbiAgZ2V0TGFuZ3MoKTogTnpTYWZlQW55W10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIl19