/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
export class ArrayService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.c = Object.assign(/** @type {?} */ ({
            deepMapName: 'deep',
            parentMapName: 'parent',
            idMapName: 'id',
            parentIdMapName: 'parent_id',
            childrenMapName: 'children',
            titleMapName: 'title',
            checkedMapname: 'checked',
            selectedMapname: 'selected',
            expandedMapname: 'expanded',
            disabledMapname: 'disabled',
        }), cog && cog.array);
    }
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    treeToArr(tree, options) {
        options = Object.assign({
            deepMapName: this.c.deepMapName,
            parentMapName: this.c.parentMapName,
            childrenMapName: this.c.childrenMapName,
            clearChildren: true,
            cb: null,
        }, options);
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const inFn = (list, parent, deep) => {
            for (const i of list) {
                i[options.deepMapName] = deep;
                i[options.parentMapName] = parent;
                if (options.cb)
                    options.cb(i, parent, deep);
                result.push(i);
                /** @type {?} */
                const children = i[options.childrenMapName];
                if (children != null &&
                    Array.isArray(children) &&
                    children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (options.clearChildren)
                    delete i[options.childrenMapName];
            }
        };
        inFn(tree, 1, null);
        return result;
    }
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTree(arr, options) {
        options = Object.assign({
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            childrenMapName: this.c.childrenMapName,
            cb: null,
        }, options);
        /** @type {?} */
        const tree = [];
        /** @type {?} */
        const childrenOf = {};
        for (const item of arr) {
            /** @type {?} */
            const id = item[options.idMapName];
            /** @type {?} */
            const pid = item[options.parentIdMapName];
            childrenOf[id] = childrenOf[id] || [];
            item[options.childrenMapName] = childrenOf[id];
            if (options.cb)
                options.cb(item);
            if (pid) {
                childrenOf[pid] = childrenOf[pid] || [];
                childrenOf[pid].push(item);
            }
            else {
                tree.push(item);
            }
        }
        return tree;
    }
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTreeNode(arr, options) {
        options = Object.assign({
            expanded: false,
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            titleMapName: this.c.titleMapName,
            isLeafMapName: 'isLeaf',
            checkedMapname: this.c.checkedMapname,
            selectedMapname: this.c.selectedMapname,
            expandedMapname: this.c.expandedMapname,
            disabledMapname: this.c.disabledMapname,
            cb: null,
        }, options);
        /** @type {?} */
        const tree = this.arrToTree(arr, {
            idMapName: options.idMapName,
            parentIdMapName: options.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, (item, parent, deep) => {
            item.key = item[options.idMapName];
            item.title = item[options.titleMapName];
            item.checked = item[options.checkedMapname];
            item.selected = item[options.selectedMapname];
            item.expanded = item[options.expandedMapname];
            item.disabled = item[options.disabledMapname];
            if (item[options.isLeafMapName] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[options.isLeafMapName];
            }
            if (options.cb)
                options.cb(item, parent, deep);
        });
        return tree.map(node => new NzTreeNode(node));
    }
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    visitTree(tree, cb, options) {
        options = Object.assign({
            childrenMapName: this.c.childrenMapName,
        }, options);
        /** @type {?} */
        const inFn = (data, parent, deep) => {
            for (const item of data) {
                cb(item, parent, deep);
                /** @type {?} */
                const childrenVal = item[options.childrenMapName];
                if (childrenVal && childrenVal.length > 0) {
                    inFn(childrenVal, item, deep + 1);
                }
            }
        };
        inFn(tree, null, 1);
    }
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    getKeysByTreeNode(tree, options) {
        options = Object.assign({
            includeHalfChecked: true,
        }, options);
        /** @type {?} */
        const keys = [];
        this.visitTree(tree, (item, parent, deep) => {
            if (item.isChecked ||
                (options.includeHalfChecked && item.isHalfChecked)) {
                keys.push(options.cb
                    ? options.cb(item, parent, deep)
                    : options.keyMapName
                        ? item.origin[options.keyMapName]
                        : item.key);
            }
        });
        return keys;
    }
}
ArrayService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ArrayService.ctorParameters = () => [
    { type: DelonUtilConfig }
];
/** @nocollapse */ ArrayService.ngInjectableDef = i0.defineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.inject(i1.DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ArrayService.prototype.c;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUlqRCxNQUFNOzs7O0lBRUosWUFBWSxHQUFvQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLG1CQUNQO1lBQ1gsV0FBVyxFQUFFLE1BQU07WUFDbkIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixlQUFlLEVBQUUsV0FBVztZQUM1QixlQUFlLEVBQUUsVUFBVTtZQUMzQixZQUFZLEVBQUUsT0FBTztZQUNyQixjQUFjLEVBQUUsU0FBUztZQUN6QixlQUFlLEVBQUUsVUFBVTtZQUMzQixlQUFlLEVBQUUsVUFBVTtZQUMzQixlQUFlLEVBQUUsVUFBVTtTQUM1QixHQUNELEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUNqQixDQUFDO0tBQ0g7Ozs7Ozs7SUFJRCxTQUFTLENBQ1AsSUFBVyxFQUNYLE9BV0M7UUFFRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckI7WUFDRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWE7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUN2QyxhQUFhLEVBQUUsSUFBSTtZQUNuQixFQUFFLEVBQUUsSUFBSTtTQUNULEVBQ0QsT0FBTyxDQUNSLENBQUM7O1FBQ0YsTUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDOztRQUN6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aUIsQ0FDZixJQUFrQixFQUNsQixPQU9DO1FBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO1lBQ0Usa0JBQWtCLEVBQUUsSUFBSTtTQUN6QixFQUNELE9BQU8sQ0FDUixDQUFDOztRQUNGLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUNaLElBQUksRUFDSixDQUFDLElBQWdCLEVBQUUsTUFBa0IsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUNyRCxJQUNFLElBQUksQ0FBQyxTQUFTO2dCQUNkLENBQUMsT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFDbEQ7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FDUCxPQUFPLENBQUMsRUFBRTtvQkFDUixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVO3dCQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDZixDQUFDO2FBQ0g7U0FDRixDQUNGLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztLQUNiOzs7WUFwUEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUh6QixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IERlbG9uVXRpbENvbmZpZyB9IGZyb20gJy4uL3V0aWwuY29uZmlnJztcclxuaW1wb3J0IHsgQXJyYXlDb25maWcgfSBmcm9tICcuL2FycmF5LmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcclxuICBwcml2YXRlIGM6IEFycmF5Q29uZmlnO1xyXG4gIGNvbnN0cnVjdG9yKGNvZzogRGVsb25VdGlsQ29uZmlnKSB7XHJcbiAgICB0aGlzLmMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICA8QXJyYXlDb25maWc+e1xyXG4gICAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXHJcbiAgICAgICAgcGFyZW50TWFwTmFtZTogJ3BhcmVudCcsXHJcbiAgICAgICAgaWRNYXBOYW1lOiAnaWQnLFxyXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXHJcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxyXG4gICAgICAgIHRpdGxlTWFwTmFtZTogJ3RpdGxlJyxcclxuICAgICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxyXG4gICAgICAgIHNlbGVjdGVkTWFwbmFtZTogJ3NlbGVjdGVkJyxcclxuICAgICAgICBleHBhbmRlZE1hcG5hbWU6ICdleHBhbmRlZCcsXHJcbiAgICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxyXG4gICAgICB9LFxyXG4gICAgICBjb2cgJiYgY29nLmFycmF5LFxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5bCG5qCR57uT5p6E6L2s5o2i5oiQ5pWw57uE57uT5p6EXHJcbiAgICovXHJcbiAgdHJlZVRvQXJyKFxyXG4gICAgdHJlZTogYW55W10sXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiog5rex5bqm6aG55ZCN77yM6buY6K6k77yaYCdkZWVwJ2AgKi9cclxuICAgICAgZGVlcE1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDmiYHlubPlkI7mlbDnu4TnmoTniLbmlbDmja7pobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudCdgICovXHJcbiAgICAgIHBhcmVudE1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDmupDmlbDmja7lrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cclxuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog5piv5ZCm56e76ZmkIGBjaGlsZHJlbmAg6IqC54K577yM6buY6K6k77yaYHRydWVgICovXHJcbiAgICAgIGNsZWFyQ2hpbGRyZW4/OiBib29sZWFuO1xyXG4gICAgICAvKiog6L2s5o2i5oiQ5pWw57uE57uT5p6E5pe25Zue6LCDICovXHJcbiAgICAgIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIH0sXHJcbiAgKTogYW55W10ge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBkZWVwTWFwTmFtZTogdGhpcy5jLmRlZXBNYXBOYW1lLFxyXG4gICAgICAgIHBhcmVudE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRNYXBOYW1lLFxyXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcclxuICAgICAgICBjbGVhckNoaWxkcmVuOiB0cnVlLFxyXG4gICAgICAgIGNiOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGluRm4gPSAobGlzdDogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpIHtcclxuICAgICAgICBpW29wdGlvbnMuZGVlcE1hcE5hbWVdID0gZGVlcDtcclxuICAgICAgICBpW29wdGlvbnMucGFyZW50TWFwTmFtZV0gPSBwYXJlbnQ7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaSwgcGFyZW50LCBkZWVwKTtcclxuICAgICAgICByZXN1bHQucHVzaChpKTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGlbb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNoaWxkcmVuICE9IG51bGwgJiZcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXHJcbiAgICAgICAgICBjaGlsZHJlbi5sZW5ndGggPiAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpLCBkZWVwICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLmNsZWFyQ2hpbGRyZW4pIGRlbGV0ZSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGluRm4odHJlZSwgMSwgbnVsbCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pWw57uE6L2s5o2i5oiQ5qCR5pWw5o2uXHJcbiAgICovXHJcbiAgYXJyVG9UcmVlKFxyXG4gICAgYXJyOiBhbnlbXSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cclxuICAgICAgaWRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xyXG4gICAgICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cclxuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5pe25Zue6LCDICovXHJcbiAgICAgIGNiPzogKGl0ZW06IGFueSkgPT4gdm9pZDtcclxuICAgIH0sXHJcbiAgKTogYW55W10ge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXHJcbiAgICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxyXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcclxuICAgICAgICBjYjogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCB0cmVlOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgY2hpbGRyZW5PZiA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xyXG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0aW9ucy5pZE1hcE5hbWVdLFxyXG4gICAgICAgIHBpZCA9IGl0ZW1bb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWVdO1xyXG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xyXG4gICAgICBpdGVtW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXSA9IGNoaWxkcmVuT2ZbaWRdO1xyXG4gICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihpdGVtKTtcclxuICAgICAgaWYgKHBpZCkge1xyXG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXSA9IGNoaWxkcmVuT2ZbcGlkXSB8fCBbXTtcclxuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cmVlLnB1c2goaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cmVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pWw57uE6L2s5o2i5oiQIGBuei10cmVlYCDmlbDmja7mupDvvIzpgJrov4cgYG9wdGlvbnNgIOi9rOWMlumhueWQje+8jOS5n+WPr+S7peS9v+eUqCBgb3B0aW9ucy5jYmAg5pu06auY57qn5Yaz5a6a5pWw5o2u6aG5XHJcbiAgICovXHJcbiAgYXJyVG9UcmVlTm9kZShcclxuICAgIGFycjogYW55W10sXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXHJcbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOeItue8luWPt+mhueWQje+8jOm7mOiupO+8mmAncGFyZW50X2lkJ2AgKi9cclxuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog5qCH6aKY6aG55ZCN77yM6buY6K6k77yaYCd0aXRsZSdgICovXHJcbiAgICAgIHRpdGxlTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOiuvue9ruS4uuWPtuWtkOiKgueCuemhueWQje+8jOiLpeaVsOaNrua6kOS4jeWtmOWcqOaXtuiHquWKqOagueaNriBgY2hpbGRyZW5gIOWAvOWGs+WumuaYr+WQpuS4uuWPtuWtkOiKgueCue+8jOm7mOiupO+8mmAnaXNMZWFmJ2AgKi9cclxuICAgICAgaXNMZWFmTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOiKgueCuSBDaGVja2JveCDmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ2NoZWNrZWQnYCAqL1xyXG4gICAgICBjaGVja2VkTWFwbmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOiKgueCueacrOi6q+aYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnc2VsZWN0ZWQnYCAqL1xyXG4gICAgICBzZWxlY3RlZE1hcG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDoioLngrnmmK/lkKblsZXlvIAo5Y+25a2Q6IqC54K55peg5pWIKemhueWQje+8jOm7mOiupO+8mmAnZXhwYW5kZWQnYCAqL1xyXG4gICAgICBleHBhbmRlZE1hcG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDorr7nva7mmK/lkKbnpoHnlKjoioLngrko5LiN5Y+v6L+b6KGM5Lu75L2V5pON5L2cKemhueWQje+8jOm7mOiupO+8mmAnZGlzYWJsZWQnYCAqL1xyXG4gICAgICBkaXNhYmxlZE1hcG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDovazmjaLmiJDmoJHmlbDmja7lkI7vvIzmiafooYznmoTpgJLlvZLlm57osIMgKi9cclxuICAgICAgY2I/OiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgfSxcclxuICApOiBOelRyZWVOb2RlW10ge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBleHBhbmRlZDogZmFsc2UsXHJcbiAgICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxyXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcclxuICAgICAgICB0aXRsZU1hcE5hbWU6IHRoaXMuYy50aXRsZU1hcE5hbWUsXHJcbiAgICAgICAgaXNMZWFmTWFwTmFtZTogJ2lzTGVhZicsXHJcbiAgICAgICAgY2hlY2tlZE1hcG5hbWU6IHRoaXMuYy5jaGVja2VkTWFwbmFtZSxcclxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6IHRoaXMuYy5zZWxlY3RlZE1hcG5hbWUsXHJcbiAgICAgICAgZXhwYW5kZWRNYXBuYW1lOiB0aGlzLmMuZXhwYW5kZWRNYXBuYW1lLFxyXG4gICAgICAgIGRpc2FibGVkTWFwbmFtZTogdGhpcy5jLmRpc2FibGVkTWFwbmFtZSxcclxuICAgICAgICBjYjogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCB0cmVlID0gdGhpcy5hcnJUb1RyZWUoYXJyLCB7XHJcbiAgICAgIGlkTWFwTmFtZTogb3B0aW9ucy5pZE1hcE5hbWUsXHJcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWUsXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xyXG4gICAgICBpdGVtLmtleSA9IGl0ZW1bb3B0aW9ucy5pZE1hcE5hbWVdO1xyXG4gICAgICBpdGVtLnRpdGxlID0gaXRlbVtvcHRpb25zLnRpdGxlTWFwTmFtZV07XHJcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW1bb3B0aW9ucy5jaGVja2VkTWFwbmFtZV07XHJcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtW29wdGlvbnMuc2VsZWN0ZWRNYXBuYW1lXTtcclxuICAgICAgaXRlbS5leHBhbmRlZCA9IGl0ZW1bb3B0aW9ucy5leHBhbmRlZE1hcG5hbWVdO1xyXG4gICAgICBpdGVtLmRpc2FibGVkID0gaXRlbVtvcHRpb25zLmRpc2FibGVkTWFwbmFtZV07XHJcbiAgICAgIGlmIChpdGVtW29wdGlvbnMuaXNMZWFmTWFwTmFtZV0gPT0gbnVsbCkge1xyXG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtW29wdGlvbnMuaXNMZWFmTWFwTmFtZV07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRyZWUubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUobm9kZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6YCS5b2S6K6/6Zeu5pW05Liq5qCRXHJcbiAgICovXHJcbiAgdmlzaXRUcmVlKFxyXG4gICAgdHJlZTogYW55W10sXHJcbiAgICBjYjogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZCxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cclxuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgfSxcclxuICApIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGluRm4gPSAoZGF0YTogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICBjYihpdGVtLCBwYXJlbnQsIGRlZXApO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuVmFsID0gaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuVmFsICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGluRm4oY2hpbGRyZW5WYWwsIGl0ZW0sIGRlZXAgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpbkZuKHRyZWUsIG51bGwsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxyXG4gICAqL1xyXG4gIGdldEtleXNCeVRyZWVOb2RlKFxyXG4gICAgdHJlZTogTnpUcmVlTm9kZVtdLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIOaYr+WQpuWMheWQq+WNiumAieeKtuaAgeeahOWAvO+8jOm7mOiupO+8mmB0cnVlYCAqL1xyXG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xyXG4gICAgICAvKiog5piv5ZCm6YeN5paw5oyH5a6aIGBrZXlgIOmUruWQje+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqCBgTnpUcmVlTm9kZS5rZXlgIOWAvCAqL1xyXG4gICAgICBrZXlNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog5Zue6LCD77yM6L+U5Zue5LiA5Liq5YC8IGBrZXlgIOWAvO+8jOS8mOWFiOe6p+mrmOS6juWFtuS7liAqL1xyXG4gICAgICBjYj86IChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4gYW55O1xyXG4gICAgfSxcclxuICApOiBhbnlbXSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCBrZXlzOiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy52aXNpdFRyZWUoXHJcbiAgICAgIHRyZWUsXHJcbiAgICAgIChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGl0ZW0uaXNDaGVja2VkIHx8XHJcbiAgICAgICAgICAob3B0aW9ucy5pbmNsdWRlSGFsZkNoZWNrZWQgJiYgaXRlbS5pc0hhbGZDaGVja2VkKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAga2V5cy5wdXNoKFxyXG4gICAgICAgICAgICBvcHRpb25zLmNiXHJcbiAgICAgICAgICAgICAgPyBvcHRpb25zLmNiKGl0ZW0sIHBhcmVudCwgZGVlcClcclxuICAgICAgICAgICAgICA6IG9wdGlvbnMua2V5TWFwTmFtZVxyXG4gICAgICAgICAgICAgICAgPyBpdGVtLm9yaWdpbltvcHRpb25zLmtleU1hcE5hbWVdXHJcbiAgICAgICAgICAgICAgICA6IGl0ZW0ua2V5LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGtleXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==