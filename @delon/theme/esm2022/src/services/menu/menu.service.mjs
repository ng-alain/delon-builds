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
        const opt = { recursive: false, ignoreHide: false, ...options };
        if (opt.key != null) {
            return this.getItem(opt.key);
        }
        let url = opt.url;
        let item = null;
        while (!item && url) {
            this.visit(opt.data ?? this.data, i => {
                if (opt.ignoreHide && i.hide) {
                    return;
                }
                if (opt.cb) {
                    const res = opt.cb(i);
                    if (!item && typeof res === 'boolean' && res) {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: MenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: MenuService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: MenuService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQTRCLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHaEQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sV0FBVztJQVd0QjtRQVZpQixZQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDMUI7O1dBRUc7UUFDSCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUduQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUlELEtBQUssQ0FBQyxJQUFZLEVBQUUsUUFBd0U7UUFDMUYsTUFBTSxJQUFJLEdBQUcsQ0FB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Q0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFZLEVBQUUsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLEtBQUssSUFBSTt3QkFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsT0FBTyxLQUFLLEVBQUUsQ0FBQztvQkFDYixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDbEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLENBQUM7WUFDSCxDQUFDO1lBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLO1lBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7OEdBL1VVLFdBQVc7a0hBQVgsV0FBVyxjQURFLE1BQU07OzJGQUNuQixXQUFXO2tCQUR2QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgc2hhcmUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnUsIE1lbnVJY29uLCBNZW51SW5uZXIgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbi8qKlxuICog6I+c5Y2V5pyN5Yqh77yMW+WcqOe6v+aWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vdGhlbWUvbWVudSlcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaTE4blNydiA9IGluamVjdChBTEFJTl9JMThOX1RPS0VOKTtcbiAgcHJpdmF0ZSByZWFkb25seSBhY2xTZXJ2aWNlID0gaW5qZWN0KEFDTFNlcnZpY2UpO1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ/OiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZGF0YTogTWVudVtdID0gW107XG4gIC8qKlxuICAgKiDmmK/lkKblrozlhajlj5fmjqfoj5zljZXmiZPlvIDnirbmgIHvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvcGVuU3RyaWN0bHkgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIGdldCBtZW51cygpOiBNZW51W10ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICB2aXNpdDxUIGV4dGVuZHMgTWVudSA9IE1lbnU+KGRhdGE6IFRbXSwgY2FsbGJhY2s6IChpdGVtOiBULCBwYXJlbnRNZW51bTogVCB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcbiAgdmlzaXQoZGF0YTogTWVudVtdLCBjYWxsYmFjazogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51IHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuICB2aXNpdChkYXRhOiBNZW51W10sIGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogTWVudVtdLCBwYXJlbnRNZW51OiBNZW51IHwgbnVsbCwgZGVwdGg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgY2FsbGJhY2soaXRlbSwgcGFyZW50TWVudSwgZGVwdGgpO1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGl0ZW0uY2hpbGRyZW4sIGl0ZW0sIGRlcHRoICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGluRm4oZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICBwcml2YXRlIGZpeEl0ZW0oaXRlbTogTWVudUlubmVyKTogdm9pZCB7XG4gICAgaXRlbS5fYWNsUmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmICghaXRlbS5saW5rKSBpdGVtLmxpbmsgPSAnJztcbiAgICBpZiAoIWl0ZW0uZXh0ZXJuYWxMaW5rKSBpdGVtLmV4dGVybmFsTGluayA9ICcnO1xuXG4gICAgLy8gYmFkZ2VcbiAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgaWYgKGl0ZW0uYmFkZ2VEb3QgIT09IHRydWUpIHtcbiAgICAgICAgaXRlbS5iYWRnZURvdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFpdGVtLmJhZGdlU3RhdHVzKSB7XG4gICAgICAgIGl0ZW0uYmFkZ2VTdGF0dXMgPSAnZXJyb3InO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSkge1xuICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIGljb25cbiAgICBpZiAodHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgIGxldCB2YWx1ZSA9IGl0ZW0uaWNvbjtcbiAgICAgIC8vIGNvbXBhdGlibGUgYGFudGljb24gYW50aWNvbi11c2VyYFxuICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICB0eXBlID0gJ2ljb24nO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCctJykuc2xpY2UoMSkuam9pbignLScpO1xuICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICB0eXBlID0gJ2ltZyc7XG4gICAgICB9XG4gICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgTnpTYWZlQW55O1xuICAgIH1cbiAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uaWNvbiA9IHsgdGhlbWU6ICdvdXRsaW5lJywgc3BpbjogZmFsc2UsIC4uLihpdGVtLmljb24gYXMgTWVudUljb24pIH07XG4gICAgfVxuXG4gICAgaXRlbS50ZXh0ID0gaXRlbS5pMThuID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XG5cbiAgICAvLyBncm91cFxuICAgIGl0ZW0uZ3JvdXAgPSBpdGVtLmdyb3VwICE9PSBmYWxzZTtcblxuICAgIC8vIGhpZGRlblxuICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XG5cbiAgICAvLyBkaXNhYmxlZFxuICAgIGl0ZW0uZGlzYWJsZWQgPSB0eXBlb2YgaXRlbS5kaXNhYmxlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGl0ZW0uZGlzYWJsZWQ7XG5cbiAgICAvLyBhY2xcbiAgICBpdGVtLl9hY2xSZXN1bHQgPSBpdGVtLmFjbCA/IHRoaXMuYWNsU2VydmljZS5jYW4oaXRlbS5hY2wpIDogdHJ1ZTtcblxuICAgIGl0ZW0ub3BlbiA9IGl0ZW0ub3BlbiAhPSBudWxsID8gaXRlbS5vcGVuIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u6I+c5Y2V77yM5Y+v6IO9STE4TuOAgeeUqOaIt+adg+mZkOWPmOWKqOaXtumcgOimgeiwg+eUqOWIt+aWsFxuICAgKi9cbiAgcmVzdW1lPFQgZXh0ZW5kcyBNZW51ID0gTWVudT4oY2FsbGJhY2s/OiAoaXRlbTogVCwgcGFyZW50TWVudW06IFQgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQ7XG4gIHJlc3VtZShjYWxsYmFjaz86IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51IHwgbnVsbCwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBsZXQgaSA9IDE7XG4gICAgY29uc3Qgc2hvcnRjdXRzOiBNZW51W10gPSBbXTtcbiAgICB0aGlzLnZpc2l0KHRoaXMuZGF0YSwgKGl0ZW06IE1lbnVJbm5lciwgcGFyZW50LCBkZXB0aCkgPT4ge1xuICAgICAgaXRlbS5faWQgPSBpKys7XG4gICAgICBpdGVtLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICBpdGVtLl9kZXB0aCA9IGRlcHRoO1xuICAgICAgdGhpcy5maXhJdGVtKGl0ZW0pO1xuXG4gICAgICAvLyBzaG9ydGN1dFxuICAgICAgaWYgKHBhcmVudCAmJiBpdGVtLnNob3J0Y3V0ID09PSB0cnVlICYmIHBhcmVudC5zaG9ydGN1dFJvb3QgIT09IHRydWUpIHtcbiAgICAgICAgc2hvcnRjdXRzLnB1c2goaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaXRlbSwgcGFyZW50LCBkZXB0aCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRTaG9ydGN1dChzaG9ydGN1dHMpO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWKoOi9veW/q+aNt+iPnOWNle+8jOWKoOi9veS9jee9ruinhOWImeWmguS4i++8mlxuICAgKiAx44CB57uf5LiA5Zyo5LiL5qCHMOeahOiKgueCueS4i++8iOWNs+OAkOS4u+WvvOiIquOAkeiKgueCueS4i+aWue+8iVxuICAgKiAgICAgIDHjgIHoi6UgY2hpbGRyZW4g5a2Y5ZyoIOOAkHNob3J0Y3V0Um9vdDogdHJ1ZeOAkeWImeacgOS8mOWFiOOAkOaOqOiNkOOAkei/meenjeaWueW8j1xuICAgKiAgICAgIDLjgIHlkKbliJnmn6Xmib7luKbmnInjgJBkYXNoYm9hcmTjgJHlrZfmoLfpk77mjqXvvIzoi6XlrZjlnKjliJnlnKjmraToj5zljZXnmoTkuIvmlrnliJvlu7rlv6vmjbflhaXlj6NcbiAgICogICAgICAz44CB5ZCm5YiZ5pS+5ZyoMOiKgueCueS9jee9rlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkU2hvcnRjdXQoc2hvcnRjdXRzOiBNZW51SW5uZXJbXSk6IHZvaWQge1xuICAgIGlmIChzaG9ydGN1dHMubGVuZ3RoID09PSAwIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBscyA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbiBhcyBNZW51SW5uZXJbXTtcbiAgICBsZXQgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5zaG9ydGN1dFJvb3QgPT09IHRydWUpO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmshLmluY2x1ZGVzKCdkYXNoYm9hcmQnKSk7XG4gICAgICBwb3MgPSAocG9zICE9PSAtMSA/IHBvcyA6IC0xKSArIDE7XG4gICAgICBjb25zdCBzaG9ydGN1dE1lbnUgPSB7XG4gICAgICAgIHRleHQ6ICflv6vmjbfoj5zljZUnLFxuICAgICAgICBpMThuOiAnc2hvcnRjdXQnLFxuICAgICAgICBpY29uOiAnaWNvbi1yb2NrZXQnLFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgIH0gYXMgTWVudUlubmVyO1xuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuIS5zcGxpY2UocG9zLCAwLCBzaG9ydGN1dE1lbnUpO1xuICAgIH1cbiAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW4hW3Bvc107XG4gICAgaWYgKF9kYXRhLmkxOG4pIF9kYXRhLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoX2RhdGEuaTE4bik7XG4gICAgX2RhdGEgPSBPYmplY3QuYXNzaWduKF9kYXRhLCB7XG4gICAgICBzaG9ydGN1dFJvb3Q6IHRydWUsXG4gICAgICBfaWQ6IC0xLFxuICAgICAgX3BhcmVudDogbnVsbCxcbiAgICAgIF9kZXB0aDogMVxuICAgIH0gYXMgTWVudUlubmVyKTtcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XG4gICAgICBpLl9kZXB0aCA9IDI7XG4gICAgICBpLl9wYXJlbnQgPSBfZGF0YTtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOa4heepuuiPnOWNlVxuICAgKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIGB1cmxgIG9yIGBrZXlgIHRvIGZpbmQgbWVudXNcbiAgICpcbiAgICog5Yip55SoIGB1cmxgIOaIliBga2V5YCDmn6Xmib7oj5zljZVcbiAgICovXG4gIGZpbmQob3B0aW9uczoge1xuICAgIGtleT86IHN0cmluZyB8IG51bGw7XG4gICAgdXJsPzogc3RyaW5nIHwgbnVsbDtcbiAgICByZWN1cnNpdmU/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBjYWxsYmFjayByZXR1cm5zIGEgQm9vbGVhbiB0eXBlLCBpdCBtZWFucyB0aGUgY3VzdG9tIHZhbGlkYXRpb24gcmVzdWx0XG4gICAgICpcbiAgICAgKiDlvZPlm57osIPov5Tlm57kuIDkuKrluIPlsJTnsbvlnovml7bvvIzooajnpLroh6rlrprkuYnmoKHpqoznu5PmnpxcbiAgICAgKi9cbiAgICBjYj86ICgoaTogTWVudSkgPT4gYm9vbGVhbiB8IG51bGwpIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIGN1cnJlbnQgbWVudSBkYXRhIGJ5IGRlZmF1bHRcbiAgICAgKlxuICAgICAqIOm7mOiupOS9v+eUqOW9k+WJjeiPnOWNleaVsOaNrlxuICAgICAqL1xuICAgIGRhdGE/OiBNZW51W10gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gaWdub3JlIGhpZGUgaXRlbXMsIGRlZmF1bHQ6IGBmYWxzZWBcbiAgICAgKlxuICAgICAqIOaYr+WQpuW/veeVpemakOiXj+eahOmhue+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICBpZ25vcmVIaWRlPzogYm9vbGVhbjtcbiAgfSk6IE1lbnUgfCBudWxsIHtcbiAgICBjb25zdCBvcHQgPSB7IHJlY3Vyc2l2ZTogZmFsc2UsIGlnbm9yZUhpZGU6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKG9wdC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShvcHQua2V5KTtcbiAgICB9XG5cbiAgICBsZXQgdXJsID0gb3B0LnVybDtcblxuICAgIGxldCBpdGVtOiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KG9wdC5kYXRhID8/IHRoaXMuZGF0YSwgaSA9PiB7XG4gICAgICAgIGlmIChvcHQuaWdub3JlSGlkZSAmJiBpLmhpZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IG9wdC5jYihpKTtcbiAgICAgICAgICBpZiAoIWl0ZW0gJiYgdHlwZW9mIHJlcyA9PT0gJ2Jvb2xlYW4nICYmIHJlcykge1xuICAgICAgICAgICAgaXRlbSA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpLmxpbmsgIT0gbnVsbCAmJiBpLmxpbmsgPT09IHVybCkge1xuICAgICAgICAgIGl0ZW0gPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFvcHQucmVjdXJzaXZlKSBicmVhaztcblxuICAgICAgaWYgKC9bPztdL2cudGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgvWz87XS9nKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IHVybC5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5qb2luKCcvJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICAvKipcbiAgICog5qC55o2udXJs6I635Y+W6I+c5Y2V5YiX6KGoXG4gICAqIC0g6IulIGByZWN1cnNpdmU6IHRydWVgIOWImeS8muiHquWKqOWQkeS4iumAkuW9kuafpeaJvlxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICBnZXRQYXRoQnlVcmwodXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZTogYm9vbGVhbiA9IGZhbHNlKTogTWVudVtdIHtcbiAgICBjb25zdCByZXQ6IE1lbnVbXSA9IFtdO1xuICAgIGxldCBpdGVtID0gdGhpcy5maW5kKHsgdXJsLCByZWN1cnNpdmUgfSkgYXMgTWVudUlubmVyO1xuXG4gICAgaWYgKCFpdGVtKSByZXR1cm4gcmV0O1xuXG4gICAgZG8ge1xuICAgICAgcmV0LnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9wYXJlbnQhO1xuICAgIH0gd2hpbGUgKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWVudSBiYXNlZCBvbiBga2V5YFxuICAgKi9cbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IE1lbnUgfCBudWxsIHtcbiAgICBsZXQgcmVzOiBNZW51IHwgbnVsbCA9IG51bGw7XG4gICAgdGhpcy52aXNpdCh0aGlzLmRhdGEsIGl0ZW0gPT4ge1xuICAgICAgaWYgKHJlcyA9PSBudWxsICYmIGl0ZW0ua2V5ID09PSBrZXkpIHtcbiAgICAgICAgcmVzID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBtZW51IGJhc2VkIG9uIGBrZXlgXG4gICAqL1xuICBzZXRJdGVtKGtleTogc3RyaW5nIHwgTWVudSwgdmFsdWU6IE1lbnUsIG9wdGlvbnM/OiB7IGVtaXQ/OiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgPyB0aGlzLmdldEl0ZW0oa2V5KSA6IGtleTtcbiAgICBpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrID0+IHtcbiAgICAgIGl0ZW1ba10gPSB2YWx1ZVtrXTtcbiAgICB9KTtcbiAgICB0aGlzLmZpeEl0ZW0oaXRlbSk7XG5cbiAgICBpZiAob3B0aW9ucz8uZW1pdCAhPT0gZmFsc2UpIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gbWVudSBiYXNlZCBvbiBga2V5YCBvciBtZW51IG9iamVjdFxuICAgKi9cbiAgb3BlbihrZXlPckl0ZW06IHN0cmluZyB8IE1lbnUgfCBudWxsLCBvcHRpb25zPzogeyBlbWl0PzogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgbGV0IGl0ZW0gPSB0eXBlb2Yga2V5T3JJdGVtID09PSAnc3RyaW5nJyA/IHRoaXMuZmluZCh7IGtleToga2V5T3JJdGVtIH0pIDoga2V5T3JJdGVtO1xuICAgIGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMudmlzaXQodGhpcy5tZW51cywgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgaS5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5vcGVuU3RyaWN0bHkpIGkub3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgZG8ge1xuICAgICAgaXRlbS5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgaXRlbS5vcGVuID0gdHJ1ZTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG4gICAgaWYgKG9wdGlvbnM/LmVtaXQgIT09IGZhbHNlKSB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9wZW5BbGwoc3RhdHVzPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlT3BlbihudWxsLCB7IGFsbFN0YXR1czogc3RhdHVzIH0pO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihrZXlPckl0ZW06IHN0cmluZyB8IE1lbnUgfCBudWxsLCBvcHRpb25zPzogeyBhbGxTdGF0dXM/OiBib29sZWFuOyBlbWl0PzogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgbGV0IGl0ZW0gPSB0eXBlb2Yga2V5T3JJdGVtID09PSAnc3RyaW5nJyA/IHRoaXMuZmluZCh7IGtleToga2V5T3JJdGVtIH0pIDoga2V5T3JJdGVtO1xuICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzaXQodGhpcy5tZW51cywgKGk6IE1lbnVJbm5lcikgPT4ge1xuICAgICAgICBpLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpLm9wZW4gPSBvcHRpb25zPy5hbGxTdGF0dXMgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLm9wZW5TdHJpY3RseSkge1xuICAgICAgICB0aGlzLnZpc2l0KHRoaXMubWVudXMsIChpOiBNZW51SW5uZXIpID0+IHtcbiAgICAgICAgICBpZiAoaSAhPT0gaXRlbSkgaS5vcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcEl0ZW0gPSBpdGVtLl9wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChwSXRlbSkge1xuICAgICAgICAgIHBJdGVtLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIHBJdGVtID0gcEl0ZW0uX3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXRlbS5vcGVuID0gIWl0ZW0ub3BlbjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnM/LmVtaXQgIT09IGZhbHNlKSB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmkxOG4kPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=