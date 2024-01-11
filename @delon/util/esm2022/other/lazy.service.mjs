import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter, share } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * `LazyService` delay loading JS or CSS files.
 *
 * 延迟加载资源（js 或 css）服务
 */
export class LazyService {
    constructor(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    get change() {
        return this._notify.asObservable().pipe(share(), filter(ls => ls.length !== 0));
    }
    clear() {
        this.list = {};
        this.cached = {};
    }
    attachAttributes(el, attributes) {
        if (attributes == null)
            return;
        Object.entries(attributes).forEach(([key, value]) => {
            el.setAttribute(key, value);
        });
    }
    /**
     * Load script or style files
     */
    load(paths) {
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        const promises = [];
        paths
            .map(v => (typeof v !== 'object' ? { path: v } : v))
            .forEach(item => {
            if (item.path.endsWith('.js')) {
                promises.push(this.loadScript(item.path, item.options));
            }
            else {
                promises.push(this.loadStyle(item.path, item.options));
            }
        });
        return Promise.all(promises).then(res => {
            this._notify.next(res);
            return Promise.resolve(res);
        });
    }
    loadScript(path, innerContent, attributes) {
        const options = typeof innerContent === 'object'
            ? innerContent
            : {
                innerContent,
                attributes
            };
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve({ ...this.cached[path], status: 'loading' });
                return;
            }
            this.list[path] = true;
            const onSuccess = (item) => {
                this.cached[path] = item;
                resolve(item);
                this._notify.next([item]);
            };
            const node = this.doc.createElement('script');
            node.type = 'text/javascript';
            node.src = path;
            this.attachAttributes(node, options.attributes);
            if (options.innerContent) {
                node.innerHTML = options.innerContent;
            }
            node.onload = () => onSuccess({
                path,
                status: 'ok'
            });
            node.onerror = error => onSuccess({
                path,
                status: 'error',
                error
            });
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    }
    loadStyle(path, rel, innerContent, attributes) {
        const options = typeof rel === 'object'
            ? rel
            : {
                rel,
                innerContent,
                attributes
            };
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            const node = this.doc.createElement('link');
            node.rel = options.rel ?? 'stylesheet';
            node.type = 'text/css';
            node.href = path;
            this.attachAttributes(node, options.attributes);
            if (options.innerContent) {
                node.innerHTML = options.innerContent;
            }
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            const item = {
                path,
                status: 'ok'
            };
            this.cached[path] = item;
            resolve(item);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: LazyService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: LazyService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: LazyService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFxQmxFOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sV0FBVztJQUt0QixZQUFzQyxHQUFjO1FBQWQsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUo1QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQWtDLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFeEQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsS0FBSyxFQUFFLEVBQ1AsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsRUFBZSxFQUFFLFVBQWdEO1FBQ3hGLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUs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QyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsTUFBTSxJQUFJLEdBQWU7Z0JBQ3ZCLElBQUk7Z0JBQ0osTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FqSlUsV0FBVyxrQkFLRixRQUFRO2tIQUxqQixXQUFXLGNBREUsTUFBTTs7MkZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFNbkIsTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhenlSZXN1bHQge1xuICBwYXRoOiBzdHJpbmc7XG4gIHN0YXR1czogJ29rJyB8ICdlcnJvcicgfCAnbG9hZGluZyc7XG4gIGVycm9yPzogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhenlMb2FkSXRlbSB7XG4gIHBhdGg6IHN0cmluZztcbiAgb3B0aW9ucz86IExhenlMb2FkT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXp5TG9hZE9wdGlvbnMge1xuICBpbm5lckNvbnRlbnQ/OiBzdHJpbmc7XG4gIGF0dHJpYnV0ZXM/OiB7IFtxdWFsaWZpZWROYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcmVsPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIGBMYXp5U2VydmljZWAgZGVsYXkgbG9hZGluZyBKUyBvciBDU1MgZmlsZXMuXG4gKlxuICog5bu26L+f5Yqg6L296LWE5rqQ77yIanMg5oiWIGNzc++8ieacjeWKoVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhenlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIGNhY2hlZDogeyBba2V5OiBzdHJpbmddOiBMYXp5UmVzdWx0IH0gPSB7fTtcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPihbXSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSkge31cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgc2hhcmUoKSxcbiAgICAgIGZpbHRlcihscyA9PiBscy5sZW5ndGggIT09IDApXG4gICAgKTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdCA9IHt9O1xuICAgIHRoaXMuY2FjaGVkID0ge307XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEF0dHJpYnV0ZXMoZWw6IEhUTUxFbGVtZW50LCBhdHRyaWJ1dGVzPzogeyBbcXVhbGlmaWVkTmFtZTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm47XG5cbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHNjcmlwdCBvciBzdHlsZSBmaWxlc1xuICAgKi9cbiAgbG9hZChwYXRoczogc3RyaW5nIHwgTGF6eUxvYWRJdGVtIHwgQXJyYXk8c3RyaW5nIHwgTGF6eUxvYWRJdGVtPik6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGhzKSkge1xuICAgICAgcGF0aHMgPSBbcGF0aHNdO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPExhenlSZXN1bHQ+PiA9IFtdO1xuICAgIHBhdGhzXG4gICAgICAubWFwKHYgPT4gKHR5cGVvZiB2ICE9PSAnb2JqZWN0JyA/ICh7IHBhdGg6IHYgfSBhcyBMYXp5TG9hZEl0ZW0pIDogdikpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucGF0aC5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjcmlwdChpdGVtLnBhdGgsIGl0ZW0ub3B0aW9ucykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU3R5bGUoaXRlbS5wYXRoLCBpdGVtLm9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX25vdGlmeS5uZXh0KHJlcyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBhIHNjcmlwdCBmaWxlXG4gICAqL1xuICBsb2FkU2NyaXB0KHBhdGg6IHN0cmluZywgb3B0aW9ucz86IExhenlMb2FkT3B0aW9ucyk6IFByb21pc2U8TGF6eVJlc3VsdD47XG4gIGxvYWRTY3JpcHQoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGlubmVyQ29udGVudD86IHN0cmluZyB8IExhenlMb2FkT3B0aW9ucyxcbiAgICBhdHRyaWJ1dGVzPzogeyBbcXVhbGlmaWVkTmFtZTogc3RyaW5nXTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxMYXp5UmVzdWx0PiB7XG4gICAgY29uc3Qgb3B0aW9uczogTGF6eUxvYWRPcHRpb25zID1cbiAgICAgIHR5cGVvZiBpbm5lckNvbnRlbnQgPT09ICdvYmplY3QnXG4gICAgICAgID8gaW5uZXJDb250ZW50XG4gICAgICAgIDoge1xuICAgICAgICAgICAgaW5uZXJDb250ZW50LFxuICAgICAgICAgICAgYXR0cmlidXRlc1xuICAgICAgICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKHsgLi4udGhpcy5jYWNoZWRbcGF0aF0sIHN0YXR1czogJ2xvYWRpbmcnIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG4gICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoaXRlbTogTGF6eVJlc3VsdCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgICAgIHRoaXMuX25vdGlmeS5uZXh0KFtpdGVtXSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgSFRNTFNjcmlwdEVsZW1lbnQ7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIG5vZGUuc3JjID0gcGF0aDtcbiAgICAgIHRoaXMuYXR0YWNoQXR0cmlidXRlcyhub2RlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICAgICAgaWYgKG9wdGlvbnMuaW5uZXJDb250ZW50KSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gb3B0aW9ucy5pbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBub2RlLm9ubG9hZCA9ICgpID0+XG4gICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBzdGF0dXM6ICdvaydcbiAgICAgICAgfSk7XG4gICAgICBub2RlLm9uZXJyb3IgPSBlcnJvciA9PlxuICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgIGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGEgc3R5bGUgZmlsZVxuICAgKi9cbiAgbG9hZFN0eWxlKHBhdGg6IHN0cmluZywgb3B0aW9ucz86IExhenlMb2FkT3B0aW9ucyk6IFByb21pc2U8TGF6eVJlc3VsdD47XG4gIGxvYWRTdHlsZShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgcmVsPzogc3RyaW5nIHwgTGF6eUxvYWRPcHRpb25zLFxuICAgIGlubmVyQ29udGVudD86IHN0cmluZyxcbiAgICBhdHRyaWJ1dGVzPzogeyBbcXVhbGlmaWVkTmFtZTogc3RyaW5nXTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxMYXp5UmVzdWx0PiB7XG4gICAgY29uc3Qgb3B0aW9uczogTGF6eUxvYWRPcHRpb25zID1cbiAgICAgIHR5cGVvZiByZWwgPT09ICdvYmplY3QnXG4gICAgICAgID8gcmVsXG4gICAgICAgIDoge1xuICAgICAgICAgICAgcmVsLFxuICAgICAgICAgICAgaW5uZXJDb250ZW50LFxuICAgICAgICAgICAgYXR0cmlidXRlc1xuICAgICAgICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKHRoaXMuY2FjaGVkW3BhdGhdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xuXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGluaycpIGFzIEhUTUxMaW5rRWxlbWVudDtcbiAgICAgIG5vZGUucmVsID0gb3B0aW9ucy5yZWwgPz8gJ3N0eWxlc2hlZXQnO1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIG5vZGUuaHJlZiA9IHBhdGg7XG4gICAgICB0aGlzLmF0dGFjaEF0dHJpYnV0ZXMobm9kZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChvcHRpb25zLmlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IG9wdGlvbnMuaW5uZXJDb250ZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIGNvbnN0IGl0ZW06IExhenlSZXN1bHQgPSB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHN0YXR1czogJ29rJ1xuICAgICAgfTtcbiAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==