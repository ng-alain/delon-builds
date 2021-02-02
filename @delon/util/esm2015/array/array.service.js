/**
 * @fileoverview added by tsickle
 * Generated from: array.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
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
        if (arr.length === 0) {
            return [];
        }
        /** @type {?} */
        const tree = [];
        /** @type {?} */
        const childrenOf = {};
        /** @type {?} */
        let rootPid = opt.rootParentIdValue;
        if (!rootPid) {
            /** @type {?} */
            const pids = arr.map((/**
             * @param {?} i
             * @return {?}
             */
            i => i[(/** @type {?} */ (opt.parentIdMapName))]));
            /** @type {?} */
            const emptyPid = pids.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            w => w == null));
            rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
        }
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
            if (pid !== rootPid) {
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
    /**
     * @private
     * @param {?} array
     * @param {?} depth
     * @param {?=} result
     * @return {?}
     */
    baseFlat(array, depth, result = []) {
        /** @type {?} */
        let index = -1;
        while (++index < array.length) {
            /** @type {?} */
            const value = array[index];
            if (depth > 0 && Array.isArray(value)) {
                if (depth > 1) {
                    this.baseFlat(value, depth - 1, result);
                }
                else {
                    /** @type {?} */
                    let pushIndex = -1;
                    /** @type {?} */
                    const offset = result.length;
                    while (++pushIndex < value.length) {
                        result[offset + pushIndex] = value[pushIndex];
                    }
                }
            }
            else {
                result[result.length] = value;
            }
        }
        return result;
    }
    /**
     * Recursively flattens array
     *
     * 递归扁平数组
     * @param {?} array
     * @param {?=} depth
     * @return {?}
     */
    flat(array, depth = 1 / 0) {
        return this.baseFlat(array, depth);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvYXJyYXkvYXJyYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUF3QixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBU3JELE1BQU0sT0FBTyxZQUFZOzs7O0lBR3ZCLFlBQVksR0FBdUI7UUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxtQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUM5QixXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1NBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUtELFNBQVMsQ0FBQyxJQUFXLEVBQUUsT0FBc0M7O2NBQ3JELEdBQUcsR0FBRyxtQ0FDVixXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUN2QyxhQUFhLEVBQUUsSUFBSSxFQUNuQixFQUFFLEVBQUUsSUFBSSxJQUNMLE9BQU8sR0FDcUI7O2NBQzNCLE1BQU0sR0FBVSxFQUFFOztjQUNsQixJQUFJOzs7Ozs7UUFB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QyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQTVNRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBVHpCLGtCQUFrQjs7Ozs7Ozs7SUFXekIseUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblV0aWxBcnJheUNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuaW1wb3J0IHtcbiAgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnMsXG4gIEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnMsXG4gIEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucyxcbiAgQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucyxcbn0gZnJvbSAnLi9hcnJheS10eXBlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XG4gIHByaXZhdGUgYzogQWxhaW5VdGlsQXJyYXlDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29nOiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmMgPSBjb2cubWVyZ2UoJ3V0aWxBcnJheScsIHtcbiAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICBwYXJlbnRNYXBOYW1lOiAncGFyZW50JyxcbiAgICAgIGlkTWFwTmFtZTogJ2lkJyxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXG4gICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiAnc2VsZWN0ZWQnLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxuICAgIH0pITtcbiAgfVxuXG4gIC8qKlxuICAgKiDlsIbmoJHnu5PmnoTovazmjaLmiJDmlbDnu4Tnu5PmnoRcbiAgICovXG4gIHRyZWVUb0Fycih0cmVlOiBhbnlbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnMpOiBhbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcbiAgICAgIHBhcmVudE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnM7XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIgPSAwKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGkgb2YgbGlzdCkge1xuICAgICAgICBpW29wdC5kZWVwTWFwTmFtZSFdID0gZGVlcDtcbiAgICAgICAgaVtvcHQucGFyZW50TWFwTmFtZSFdID0gcGFyZW50O1xuICAgICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgICAgb3B0LmNiKGksIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaVtvcHQuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIGlmIChjaGlsZHJlbiAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5jbGVhckNoaWxkcmVuKSB7XG4gICAgICAgICAgZGVsZXRlIGlbb3B0LmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIDEpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQ5qCR5pWw5o2uXG4gICAqL1xuICBhcnJUb1RyZWUoYXJyOiBhbnlbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnMpOiBhbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucztcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCB0cmVlOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGNoaWxkcmVuT2Y6IGFueSA9IHt9O1xuICAgIGxldCByb290UGlkID0gb3B0LnJvb3RQYXJlbnRJZFZhbHVlO1xuICAgIGlmICghcm9vdFBpZCkge1xuICAgICAgY29uc3QgcGlkcyA9IGFyci5tYXAoaSA9PiBpW29wdC5wYXJlbnRJZE1hcE5hbWUhXSk7XG4gICAgICBjb25zdCBlbXB0eVBpZCA9IHBpZHMuZmluZEluZGV4KHcgPT4gdyA9PSBudWxsKTtcbiAgICAgIHJvb3RQaWQgPSBlbXB0eVBpZCAhPT0gLTEgPyBwaWRzW2VtcHR5UGlkXSA6IHBpZHMuc29ydCgpWzBdO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0LmlkTWFwTmFtZSFdO1xuICAgICAgY29uc3QgcGlkID0gaXRlbVtvcHQucGFyZW50SWRNYXBOYW1lIV07XG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xuICAgICAgaXRlbVtvcHQuY2hpbGRyZW5NYXBOYW1lIV0gPSBjaGlsZHJlbk9mW2lkXTtcbiAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgb3B0LmNiKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKHBpZCAhPT0gcm9vdFBpZCkge1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0gPSBjaGlsZHJlbk9mW3BpZF0gfHwgW107XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXS5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJAgYG56LXRyZWVgIOaVsOaNrua6kO+8jOmAmui/hyBgb3B0aW9uc2Ag6L2s5YyW6aG55ZCN77yM5Lmf5Y+v5Lul5L2/55SoIGBvcHRpb25zLmNiYCDmm7Tpq5jnuqflhrPlrprmlbDmja7poblcbiAgICovXG4gIGFyclRvVHJlZU5vZGUoYXJyOiBhbnlbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zKTogTnpUcmVlTm9kZVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICB0aXRsZU1hcE5hbWU6IHRoaXMuYy50aXRsZU1hcE5hbWUsXG4gICAgICBpc0xlYWZNYXBOYW1lOiAnaXNMZWFmJyxcbiAgICAgIGNoZWNrZWRNYXBuYW1lOiB0aGlzLmMuY2hlY2tlZE1hcG5hbWUsXG4gICAgICBzZWxlY3RlZE1hcG5hbWU6IHRoaXMuYy5zZWxlY3RlZE1hcG5hbWUsXG4gICAgICBleHBhbmRlZE1hcG5hbWU6IHRoaXMuYy5leHBhbmRlZE1hcG5hbWUsXG4gICAgICBkaXNhYmxlZE1hcG5hbWU6IHRoaXMuYy5kaXNhYmxlZE1hcG5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucztcbiAgICBjb25zdCB0cmVlID0gdGhpcy5hcnJUb1RyZWUoYXJyLCB7XG4gICAgICBpZE1hcE5hbWU6IG9wdC5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdC5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgfSk7XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdC5pZE1hcE5hbWUhXTtcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtW29wdC50aXRsZU1hcE5hbWUhXTtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW1bb3B0LmNoZWNrZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHQuc2VsZWN0ZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLmV4cGFuZGVkID0gaXRlbVtvcHQuZXhwYW5kZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLmRpc2FibGVkID0gaXRlbVtvcHQuZGlzYWJsZWRNYXBuYW1lIV07XG4gICAgICBpZiAoaXRlbVtvcHQuaXNMZWFmTWFwTmFtZSFdID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHQuaXNMZWFmTWFwTmFtZSFdO1xuICAgICAgfVxuICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICBvcHQuY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZS5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICog6YCS5b2S6K6/6Zeu5pW05Liq5qCRXG4gICAqL1xuICB2aXNpdFRyZWUoXG4gICAgdHJlZTogYW55W10sXG4gICAgY2I6IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IGluRm4gPSAoZGF0YTogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIGNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuVmFsID0gaXRlbVtvcHRpb25zIS5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuVmFsICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxuICAgKi9cbiAgZ2V0S2V5c0J5VHJlZU5vZGUodHJlZTogTnpUcmVlTm9kZVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zKTogYW55W10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnM7XG4gICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcbiAgICB0aGlzLnZpc2l0VHJlZSh0cmVlLCAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpdGVtLmlzQ2hlY2tlZCB8fCAob3B0LmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpKSB7XG4gICAgICAgIGtleXMucHVzaChvcHQuY2IgPyBvcHQuY2IoaXRlbSwgcGFyZW50LCBkZWVwKSA6IG9wdC5rZXlNYXBOYW1lID8gaXRlbS5vcmlnaW5bb3B0LmtleU1hcE5hbWVdIDogaXRlbS5rZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXlzO1xuICB9XG4gIHByaXZhdGUgYmFzZUZsYXQoYXJyYXk6IGFueVtdLCBkZXB0aDogbnVtYmVyLCByZXN1bHQ6IGFueVtdID0gW10pOiBhbnlbXSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKGRlcHRoID4gMCAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5iYXNlRmxhdCh2YWx1ZSwgZGVwdGggLSAxLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBwdXNoSW5kZXggPSAtMTtcbiAgICAgICAgICBjb25zdCBvZmZzZXQgPSByZXN1bHQubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKCsrcHVzaEluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHRbb2Zmc2V0ICsgcHVzaEluZGV4XSA9IHZhbHVlW3B1c2hJbmRleF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgZmxhdHRlbnMgYXJyYXlcbiAgICpcbiAgICog6YCS5b2S5omB5bmz5pWw57uEXG4gICAqL1xuICBmbGF0KGFycmF5OiBhbnlbXSwgZGVwdGg6IG51bWJlciA9IDEgLyAwKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLmJhc2VGbGF0KGFycmF5LCBkZXB0aCk7XG4gIH1cbn1cbiJdfQ==