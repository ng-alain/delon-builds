import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, share } from 'rxjs';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
export class MenuService {
    constructor() {
        this.i18nSrv = inject(ALAIN_I18N_TOKEN);
        this.aclService = inject(ACLService);
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        /**
         * 是否完全受控菜单打开状态，默认：`false`
         */
        this.openStrictly = false;
        this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
    }
    get change() {
        return this._change$.pipe(share());
    }
    get menus() {
        return this.data;
    }
    visit(data, callback) {
        const inFn = (list, parentMenu, depth) => {
            for (const item of list) {
                callback(item, parentMenu, depth);
                if (item.children && item.children.length > 0) {
                    inFn(item.children, item, depth + 1);
                }
                else {
                    item.children = [];
                }
            }
        };
        inFn(data, null, 0);
    }
    add(items) {
        this.data = items;
        this.resume();
    }
    fixItem(item) {
        item._aclResult = true;
        if (!item.link)
            item.link = '';
        if (!item.externalLink)
            item.externalLink = '';
        // badge
        if (item.badge) {
            if (item.badgeDot !== true) {
                item.badgeDot = false;
            }
            if (!item.badgeStatus) {
                item.badgeStatus = 'error';
            }
        }
        if (!Array.isArray(item.children)) {
            item.children = [];
        }
        // icon
        if (typeof item.icon === 'string') {
            let type = 'class';
            let value = item.icon;
            // compatible `anticon anticon-user`
            if (~item.icon.indexOf(`anticon-`)) {
                type = 'icon';
                value = value.split('-').slice(1).join('-');
            }
            else if (/^https?:\/\//.test(item.icon)) {
                type = 'img';
            }
            item.icon = { type, value };
        }
        if (item.icon != null) {
            item.icon = { theme: 'outline', spin: false, ...item.icon };
        }
        item.text = item.i18n ? this.i18nSrv.fanyi(item.i18n) : item.text;
        // group
        item.group = item.group !== false;
        // hidden
        item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
        // disabled
        item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;
        // acl
        item._aclResult = item.acl ? this.aclService.can(item.acl) : true;
        item.open = item.open != null ? item.open : false;
    }
    resume(callback) {
        let i = 1;
        const shortcuts = [];
        this.visit(this.data, (item, parent, depth) => {
            item._id = i++;
            item._parent = parent;
            item._depth = depth;
            this.fixItem(item);
            // shortcut
            if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
                shortcuts.push(item);
            }
            if (callback)
                callback(item, parent, depth);
        });
        this.loadShortcut(shortcuts);
        this._change$.next(this.data);
    }
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     */
    loadShortcut(shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        const ls = this.data[0].children;
        let pos = ls.findIndex(w => w.shortcutRoot === true);
        if (pos === -1) {
            pos = ls.findIndex(w => w.link.includes('dashboard'));
            pos = (pos !== -1 ? pos : -1) + 1;
            const shortcutMenu = {
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: []
            };
            this.data[0].children.splice(pos, 0, shortcutMenu);
        }
        let _data = this.data[0].children[pos];
        if (_data.i18n)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        _data = Object.assign(_data, {
            shortcutRoot: true,
            _id: -1,
            _parent: null,
            _depth: 1
        });
        _data.children = shortcuts.map(i => {
            i._depth = 2;
            i._parent = _data;
            return i;
        });
    }
    /**
     * 清空菜单
     */
    clear() {
        this.data = [];
        this._change$.next(this.data);
    }
    /**
     * Use `url` or `key` to find menus
     *
     * 利用 `url` 或 `key` 查找菜单
     */
    find(options) {
        const opt = { recursive: false, ignoreHide: false, last: false, ...options };
        if (opt.key != null) {
            return this.getItem(opt.key);
        }
        let url = opt.url;
        let item = null;
        while (!item && url) {
            this.visit(opt.data ?? this.data, i => {
                if (!opt.last && item != null) {
                    return;
                }
                if (opt.ignoreHide && i.hide) {
                    return;
                }
                if (opt.cb) {
                    const res = opt.cb(i);
                    if (typeof res === 'boolean' && res) {
                        item = i;
                    }
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            });
            if (!opt.recursive)
                break;
            if (/[?;]/g.test(url)) {
                url = url.split(/[?;]/g)[0];
            }
            else {
                url = url.split('/').slice(0, -1).join('/');
            }
        }
        return item;
    }
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    getPathByUrl(url, recursive = false) {
        const ret = [];
        let item = this.find({ url, recursive });
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item._parent;
        } while (item);
        return ret;
    }
    /**
     * Get menu based on `key`
     */
    getItem(key) {
        let res = null;
        this.visit(this.data, item => {
            if (res == null && item.key === key) {
                res = item;
            }
        });
        return res;
    }
    /**
     * Set menu based on `key`
     */
    setItem(key, value, options) {
        const item = typeof key === 'string' ? this.getItem(key) : key;
        if (item == null)
            return;
        Object.keys(value).forEach(k => {
            item[k] = value[k];
        });
        this.fixItem(item);
        if (options?.emit !== false)
            this._change$.next(this.data);
    }
    /**
     * Open menu based on `key` or menu object
     */
    open(keyOrItem, options) {
        let item = typeof keyOrItem === 'string' ? this.find({ key: keyOrItem }) : keyOrItem;
        if (item == null)
            return;
        this.visit(this.menus, (i) => {
            i._selected = false;
            if (!this.openStrictly)
                i.open = false;
        });
        do {
            item._selected = true;
            item.open = true;
            item = item._parent;
        } while (item);
        if (options?.emit !== false)
            this._change$.next(this.data);
    }
    openAll(status) {
        this.toggleOpen(null, { allStatus: status });
    }
    toggleOpen(keyOrItem, options) {
        let item = typeof keyOrItem === 'string' ? this.find({ key: keyOrItem }) : keyOrItem;
        if (item == null) {
            this.visit(this.menus, (i) => {
                i._selected = false;
                i.open = options?.allStatus === true;
            });
        }
        else {
            if (!this.openStrictly) {
                this.visit(this.menus, (i) => {
                    if (i !== item)
                        i.open = false;
                });
                let pItem = item._parent;
                while (pItem) {
                    pItem.open = true;
                    pItem = pItem._parent;
                }
            }
            item.open = !item.open;
        }
        if (options?.emit !== false)
            this._change$.next(this.data);
    }
    ngOnDestroy() {
        this._change$.unsubscribe();
        this.i18n$?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: MenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: MenuService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: MenuService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQTRCLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHaEQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sV0FBVztJQVd0QjtRQVZpQixZQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDMUI7O1dBRUc7UUFDSCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUduQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFZLEVBQUUsUUFBd0U7UUFDMUYsTUFBTSxJQUFJLEdBQUcsQ0FB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TCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQVksRUFBRSxFQUFFO29CQUN0QyxJQUFJLENBQUMsS0FBSyxJQUFJO3dCQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN6QixPQUFPLEtBQUssRUFBRSxDQUFDO29CQUNiLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNsQixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUM7WUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQUs7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQzsrR0F4VlUsV0FBVzttSEFBWCxXQUFXLGNBREUsTUFBTTs7NEZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBzaGFyZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuaW1wb3J0IHsgTWVudSwgTWVudUljb24sIE1lbnVJbm5lciB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLyoqXG4gKiDoj5zljZXmnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS90aGVtZS9tZW51KVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBpMThuU3J2ID0gaW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pO1xuICBwcml2YXRlIHJlYWRvbmx5IGFjbFNlcnZpY2UgPSBpbmplY3QoQUNMU2VydmljZSk7XG4gIHByaXZhdGUgX2NoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxNZW51W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZW51W10+KFtdKTtcbiAgcHJpdmF0ZSBpMThuJD86IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkYXRhOiBNZW51W10gPSBbXTtcbiAgLyoqXG4gICAqIOaYr+WQpuWujOWFqOWPl+aOp+iPnOWNleaJk+W8gOeKtuaAge+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG9wZW5TdHJpY3RseSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc3VtZSgpKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxNZW51W10+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgZ2V0IG1lbnVzKCk6IE1lbnVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIHZpc2l0PFQgZXh0ZW5kcyBNZW51ID0gTWVudT4oZGF0YTogVFtdLCBjYWxsYmFjazogKGl0ZW06IFQsIHBhcmVudE1lbnVtOiBUIHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICB2aXNpdChkYXRhOiBNZW51W10sIGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHZpc2l0KGRhdGE6IE1lbnVbXSwgY2FsbGJhY2s6IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUgfCBudWxsLCBkZXB0aDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICBjYWxsYmFjayhpdGVtLCBwYXJlbnRNZW51LCBkZXB0aCk7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oaXRlbS5jaGlsZHJlbiwgaXRlbSwgZGVwdGggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5GbihkYXRhLCBudWxsLCAwKTtcbiAgfVxuXG4gIGFkZChpdGVtczogTWVudVtdKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gaXRlbXM7XG4gICAgdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4SXRlbShpdGVtOiBNZW51SW5uZXIpOiB2b2lkIHtcbiAgICBpdGVtLl9hY2xSZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKCFpdGVtLmxpbmspIGl0ZW0ubGluayA9ICcnO1xuICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAvLyBiYWRnZVxuICAgIGlmIChpdGVtLmJhZGdlKSB7XG4gICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICBpdGVtLmJhZGdlRG90ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgaXRlbS5iYWRnZVN0YXR1cyA9ICdlcnJvcic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgLy8gaWNvblxuICAgIGlmICh0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IHR5cGUgPSAnY2xhc3MnO1xuICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgLy8gY29tcGF0aWJsZSBgYW50aWNvbiBhbnRpY29uLXVzZXJgXG4gICAgICBpZiAofml0ZW0uaWNvbi5pbmRleE9mKGBhbnRpY29uLWApKSB7XG4gICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy0nKS5zbGljZSgxKS5qb2luKCctJyk7XG4gICAgICB9IGVsc2UgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpdGVtLmljb24pKSB7XG4gICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgIH1cbiAgICAgIGl0ZW0uaWNvbiA9IHsgdHlwZSwgdmFsdWUgfSBhcyBOelNhZmVBbnk7XG4gICAgfVxuICAgIGlmIChpdGVtLmljb24gIT0gbnVsbCkge1xuICAgICAgaXRlbS5pY29uID0geyB0aGVtZTogJ291dGxpbmUnLCBzcGluOiBmYWxzZSwgLi4uKGl0ZW0uaWNvbiBhcyBNZW51SWNvbikgfTtcbiAgICB9XG5cbiAgICBpdGVtLnRleHQgPSBpdGVtLmkxOG4gPyB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKSA6IGl0ZW0udGV4dDtcblxuICAgIC8vIGdyb3VwXG4gICAgaXRlbS5ncm91cCA9IGl0ZW0uZ3JvdXAgIT09IGZhbHNlO1xuXG4gICAgLy8gaGlkZGVuXG4gICAgaXRlbS5faGlkZGVuID0gdHlwZW9mIGl0ZW0uaGlkZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGl0ZW0uaGlkZTtcblxuICAgIC8vIGRpc2FibGVkXG4gICAgaXRlbS5kaXNhYmxlZCA9IHR5cGVvZiBpdGVtLmRpc2FibGVkID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogaXRlbS5kaXNhYmxlZDtcblxuICAgIC8vIGFjbFxuICAgIGl0ZW0uX2FjbFJlc3VsdCA9IGl0ZW0uYWNsID8gdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCkgOiB0cnVlO1xuXG4gICAgaXRlbS5vcGVuID0gaXRlbS5vcGVuICE9IG51bGwgPyBpdGVtLm9wZW4gOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7oj5zljZXvvIzlj6/og71JMThO44CB55So5oi35p2D6ZmQ5Y+Y5Yqo5pe26ZyA6KaB6LCD55So5Yi35pawXG4gICAqL1xuICByZXN1bWU8VCBleHRlbmRzIE1lbnUgPSBNZW51PihjYWxsYmFjaz86IChpdGVtOiBULCBwYXJlbnRNZW51bTogVCB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51IHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICByZXN1bWUoY2FsbGJhY2s/OiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQodGhpcy5kYXRhLCAoaXRlbTogTWVudUlubmVyLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpdGVtLl9pZCA9IGkrKztcbiAgICAgIGl0ZW0uX3BhcmVudCA9IHBhcmVudDtcbiAgICAgIGl0ZW0uX2RlcHRoID0gZGVwdGg7XG4gICAgICB0aGlzLmZpeEl0ZW0oaXRlbSk7XG5cbiAgICAgIC8vIHNob3J0Y3V0XG4gICAgICBpZiAocGFyZW50ICYmIGl0ZW0uc2hvcnRjdXQgPT09IHRydWUgJiYgcGFyZW50LnNob3J0Y3V0Um9vdCAhPT0gdHJ1ZSkge1xuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Yqg6L295b+r5o236I+c5Y2V77yM5Yqg6L295L2N572u6KeE5YiZ5aaC5LiL77yaXG4gICAqIDHjgIHnu5/kuIDlnKjkuIvmoIcw55qE6IqC54K55LiL77yI5Y2z44CQ5Li75a+86Iiq44CR6IqC54K55LiL5pa577yJXG4gICAqICAgICAgMeOAgeiLpSBjaGlsZHJlbiDlrZjlnKgg44CQc2hvcnRjdXRSb290OiB0cnVl44CR5YiZ5pyA5LyY5YWI44CQ5o6o6I2Q44CR6L+Z56eN5pa55byPXG4gICAqICAgICAgMuOAgeWQpuWImeafpeaJvuW4puacieOAkGRhc2hib2FyZOOAkeWtl+agt+mTvuaOpe+8jOiLpeWtmOWcqOWImeWcqOatpOiPnOWNleeahOS4i+aWueWIm+W7uuW/q+aNt+WFpeWPo1xuICAgKiAgICAgIDPjgIHlkKbliJnmlL7lnKgw6IqC54K55L2N572uXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaG9ydGN1dChzaG9ydGN1dHM6IE1lbnVJbm5lcltdKTogdm9pZCB7XG4gICAgaWYgKHNob3J0Y3V0cy5sZW5ndGggPT09IDAgfHwgdGhpcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxzID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuIGFzIE1lbnVJbm5lcltdO1xuICAgIGxldCBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LnNob3J0Y3V0Um9vdCA9PT0gdHJ1ZSk7XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcubGluayEuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcbiAgICAgIHBvcyA9IChwb3MgIT09IC0xID8gcG9zIDogLTEpICsgMTtcbiAgICAgIGNvbnN0IHNob3J0Y3V0TWVudSA9IHtcbiAgICAgICAgdGV4dDogJ+W/q+aNt+iPnOWNlScsXG4gICAgICAgIGkxOG46ICdzaG9ydGN1dCcsXG4gICAgICAgIGljb246ICdpY29uLXJvY2tldCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfSBhcyBNZW51SW5uZXI7XG4gICAgICB0aGlzLmRhdGFbMF0uY2hpbGRyZW4hLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbiFbcG9zXTtcbiAgICBpZiAoX2RhdGEuaTE4bikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcbiAgICBfZGF0YSA9IE9iamVjdC5hc3NpZ24oX2RhdGEsIHtcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcbiAgICAgIF9pZDogLTEsXG4gICAgICBfcGFyZW50OiBudWxsLFxuICAgICAgX2RlcHRoOiAxXG4gICAgfSBhcyBNZW51SW5uZXIpO1xuICAgIF9kYXRhLmNoaWxkcmVuID0gc2hvcnRjdXRzLm1hcChpID0+IHtcbiAgICAgIGkuX2RlcHRoID0gMjtcbiAgICAgIGkuX3BhcmVudCA9IF9kYXRhO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5riF56m66I+c5Y2VXG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgYHVybGAgb3IgYGtleWAgdG8gZmluZCBtZW51c1xuICAgKlxuICAgKiDliKnnlKggYHVybGAg5oiWIGBrZXlgIOafpeaJvuiPnOWNlVxuICAgKi9cbiAgZmluZChvcHRpb25zOiB7XG4gICAga2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICB1cmw/OiBzdHJpbmcgfCBudWxsO1xuICAgIHJlY3Vyc2l2ZT86IGJvb2xlYW4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGNhbGxiYWNrIHJldHVybnMgYSBCb29sZWFuIHR5cGUsIGl0IG1lYW5zIHRoZSBjdXN0b20gdmFsaWRhdGlvbiByZXN1bHRcbiAgICAgKlxuICAgICAqIOW9k+Wbnuiwg+i/lOWbnuS4gOS4quW4g+WwlOexu+Wei+aXtu+8jOihqOekuuiHquWumuS5ieagoemqjOe7k+aenFxuICAgICAqL1xuICAgIGNiPzogKChpOiBNZW51KSA9PiBib29sZWFuIHwgbnVsbCkgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFVzZSB0aGUgY3VycmVudCBtZW51IGRhdGEgYnkgZGVmYXVsdFxuICAgICAqXG4gICAgICog6buY6K6k5L2/55So5b2T5YmN6I+c5Y2V5pWw5o2uXG4gICAgICovXG4gICAgZGF0YT86IE1lbnVbXSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBpZ25vcmUgaGlkZSBpdGVtcywgZGVmYXVsdDogYGZhbHNlYFxuICAgICAqXG4gICAgICog5piv5ZCm5b+955Wl6ZqQ6JeP55qE6aG577yM6buY6K6k77yaYGZhbHNlYFxuICAgICAqL1xuICAgIGlnbm9yZUhpZGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gcmV0dXJuIHRoZSBsYXN0IG9uZSwgZGVmYXVsdDogYGZhbHNlYFxuICAgICAqXG4gICAgICog5piv5ZCm6L+U5Zue5pyA5ZCO5LiA5Liq77yM6buY6K6k77yaYGZhbHNlYFxuICAgICAqL1xuICAgIGxhc3Q/OiBib29sZWFuO1xuICB9KTogTWVudSB8IG51bGwge1xuICAgIGNvbnN0IG9wdCA9IHsgcmVjdXJzaXZlOiBmYWxzZSwgaWdub3JlSGlkZTogZmFsc2UsIGxhc3Q6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKG9wdC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShvcHQua2V5KTtcbiAgICB9XG5cbiAgICBsZXQgdXJsID0gb3B0LnVybDtcblxuICAgIGxldCBpdGVtOiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KG9wdC5kYXRhID8/IHRoaXMuZGF0YSwgaSA9PiB7XG4gICAgICAgIGlmICghb3B0Lmxhc3QgJiYgaXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHQuaWdub3JlSGlkZSAmJiBpLmhpZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IG9wdC5jYihpKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ2Jvb2xlYW4nICYmIHJlcykge1xuICAgICAgICAgICAgaXRlbSA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpLmxpbmsgIT0gbnVsbCAmJiBpLmxpbmsgPT09IHVybCkge1xuICAgICAgICAgIGl0ZW0gPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFvcHQucmVjdXJzaXZlKSBicmVhaztcblxuICAgICAgaWYgKC9bPztdL2cudGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgvWz87XS9nKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5qb2luKCcvJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICAvKipcbiAgICog5qC55o2udXJs6I635Y+W6I+c5Y2V5YiX6KGoXG4gICAqIC0g6IulIGByZWN1cnNpdmU6IHRydWVgIOWImeS8muiHquWKqOWQkeS4iumAkuW9kuafpeaJvlxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICBnZXRQYXRoQnlVcmwodXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZTogYm9vbGVhbiA9IGZhbHNlKTogTWVudVtdIHtcbiAgICBjb25zdCByZXQ6IE1lbnVbXSA9IFtdO1xuICAgIGxldCBpdGVtID0gdGhpcy5maW5kKHsgdXJsLCByZWN1cnNpdmUgfSkgYXMgTWVudUlubmVyO1xuXG4gICAgaWYgKCFpdGVtKSByZXR1cm4gcmV0O1xuXG4gICAgZG8ge1xuICAgICAgcmV0LnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9wYXJlbnQhO1xuICAgIH0gd2hpbGUgKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWVudSBiYXNlZCBvbiBga2V5YFxuICAgKi9cbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IE1lbnUgfCBudWxsIHtcbiAgICBsZXQgcmVzOiBNZW51IHwgbnVsbCA9IG51bGw7XG4gICAgdGhpcy52aXNpdCh0aGlzLmRhdGEsIGl0ZW0gPT4ge1xuICAgICAgaWYgKHJlcyA9PSBudWxsICYmIGl0ZW0ua2V5ID09PSBrZXkpIHtcbiAgICAgICAgcmVzID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBtZW51IGJhc2VkIG9uIGBrZXlgXG4gICAqL1xuICBzZXRJdGVtKGtleTogc3RyaW5nIHwgTWVudSwgdmFsdWU6IE1lbnUsIG9wdGlvbnM/OiB7IGVtaXQ/OiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgPyB0aGlzLmdldEl0ZW0oa2V5KSA6IGtleTtcbiAgICBpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrID0+IHtcbiAgICAgIGl0ZW1ba10gPSB2YWx1ZVtrXTtcbiAgICB9KTtcbiAgICB0aGlzLmZpeEl0ZW0oaXRlbSk7XG5cbiAgICBpZiAob3B0aW9ucz8uZW1pdCAhPT0gZmFsc2UpIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gbWVudSBiYXNlZCBvbiBga2V5YCBvciBtZW51IG9iamVjdFxuICAgKi9cbiAgb3BlbihrZXlPckl0ZW06IHN0cmluZyB8IE1lbnUgfCBudWxsLCBvcHRpb25zPzogeyBlbWl0PzogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgbGV0IGl0ZW0gPSB0eXBlb2Yga2V5T3JJdGVtID09PSAnc3RyaW5nJyA/IHRoaXMuZmluZCh7IGtleToga2V5T3JJdGVtIH0pIDoga2V5T3JJdGVtO1xuICAgIGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMudmlzaXQodGhpcy5tZW51cywgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgaS5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5vcGVuU3RyaWN0bHkpIGkub3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgZG8ge1xuICAgICAgaXRlbS5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgaXRlbS5vcGVuID0gdHJ1ZTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG4gICAgaWYgKG9wdGlvbnM/LmVtaXQgIT09IGZhbHNlKSB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9wZW5BbGwoc3RhdHVzPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlT3BlbihudWxsLCB7IGFsbFN0YXR1czogc3RhdHVzIH0pO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihrZXlPckl0ZW06IHN0cmluZyB8IE1lbnUgfCBudWxsLCBvcHRpb25zPzogeyBhbGxTdGF0dXM/OiBib29sZWFuOyBlbWl0PzogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgbGV0IGl0ZW0gPSB0eXBlb2Yga2V5T3JJdGVtID09PSAnc3RyaW5nJyA/IHRoaXMuZmluZCh7IGtleToga2V5T3JJdGVtIH0pIDoga2V5T3JJdGVtO1xuICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzaXQodGhpcy5tZW51cywgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgICBpLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpLm9wZW4gPSBvcHRpb25zPy5hbGxTdGF0dXMgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLm9wZW5TdHJpY3RseSkge1xuICAgICAgICB0aGlzLnZpc2l0KHRoaXMubWVudXMsIChpOiBNZW51SW5uZXIpID0+IHtcbiAgICAgICAgICBpZiAoaSAhPT0gaXRlbSkgaS5vcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcEl0ZW0gPSBpdGVtLl9wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChwSXRlbSkge1xuICAgICAgICAgIHBJdGVtLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIHBJdGVtID0gcEl0ZW0uX3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXRlbS5vcGVuID0gIWl0ZW0ub3BlbjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnM/LmVtaXQgIT09IGZhbHNlKSB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmkxOG4kPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=