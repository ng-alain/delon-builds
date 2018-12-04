import { OnChanges, ChangeDetectorRef, EventEmitter, OnInit, SimpleChanges, SimpleChange, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlainI18NService } from '@delon/theme';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabMatchMode, ReuseItem, ReuseContextI18n, ReuseContextCloseEvent } from './reuse-tab.interfaces';
export declare class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
    private srv;
    private cd;
    private router;
    private route;
    private render;
    private i18nSrv;
    private el;
    private sub$;
    private i18n$;
    list: ReuseItem[];
    item: ReuseItem;
    pos: number;
    /** 设置匹配模式 */
    mode: ReuseTabMatchMode;
    /** 选项文本国际化 */
    i18n: ReuseContextI18n;
    /** 是否Debug模式 */
    debug: boolean;
    /** 允许最多复用多少个页面 */
    max: number;
    /** 排除规则，限 `mode=URL` */
    excludes: RegExp[];
    /** 允许关闭 */
    allowClose: boolean;
    /** 总是显示当前页 */
    showCurrent: boolean;
    /** 切换时回调 */
    readonly change: EventEmitter<ReuseItem>;
    /** 关闭回调 */
    readonly close: EventEmitter<ReuseItem>;
    constructor(el: ElementRef, srv: ReuseTabService, cd: ChangeDetectorRef, router: Router, route: ActivatedRoute, render: Renderer2, i18nSrv: AlainI18NService);
    private genTit;
    private genList;
    private visibility;
    cmChange(res: ReuseContextCloseEvent): void;
    refStatus(dc?: boolean): void;
    to(e: Event, index: number): void;
    _close(e: Event, idx: number, includeNonCloseable: boolean): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
