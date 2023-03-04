import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ACLService } from '@delon/acl';
import { AlainI18NService } from '../i18n/i18n';
import { Menu } from './interface';
import * as i0 from "@angular/core";
/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
export declare class MenuService implements OnDestroy {
    private i18nSrv;
    private aclService;
    private _change$;
    private i18n$;
    private data;
    /**
     * 是否完全受控菜单打开状态，默认：`false`
     */
    openStrictly: boolean;
    constructor(i18nSrv: AlainI18NService, aclService: ACLService);
    get change(): Observable<Menu[]>;
    get menus(): Menu[];
    visit<T extends Menu = Menu>(data: T[], callback: (item: T, parentMenum: T | null, depth?: number) => void): void;
    visit(data: Menu[], callback: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void;
    add(items: Menu[]): void;
    private fixItem;
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     */
    resume<T extends Menu = Menu>(callback?: (item: T, parentMenum: T | null, depth?: number) => void): void;
    resume(callback?: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void;
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     */
    private loadShortcut;
    /**
     * 清空菜单
     */
    clear(): void;
    /**
     * Use `url` or `key` to find menus
     *
     * 利用 `url` 或 `key` 查找菜单
     */
    find(options: {
        key?: string | null;
        url?: string | null;
        recursive?: boolean | null;
        /**
         * When the callback returns a Boolean type, it means the custom validation result
         *
         * 当回调返回一个布尔类型时，表示自定义校验结果
         */
        cb?: ((i: Menu) => boolean | null) | null;
        /**
         * Use the current menu data by default
         *
         * 默认使用当前菜单数据
         */
        data?: Menu[] | null;
        /**
         * Whether to ignore hide items, default: `false`
         *
         * 是否忽略隐藏的项，默认：`false`
         */
        ignoreHide?: boolean;
    }): Menu | null;
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    getPathByUrl(url: string, recursive?: boolean): Menu[];
    /**
     * Get menu based on `key`
     */
    getItem(key: string): Menu | null;
    /**
     * Set menu based on `key`
     */
    setItem(key: string | Menu, value: Menu, options?: {
        emit?: boolean;
    }): void;
    /**
     * Open menu based on `key` or menu object
     */
    open(keyOrItem: string | Menu | null, options?: {
        emit?: boolean;
    }): void;
    openAll(status?: boolean): void;
    toggleOpen(keyOrItem: string | Menu | null, options?: {
        allStatus?: boolean;
        emit?: boolean;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuService, [{ optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MenuService>;
}
