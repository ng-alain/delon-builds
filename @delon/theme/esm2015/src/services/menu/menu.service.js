/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
import * as i1 from "../i18n/i18n";
import * as i2 from "@delon/acl";
export class MenuService {
    /**
     * @param {?} i18nSrv
     * @param {?} aclService
     */
    constructor(i18nSrv, aclService) {
        this.i18nSrv = i18nSrv;
        this.aclService = aclService;
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        if (this.i18nSrv) {
            this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
        }
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change$.pipe(share());
    }
    /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    visit(data, callback) {
        /** @type {?} */
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
    /**
     * @param {?} items
     * @return {?}
     */
    add(items) {
        this.data = items;
        this.resume();
    }
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     * @param {?=} callback
     * @return {?}
     */
    resume(callback) {
        /** @type {?} */
        let i = 1;
        /** @type {?} */
        const shortcuts = [];
        this.visit(this.data, (item, parent, depth) => {
            item.__id = i++;
            item.__parent = parent;
            item._depth = depth;
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
            item._type = item.externalLink ? 2 : 1;
            if (item.children && item.children.length > 0) {
                item._type = 3;
            }
            // icon
            if (typeof item.icon === 'string') {
                /** @type {?} */
                let type = 'class';
                /** @type {?} */
                let value = item.icon;
                // compatible `anticon anticon-user`
                if (~item.icon.indexOf(`anticon-`)) {
                    type = 'icon';
                    value = value
                        .split('-')
                        .slice(1)
                        .join('-');
                }
                else if (/^https?:\/\//.test(item.icon)) {
                    type = 'img';
                }
                // tslint:disable-next-line:no-any
                item.icon = (/** @type {?} */ ({ type, value }));
            }
            if (item.icon != null) {
                item.icon = Object.assign({ theme: 'outline', spin: false }, ((/** @type {?} */ (item.icon))));
            }
            item.text = item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;
            // group
            item.group = item.group !== false;
            // hidden
            item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
            // disabled
            item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;
            // acl
            item._aclResult = item.acl && this.aclService ? this.aclService.can(item.acl) : true;
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
     * @param {?} shortcuts
     * @return {?}
     */
    loadShortcut(shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        /** @type {?} */
        const ls = this.data[0].children;
        /** @type {?} */
        let pos = ls.findIndex(w => w.shortcutRoot === true);
        if (pos === -1) {
            pos = ls.findIndex(w => w.link.includes('dashboard'));
            pos = (pos !== -1 ? pos : -1) + 1;
            /** @type {?} */
            const shortcutMenu = (/** @type {?} */ ({
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: [],
            }));
            this.data[0].children.splice(pos, 0, shortcutMenu);
        }
        /** @type {?} */
        let _data = this.data[0].children[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        // tslint:disable-next-line:prefer-object-spread
        _data = Object.assign(_data, {
            shortcutRoot: true,
            __id: -1,
            __parent: null,
            _type: 3,
            _depth: 1,
        });
        _data.children = shortcuts.map(i => {
            i._depth = 2;
            i.__parent = _data;
            return i;
        });
    }
    /**
     * @return {?}
     */
    get menus() {
        return this.data;
    }
    /**
     * 清空菜单
     * @return {?}
     */
    clear() {
        this.data = [];
        this._change$.next(this.data);
    }
    /**
     * @param {?} data
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    getHit(data, url, recursive = false, cb = null) {
        /** @type {?} */
        let item = null;
        while (!item && url) {
            this.visit(data, i => {
                if (cb) {
                    cb(i);
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            });
            if (!recursive)
                break;
            url = url.split('/').slice(0, -1).join('/');
        }
        return item;
    }
    /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    openedByUrl(url, recursive = false) {
        if (!url)
            return;
        /** @type {?} */
        let findItem = this.getHit(this.data, url, recursive, i => {
            i._selected = false;
            i._open = false;
        });
        if (!findItem)
            return;
        do {
            findItem._selected = true;
            findItem._open = true;
            findItem = findItem.__parent;
        } while (findItem);
    }
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    getPathByUrl(url, recursive = false) {
        /** @type {?} */
        const ret = [];
        /** @type {?} */
        let item = this.getHit(this.data, url, recursive);
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item.__parent;
        } while (item);
        return ret;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._change$.unsubscribe();
        if (this.i18n$)
            this.i18n$.unsubscribe();
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
MenuService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: ACLService, decorators: [{ type: Optional }] }
];
/** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i1.ALAIN_I18N_TOKEN, 8), i0.inject(i2.ACLService, 8)); }, token: MenuService, providedIn: "root" });
if (false) {
    /** @type {?} */
    MenuService.prototype._change$;
    /** @type {?} */
    MenuService.prototype.i18n$;
    /** @type {?} */
    MenuService.prototype.data;
    /** @type {?} */
    MenuService.prototype.i18nSrv;
    /** @type {?} */
    MenuService.prototype.aclService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUlsRSxNQUFNLE9BQU8sV0FBVzs7Ozs7SUFNdEIsWUFHVSxPQUF5QixFQUNiLFVBQXNCO1FBRGxDLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVRwQyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBR3BFLFNBQUksR0FBVyxFQUFFLENBQUM7UUFReEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsSUFBWSxFQUFFLFFBQWlFOztjQUM3RSxJQUFJLEdBQUcsQ0FBQyxJQUFZLEVBQUUsVUFBZ0IsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUM3RCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDdkIsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3RDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2lCQUNwQjthQUNGO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEtBQWE7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFDLFFBQWtFOztZQUNuRSxDQUFDLEdBQUcsQ0FBQzs7Y0FDSCxTQUFTLEdBQVcsRUFBRTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUUvQyxRQUFRO1lBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7aUJBQzVCO2FBQ0Y7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsT0FBTztZQUNQLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7b0JBQzdCLElBQUksR0FBRyxPQUFPOztvQkFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBQ3JCLG9DQUFvQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNsQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUNkLEtBQUssR0FBRyxLQUFLO3lCQUNWLEtBQUssQ0FBQyxHQUFHLENBQUM7eUJBQ1YsS0FBSyxDQUFDLENBQUMsQ0FBQzt5QkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2Q7cUJBQU0sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDekMsSUFBSSxHQUFHLEtBQUssQ0FBQztpQkFDZDtnQkFDRCxrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQU8sQ0FBQzthQUNwQztZQUNELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLG1CQUFLLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssSUFBSyxDQUFDLG1CQUFBLElBQUksQ0FBQyxJQUFJLEVBQVksQ0FBQyxDQUFFLENBQUM7YUFDM0U7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRWxGLFFBQVE7WUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO1lBRWxDLFNBQVM7WUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVwRSxXQUFXO1lBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFN0UsTUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVyRixXQUFXO1lBQ1gsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ3BFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7WUFFRCxJQUFJLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7Ozs7O0lBU08sWUFBWSxDQUFDLFNBQWlCO1FBQ3BDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BELE9BQU87U0FDUjs7Y0FFSyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFROztZQUM1QixHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDO1FBQ3BELElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsR0FBRyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7a0JBQzVCLFlBQVksR0FBRyxtQkFBQTtnQkFDbkIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxhQUFhO2dCQUNuQixRQUFRLEVBQUUsRUFBRTthQUNiLEVBQVE7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNwRDs7WUFDRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3RDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVFLGdEQUFnRDtRQUNoRCxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDM0IsWUFBWSxFQUFFLElBQUk7WUFDbEIsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNSLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBS0QsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsU0FBUyxHQUFHLEtBQUssRUFBRSxLQUF3QixJQUFJOztZQUMzRSxJQUFJLEdBQVMsSUFBSTtRQUVyQixPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxFQUFFLEVBQUU7b0JBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNQO2dCQUNELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7b0JBQ3BDLElBQUksR0FBRyxDQUFDLENBQUM7aUJBQ1Y7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTO2dCQUFFLE1BQU07WUFFdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7O0lBT0QsV0FBVyxDQUFDLEdBQVcsRUFBRSxTQUFTLEdBQUcsS0FBSztRQUN4QyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87O1lBRWIsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3hELENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUV0QixHQUFHO1lBQ0QsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdEIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7U0FDOUIsUUFBUSxRQUFRLEVBQUU7SUFDckIsQ0FBQzs7Ozs7Ozs7O0lBT0QsWUFBWSxDQUFDLEdBQVcsRUFBRSxTQUFTLEdBQUcsS0FBSzs7Y0FDbkMsR0FBRyxHQUFXLEVBQUU7O1lBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQztRQUVqRCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRXRCLEdBQUc7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEIsUUFBUSxJQUFJLEVBQUU7UUFFZixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUE1T0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FRN0IsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7WUFkbkIsVUFBVSx1QkFnQmQsUUFBUTs7Ozs7SUFUWCwrQkFBNEU7O0lBQzVFLDRCQUE0Qjs7SUFFNUIsMkJBQTBCOztJQUd4Qiw4QkFFaUM7O0lBQ2pDLGlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5cbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuaW1wb3J0IHsgTWVudSwgTWVudUljb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIGlmICh0aGlzLmkxOG5TcnYpIHtcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc3VtZSgpKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHZpc2l0KGRhdGE6IE1lbnVbXSwgY2FsbGJhY2s6IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IE1lbnVbXSwgcGFyZW50TWVudTogTWVudSwgZGVwdGg6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgY2FsbGJhY2soaXRlbSwgcGFyZW50TWVudSwgZGVwdGgpO1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGl0ZW0uY2hpbGRyZW4sIGl0ZW0sIGRlcHRoICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGluRm4oZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u6I+c5Y2V77yM5Y+v6IO9STE4TuOAgeeUqOaIt+adg+mZkOWPmOWKqOaXtumcgOimgeiwg+eUqOWIt+aWsFxuICAgKi9cbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQodGhpcy5kYXRhLCAoaXRlbSwgcGFyZW50LCBkZXB0aCkgPT4ge1xuICAgICAgaXRlbS5fX2lkID0gaSsrO1xuICAgICAgaXRlbS5fX3BhcmVudCA9IHBhcmVudDtcbiAgICAgIGl0ZW0uX2RlcHRoID0gZGVwdGg7XG5cbiAgICAgIGlmICghaXRlbS5saW5rKSBpdGVtLmxpbmsgPSAnJztcbiAgICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAgIC8vIGJhZGdlXG4gICAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VEb3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlU3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpdGVtLl90eXBlID0gaXRlbS5leHRlcm5hbExpbmsgPyAyIDogMTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLl90eXBlID0gMztcbiAgICAgIH1cblxuICAgICAgLy8gaWNvblxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgICAvLyBjb21wYXRpYmxlIGBhbnRpY29uIGFudGljb24tdXNlcmBcbiAgICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIGl0ZW0uaWNvbiA9IHsgdHlwZSwgdmFsdWUgfSBhcyBhbnk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcbiAgICAgICAgaXRlbS5pY29uID0geyB0aGVtZTogJ291dGxpbmUnLCBzcGluOiBmYWxzZSwgLi4uKGl0ZW0uaWNvbiBhcyBNZW51SWNvbikgfTtcbiAgICAgIH1cblxuICAgICAgaXRlbS50ZXh0ID0gaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xuXG4gICAgICAvLyBncm91cFxuICAgICAgaXRlbS5ncm91cCA9IGl0ZW0uZ3JvdXAgIT09IGZhbHNlO1xuXG4gICAgICAvLyBoaWRkZW5cbiAgICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XG5cbiAgICAgIC8vIGRpc2FibGVkXG4gICAgICBpdGVtLmRpc2FibGVkID0gdHlwZW9mIGl0ZW0uZGlzYWJsZWQgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmRpc2FibGVkO1xuXG4gICAgICAvLyBhY2xcbiAgICAgIGl0ZW0uX2FjbFJlc3VsdCA9IGl0ZW0uYWNsICYmIHRoaXMuYWNsU2VydmljZSA/IHRoaXMuYWNsU2VydmljZS5jYW4oaXRlbS5hY2wpIDogdHJ1ZTtcblxuICAgICAgLy8gc2hvcnRjdXRcbiAgICAgIGlmIChwYXJlbnQgJiYgaXRlbS5zaG9ydGN1dCA9PT0gdHJ1ZSAmJiBwYXJlbnQuc2hvcnRjdXRSb290ICE9PSB0cnVlKSB7XG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGl0ZW0sIHBhcmVudCwgZGVwdGgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkU2hvcnRjdXQoc2hvcnRjdXRzKTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliqDovb3lv6vmjbfoj5zljZXvvIzliqDovb3kvY3nva7op4TliJnlpoLkuIvvvJpcbiAgICogMeOAgee7n+S4gOWcqOS4i+aghzDnmoToioLngrnkuIvvvIjljbPjgJDkuLvlr7zoiKrjgJHoioLngrnkuIvmlrnvvIlcbiAgICogICAgICAx44CB6IulIGNoaWxkcmVuIOWtmOWcqCDjgJBzaG9ydGN1dFJvb3Q6IHRydWXjgJHliJnmnIDkvJjlhYjjgJDmjqjojZDjgJHov5nnp43mlrnlvI9cbiAgICogICAgICAy44CB5ZCm5YiZ5p+l5om+5bim5pyJ44CQZGFzaGJvYXJk44CR5a2X5qC36ZO+5o6l77yM6Iul5a2Y5Zyo5YiZ5Zyo5q2k6I+c5Y2V55qE5LiL5pa55Yib5bu65b+r5o235YWl5Y+jXG4gICAqICAgICAgM+OAgeWQpuWImeaUvuWcqDDoioLngrnkvY3nva5cbiAgICovXG4gIHByaXZhdGUgbG9hZFNob3J0Y3V0KHNob3J0Y3V0czogTWVudVtdKSB7XG4gICAgaWYgKHNob3J0Y3V0cy5sZW5ndGggPT09IDAgfHwgdGhpcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxzID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuO1xuICAgIGxldCBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LnNob3J0Y3V0Um9vdCA9PT0gdHJ1ZSk7XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcubGluay5pbmNsdWRlcygnZGFzaGJvYXJkJykpO1xuICAgICAgcG9zID0gKHBvcyAhPT0gLTEgPyBwb3MgOiAtMSkgKyAxO1xuICAgICAgY29uc3Qgc2hvcnRjdXRNZW51ID0ge1xuICAgICAgICB0ZXh0OiAn5b+r5o236I+c5Y2VJyxcbiAgICAgICAgaTE4bjogJ3Nob3J0Y3V0JyxcbiAgICAgICAgaWNvbjogJ2ljb24tcm9ja2V0JyxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSBhcyBNZW51O1xuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbltwb3NdO1xuICAgIGlmIChfZGF0YS5pMThuICYmIHRoaXMuaTE4blNydikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLW9iamVjdC1zcHJlYWRcbiAgICBfZGF0YSA9IE9iamVjdC5hc3NpZ24oX2RhdGEsIHtcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcbiAgICAgIF9faWQ6IC0xLFxuICAgICAgX19wYXJlbnQ6IG51bGwsXG4gICAgICBfdHlwZTogMyxcbiAgICAgIF9kZXB0aDogMSxcbiAgICB9KTtcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XG4gICAgICBpLl9kZXB0aCA9IDI7XG4gICAgICBpLl9fcGFyZW50ID0gX2RhdGE7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBtZW51cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIOa4heepuuiPnOWNlVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBnZXRIaXQoZGF0YTogTWVudVtdLCB1cmw6IHN0cmluZywgcmVjdXJzaXZlID0gZmFsc2UsIGNiOiAoaTogTWVudSkgPT4gdm9pZCA9IG51bGwpIHtcbiAgICBsZXQgaXRlbTogTWVudSA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KGRhdGEsIGkgPT4ge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICBjYihpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaS5saW5rICE9IG51bGwgJiYgaS5saW5rID09PSB1cmwpIHtcbiAgICAgICAgICBpdGVtID0gaTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVjdXJzaXZlKSBicmVhaztcblxuICAgICAgdXJsID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja5VUkzorr7nva7oj5zljZUgYF9vcGVuYCDlsZ7mgKdcbiAgICogLSDoi6UgYHJlY3Vyc2l2ZTogdHJ1ZWAg5YiZ5Lya6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+XG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcbiAgICovXG4gIG9wZW5lZEJ5VXJsKHVybDogc3RyaW5nLCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIGlmICghdXJsKSByZXR1cm47XG5cbiAgICBsZXQgZmluZEl0ZW0gPSB0aGlzLmdldEhpdCh0aGlzLmRhdGEsIHVybCwgcmVjdXJzaXZlLCBpID0+IHtcbiAgICAgIGkuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICBpLl9vcGVuID0gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKCFmaW5kSXRlbSkgcmV0dXJuO1xuXG4gICAgZG8ge1xuICAgICAgZmluZEl0ZW0uX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIGZpbmRJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoZmluZEl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrnVybOiOt+WPluiPnOWNleWIl+ihqFxuICAgKiAtIOiLpSBgcmVjdXJzaXZlOiB0cnVlYCDliJnkvJroh6rliqjlkJHkuIrpgJLlvZLmn6Xmib5cbiAgICogIC0g6I+c5Y2V5pWw5o2u5rqQ5YyF5ZCrIGAvd2FyZWDvvIzliJkgYC93YXJlLzFgIOS5n+inhuS4uiBgL3dhcmVgIOmhuVxuICAgKi9cbiAgZ2V0UGF0aEJ5VXJsKHVybDogc3RyaW5nLCByZWN1cnNpdmUgPSBmYWxzZSk6IE1lbnVbXSB7XG4gICAgY29uc3QgcmV0OiBNZW51W10gPSBbXTtcbiAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SGl0KHRoaXMuZGF0YSwgdXJsLCByZWN1cnNpdmUpO1xuXG4gICAgaWYgKCFpdGVtKSByZXR1cm4gcmV0O1xuXG4gICAgZG8ge1xuICAgICAgcmV0LnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9fcGFyZW50O1xuICAgIH0gd2hpbGUgKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=