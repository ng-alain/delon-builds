/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable:no-any
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
        this.c = Object.assign({ deepMapName: 'deep', parentMapName: 'parent', idMapName: 'id', parentIdMapName: 'parent_id', childrenMapName: 'children', titleMapName: 'title', checkedMapname: 'checked', selectedMapname: 'selected', expandedMapname: 'expanded', disabledMapname: 'disabled' }, (cog && cog.array));
    }
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    treeToArr(tree, options) {
        options = Object.assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options);
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const inFn = (list, parent, deep) => {
            for (const i of list) {
                i[options.deepMapName] = deep;
                i[options.parentMapName] = parent;
                if (options.cb) {
                    options.cb(i, parent, deep);
                }
                result.push(i);
                /** @type {?} */
                const children = i[options.childrenMapName];
                if (children != null && Array.isArray(children) && children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (options.clearChildren) {
                    delete i[options.childrenMapName];
                }
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
        options = Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options);
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
            if (options.cb) {
                options.cb(item);
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
        options = Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options);
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
            if (options.cb) {
                options.cb(item, parent, deep);
            }
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
        options = Object.assign({ childrenMapName: this.c.childrenMapName }, options);
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
        options = Object.assign({ includeHalfChecked: true }, options);
        /** @type {?} */
        const keys = [];
        this.visitTree(tree, (item, parent, deep) => {
            if (item.isChecked || (options.includeHalfChecked && item.isHalfChecked)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJakQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFdkIsWUFBWSxHQUFvQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxtQkFDSixXQUFXLEVBQUUsTUFBTSxFQUNuQixhQUFhLEVBQUUsUUFBUSxFQUN2QixTQUFTLEVBQUUsSUFBSSxFQUNmLGVBQWUsRUFBRSxXQUFXLEVBQzVCLGVBQWUsRUFBRSxVQUFVLEVBQzNCLFlBQVksRUFBRSxPQUFPLEVBQ3JCLGNBQWMsRUFBRSxTQUFTLEVBQ3pCLGVBQWUsRUFBRSxVQUFVLEVBQzNCLGVBQWUsRUFBRSxVQUFVLEVBQzNCLGVBQWUsRUFBRSxVQUFVLElBQ3hCLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDdEIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFJRCxTQUFTLENBQ1AsSUFBVyxFQUNYLE9BV0M7UUFFRCxPQUFPLG1CQUNMLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQ3ZDLGFBQWEsRUFBRSxJQUFJLEVBQ25CLEVBQUUsRUFBRSxJQUFJLElBQ0wsT0FBTyxDQUNYLENBQUM7O2NBQ0ksTUFBTSxHQUFVLEVBQUU7O2NBQ2xCLElBQUksR0FBRyxDQUFDLElBQVcsRUFBRSxNQUFXLEVBQUUsSUFBWSxF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WSxFQUFFLEVBQUU7WUFDMUUsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDeEUsSUFBSSxDQUFDLElBQUksQ0FDUCxPQUFPLENBQUMsRUFBRTtvQkFDUixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVO3dCQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDYixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBck9GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsZUFBZTs7Ozs7SUFLdEIseUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxDb25maWcgfSBmcm9tICcuLi91dGlsLmNvbmZpZyc7XG5pbXBvcnQgeyBBcnJheUNvbmZpZyB9IGZyb20gJy4vYXJyYXkuY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBcnJheVNlcnZpY2Uge1xuICBwcml2YXRlIGM6IEFycmF5Q29uZmlnO1xuICBjb25zdHJ1Y3Rvcihjb2c6IERlbG9uVXRpbENvbmZpZykge1xuICAgIHRoaXMuYyA9IHtcbiAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICBwYXJlbnRNYXBOYW1lOiAncGFyZW50JyxcbiAgICAgIGlkTWFwTmFtZTogJ2lkJyxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXG4gICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiAnc2VsZWN0ZWQnLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxuICAgICAgLi4uKGNvZyAmJiBjb2cuYXJyYXkpLFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIOWwhuagkee7k+aehOi9rOaNouaIkOaVsOe7hOe7k+aehFxuICAgKi9cbiAgdHJlZVRvQXJyKFxuICAgIHRyZWU6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5rex5bqm6aG55ZCN77yM6buY6K6k77yaYCdkZWVwJ2AgKi9cbiAgICAgIGRlZXBNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOaJgeW5s+WQjuaVsOe7hOeahOeItuaVsOaNrumhueWQje+8jOm7mOiupO+8mmAncGFyZW50J2AgKi9cbiAgICAgIHBhcmVudE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5rqQ5pWw5o2u5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5piv5ZCm56e76ZmkIGBjaGlsZHJlbmAg6IqC54K577yM6buY6K6k77yaYHRydWVgICovXG4gICAgICBjbGVhckNoaWxkcmVuPzogYm9vbGVhbjtcbiAgICAgIC8qKiDovazmjaLmiJDmlbDnu4Tnu5PmnoTml7blm57osIMgKi9cbiAgICAgIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbiAgICB9LFxuICApOiBhbnlbXSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGRlZXBNYXBOYW1lOiB0aGlzLmMuZGVlcE1hcE5hbWUsXG4gICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIGNsZWFyQ2hpbGRyZW46IHRydWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpIHtcbiAgICAgICAgaVtvcHRpb25zLmRlZXBNYXBOYW1lXSA9IGRlZXA7XG4gICAgICAgIGlbb3B0aW9ucy5wYXJlbnRNYXBOYW1lXSA9IHBhcmVudDtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2IpIHtcbiAgICAgICAgICBvcHRpb25zLmNiKGksIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XG4gICAgICAgIGlmIChjaGlsZHJlbiAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuY2xlYXJDaGlsZHJlbikge1xuICAgICAgICAgIGRlbGV0ZSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCAxLCBudWxsKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOe7hOi9rOaNouaIkOagkeaVsOaNrlxuICAgKi9cbiAgYXJyVG9UcmVlKFxuICAgIGFycjogYW55W10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gICAgICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5pe25Zue6LCDICovXG4gICAgICBjYj86IChpdGVtOiBhbnkpID0+IHZvaWQ7XG4gICAgfSxcbiAgKTogYW55W10ge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCB0cmVlOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGNoaWxkcmVuT2YgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0aW9ucy5pZE1hcE5hbWVdO1xuICAgICAgY29uc3QgcGlkID0gaXRlbVtvcHRpb25zLnBhcmVudElkTWFwTmFtZV07XG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xuICAgICAgaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV0gPSBjaGlsZHJlbk9mW2lkXTtcbiAgICAgIGlmIChvcHRpb25zLmNiKSB7XG4gICAgICAgIG9wdGlvbnMuY2IoaXRlbSk7XG4gICAgICB9XG4gICAgICBpZiAocGlkKSB7XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXSA9IGNoaWxkcmVuT2ZbcGlkXSB8fCBbXTtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmVlLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOe7hOi9rOaNouaIkCBgbnotdHJlZWAg5pWw5o2u5rqQ77yM6YCa6L+HIGBvcHRpb25zYCDovazljJbpobnlkI3vvIzkuZ/lj6/ku6Xkvb/nlKggYG9wdGlvbnMuY2JgIOabtOmrmOe6p+WGs+WumuaVsOaNrumhuVxuICAgKi9cbiAgYXJyVG9UcmVlTm9kZShcbiAgICBhcnI6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOagh+mimOmhueWQje+8jOm7mOiupO+8mmAndGl0bGUnYCAqL1xuICAgICAgdGl0bGVNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiuvue9ruS4uuWPtuWtkOiKgueCuemhueWQje+8jOiLpeaVsOaNrua6kOS4jeWtmOWcqOaXtuiHquWKqOagueaNriBgY2hpbGRyZW5gIOWAvOWGs+WumuaYr+WQpuS4uuWPtuWtkOiKgueCue+8jOm7mOiupO+8mmAnaXNMZWFmJ2AgKi9cbiAgICAgIGlzTGVhZk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6IqC54K5IENoZWNrYm94IOaYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnY2hlY2tlZCdgICovXG4gICAgICBjaGVja2VkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDoioLngrnmnKzouqvmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ3NlbGVjdGVkJ2AgKi9cbiAgICAgIHNlbGVjdGVkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDoioLngrnmmK/lkKblsZXlvIAo5Y+25a2Q6IqC54K55peg5pWIKemhueWQje+8jOm7mOiupO+8mmAnZXhwYW5kZWQnYCAqL1xuICAgICAgZXhwYW5kZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiuvue9ruaYr+WQpuemgeeUqOiKgueCuSjkuI3lj6/ov5vooYzku7vkvZXmk43kvZwp6aG55ZCN77yM6buY6K6k77yaYCdkaXNhYmxlZCdgICovXG4gICAgICBkaXNhYmxlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5ZCO77yM5omn6KGM55qE6YCS5b2S5Zue6LCDICovXG4gICAgICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgfSxcbiAgKTogTnpUcmVlTm9kZVtdIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxuICAgICAgaXNMZWFmTWFwTmFtZTogJ2lzTGVhZicsXG4gICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiB0aGlzLmMuZXhwYW5kZWRNYXBuYW1lLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xuICAgICAgaWRNYXBOYW1lOiBvcHRpb25zLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgfSk7XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXTtcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtW29wdGlvbnMudGl0bGVNYXBOYW1lXTtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW1bb3B0aW9ucy5jaGVja2VkTWFwbmFtZV07XG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHRpb25zLnNlbGVjdGVkTWFwbmFtZV07XG4gICAgICBpdGVtLmV4cGFuZGVkID0gaXRlbVtvcHRpb25zLmV4cGFuZGVkTWFwbmFtZV07XG4gICAgICBpdGVtLmRpc2FibGVkID0gaXRlbVtvcHRpb25zLmRpc2FibGVkTWFwbmFtZV07XG4gICAgICBpZiAoaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuY2IpIHtcbiAgICAgICAgb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpgJLlvZLorr/pl67mlbTkuKrmoJFcbiAgICovXG4gIHZpc2l0VHJlZShcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBjYjogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZCxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgaW5GbiA9IChkYXRhOiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSBpdGVtW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuVmFsICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxuICAgKi9cbiAgZ2V0S2V5c0J5VHJlZU5vZGUoXG4gICAgdHJlZTogTnpUcmVlTm9kZVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5piv5ZCm5YyF5ZCr5Y2K6YCJ54q25oCB55qE5YC877yM6buY6K6k77yaYHRydWVgICovXG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xuICAgICAgLyoqIOaYr+WQpumHjeaWsOaMh+WumiBga2V5YCDplK7lkI3vvIzoi6XkuI3mjIflrprooajnpLrkvb/nlKggYE56VHJlZU5vZGUua2V5YCDlgLwgKi9cbiAgICAgIGtleU1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5Zue6LCD77yM6L+U5Zue5LiA5Liq5YC8IGBrZXlgIOWAvO+8jOS8mOWFiOe6p+mrmOS6juWFtuS7liAqL1xuICAgICAgY2I/OiAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IGFueTtcbiAgICB9LFxuICApOiBhbnlbXSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCBrZXlzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGl0ZW0uaXNDaGVja2VkIHx8IChvcHRpb25zLmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpKSB7XG4gICAgICAgIGtleXMucHVzaChcbiAgICAgICAgICBvcHRpb25zLmNiXG4gICAgICAgICAgICA/IG9wdGlvbnMuY2IoaXRlbSwgcGFyZW50LCBkZWVwKVxuICAgICAgICAgICAgOiBvcHRpb25zLmtleU1hcE5hbWVcbiAgICAgICAgICAgID8gaXRlbS5vcmlnaW5bb3B0aW9ucy5rZXlNYXBOYW1lXVxuICAgICAgICAgICAgOiBpdGVtLmtleSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIl19