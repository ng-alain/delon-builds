import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import { AlainConfigService } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "../config";
export class ArrayService {
    constructor(cog) {
        this.c = cog.merge('utilArray', {
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
        });
    }
    /**
     * 将树结构转换成数组结构
     */
    treeToArr(tree, options) {
        const opt = Object.assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options);
        const result = [];
        const inFn = (list, parent, deep = 0) => {
            for (const i of list) {
                i[opt.deepMapName] = deep;
                i[opt.parentMapName] = parent;
                if (opt.cb) {
                    opt.cb(i, parent, deep);
                }
                result.push(i);
                const children = i[opt.childrenMapName];
                if (children != null && Array.isArray(children) && children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (opt.clearChildren) {
                    delete i[opt.childrenMapName];
                }
            }
        };
        inFn(tree, 1);
        return result;
    }
    /**
     * 数组转换成树数据
     */
    arrToTree(arr, options) {
        const opt = Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options);
        if (arr.length === 0) {
            return [];
        }
        const tree = [];
        const childrenOf = {};
        let rootPid = opt.rootParentIdValue;
        if (!rootPid) {
            const pids = arr.map(i => i[opt.parentIdMapName]);
            const emptyPid = pids.findIndex(w => w == null);
            rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
        }
        for (const item of arr) {
            const id = item[opt.idMapName];
            const pid = item[opt.parentIdMapName];
            childrenOf[id] = childrenOf[id] || [];
            item[opt.childrenMapName] = childrenOf[id];
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
     */
    arrToTreeNode(arr, options) {
        const opt = Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options);
        const tree = this.arrToTree(arr, {
            idMapName: opt.idMapName,
            parentIdMapName: opt.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, (item, parent, deep) => {
            item.key = item[opt.idMapName];
            item.title = item[opt.titleMapName];
            item.checked = item[opt.checkedMapname];
            item.selected = item[opt.selectedMapname];
            item.expanded = item[opt.expandedMapname];
            item.disabled = item[opt.disabledMapname];
            if (item[opt.isLeafMapName] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[opt.isLeafMapName];
            }
            if (opt.cb) {
                opt.cb(item, parent, deep);
            }
        });
        return tree.map(node => new NzTreeNode(node));
    }
    /**
     * 递归访问整个树
     */
    visitTree(tree, cb, options) {
        options = Object.assign({ childrenMapName: this.c.childrenMapName }, options);
        const inFn = (data, parent, deep) => {
            for (const item of data) {
                cb(item, parent, deep);
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
     */
    getKeysByTreeNode(tree, options) {
        const opt = Object.assign({ includeHalfChecked: true }, options);
        const keys = [];
        this.visitTree(tree, (item, parent, deep) => {
            if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
            }
        });
        return keys;
    }
}
/** @nocollapse */ ArrayService.ɵfac = function ArrayService_Factory(t) { return new (t || ArrayService)(i0.ɵɵinject(i1.AlainConfigService)); };
/** @nocollapse */ ArrayService.ɵprov = i0.ɵɵdefineInjectable({ token: ArrayService, factory: ArrayService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArrayService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.AlainConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvc3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUF3QixNQUFNLFdBQVcsQ0FBQzs7O0FBcUVyRSxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUFZLEdBQXVCO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDOUIsV0FBVyxFQUFFLE1BQU07WUFDbkIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixlQUFlLEVBQUUsV0FBVztZQUM1QixlQUFlLEVBQUUsVUFBVTtZQUMzQixZQUFZLEVBQUUsT0FBTztZQUNyQixjQUFjLEVBQUUsU0FBUztZQUN6QixlQUFlLEVBQUUsVUFBVTtZQUMzQixlQUFlLEVBQUUsVUFBVTtZQUMzQixlQUFlLEVBQUUsVUFBVTtTQUM1QixDQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLENBQUMsSUFBaUIsRUFBRSxPQUFzQztRQUNqRSxNQUFNLEdBQUcsR0FBRyxnQkFDVixXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUN2QyxhQUFhLEVBQUUsSUFBSSxFQUNuQixFQUFFLEVBQUUsSUFBSSxJQUNMLE9BQU8sQ0FDcUIsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBZ0IsRUFBRSxDQUFDO1FBQy9CLE1B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Q0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUc7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7MkZBNUtVLFlBQVk7dUVBQVosWUFBWSxXQUFaLFlBQVksbUJBREMsTUFBTTt1RkFDbkIsWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90cmVlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEFycmF5Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zIHtcbiAgLyoqIOa3seW6pumhueWQje+8jOm7mOiupO+8mmAnZGVlcCdgICovXG4gIGRlZXBNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5omB5bmz5ZCO5pWw57uE55qE54i25pWw5o2u6aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnQnYCAqL1xuICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5rqQ5pWw5o2u5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOaYr+WQpuenu+mZpCBgY2hpbGRyZW5gIOiKgueCue+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBjbGVhckNoaWxkcmVuPzogYm9vbGVhbjtcbiAgLyoqIOi9rOaNouaIkOaVsOe7hOe7k+aehOaXtuWbnuiwgyAqL1xuICBjYj86IChpdGVtOiBOelNhZmVBbnksIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyB7XG4gIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmoLnniLbnvJblj7flgLzvvIzpu5jorqTkvJroh6rliqjorqHnrpflvpfliLDmnIDlkIjpgILnmoTmoLnniLbnvJblj7flgLzvvIzkvovlpoLvvJpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgdHNcbiAgICogY29uc3QgcmVzID0gc3J2LmFyclRvVHJlZShbXG4gICAqICAgIHsgaWQ6IDIsIHBhcmVudF9pZDogJ2EnLCB0aXRsZTogJ2MxJyB9LFxuICAgKiAgICB7IGlkOiA0LCBwYXJlbnRfaWQ6IDIsIHRpdGxlOiAndDEnIH0sXG4gICAqICBdLFxuICAgKiAgeyByb290UGFyZW50VmFsdWU6ICdhJyB9KTtcbiAgICogYGBgXG4gICAqL1xuICByb290UGFyZW50SWRWYWx1ZT86IGFueTtcbiAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDovazmjaLmiJDmoJHmlbDmja7ml7blm57osIMgKi9cbiAgY2I/OiAoaXRlbTogTnpTYWZlQW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zIHtcbiAgLyoqIOe8luWPt+mhueWQje+8jOm7mOiupO+8mmAnaWQnYCAqL1xuICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOagh+mimOmhueWQje+8jOm7mOiupO+8mmAndGl0bGUnYCAqL1xuICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDorr7nva7kuLrlj7blrZDoioLngrnpobnlkI3vvIzoi6XmlbDmja7mupDkuI3lrZjlnKjml7boh6rliqjmoLnmja4gYGNoaWxkcmVuYCDlgLzlhrPlrprmmK/lkKbkuLrlj7blrZDoioLngrnvvIzpu5jorqTvvJpgJ2lzTGVhZidgICovXG4gIGlzTGVhZk1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDoioLngrkgQ2hlY2tib3gg5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdjaGVja2VkJ2AgKi9cbiAgY2hlY2tlZE1hcG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDoioLngrnmnKzouqvmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ3NlbGVjdGVkJ2AgKi9cbiAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K55piv5ZCm5bGV5byAKOWPtuWtkOiKgueCueaXoOaViCnpobnlkI3vvIzpu5jorqTvvJpgJ2V4cGFuZGVkJ2AgKi9cbiAgZXhwYW5kZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6K6+572u5piv5ZCm56aB55So6IqC54K5KOS4jeWPr+i/m+ihjOS7u+S9leaTjeS9nCnpobnlkI3vvIzpu5jorqTvvJpgJ2Rpc2FibGVkJ2AgKi9cbiAgZGlzYWJsZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5ZCO77yM5omn6KGM55qE6YCS5b2S5Zue6LCDICovXG4gIGNiPzogKGl0ZW06IE56U2FmZUFueSwgcGFyZW50OiBOelNhZmVBbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnMge1xuICAvKiog5piv5ZCm5YyF5ZCr5Y2K6YCJ54q25oCB55qE5YC877yM6buY6K6k77yaYHRydWVgICovXG4gIGluY2x1ZGVIYWxmQ2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbph43mlrDmjIflrpogYGtleWAg6ZSu5ZCN77yM6Iul5LiN5oyH5a6a6KGo56S65L2/55SoIGBOelRyZWVOb2RlLmtleWAg5YC8ICovXG4gIGtleU1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDlm57osIPvvIzov5Tlm57kuIDkuKrlgLwgYGtleWAg5YC877yM5LyY5YWI57qn6auY5LqO5YW25LuWICovXG4gIGNiPzogKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiBOelNhZmVBbnk7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBbGFpblV0aWxBcnJheUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmMgPSBjb2cubWVyZ2UoJ3V0aWxBcnJheScsIHtcbiAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICBwYXJlbnRNYXBOYW1lOiAncGFyZW50JyxcbiAgICAgIGlkTWFwTmFtZTogJ2lkJyxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXG4gICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiAnc2VsZWN0ZWQnLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxuICAgIH0pITtcbiAgfVxuICAvKipcbiAgICog5bCG5qCR57uT5p6E6L2s5o2i5oiQ5pWw57uE57uT5p6EXG4gICAqL1xuICB0cmVlVG9BcnIodHJlZTogTnpTYWZlQW55W10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zKTogTnpTYWZlQW55W10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGRlZXBNYXBOYW1lOiB0aGlzLmMuZGVlcE1hcE5hbWUsXG4gICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIGNsZWFyQ2hpbGRyZW46IHRydWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zO1xuICAgIGNvbnN0IHJlc3VsdDogTnpTYWZlQW55W10gPSBbXTtcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IE56U2FmZUFueVtdLCBwYXJlbnQ6IE56U2FmZUFueSwgZGVlcDogbnVtYmVyID0gMCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpIHtcbiAgICAgICAgaVtvcHQuZGVlcE1hcE5hbWUhXSA9IGRlZXA7XG4gICAgICAgIGlbb3B0LnBhcmVudE1hcE5hbWUhXSA9IHBhcmVudDtcbiAgICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICAgIG9wdC5jYihpLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGlbb3B0LmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICBpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHQuY2xlYXJDaGlsZHJlbikge1xuICAgICAgICAgIGRlbGV0ZSBpW29wdC5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCAxKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOe7hOi9rOaNouaIkOagkeaVsOaNrlxuICAgKi9cbiAgYXJyVG9UcmVlKGFycjogTnpTYWZlQW55W10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VBcnJUb1RyZWVPcHRpb25zKTogTnpTYWZlQW55W10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnM7XG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgdHJlZTogTnpTYWZlQW55W10gPSBbXTtcbiAgICBjb25zdCBjaGlsZHJlbk9mOiBOelNhZmVBbnkgPSB7fTtcbiAgICBsZXQgcm9vdFBpZCA9IG9wdC5yb290UGFyZW50SWRWYWx1ZTtcbiAgICBpZiAoIXJvb3RQaWQpIHtcbiAgICAgIGNvbnN0IHBpZHMgPSBhcnIubWFwKGkgPT4gaVtvcHQucGFyZW50SWRNYXBOYW1lIV0pO1xuICAgICAgY29uc3QgZW1wdHlQaWQgPSBwaWRzLmZpbmRJbmRleCh3ID0+IHcgPT0gbnVsbCk7XG4gICAgICByb290UGlkID0gZW1wdHlQaWQgIT09IC0xID8gcGlkc1tlbXB0eVBpZF0gOiBwaWRzLnNvcnQoKVswXTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdC5pZE1hcE5hbWUhXTtcbiAgICAgIGNvbnN0IHBpZCA9IGl0ZW1bb3B0LnBhcmVudElkTWFwTmFtZSFdO1xuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcbiAgICAgIGl0ZW1bb3B0LmNoaWxkcmVuTWFwTmFtZSFdID0gY2hpbGRyZW5PZltpZF07XG4gICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgIG9wdC5jYihpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmIChwaWQgIT09IHJvb3RQaWQpIHtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQIGBuei10cmVlYCDmlbDmja7mupDvvIzpgJrov4cgYG9wdGlvbnNgIOi9rOWMlumhueWQje+8jOS5n+WPr+S7peS9v+eUqCBgb3B0aW9ucy5jYmAg5pu06auY57qn5Yaz5a6a5pWw5o2u6aG5XG4gICAqL1xuICBhcnJUb1RyZWVOb2RlKGFycjogTnpTYWZlQW55W10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyk6IE56VHJlZU5vZGVbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxuICAgICAgaXNMZWFmTWFwTmFtZTogJ2lzTGVhZicsXG4gICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiB0aGlzLmMuZXhwYW5kZWRNYXBuYW1lLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnM7XG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xuICAgICAgaWRNYXBOYW1lOiBvcHQuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiBvcHQucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgIH0pO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBOelNhZmVBbnksIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0ua2V5ID0gaXRlbVtvcHQuaWRNYXBOYW1lIV07XG4gICAgICBpdGVtLnRpdGxlID0gaXRlbVtvcHQudGl0bGVNYXBOYW1lIV07XG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdC5jaGVja2VkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1bb3B0LnNlbGVjdGVkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5leHBhbmRlZCA9IGl0ZW1bb3B0LmV4cGFuZGVkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0LmRpc2FibGVkTWFwbmFtZSFdO1xuICAgICAgaWYgKGl0ZW1bb3B0LmlzTGVhZk1hcE5hbWUhXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW1bb3B0LmlzTGVhZk1hcE5hbWUhXTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgb3B0LmNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWUubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmAkuW9kuiuv+mXruaVtOS4quagkVxuICAgKi9cbiAgdmlzaXRUcmVlKFxuICAgIHRyZWU6IE56U2FmZUFueVtdLFxuICAgIGNiOiAoaXRlbTogTnpTYWZlQW55LCBwYXJlbnQ6IE56U2FmZUFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IE56U2FmZUFueVtdLCBwYXJlbnQ6IE56U2FmZUFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICBjYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucyEuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIGlmIChjaGlsZHJlblZhbCAmJiBjaGlsZHJlblZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlblZhbCwgaXRlbSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIG51bGwsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluaJgOacieW3sue7j+mAieS4reeahCBga2V5YCDlgLxcbiAgICovXG4gIGdldEtleXNCeVRyZWVOb2RlKHRyZWU6IE56VHJlZU5vZGVbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucyk6IE56U2FmZUFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ6IHRydWUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zO1xuICAgIGNvbnN0IGtleXM6IE56U2FmZUFueVtdID0gW107XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pc0NoZWNrZWQgfHwgKG9wdC5pbmNsdWRlSGFsZkNoZWNrZWQgJiYgaXRlbS5pc0hhbGZDaGVja2VkKSkge1xuICAgICAgICBrZXlzLnB1c2gob3B0LmNiID8gb3B0LmNiKGl0ZW0sIHBhcmVudCwgZGVlcCkgOiBvcHQua2V5TWFwTmFtZSA/IGl0ZW0ub3JpZ2luW29wdC5rZXlNYXBOYW1lXSA6IGl0ZW0ua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIl19