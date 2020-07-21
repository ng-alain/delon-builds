/**
 * @fileoverview added by tsickle
 * Generated from: src/array/array.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import { AlainConfigService } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "../config/index";
/**
 * @record
 */
export function ArrayServiceTreeToArrOptions() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.parentMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.childrenMapName;
    /**
     * 是否移除 `children` 节点，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.clearChildren;
    /**
     * 转换成数组结构时回调
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.cb;
}
/**
 * @record
 */
export function ArrayServiceArrToTreeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.parentIdMapName;
    /**
     * 子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.childrenMapName;
    /**
     * 转换成树数据时回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.cb;
}
/**
 * @record
 */
export function ArrayServiceArrToTreeNodeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.parentIdMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.titleMapName;
    /**
     * 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点，默认：`'isLeaf'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.isLeafMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.disabledMapname;
    /**
     * 转换成树数据后，执行的递归回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.cb;
}
/**
 * @record
 */
export function ArrayServiceGetKeysByTreeNodeOptions() { }
if (false) {
    /**
     * 是否包含半选状态的值，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.includeHalfChecked;
    /**
     * 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.keyMapName;
    /**
     * 回调，返回一个值 `key` 值，优先级高于其他
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.cb;
}
export class ArrayService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.c = (/** @type {?} */ (cog.merge('utilArray', {
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
        })));
    }
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    treeToArr(tree, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options)));
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const inFn = (/**
         * @param {?} list
         * @param {?} parent
         * @param {?=} deep
         * @return {?}
         */
        (list, parent, deep = 0) => {
            for (const i of list) {
                i[(/** @type {?} */ (opt.deepMapName))] = deep;
                i[(/** @type {?} */ (opt.parentMapName))] = parent;
                if (opt.cb) {
                    opt.cb(i, parent, deep);
                }
                result.push(i);
                /** @type {?} */
                const children = i[(/** @type {?} */ (opt.childrenMapName))];
                if (children != null && Array.isArray(children) && children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (opt.clearChildren) {
                    delete i[(/** @type {?} */ (opt.childrenMapName))];
                }
            }
        });
        inFn(tree, 1);
        return result;
    }
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTree(arr, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
        /** @type {?} */
        const tree = [];
        /** @type {?} */
        const childrenOf = {};
        for (const item of arr) {
            /** @type {?} */
            const id = item[(/** @type {?} */ (opt.idMapName))];
            /** @type {?} */
            const pid = item[(/** @type {?} */ (opt.parentIdMapName))];
            childrenOf[id] = childrenOf[id] || [];
            item[(/** @type {?} */ (opt.childrenMapName))] = childrenOf[id];
            if (opt.cb) {
                opt.cb(item);
            }
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
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options)));
        /** @type {?} */
        const tree = this.arrToTree(arr, {
            idMapName: opt.idMapName,
            parentIdMapName: opt.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (item, parent, deep) => {
            item.key = item[(/** @type {?} */ (opt.idMapName))];
            item.title = item[(/** @type {?} */ (opt.titleMapName))];
            item.checked = item[(/** @type {?} */ (opt.checkedMapname))];
            item.selected = item[(/** @type {?} */ (opt.selectedMapname))];
            item.expanded = item[(/** @type {?} */ (opt.expandedMapname))];
            item.disabled = item[(/** @type {?} */ (opt.disabledMapname))];
            if (item[(/** @type {?} */ (opt.isLeafMapName))] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[(/** @type {?} */ (opt.isLeafMapName))];
            }
            if (opt.cb) {
                opt.cb(item, parent, deep);
            }
        }));
        return tree.map((/**
         * @param {?} node
         * @return {?}
         */
        node => new NzTreeNode(node)));
    }
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    visitTree(tree, cb, options) {
        options = Object.assign({ childrenMapName: this.c.childrenMapName }, options);
        /** @type {?} */
        const inFn = (/**
         * @param {?} data
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (data, parent, deep) => {
            for (const item of data) {
                cb(item, parent, deep);
                /** @type {?} */
                const childrenVal = item[(/** @type {?} */ ((/** @type {?} */ (options)).childrenMapName))];
                if (childrenVal && childrenVal.length > 0) {
                    inFn(childrenVal, item, deep + 1);
                }
            }
        });
        inFn(tree, null, 1);
    }
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    getKeysByTreeNode(tree, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ includeHalfChecked: true }, options)));
        /** @type {?} */
        const keys = [];
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (item, parent, deep) => {
            if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
            }
        }));
        return keys;
    }
}
ArrayService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ArrayService.ctorParameters = () => [
    { type: AlainConfigService }
];
/** @nocollapse */ ArrayService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.ɵɵinject(i1.AlainConfigService)); }, token: ArrayService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvc3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQXdCLE1BQU0sV0FBVyxDQUFDOzs7Ozs7QUFFckUsa0RBV0M7Ozs7OztJQVRDLG1EQUFxQjs7Ozs7SUFFckIscURBQXVCOzs7OztJQUV2Qix1REFBeUI7Ozs7O0lBRXpCLHFEQUF3Qjs7Ozs7SUFFeEIsMENBQWdFOzs7OztBQUdsRSxrREFTQzs7Ozs7O0lBUEMsaURBQW1COzs7OztJQUVuQix1REFBeUI7Ozs7O0lBRXpCLHVEQUF5Qjs7Ozs7SUFFekIsMENBQStCOzs7OztBQUdqQyxzREFtQkM7Ozs7OztJQWpCQyxxREFBbUI7Ozs7O0lBRW5CLDJEQUF5Qjs7Ozs7SUFFekIsd0RBQXNCOzs7OztJQUV0Qix5REFBdUI7Ozs7O0lBRXZCLDBEQUF3Qjs7Ozs7SUFFeEIsMkRBQXlCOzs7OztJQUV6QiwyREFBeUI7Ozs7O0lBRXpCLDJEQUF5Qjs7Ozs7SUFFekIsOENBQWdFOzs7OztBQUdsRSwwREFPQzs7Ozs7O0lBTEMsa0VBQTZCOzs7OztJQUU3QiwwREFBb0I7Ozs7O0lBRXBCLGtEQUF1RTs7QUFJekUsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFdkIsWUFBWSxHQUF1QjtRQUNqQyxJQUFJLENBQUMsQ0FBQyxHQUFHLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzlCLFdBQVcsRUFBRSxNQUFNO1lBQ25CLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsZUFBZSxFQUFFLFdBQVc7WUFDNUIs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QyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxRztRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUFwS0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQXhEekIsa0JBQWtCOzs7Ozs7OztJQTBEekIseUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90cmVlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEFycmF5Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zIHtcbiAgLyoqIOa3seW6pumhueWQje+8jOm7mOiupO+8mmAnZGVlcCdgICovXG4gIGRlZXBNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5omB5bmz5ZCO5pWw57uE55qE54i25pWw5o2u6aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnQnYCAqL1xuICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5rqQ5pWw5o2u5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOaYr+WQpuenu+mZpCBgY2hpbGRyZW5gIOiKgueCue+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBjbGVhckNoaWxkcmVuPzogYm9vbGVhbjtcbiAgLyoqIOi9rOaNouaIkOaVsOe7hOe7k+aehOaXtuWbnuiwgyAqL1xuICBjYj86IChpdGVtOiBOelNhZmVBbnksIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyB7XG4gIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5pe25Zue6LCDICovXG4gIGNiPzogKGl0ZW06IE56U2FmZUFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyB7XG4gIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmoIfpopjpobnlkI3vvIzpu5jorqTvvJpgJ3RpdGxlJ2AgKi9cbiAgdGl0bGVNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6K6+572u5Li65Y+25a2Q6IqC54K56aG55ZCN77yM6Iul5pWw5o2u5rqQ5LiN5a2Y5Zyo5pe26Ieq5Yqo5qC55o2uIGBjaGlsZHJlbmAg5YC85Yaz5a6a5piv5ZCm5Li65Y+25a2Q6IqC54K577yM6buY6K6k77yaYCdpc0xlYWYnYCAqL1xuICBpc0xlYWZNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K5IENoZWNrYm94IOaYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnY2hlY2tlZCdgICovXG4gIGNoZWNrZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K55pys6Lqr5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdzZWxlY3RlZCdgICovXG4gIHNlbGVjdGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOiKgueCueaYr+WQpuWxleW8gCjlj7blrZDoioLngrnml6DmlYgp6aG55ZCN77yM6buY6K6k77yaYCdleHBhbmRlZCdgICovXG4gIGV4cGFuZGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOiuvue9ruaYr+WQpuemgeeUqOiKgueCuSjkuI3lj6/ov5vooYzku7vkvZXmk43kvZwp6aG55ZCN77yM6buY6K6k77yaYCdkaXNhYmxlZCdgICovXG4gIGRpc2FibGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOi9rOaNouaIkOagkeaVsOaNruWQju+8jOaJp+ihjOeahOmAkuW9kuWbnuiwgyAqL1xuICBjYj86IChpdGVtOiBOelNhZmVBbnksIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuWMheWQq+WNiumAieeKtuaAgeeahOWAvO+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBpbmNsdWRlSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xuICAvKiog5piv5ZCm6YeN5paw5oyH5a6aIGBrZXlgIOmUruWQje+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqCBgTnpUcmVlTm9kZS5rZXlgIOWAvCAqL1xuICBrZXlNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5Zue6LCD77yM6L+U5Zue5LiA5Liq5YC8IGBrZXlgIOWAvO+8jOS8mOWFiOe6p+mrmOS6juWFtuS7liAqL1xuICBjYj86IChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4gTnpTYWZlQW55O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XG4gIHByaXZhdGUgYzogQWxhaW5VdGlsQXJyYXlDb25maWc7XG4gIGNvbnN0cnVjdG9yKGNvZzogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jID0gY29nLm1lcmdlKCd1dGlsQXJyYXknLCB7XG4gICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxuICAgICAgcGFyZW50TWFwTmFtZTogJ3BhcmVudCcsXG4gICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogJ3NlbGVjdGVkJyxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcbiAgICB9KSE7XG4gIH1cbiAgLyoqXG4gICAqIOWwhuagkee7k+aehOi9rOaNouaIkOaVsOe7hOe7k+aehFxuICAgKi9cbiAgdHJlZVRvQXJyKHRyZWU6IE56U2FmZUFueVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucyk6IE56U2FmZUFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogdGhpcy5jLmRlZXBNYXBOYW1lLFxuICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjbGVhckNoaWxkcmVuOiB0cnVlLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucztcbiAgICBjb25zdCByZXN1bHQ6IE56U2FmZUFueVtdID0gW107XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBOelNhZmVBbnlbXSwgcGFyZW50OiBOelNhZmVBbnksIGRlZXA6IG51bWJlciA9IDApID0+IHtcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XG4gICAgICAgIGlbb3B0LmRlZXBNYXBOYW1lIV0gPSBkZWVwO1xuICAgICAgICBpW29wdC5wYXJlbnRNYXBOYW1lIV0gPSBwYXJlbnQ7XG4gICAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgICBvcHQuY2IoaSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdC5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW4sIGksIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0LmNsZWFyQ2hpbGRyZW4pIHtcbiAgICAgICAgICBkZWxldGUgaVtvcHQuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJDmoJHmlbDmja5cbiAgICovXG4gIGFyclRvVHJlZShhcnI6IE56U2FmZUFueVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyk6IE56U2FmZUFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VBcnJUb1RyZWVPcHRpb25zO1xuICAgIGNvbnN0IHRyZWU6IE56U2FmZUFueVtdID0gW107XG4gICAgY29uc3QgY2hpbGRyZW5PZjogTnpTYWZlQW55ID0ge307XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdC5pZE1hcE5hbWUhXTtcbiAgICAgIGNvbnN0IHBpZCA9IGl0ZW1bb3B0LnBhcmVudElkTWFwTmFtZSFdO1xuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcbiAgICAgIGl0ZW1bb3B0LmNoaWxkcmVuTWFwTmFtZSFdID0gY2hpbGRyZW5PZltpZF07XG4gICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgIG9wdC5jYihpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmIChwaWQpIHtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQIGBuei10cmVlYCDmlbDmja7mupDvvIzpgJrov4cgYG9wdGlvbnNgIOi9rOWMlumhueWQje+8jOS5n+WPr+S7peS9v+eUqCBgb3B0aW9ucy5jYmAg5pu06auY57qn5Yaz5a6a5pWw5o2u6aG5XG4gICAqL1xuICBhcnJUb1RyZWVOb2RlKGFycjogTnpTYWZlQW55W10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyk6IE56VHJlZU5vZGVbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxuICAgICAgaXNMZWFmTWFwTmFtZTogJ2lzTGVhZicsXG4gICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiB0aGlzLmMuZXhwYW5kZWRNYXBuYW1lLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnM7XG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xuICAgICAgaWRNYXBOYW1lOiBvcHQuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiBvcHQucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgIH0pO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBOelNhZmVBbnksIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0ua2V5ID0gaXRlbVtvcHQuaWRNYXBOYW1lIV07XG4gICAgICBpdGVtLnRpdGxlID0gaXRlbVtvcHQudGl0bGVNYXBOYW1lIV07XG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdC5jaGVja2VkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1bb3B0LnNlbGVjdGVkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5leHBhbmRlZCA9IGl0ZW1bb3B0LmV4cGFuZGVkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0LmRpc2FibGVkTWFwbmFtZSFdO1xuICAgICAgaWYgKGl0ZW1bb3B0LmlzTGVhZk1hcE5hbWUhXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW1bb3B0LmlzTGVhZk1hcE5hbWUhXTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgb3B0LmNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWUubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmAkuW9kuiuv+mXruaVtOS4quagkVxuICAgKi9cbiAgdmlzaXRUcmVlKFxuICAgIHRyZWU6IE56U2FmZUFueVtdLFxuICAgIGNiOiAoaXRlbTogTnpTYWZlQW55LCBwYXJlbnQ6IE56U2FmZUFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IE56U2FmZUFueVtdLCBwYXJlbnQ6IE56U2FmZUFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICBjYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucyEuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIGlmIChjaGlsZHJlblZhbCAmJiBjaGlsZHJlblZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlblZhbCwgaXRlbSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIG51bGwsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluaJgOacieW3sue7j+mAieS4reeahCBga2V5YCDlgLxcbiAgICovXG4gIGdldEtleXNCeVRyZWVOb2RlKHRyZWU6IE56VHJlZU5vZGVbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucyk6IE56U2FmZUFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ6IHRydWUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zO1xuICAgIGNvbnN0IGtleXM6IE56U2FmZUFueVtdID0gW107XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pc0NoZWNrZWQgfHwgKG9wdC5pbmNsdWRlSGFsZkNoZWNrZWQgJiYgaXRlbS5pc0hhbGZDaGVja2VkKSkge1xuICAgICAgICBrZXlzLnB1c2gob3B0LmNiID8gb3B0LmNiKGl0ZW0sIHBhcmVudCwgZGVlcCkgOiBvcHQua2V5TWFwTmFtZSA/IGl0ZW0ub3JpZ2luW29wdC5rZXlNYXBOYW1lXSA6IGl0ZW0ua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIl19