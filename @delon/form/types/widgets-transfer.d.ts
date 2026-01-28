import * as i2 from '@delon/form';
import { SFUISchemaItem, SFSchemaEnumType, ControlUIWidget, SFSchemaEnum, SFValue, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import { Observable } from 'rxjs';
import { NgStyleInterface } from 'ng-zorro-antd/core/types';
import * as i3 from 'ng-zorro-antd/transfer';
import { TransferItem, TransferCanMove, TransferChange, TransferSearchChange, TransferSelectChange } from 'ng-zorro-antd/transfer';
import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';
import * as i1 from '@angular/forms';

interface SFTransferWidgetSchema extends SFUISchemaItem {
    /**
     * 异步数据源
     */
    asyncData?: () => Observable<SFSchemaEnumType[]>;
    /**
     * 标题集合，顺序从左至右，默认：`['', '']`
     */
    titles?: string[];
    /**
     * 操作文案集合，顺序从下至上，默认：`['', '']`
     */
    operations?: string[];
    /**
     * 两个穿梭框的自定义样式，以`ngStyle`写法标题
     */
    listStyle?: NgStyleInterface;
    /**
     * 单数单位
     */
    itemUnit?: string;
    /**
     * 复数单位
     */
    itemsUnit?: string;
    /**
     * 是否显示搜索框，默认：`false`
     */
    showSearch?: boolean;
    /**
     * 接收 `inputValueoption` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`
     */
    filterOption?: (inputValue: string, item: TransferItem) => boolean;
    /**
     * 搜索框的默认值
     */
    searchPlaceholder?: string;
    /**
     * 当列表为空时显示的内容
     */
    notFoundContent?: string;
    /**
     * Display as single direction
     *
     * 展示为单向样式
     */
    oneWay?: boolean;
    /**
     * 穿梭时二次校验
     */
    canMove?: (arg: TransferCanMove) => Observable<TransferItem[]>;
    /**
     * 选项在两栏之间转移时的回调函数
     */
    change?: (options: TransferChange) => void;
    /**
     * 搜索框内容时改变时的回调函数
     */
    searchChange?: (options: TransferSearchChange) => void;
    /**
     * 选中项发生改变时的回调函数
     */
    selectChange?: (options: TransferSelectChange) => void;
}

declare class TransferWidget extends ControlUIWidget<SFTransferWidgetSchema> implements OnInit {
    static readonly KEY = "transfer";
    list: SFSchemaEnum[];
    i: {
        titles: string[];
        operations: string[];
        itemUnit: string;
        itemsUnit: string;
    };
    private _data;
    ngOnInit(): void;
    reset(value: SFValue): void;
    private notify;
    _canMove: (arg: TransferCanMove) => Observable<TransferItem[]>;
    _change(options: TransferChange): void;
    _searchChange(options: TransferSearchChange): void;
    _selectChange(options: TransferSelectChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TransferWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TransferWidget, "sf-transfer", never, {}, {}, never, never, true, never>;
}

declare class TransferWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<TransferWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TransferWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NzTransferModule, typeof TransferWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TransferWidgetModule>;
}

declare function withTransferWidget(): SFWidgetProvideConfig;

export { TransferWidget, TransferWidgetModule, withTransferWidget };
export type { SFTransferWidgetSchema };
