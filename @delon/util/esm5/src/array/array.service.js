/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
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
     */
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.treeToArr = /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        options = Object.assign({
            deepMapName: this.c.deepMapName,
            parentMapName: this.c.parentMapName,
            childrenMapName: this.c.childrenMapName,
            clearChildren: true,
            cb: null,
        }, options);
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var inFn = function (list, parent, deep) {
            var e_1, _a;
            try {
                for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var i = list_1_1.value;
                    i[options.deepMapName] = deep;
                    i[options.parentMapName] = parent;
                    if (options.cb)
                        options.cb(i, parent, deep);
                    result.push(i);
                    /** @type {?} */
                    var children = i[options.childrenMapName];
                    if (children != null &&
                        Array.isArray(children) &&
                        children.length > 0) {
                        inFn(children, i, deep + 1);
                    }
                    if (options.clearChildren)
                        delete i[options.childrenMapName];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        inFn(tree, 1, null);
        return result;
    };
    /**
     * 数组转换成树数据
     */
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTree = /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        var e_2, _a;
        options = Object.assign({
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            childrenMapName: this.c.childrenMapName,
            cb: null,
        }, options);
        /** @type {?} */
        var tree = [];
        /** @type {?} */
        var childrenOf = {};
        try {
            for (var arr_1 = tslib_1.__values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                /** @type {?} */
                var id = item[options.idMapName];
                /** @type {?} */
                var pid = item[options.parentIdMapName];
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
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return tree;
    };
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTreeNode = /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
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
        var tree = this.arrToTree(arr, {
            idMapName: options.idMapName,
            parentIdMapName: options.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, function (item, parent, deep) {
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
        return tree.map(function (node) { return new NzTreeNode(node); });
    };
    /**
     * 递归访问整个树
     */
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.visitTree = /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    function (tree, cb, options) {
        options = Object.assign({
            childrenMapName: this.c.childrenMapName,
        }, options);
        /** @type {?} */
        var inFn = function (data, parent, deep) {
            var e_3, _a;
            try {
                for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    cb(item, parent, deep);
                    /** @type {?} */
                    var childrenVal = item[options.childrenMapName];
                    if (childrenVal && childrenVal.length > 0) {
                        inFn(childrenVal, item, deep + 1);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        inFn(tree, null, 1);
    };
    /**
     * 获取所有已经选中的 `key` 值
     */
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.getKeysByTreeNode = /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        options = Object.assign({
            includeHalfChecked: true,
        }, options);
        /** @type {?} */
        var keys = [];
        this.visitTree(tree, function (item, parent, deep) {
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
    };
    ArrayService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ArrayService.ctorParameters = function () { return [
        { type: DelonUtilConfig }
    ]; };
    /** @nocollapse */ ArrayService.ngInjectableDef = i0.defineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.inject(i1.DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
    return ArrayService;
}());
export { ArrayService };
if (false) {
    /** @type {?} */
    ArrayService.prototype.c;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0lBTS9DLHNCQUFZLEdBQW9CO1FBQzlCLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQ1A7WUFDWCxXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1NBQzVCLEdBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQ2pCLENBQUM7S0FDSDtJQUNEOztPQUVHOzs7Ozs7O0lBQ0gsZ0NBQVM7Ozs7OztJQUFULFVBQ0UsSUFBVyxFQUNYLE9BV0M7UUFFRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckI7WUFDRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWE7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUN2QyxhQUFhLEVBQUUsSUFBSTtZQUNuQixFQUFFLEVBQUUsSUFBSTtTQUNULEVBQ0QsT0FBTyxDQUNSLENBQUM7O1FBQ0YsSUFBTSxNQUFNLEdBQVUsRUFB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ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxDb25maWcgfSBmcm9tICcuLi91dGlsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFycmF5Q29uZmlnIH0gZnJvbSAnLi9hcnJheS5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcclxuICBjb25zdHJ1Y3Rvcihjb2c6IERlbG9uVXRpbENvbmZpZykge1xyXG4gICAgdGhpcy5jID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgPEFycmF5Q29uZmlnPntcclxuICAgICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxyXG4gICAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxyXG4gICAgICAgIGlkTWFwTmFtZTogJ2lkJyxcclxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxyXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcclxuICAgICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXHJcbiAgICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcclxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXHJcbiAgICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxyXG4gICAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcclxuICAgICAgfSxcclxuICAgICAgY29nICYmIGNvZy5hcnJheSxcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOWwhuagkee7k+aehOi9rOaNouaIkOaVsOe7hOe7k+aehFxyXG4gICAqL1xyXG4gIHRyZWVUb0FycihcclxuICAgIHRyZWU6IGFueVtdLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIOa3seW6pumhueWQje+8jOm7mOiupO+8mmAnZGVlcCdgICovXHJcbiAgICAgIGRlZXBNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog5omB5bmz5ZCO5pWw57uE55qE54i25pWw5o2u6aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnQnYCAqL1xyXG4gICAgICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog5rqQ5pWw5o2u5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOaYr+WQpuenu+mZpCBgY2hpbGRyZW5gIOiKgueCue+8jOm7mOiupO+8mmB0cnVlYCAqL1xyXG4gICAgICBjbGVhckNoaWxkcmVuPzogYm9vbGVhbjtcclxuICAgICAgLyoqIOi9rOaNouaIkOaVsOe7hOe7k+aehOaXtuWbnuiwgyAqL1xyXG4gICAgICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICB9LFxyXG4gICk6IGFueVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcclxuICAgICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcclxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXHJcbiAgICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcclxuICAgICAgICBjYjogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XHJcbiAgICAgICAgaVtvcHRpb25zLmRlZXBNYXBOYW1lXSA9IGRlZXA7XHJcbiAgICAgICAgaVtvcHRpb25zLnBhcmVudE1hcE5hbWVdID0gcGFyZW50O1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGksIHBhcmVudCwgZGVlcCk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxyXG4gICAgICAgICAgY2hpbGRyZW4ubGVuZ3RoID4gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSwgZGVlcCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy5jbGVhckNoaWxkcmVuKSBkZWxldGUgaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpbkZuKHRyZWUsIDEsIG51bGwpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaVsOe7hOi9rOaNouaIkOagkeaVsOaNrlxyXG4gICAqL1xyXG4gIGFyclRvVHJlZShcclxuICAgIGFycjogYW55W10sXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXHJcbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOeItue8luWPt+mhueWQje+8jOm7mOiupO+8mmAncGFyZW50X2lkJ2AgKi9cclxuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOi9rOaNouaIkOagkeaVsOaNruaXtuWbnuiwgyAqL1xyXG4gICAgICBjYj86IChpdGVtOiBhbnkpID0+IHZvaWQ7XHJcbiAgICB9LFxyXG4gICk6IGFueVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxyXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcclxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXHJcbiAgICAgICAgY2I6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3QgdHJlZTogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGNoaWxkcmVuT2YgPSB7fTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcclxuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXSxcclxuICAgICAgICBwaWQgPSBpdGVtW29wdGlvbnMucGFyZW50SWRNYXBOYW1lXTtcclxuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcclxuICAgICAgaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV0gPSBjaGlsZHJlbk9mW2lkXTtcclxuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaXRlbSk7XHJcbiAgICAgIGlmIChwaWQpIHtcclxuICAgICAgICBjaGlsZHJlbk9mW3BpZF0gPSBjaGlsZHJlbk9mW3BpZF0gfHwgW107XHJcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJlZS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJlZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaVsOe7hOi9rOaNouaIkCBgbnotdHJlZWAg5pWw5o2u5rqQ77yM6YCa6L+HIGBvcHRpb25zYCDovazljJbpobnlkI3vvIzkuZ/lj6/ku6Xkvb/nlKggYG9wdGlvbnMuY2JgIOabtOmrmOe6p+WGs+WumuaVsOaNrumhuVxyXG4gICAqL1xyXG4gIGFyclRvVHJlZU5vZGUoXHJcbiAgICBhcnI6IGFueVtdLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIOe8luWPt+mhueWQje+8jOm7mOiupO+8mmAnaWQnYCAqL1xyXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXHJcbiAgICAgIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOagh+mimOmhueWQje+8jOm7mOiupO+8mmAndGl0bGUnYCAqL1xyXG4gICAgICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDorr7nva7kuLrlj7blrZDoioLngrnpobnlkI3vvIzoi6XmlbDmja7mupDkuI3lrZjlnKjml7boh6rliqjmoLnmja4gYGNoaWxkcmVuYCDlgLzlhrPlrprmmK/lkKbkuLrlj7blrZDoioLngrnvvIzpu5jorqTvvJpgJ2lzTGVhZidgICovXHJcbiAgICAgIGlzTGVhZk1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDoioLngrkgQ2hlY2tib3gg5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdjaGVja2VkJ2AgKi9cclxuICAgICAgY2hlY2tlZE1hcG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDoioLngrnmnKzouqvmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ3NlbGVjdGVkJ2AgKi9cclxuICAgICAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog6IqC54K55piv5ZCm5bGV5byAKOWPtuWtkOiKgueCueaXoOaViCnpobnlkI3vvIzpu5jorqTvvJpgJ2V4cGFuZGVkJ2AgKi9cclxuICAgICAgZXhwYW5kZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog6K6+572u5piv5ZCm56aB55So6IqC54K5KOS4jeWPr+i/m+ihjOS7u+S9leaTjeS9nCnpobnlkI3vvIzpu5jorqTvvJpgJ2Rpc2FibGVkJ2AgKi9cclxuICAgICAgZGlzYWJsZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5ZCO77yM5omn6KGM55qE6YCS5b2S5Zue6LCDICovXHJcbiAgICAgIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIH0sXHJcbiAgKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcclxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXHJcbiAgICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxyXG4gICAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxyXG4gICAgICAgIGNoZWNrZWRNYXBuYW1lOiB0aGlzLmMuY2hlY2tlZE1hcG5hbWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxyXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcclxuICAgICAgICBkaXNhYmxlZE1hcG5hbWU6IHRoaXMuYy5kaXNhYmxlZE1hcG5hbWUsXHJcbiAgICAgICAgY2I6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xyXG4gICAgICBpZE1hcE5hbWU6IG9wdGlvbnMuaWRNYXBOYW1lLFxyXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdGlvbnMucGFyZW50SWRNYXBOYW1lLFxyXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcclxuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXTtcclxuICAgICAgaXRlbS50aXRsZSA9IGl0ZW1bb3B0aW9ucy50aXRsZU1hcE5hbWVdO1xyXG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdGlvbnMuY2hlY2tlZE1hcG5hbWVdO1xyXG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHRpb25zLnNlbGVjdGVkTWFwbmFtZV07XHJcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSBpdGVtW29wdGlvbnMuZXhwYW5kZWRNYXBuYW1lXTtcclxuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0aW9ucy5kaXNhYmxlZE1hcG5hbWVdO1xyXG4gICAgICBpZiAoaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdID09IG51bGwpIHtcclxuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmAkuW9kuiuv+mXruaVtOS4quagkVxyXG4gICAqL1xyXG4gIHZpc2l0VHJlZShcclxuICAgIHRyZWU6IGFueVtdLFxyXG4gICAgY2I6IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgIH0sXHJcbiAgKSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xyXG4gICAgICAgIGlmIChjaGlsZHJlblZhbCAmJiBjaGlsZHJlblZhbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluaJgOacieW3sue7j+mAieS4reeahCBga2V5YCDlgLxcclxuICAgKi9cclxuICBnZXRLZXlzQnlUcmVlTm9kZShcclxuICAgIHRyZWU6IE56VHJlZU5vZGVbXSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIC8qKiDmmK/lkKbljIXlkKvljYrpgInnirbmgIHnmoTlgLzvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cclxuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkPzogYm9vbGVhbjtcclxuICAgICAgLyoqIOaYr+WQpumHjeaWsOaMh+WumiBga2V5YCDplK7lkI3vvIzoi6XkuI3mjIflrprooajnpLrkvb/nlKggYE56VHJlZU5vZGUua2V5YCDlgLwgKi9cclxuICAgICAga2V5TWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIOWbnuiwg++8jOi/lOWbnuS4gOS4quWAvCBga2V5YCDlgLzvvIzkvJjlhYjnuqfpq5jkuo7lhbbku5YgKi9cclxuICAgICAgY2I/OiAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IGFueTtcclxuICAgIH0sXHJcbiAgKTogYW55W10ge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcclxuICAgIHRoaXMudmlzaXRUcmVlKFxyXG4gICAgICB0cmVlLFxyXG4gICAgICAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBpdGVtLmlzQ2hlY2tlZCB8fFxyXG4gICAgICAgICAgKG9wdGlvbnMuaW5jbHVkZUhhbGZDaGVja2VkICYmIGl0ZW0uaXNIYWxmQ2hlY2tlZClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGtleXMucHVzaChcclxuICAgICAgICAgICAgb3B0aW9ucy5jYlxyXG4gICAgICAgICAgICAgID8gb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApXHJcbiAgICAgICAgICAgICAgOiBvcHRpb25zLmtleU1hcE5hbWVcclxuICAgICAgICAgICAgICAgID8gaXRlbS5vcmlnaW5bb3B0aW9ucy5rZXlNYXBOYW1lXVxyXG4gICAgICAgICAgICAgICAgOiBpdGVtLmtleSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiBrZXlzO1xyXG4gIH1cclxufVxyXG4iXX0=