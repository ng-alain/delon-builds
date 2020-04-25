/**
 * @fileoverview added by tsickle
 * Generated from: src/array/array.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
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
        this.c = Object.assign({ deepMapName: 'deep', parentMapName: 'parent', idMapName: 'id', parentIdMapName: 'parent_id', childrenMapName: 'children', titleMapName: 'title', checkedMapname: 'checked', selectedMapname: 'selected', expandedMapname: 'expanded', disabledMapname: 'disabled' }, (cog && cog.array));
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
    { type: DelonUtilConfig }
];
/** @nocollapse */ ArrayService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.ɵɵinject(i1.DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUdqRCxrREFXQzs7Ozs7O0lBVEMsbURBQXFCOzs7OztJQUVyQixxREFBdUI7Ozs7O0lBRXZCLHVEQUF5Qjs7Ozs7SUFFekIscURBQXdCOzs7OztJQUV4QiwwQ0FBZ0U7Ozs7O0FBR2xFLGtEQVNDOzs7Ozs7SUFQQyxpREFBbUI7Ozs7O0lBRW5CLHVEQUF5Qjs7Ozs7SUFFekIsdURBQXlCOzs7OztJQUV6QiwwQ0FBK0I7Ozs7O0FBR2pDLHNEQW1CQzs7Ozs7O0lBakJDLHFEQUFtQjs7Ozs7SUFFbkIsMkRBQXlCOzs7OztJQUV6Qix3REFBc0I7Ozs7O0lBRXRCLHlEQUF1Qjs7Ozs7SUFFdkIsMERBQXdCOzs7OztJQUV4QiwyREFBeUI7Ozs7O0lBRXpCLDJEQUF5Qjs7Ozs7SUFFekIsMkRBQXlCOzs7OztJQUV6Qiw4Q0FBZ0U7Ozs7O0FBR2xFLDBEQU9DOzs7Ozs7SUFMQyxrRUFBNkI7Ozs7O0lBRTdCLDBEQUFvQjs7Ozs7SUFFcEIsa0RBQXVFOztBQUl6RSxNQUFNLE9BQU8sWUFBWTs7OztJQUV2QixZQUFZLEdBQW9CO1FBQzlCLElBQUksQ0FBQyxDQUFDLG1CQUNKLFdBQVcsRUFBRSxNQUFNLEVBQ25CLGFBQWEsRUFBRSxRQUFRLEVBQ3ZCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsZUFBZSxFQUFFLFdBQVcsRUFDNUIsZUFBZSxFQUFFLFVBQVUsRUFDM0IsWUFBWSxFQUFFLE9BQU8sRUFDckIsY0FBYyxFQUFFLFNBQVMs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LENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUc7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBcktGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUF6RHpCLGVBQWU7Ozs7Ozs7O0lBMkR0Qix5QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IERlbG9uVXRpbENvbmZpZyB9IGZyb20gJy4uL3V0aWwuY29uZmlnJztcbmltcG9ydCB7IEFycmF5Q29uZmlnIH0gZnJvbSAnLi9hcnJheS5jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnMge1xuICAvKiog5rex5bqm6aG55ZCN77yM6buY6K6k77yaYCdkZWVwJ2AgKi9cbiAgZGVlcE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmiYHlubPlkI7mlbDnu4TnmoTniLbmlbDmja7pobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudCdgICovXG4gIHBhcmVudE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmupDmlbDmja7lrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5piv5ZCm56e76ZmkIGBjaGlsZHJlbmAg6IqC54K577yM6buY6K6k77yaYHRydWVgICovXG4gIGNsZWFyQ2hpbGRyZW4/OiBib29sZWFuO1xuICAvKiog6L2s5o2i5oiQ5pWw57uE57uT5p6E5pe25Zue6LCDICovXG4gIGNiPzogKGl0ZW06IE56U2FmZUFueSwgcGFyZW50OiBOelNhZmVBbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VBcnJUb1RyZWVPcHRpb25zIHtcbiAgLyoqIOe8luWPt+mhueWQje+8jOm7mOiupO+8mmAnaWQnYCAqL1xuICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDovazmjaLmiJDmoJHmlbDmja7ml7blm57osIMgKi9cbiAgY2I/OiAoaXRlbTogTnpTYWZlQW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zIHtcbiAgLyoqIOe8luWPt+mhueWQje+8jOm7mOiupO+8mmAnaWQnYCAqL1xuICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOagh+mimOmhueWQje+8jOm7mOiupO+8mmAndGl0bGUnYCAqL1xuICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDorr7nva7kuLrlj7blrZDoioLngrnpobnlkI3vvIzoi6XmlbDmja7mupDkuI3lrZjlnKjml7boh6rliqjmoLnmja4gYGNoaWxkcmVuYCDlgLzlhrPlrprmmK/lkKbkuLrlj7blrZDoioLngrnvvIzpu5jorqTvvJpgJ2lzTGVhZidgICovXG4gIGlzTGVhZk1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDoioLngrkgQ2hlY2tib3gg5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdjaGVja2VkJ2AgKi9cbiAgY2hlY2tlZE1hcG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDoioLngrnmnKzouqvmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ3NlbGVjdGVkJ2AgKi9cbiAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K55piv5ZCm5bGV5byAKOWPtuWtkOiKgueCueaXoOaViCnpobnlkI3vvIzpu5jorqTvvJpgJ2V4cGFuZGVkJ2AgKi9cbiAgZXhwYW5kZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6K6+572u5piv5ZCm56aB55So6IqC54K5KOS4jeWPr+i/m+ihjOS7u+S9leaTjeS9nCnpobnlkI3vvIzpu5jorqTvvJpgJ2Rpc2FibGVkJ2AgKi9cbiAgZGlzYWJsZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5ZCO77yM5omn6KGM55qE6YCS5b2S5Zue6LCDICovXG4gIGNiPzogKGl0ZW06IE56U2FmZUFueSwgcGFyZW50OiBOelNhZmVBbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnMge1xuICAvKiog5piv5ZCm5YyF5ZCr5Y2K6YCJ54q25oCB55qE5YC877yM6buY6K6k77yaYHRydWVgICovXG4gIGluY2x1ZGVIYWxmQ2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbph43mlrDmjIflrpogYGtleWAg6ZSu5ZCN77yM6Iul5LiN5oyH5a6a6KGo56S65L2/55SoIGBOelRyZWVOb2RlLmtleWAg5YC8ICovXG4gIGtleU1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDlm57osIPvvIzov5Tlm57kuIDkuKrlgLwgYGtleWAg5YC877yM5LyY5YWI57qn6auY5LqO5YW25LuWICovXG4gIGNiPzogKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiBOelNhZmVBbnk7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBEZWxvblV0aWxDb25maWcpIHtcbiAgICB0aGlzLmMgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxuICAgICAgcGFyZW50TWFwTmFtZTogJ3BhcmVudCcsXG4gICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogJ3NlbGVjdGVkJyxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcbiAgICAgIC4uLihjb2cgJiYgY29nLmFycmF5KSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiDlsIbmoJHnu5PmnoTovazmjaLmiJDmlbDnu4Tnu5PmnoRcbiAgICovXG4gIHRyZWVUb0Fycih0cmVlOiBOelNhZmVBbnlbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnMpOiBOelNhZmVBbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcbiAgICAgIHBhcmVudE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnM7XG4gICAgY29uc3QgcmVzdWx0OiBOelNhZmVBbnlbXSA9IFtdO1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogTnpTYWZlQW55W10sIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIgPSAwKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGkgb2YgbGlzdCkge1xuICAgICAgICBpW29wdC5kZWVwTWFwTmFtZSFdID0gZGVlcDtcbiAgICAgICAgaVtvcHQucGFyZW50TWFwTmFtZSFdID0gcGFyZW50O1xuICAgICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgICAgb3B0LmNiKGksIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaVtvcHQuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIGlmIChjaGlsZHJlbiAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5jbGVhckNoaWxkcmVuKSB7XG4gICAgICAgICAgZGVsZXRlIGlbb3B0LmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIDEpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQ5qCR5pWw5o2uXG4gICAqL1xuICBhcnJUb1RyZWUoYXJyOiBOelNhZmVBbnlbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnMpOiBOelNhZmVBbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucztcbiAgICBjb25zdCB0cmVlOiBOelNhZmVBbnlbXSA9IFtdO1xuICAgIGNvbnN0IGNoaWxkcmVuT2Y6IE56U2FmZUFueSA9IHt9O1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICAgIGNvbnN0IGlkID0gaXRlbVtvcHQuaWRNYXBOYW1lIV07XG4gICAgICBjb25zdCBwaWQgPSBpdGVtW29wdC5wYXJlbnRJZE1hcE5hbWUhXTtcbiAgICAgIGNoaWxkcmVuT2ZbaWRdID0gY2hpbGRyZW5PZltpZF0gfHwgW107XG4gICAgICBpdGVtW29wdC5jaGlsZHJlbk1hcE5hbWUhXSA9IGNoaWxkcmVuT2ZbaWRdO1xuICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICBvcHQuY2IoaXRlbSk7XG4gICAgICB9XG4gICAgICBpZiAocGlkKSB7XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXSA9IGNoaWxkcmVuT2ZbcGlkXSB8fCBbXTtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmVlLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOe7hOi9rOaNouaIkCBgbnotdHJlZWAg5pWw5o2u5rqQ77yM6YCa6L+HIGBvcHRpb25zYCDovazljJbpobnlkI3vvIzkuZ/lj6/ku6Xkvb/nlKggYG9wdGlvbnMuY2JgIOabtOmrmOe6p+WGs+WumuaVsOaNrumhuVxuICAgKi9cbiAgYXJyVG9UcmVlTm9kZShhcnI6IE56U2FmZUFueVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnMpOiBOelRyZWVOb2RlW10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIHRpdGxlTWFwTmFtZTogdGhpcy5jLnRpdGxlTWFwTmFtZSxcbiAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6IHRoaXMuYy5jaGVja2VkTWFwbmFtZSxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogdGhpcy5jLnNlbGVjdGVkTWFwbmFtZSxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogdGhpcy5jLmRpc2FibGVkTWFwbmFtZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zO1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLmFyclRvVHJlZShhcnIsIHtcbiAgICAgIGlkTWFwTmFtZTogb3B0LmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0LnBhcmVudElkTWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICB9KTtcbiAgICB0aGlzLnZpc2l0VHJlZSh0cmVlLCAoaXRlbTogTnpTYWZlQW55LCBwYXJlbnQ6IE56U2FmZUFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBpdGVtLmtleSA9IGl0ZW1bb3B0LmlkTWFwTmFtZSFdO1xuICAgICAgaXRlbS50aXRsZSA9IGl0ZW1bb3B0LnRpdGxlTWFwTmFtZSFdO1xuICAgICAgaXRlbS5jaGVja2VkID0gaXRlbVtvcHQuY2hlY2tlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtW29wdC5zZWxlY3RlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSBpdGVtW29wdC5leHBhbmRlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSBpdGVtW29wdC5kaXNhYmxlZE1hcG5hbWUhXTtcbiAgICAgIGlmIChpdGVtW29wdC5pc0xlYWZNYXBOYW1lIV0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtW29wdC5pc0xlYWZNYXBOYW1lIV07XG4gICAgICB9XG4gICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgIG9wdC5jYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpgJLlvZLorr/pl67mlbTkuKrmoJFcbiAgICovXG4gIHZpc2l0VHJlZShcbiAgICB0cmVlOiBOelNhZmVBbnlbXSxcbiAgICBjYjogKGl0ZW06IE56U2FmZUFueSwgcGFyZW50OiBOelNhZmVBbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZCxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgaW5GbiA9IChkYXRhOiBOelNhZmVBbnlbXSwgcGFyZW50OiBOelNhZmVBbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSBpdGVtW29wdGlvbnMhLmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICBpZiAoY2hpbGRyZW5WYWwgJiYgY2hpbGRyZW5WYWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW5WYWwsIGl0ZW0sIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmiYDmnInlt7Lnu4/pgInkuK3nmoQgYGtleWAg5YC8XG4gICAqL1xuICBnZXRLZXlzQnlUcmVlTm9kZSh0cmVlOiBOelRyZWVOb2RlW10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnMpOiBOelNhZmVBbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucztcbiAgICBjb25zdCBrZXlzOiBOelNhZmVBbnlbXSA9IFtdO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGl0ZW0uaXNDaGVja2VkIHx8IChvcHQuaW5jbHVkZUhhbGZDaGVja2VkICYmIGl0ZW0uaXNIYWxmQ2hlY2tlZCkpIHtcbiAgICAgICAga2V5cy5wdXNoKG9wdC5jYiA/IG9wdC5jYihpdGVtLCBwYXJlbnQsIGRlZXApIDogb3B0LmtleU1hcE5hbWUgPyBpdGVtLm9yaWdpbltvcHQua2V5TWFwTmFtZV0gOiBpdGVtLmtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbn1cbiJdfQ==