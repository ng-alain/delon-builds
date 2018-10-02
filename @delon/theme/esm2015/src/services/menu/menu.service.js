/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
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
        if (this.i18nSrv)
            this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change$.pipe(share());
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    visit(callback) {
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
        inFn(this.data, null, 0);
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
        this.visit((item, parent, depth) => {
            item["__id"] = i++;
            item["__parent"] = parent;
            item["_depth"] = depth;
            if (!item.link)
                item.link = '';
            if (typeof item.linkExact === 'undefined')
                item.linkExact = false;
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
            item["_type"] = item.externalLink ? 2 : 1;
            if (item.children && item.children.length > 0) {
                item["_type"] = 3;
            }
            // shortcut
            if (parent && item.shortcut === true && parent.shortcutRoot !== true)
                shortcuts.push(item);
            item.text =
                item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;
            // group
            item.group = typeof item.group !== 'boolean' ? true : item.group;
            // hidden
            item["_hidden"] = typeof item.hide === 'undefined' ? false : item.hide;
            // acl
            if (item.acl && this.aclService) {
                item["_hidden"] = !this.aclService.can(item.acl);
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
            const shortcutMenu = /** @type {?} */ ({
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: [],
            });
            this.data[0].children.splice(pos, 0, shortcutMenu);
        }
        /** @type {?} */
        let _data = this.data[0].children[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        _data = Object.assign(_data, {
            shortcutRoot: true,
            _type: 3,
            __id: -1,
            _depth: 1,
        });
        _data.children = shortcuts.map(i => {
            i["_depth"] = 2;
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
     * 根据URL设置菜单 `_open` 属性
     * @param {?} url URL地址
     * @return {?}
     */
    openedByUrl(url) {
        if (!url)
            return;
        /** @type {?} */
        let findItem = null;
        this.visit(item => {
            item["_open"] = false;
            if (!item.link) {
                return;
            }
            if (!findItem && url.startsWith(item.link)) {
                findItem = item;
            }
        });
        if (!findItem)
            return;
        do {
            findItem["_open"] = true;
            findItem = findItem["__parent"];
        } while (findItem);
    }
    /**
     * 根据url获取菜单列表
     * @param {?} url
     * @return {?}
     */
    getPathByUrl(url) {
        /** @type {?} */
        let item = null;
        this.visit((i, parent, depth) => {
            if (i.link === url) {
                item = i;
            }
        });
        /** @type {?} */
        const ret = [];
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item["__parent"];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUE0QixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLGNBQWMsQ0FBQzs7OztBQUlsRSxNQUFNOzs7OztJQU1KLFlBR1UsT0FBeUIsRUFDYixVQUFzQjtRQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVk7d0JBVEEsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDO29CQUdwRCxFQUFFO1FBUXZCLElBQUksSUFBSSxDQUFDLE9BQU87WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUNuRTs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUNwQzs7Ozs7SUFFRCxLQUFLLENBQUMsUUFBaUU7O1FBQ3JFLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBWSxFQUFFLFVBQWdCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDN0QsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxF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QVE3QixRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtZQWRuQixVQUFVLHVCQWdCZCxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5cclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2NoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxNZW51W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZW51W10+KFtdKTtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgZGF0YTogTWVudVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcclxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsU2VydmljZTogQUNMU2VydmljZSxcclxuICApIHtcclxuICAgIGlmICh0aGlzLmkxOG5TcnYpXHJcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc3VtZSgpKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxNZW51W10+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdChjYWxsYmFjazogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUsIGRlcHRoOiBudW1iZXIpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcclxuICAgICAgICBjYWxsYmFjayhpdGVtLCBwYXJlbnRNZW51LCBkZXB0aCk7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpbkZuKGl0ZW0uY2hpbGRyZW4sIGl0ZW0sIGRlcHRoICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5Gbih0aGlzLmRhdGEsIG51bGwsIDApO1xyXG4gIH1cclxuXHJcbiAgYWRkKGl0ZW1zOiBNZW51W10pIHtcclxuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xyXG4gICAgdGhpcy5yZXN1bWUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmHjee9ruiPnOWNle+8jOWPr+iDvUkxOE7jgIHnlKjmiLfmnYPpmZDlj5jliqjml7bpnIDopoHosIPnlKjliLfmlrBcclxuICAgKi9cclxuICByZXN1bWUoY2FsbGJhY2s/OiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xyXG4gICAgdGhpcy52aXNpdCgoaXRlbSwgcGFyZW50LCBkZXB0aCkgPT4ge1xyXG4gICAgICBpdGVtLl9faWQgPSBpKys7XHJcbiAgICAgIGl0ZW0uX19wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgIGl0ZW0uX2RlcHRoID0gZGVwdGg7XHJcblxyXG4gICAgICBpZiAoIWl0ZW0ubGluaykgaXRlbS5saW5rID0gJyc7XHJcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5saW5rRXhhY3QgPT09ICd1bmRlZmluZWQnKSBpdGVtLmxpbmtFeGFjdCA9IGZhbHNlO1xyXG4gICAgICBpZiAoIWl0ZW0uZXh0ZXJuYWxMaW5rKSBpdGVtLmV4dGVybmFsTGluayA9ICcnO1xyXG5cclxuICAgICAgLy8gYmFkZ2VcclxuICAgICAgaWYgKGl0ZW0uYmFkZ2UpIHtcclxuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaXRlbS5iYWRnZURvdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcclxuICAgICAgICAgIGl0ZW0uYmFkZ2VTdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaXRlbS5fdHlwZSA9IGl0ZW0uZXh0ZXJuYWxMaW5rID8gMiA6IDE7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGl0ZW0uX3R5cGUgPSAzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzaG9ydGN1dFxyXG4gICAgICBpZiAocGFyZW50ICYmIGl0ZW0uc2hvcnRjdXQgPT09IHRydWUgJiYgcGFyZW50LnNob3J0Y3V0Um9vdCAhPT0gdHJ1ZSlcclxuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcclxuXHJcbiAgICAgIGl0ZW0udGV4dCA9XHJcbiAgICAgICAgaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xyXG5cclxuICAgICAgLy8gZ3JvdXBcclxuICAgICAgaXRlbS5ncm91cCA9IHR5cGVvZiBpdGVtLmdyb3VwICE9PSAnYm9vbGVhbicgPyB0cnVlIDogaXRlbS5ncm91cDtcclxuXHJcbiAgICAgIC8vIGhpZGRlblxyXG4gICAgICBpdGVtLl9oaWRkZW4gPSB0eXBlb2YgaXRlbS5oaWRlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogaXRlbS5oaWRlO1xyXG5cclxuICAgICAgLy8gYWNsXHJcbiAgICAgIGlmIChpdGVtLmFjbCAmJiB0aGlzLmFjbFNlcnZpY2UpIHtcclxuICAgICAgICBpdGVtLl9oaWRkZW4gPSAhdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaXRlbSwgcGFyZW50LCBkZXB0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxvYWRTaG9ydGN1dChzaG9ydGN1dHMpO1xyXG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliqDovb3lv6vmjbfoj5zljZXvvIzliqDovb3kvY3nva7op4TliJnlpoLkuIvvvJpcclxuICAgKiAx44CB57uf5LiA5Zyo5LiL5qCHMOeahOiKgueCueS4i++8iOWNs+OAkOS4u+WvvOiIquOAkeiKgueCueS4i+aWue+8iVxyXG4gICAqICAgICAgMeOAgeiLpSBjaGlsZHJlbiDlrZjlnKgg44CQc2hvcnRjdXRSb290OiB0cnVl44CR5YiZ5pyA5LyY5YWI44CQ5o6o6I2Q44CR6L+Z56eN5pa55byPXHJcbiAgICogICAgICAy44CB5ZCm5YiZ5p+l5om+5bim5pyJ44CQZGFzaGJvYXJk44CR5a2X5qC36ZO+5o6l77yM6Iul5a2Y5Zyo5YiZ5Zyo5q2k6I+c5Y2V55qE5LiL5pa55Yib5bu65b+r5o235YWl5Y+jXHJcbiAgICogICAgICAz44CB5ZCm5YiZ5pS+5ZyoMOiKgueCueS9jee9rlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZFNob3J0Y3V0KHNob3J0Y3V0czogTWVudVtdKSB7XHJcbiAgICBpZiAoc2hvcnRjdXRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBscyA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbjtcclxuICAgIGxldCBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LnNob3J0Y3V0Um9vdCA9PT0gdHJ1ZSk7XHJcbiAgICBpZiAocG9zID09PSAtMSkge1xyXG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmsuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcclxuICAgICAgcG9zID0gKHBvcyAhPT0gLTEgPyBwb3MgOiAtMSkgKyAxO1xyXG4gICAgICBjb25zdCBzaG9ydGN1dE1lbnUgPSA8TWVudT57XHJcbiAgICAgICAgdGV4dDogJ+W/q+aNt+iPnOWNlScsXHJcbiAgICAgICAgaTE4bjogJ3Nob3J0Y3V0JyxcclxuICAgICAgICBpY29uOiAnaWNvbi1yb2NrZXQnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XHJcbiAgICB9XHJcbiAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW5bcG9zXTtcclxuICAgIGlmIChfZGF0YS5pMThuICYmIHRoaXMuaTE4blNydikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcclxuICAgIF9kYXRhID0gT2JqZWN0LmFzc2lnbihfZGF0YSwge1xyXG4gICAgICBzaG9ydGN1dFJvb3Q6IHRydWUsXHJcbiAgICAgIF90eXBlOiAzLFxyXG4gICAgICBfX2lkOiAtMSxcclxuICAgICAgX2RlcHRoOiAxLFxyXG4gICAgfSk7XHJcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XHJcbiAgICAgIGkuX2RlcHRoID0gMjtcclxuICAgICAgcmV0dXJuIGk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBtZW51cygpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmuIXnqbroj5zljZVcclxuICAgKi9cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja5VUkzorr7nva7oj5zljZUgYF9vcGVuYCDlsZ7mgKdcclxuICAgKiBAcGFyYW0gdXJsIFVSTOWcsOWdgFxyXG4gICAqL1xyXG4gIG9wZW5lZEJ5VXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBmaW5kSXRlbTogTWVudSA9IG51bGw7XHJcbiAgICB0aGlzLnZpc2l0KGl0ZW0gPT4ge1xyXG4gICAgICBpdGVtLl9vcGVuID0gZmFsc2U7XHJcbiAgICAgIGlmICghaXRlbS5saW5rKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZmluZEl0ZW0gJiYgdXJsLnN0YXJ0c1dpdGgoaXRlbS5saW5rKSkge1xyXG4gICAgICAgIGZpbmRJdGVtID0gaXRlbTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZpbmRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XHJcbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX19wYXJlbnQ7XHJcbiAgICB9IHdoaWxlIChmaW5kSXRlbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja51cmzojrflj5boj5zljZXliJfooahcclxuICAgKiBAcGFyYW0gdXJsXHJcbiAgICovXHJcbiAgZ2V0UGF0aEJ5VXJsKHVybDogc3RyaW5nKTogTWVudVtdIHtcclxuICAgIGxldCBpdGVtOiBNZW51ID0gbnVsbDtcclxuICAgIHRoaXMudmlzaXQoKGksIHBhcmVudCwgZGVwdGgpID0+IHtcclxuICAgICAgaWYgKGkubGluayA9PT0gdXJsKSB7XHJcbiAgICAgICAgaXRlbSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJldDogTWVudVtdID0gW107XHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xyXG4gICAgICBpdGVtID0gaXRlbS5fX3BhcmVudDtcclxuICAgIH0gd2hpbGUgKGl0ZW0pO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==