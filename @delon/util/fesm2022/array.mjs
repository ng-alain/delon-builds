import * as i0 from "@angular/core";
import { Injectable, inject } from "@angular/core";
import { AlainConfigService } from "@delon/util/config";
import { NzTreeNode } from "ng-zorro-antd/core/tree";
var ArrayService = class ArrayService {
	cogSrv = inject(AlainConfigService);
	c;
	constructor() {
		this.c = this.cogSrv.merge("utilArray", {
			deepMapName: "deep",
			parentMapName: "parent",
			idMapName: "id",
			parentIdMapName: "parent_id",
			childrenMapName: "children",
			titleMapName: "title",
			checkedMapname: "checked",
			selectedMapname: "selected",
			expandedMapname: "expanded",
			disabledMapname: "disabled"
		});
	}
	treeToArr(tree, options) {
		const opt = {
			deepMapName: this.c.deepMapName,
			parentMapName: this.c.parentMapName,
			childrenMapName: this.c.childrenMapName,
			clearChildren: true,
			cb: null,
			...options
		};
		const result = [];
		const inFn = (list, parent, deep = 0) => {
			for (const i of list) {
				i[opt.deepMapName] = deep;
				i[opt.parentMapName] = parent;
				if (opt.cb) opt.cb(i, parent, deep);
				result.push(i);
				const children = i[opt.childrenMapName];
				if (children != null && Array.isArray(children) && children.length > 0) inFn(children, i, deep + 1);
				if (opt.clearChildren) delete i[opt.childrenMapName];
			}
		};
		inFn(tree, null);
		return result;
	}
	arrToTree(arr, options) {
		if (!Array.isArray(arr) || arr.length === 0) return [];
		const opt = {
			idMapName: this.c.idMapName,
			parentIdMapName: this.c.parentIdMapName,
			childrenMapName: this.c.childrenMapName,
			cb: null,
			...options
		};
		const tree = [];
		const childrenOf = {};
		let rootPid = opt.rootParentIdValue;
		const arrType = arr;
		if (!rootPid) {
			const pids = arrType.map((i) => i[opt.parentIdMapName]);
			const emptyPid = pids.findIndex((w) => w == null);
			rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
		}
		for (const item of arrType) {
			const id = item[opt.idMapName];
			const pid = item[opt.parentIdMapName];
			childrenOf[id] = childrenOf[id] ?? [];
			item[opt.childrenMapName] = childrenOf[id];
			if (opt.cb) opt.cb(item);
			if (pid !== rootPid) {
				childrenOf[pid] = childrenOf[pid] ?? [];
				childrenOf[pid].push(item);
			} else tree.push(item);
		}
		return tree;
	}
	arrToTreeNode(arr, options) {
		const opt = {
			idMapName: this.c.idMapName,
			parentIdMapName: this.c.parentIdMapName,
			titleMapName: this.c.titleMapName,
			isLeafMapName: "isLeaf",
			checkedMapname: this.c.checkedMapname,
			selectedMapname: this.c.selectedMapname,
			expandedMapname: this.c.expandedMapname,
			disabledMapname: this.c.disabledMapname,
			cb: null,
			...options
		};
		const tree = this.arrToTree(arr, {
			idMapName: opt.idMapName,
			parentIdMapName: opt.parentIdMapName,
			childrenMapName: "children"
		});
		this.visitTree(tree, (item, parent, deep) => {
			item.key = item[opt.idMapName];
			item.title = item[opt.titleMapName];
			item.checked = item[opt.checkedMapname];
			item.selected = item[opt.selectedMapname];
			item.expanded = item[opt.expandedMapname];
			item.disabled = item[opt.disabledMapname];
			if (item[opt.isLeafMapName] == null) item.isLeaf = item.children.length === 0;
			else item.isLeaf = item[opt.isLeafMapName];
			if (opt.cb) opt.cb(item, parent, deep);
		});
		return tree.map((node) => new NzTreeNode(node));
	}
	visitTree(tree, cb, options) {
		options = {
			childrenMapName: this.c.childrenMapName,
			...options
		};
		const inFn = (data, parent, deep) => {
			for (const item of data) {
				cb(item, parent, deep);
				const childrenVal = item[options.childrenMapName];
				if (Array.isArray(childrenVal) && childrenVal.length > 0) inFn(childrenVal, item, deep + 1);
			}
		};
		inFn(tree, null, 1);
	}
	findTree(tree, predicate, options) {
		let res;
		this.visitTree(tree, (item) => {
			if (res === void 0 && predicate(item)) res = item;
		}, options);
		return res;
	}
	getKeysByTreeNode(tree, options) {
		const opt = {
			includeHalfChecked: true,
			...options
		};
		const keys = [];
		this.visitTree(tree, (item, parent, deep) => {
			if (item.isChecked || opt.includeHalfChecked && item.isHalfChecked) keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
		});
		return keys;
	}
	baseFlat(array, depth, result = []) {
		let index = -1;
		while (++index < array.length) {
			const value = array[index];
			if (depth > 0 && Array.isArray(value)) {
				if (depth > 1) this.baseFlat(value, depth - 1, result);
				else {
					let pushIndex = -1;
					const offset = result.length;
					while (++pushIndex < value.length) result[offset + pushIndex] = value[pushIndex];
				}
			} else result[result.length] = value;
		}
		return result;
	}
	flat(array, depth = 1 / 0) {
		return Array.isArray(array) ? this.baseFlat(array, depth) : array;
	}
	groupBy(array, iteratee) {
		if (!Array.isArray(array)) return {};
		return array.reduce((result, value) => {
			const key = iteratee(value);
			if (Object.prototype.hasOwnProperty.call(result, key)) result[key].push(value);
			else result[key] = [value];
			return result;
		}, {});
	}
	uniq(array, predicate) {
		return Array.from(array.reduce((map, value) => {
			const key = predicate ? typeof predicate === "string" ? value[predicate] : predicate(value) : value;
			if (!map.has(key)) map.set(key, value);
			return map;
		}, /* @__PURE__ */ new Map()).values());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ArrayService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ArrayService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ArrayService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
export { ArrayService };

//# sourceMappingURL=array.mjs.map