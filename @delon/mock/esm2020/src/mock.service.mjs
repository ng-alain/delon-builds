import { Injectable } from '@angular/core';
import { MOCK_DEFULAT_CONFIG } from './mock.config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "./interface";
export class MockService {
    constructor(cogSrv, options) {
        this.cached = [];
        this.config = cogSrv.merge('mock', MOCK_DEFULAT_CONFIG);
        this.setData(options?.data);
    }
    /**
     * Reset request data
     *
     * 重新设置请求数据
     */
    setData(data) {
        this.applyMock(data);
    }
    // #region parse rule
    applyMock(data) {
        this.cached = [];
        try {
            this.realApplyMock(data);
        }
        catch (e) {
            this.outputError(e);
        }
    }
    realApplyMock(data) {
        if (!data)
            return;
        Object.keys(data).forEach((key) => {
            const rules = data[key];
            if (!rules)
                return;
            Object.keys(rules).forEach((ruleKey) => {
                const value = rules[ruleKey];
                if (!(typeof value === 'function' || typeof value === 'object' || typeof value === 'string')) {
                    throw Error(`mock value of [${key}-${ruleKey}] should be function or object or string, but got ${typeof value}`);
                }
                const rule = this.genRule(ruleKey, value);
                if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                    throw Error(`method of ${key}-${ruleKey} is not valid`);
                }
                const item = this.cached.find(w => w.url === rule.url && w.method === rule.method);
                if (item) {
                    item.callback = rule.callback;
                }
                else {
                    this.cached.push(rule);
                }
            });
        });
        // regular ordering
        this.cached.sort((a, b) => (b.martcher || '').toString().length - (a.martcher || '').toString().length);
    }
    genRule(key, callback) {
        let method = 'GET';
        let url = key;
        if (key.indexOf(' ') > -1) {
            const splited = key.split(' ');
            method = splited[0].toLowerCase();
            url = splited[1];
        }
        let martcher = null;
        let segments = [];
        if (~url.indexOf(':')) {
            segments = url
                .split('/')
                .filter(segment => segment.startsWith(':'))
                .map(v => v.substring(1));
            const reStr = url
                .split('/')
                .map(segment => (segment.startsWith(':') ? `([^/]+)` : segment))
                .join('/');
            martcher = new RegExp(`^${reStr}`, 'i');
        }
        else if (/(\([^)]+\))/i.test(url)) {
            martcher = new RegExp(url, 'i');
        }
        return {
            url,
            martcher,
            segments,
            callback,
            method: method.toUpperCase()
        };
    }
    outputError(error) {
        const filePath = error.message.split(': ')[0];
        const errors = error.stack
            .split('\n')
            .filter(line => line.trim().indexOf('at ') !== 0)
            .map(line => line.replace(`${filePath}: `, ''));
        errors.splice(1, 0, '');
        console.group();
        console.warn(`==========Failed to parse mock config.==========`);
        console.log(errors.join('\n'));
        console.groupEnd();
        throw error;
    }
    // #endregion
    getRule(method, url) {
        method = (method || 'GET').toUpperCase();
        const params = {};
        const list = this.cached.filter(w => w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url));
        if (list.length === 0)
            return null;
        const ret = list.find(w => w.url === url) || list[0];
        if (ret.martcher) {
            const execArr = ret.martcher.exec(url);
            execArr.slice(1).map((value, index) => {
                params[ret.segments[index]] = value;
            });
        }
        return {
            url,
            method: ret.method,
            params,
            callback: ret.callback
        };
    }
    clearCache() {
        this.cached = [];
    }
    get rules() {
        return this.cached;
    }
    ngOnDestroy() {
        this.clearCache();
    }
}
MockService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: MockService, deps: [{ token: i1.AlainConfigService }, { token: i2.MockOptions }], target: i0.ɵɵFactoryTarget.Injectable });
MockService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: MockService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: MockService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: i2.MockOptions }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbW9jay9zcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFNdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3BELE1BQU0sT0FBTyxXQUFXO0lBSXRCLFlBQVksTUFBMEIsRUFBRSxPQUFvQjtRQUhwRCxXQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUlwQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsSUFBZTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQkFBcUI7SUFFYixTQUFTLENBQUMsSUFBZTtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFTyxhQUFhLENBQUMsSUFBZTtRQUNuQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFB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QUUsRUFBRTtnQkFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU87WUFDTCxHQUFHO1lBQ0gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQ2xCLE1BQU07WUFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7U0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzt3R0E1SVUsV0FBVzs0R0FBWCxXQUFXLGNBREUsTUFBTTsyRkFDbkIsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbk1vY2tDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBNb2NrQ2FjaGVkUnVsZSwgTW9ja09wdGlvbnMsIE1vY2tSdWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTU9DS19ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1vY2tTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjYWNoZWQ6IE1vY2tDYWNoZWRSdWxlW10gPSBbXTtcbiAgcmVhZG9ubHkgY29uZmlnOiBBbGFpbk1vY2tDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIG9wdGlvbnM6IE1vY2tPcHRpb25zKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb2dTcnYubWVyZ2UoJ21vY2snLCBNT0NLX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgdGhpcy5zZXREYXRhKG9wdGlvbnM/LmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHJlcXVlc3QgZGF0YVxuICAgKlxuICAgKiDph43mlrDorr7nva7or7fmsYLmlbDmja5cbiAgICovXG4gIHNldERhdGEoZGF0YTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5hcHBseU1vY2soZGF0YSk7XG4gIH1cblxuICAvLyAjcmVnaW9uIHBhcnNlIHJ1bGVcblxuICBwcml2YXRlIGFwcGx5TW9jayhkYXRhOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJlYWxBcHBseU1vY2soZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWxBcHBseU1vY2soZGF0YTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gZGF0YVtrZXldO1xuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xuICAgICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKHJ1bGVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVzW3J1bGVLZXldO1xuICAgICAgICBpZiAoISh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgYG1vY2sgdmFsdWUgb2YgWyR7a2V5fS0ke3J1bGVLZXl9XSBzaG91bGQgYmUgZnVuY3Rpb24gb3Igb2JqZWN0IG9yIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiB2YWx1ZX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBydWxlID0gdGhpcy5nZW5SdWxlKHJ1bGVLZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0hFQUQnLCAnREVMRVRFJywgJ1BBVENIJywgJ09QVElPTlMnXS5pbmRleE9mKHJ1bGUubWV0aG9kKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgbWV0aG9kIG9mICR7a2V5fS0ke3J1bGVLZXl9IGlzIG5vdCB2YWxpZGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNhY2hlZC5maW5kKHcgPT4gdy51cmwgPT09IHJ1bGUudXJsICYmIHcubWV0aG9kID09PSBydWxlLm1ldGhvZCk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgaXRlbS5jYWxsYmFjayA9IHJ1bGUuY2FsbGJhY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZWQucHVzaChydWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmVndWxhciBvcmRlcmluZ1xuICAgIHRoaXMuY2FjaGVkLnNvcnQoKGEsIGIpID0+IChiLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCAtIChhLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCk7XG4gIH1cblxuICBwcml2YXRlIGdlblJ1bGUoa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiBOelNhZmVBbnkpOiBNb2NrQ2FjaGVkUnVsZSB7XG4gICAgbGV0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGxldCB1cmwgPSBrZXk7XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICBjb25zdCBzcGxpdGVkID0ga2V5LnNwbGl0KCcgJyk7XG4gICAgICBtZXRob2QgPSBzcGxpdGVkWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICB1cmwgPSBzcGxpdGVkWzFdO1xuICAgIH1cblxuICAgIGxldCBtYXJ0Y2hlcjogUmVnRXhwIHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh+dXJsLmluZGV4T2YoJzonKSkge1xuICAgICAgc2VnbWVudHMgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5maWx0ZXIoc2VnbWVudCA9PiBzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSlcbiAgICAgICAgLm1hcCh2ID0+IHYuc3Vic3RyaW5nKDEpKTtcbiAgICAgIGNvbnN0IHJlU3RyID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAubWFwKHNlZ21lbnQgPT4gKHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpID8gYChbXi9dKylgIDogc2VnbWVudCkpXG4gICAgICAgIC5qb2luKCcvJyk7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAoYF4ke3JlU3RyfWAsICdpJyk7XG4gICAgfSBlbHNlIGlmICgvKFxcKFteKV0rXFwpKS9pLnRlc3QodXJsKSkge1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHVybCwgJ2knKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWFydGNoZXIsXG4gICAgICBzZWdtZW50cyxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIG91dHB1dEVycm9yKGVycm9yOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGVycm9yLm1lc3NhZ2Uuc3BsaXQoJzogJylbMF07XG4gICAgY29uc3QgZXJyb3JzID0gKGVycm9yLnN0YWNrIGFzIHN0cmluZylcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKS5pbmRleE9mKCdhdCAnKSAhPT0gMClcbiAgICAgIC5tYXAobGluZSA9PiBsaW5lLnJlcGxhY2UoYCR7ZmlsZVBhdGh9OiBgLCAnJykpO1xuICAgIGVycm9ycy5zcGxpY2UoMSwgMCwgJycpO1xuXG4gICAgY29uc29sZS5ncm91cCgpO1xuICAgIGNvbnNvbGUud2FybihgPT09PT09PT09PUZhaWxlZCB0byBwYXJzZSBtb2NrIGNvbmZpZy49PT09PT09PT09YCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IE1vY2tSdWxlIHwgbnVsbCB7XG4gICAgbWV0aG9kID0gKG1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBwYXJhbXM6IE56U2FmZUFueSA9IHt9O1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmNhY2hlZC5maWx0ZXIodyA9PiB3Lm1ldGhvZCA9PT0gbWV0aG9kICYmICh3Lm1hcnRjaGVyID8gdy5tYXJ0Y2hlci50ZXN0KHVybCkgOiB3LnVybCA9PT0gdXJsKSk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByZXQgPSBsaXN0LmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBsaXN0WzBdO1xuICAgIGlmIChyZXQubWFydGNoZXIpIHtcbiAgICAgIGNvbnN0IGV4ZWNBcnIgPSByZXQubWFydGNoZXIuZXhlYyh1cmwpO1xuICAgICAgZXhlY0FyciEuc2xpY2UoMSkubWFwKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHBhcmFtc1tyZXQuc2VnbWVudHNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IHJldC5tZXRob2QsXG4gICAgICBwYXJhbXMsXG4gICAgICBjYWxsYmFjazogcmV0LmNhbGxiYWNrXG4gICAgfTtcbiAgfVxuXG4gIGNsZWFyQ2FjaGUoKTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgfVxuXG4gIGdldCBydWxlcygpOiBNb2NrQ2FjaGVkUnVsZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgfVxufVxuIl19