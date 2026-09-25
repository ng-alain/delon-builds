import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import { NgClassType, NzSafeAny } from "ng-zorro-antd/core/types";
import * as i2 from "@delon/theme";
import { LocaleData } from "@delon/theme";
import * as i1 from "@angular/common";
import * as i3 from "ng-zorro-antd/badge";
import * as i4 from "ng-zorro-antd/dropdown";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/list";
import * as i7 from "ng-zorro-antd/spin";
import * as i8 from "ng-zorro-antd/tabs";
import * as i9 from "ng-zorro-antd/tag";
import * as i10 from "ng-zorro-antd/core/outlet";
export interface NoticeItem {
  [key: string]: NzSafeAny;
  title: string;
  list: NoticeIconList[];
  /** 空列表文本，默认：`无通知` */
  emptyText?: string | TemplateRef<void>;
  /** 空列表图像 */
  emptyImage?: string;
  /** 清空文本，默认：`清空` */
  clearText?: string;
}
export interface NoticeIconList {
  [key: string]: NzSafeAny;
  /** 头像图片链接 */
  avatar?: string;
  /** 标题 */
  title?: string | TemplateRef<{
    $implicit: NoticeIconList;
  }>;
  /** 描述信息 */
  description?: string | TemplateRef<{
    $implicit: NoticeIconList;
  }>;
  /** 时间戳 */
  datetime?: string | Date | number;
  /** 额外信息，在列表项右上角 */
  extra?: string;
  /** 是否已读状态 */
  read?: boolean;
}
export interface NoticeIconSelect {
  title: string;
  item: NoticeItem;
  event?: Event;
}
declare namespace notice_icon_tab_component_d_exports {
  export { NoticeIconTabComponent };
}
export declare class NoticeIconTabComponent {
  readonly locale: import("@angular/core").InputSignal<LocaleData>;
  readonly item: import("@angular/core").InputSignal<NoticeItem>;
  readonly select: import("@angular/core").OutputEmitterRef<NoticeIconSelect>;
  readonly clear: import("@angular/core").OutputEmitterRef<string>;
  protected onClick(item: NoticeItem, event: Event): void;
  protected onClear(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NoticeIconTabComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NoticeIconTabComponent, "notice-icon-tab", ["noticeIconTab"], {
    "locale": {
      "alias": "locale";
      "required": true;
      "isSignal": true;
    };
    "item": {
      "alias": "item";
      "required": true;
      "isSignal": true;
    };
  }, {
    "select": "select";
    "clear": "clear";
  }, never, never, true, never>;
}
declare namespace notice_icon_component_d_exports {
  export { NoticeIconComponent };
}
export declare class NoticeIconComponent {
  protected locale: import("@angular/core").Signal<import("@delon/theme").NoticeIconLocaleData>;
  readonly data: import("@angular/core").InputSignal<NoticeItem[]>;
  readonly count: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  readonly loading: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly popoverVisible: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly btnClass: import("@angular/core").InputSignal<NgClassType | undefined>;
  readonly btnIconClass: import("@angular/core").InputSignal<NgClassType | undefined>;
  readonly centered: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly select: import("@angular/core").OutputEmitterRef<NoticeIconSelect>;
  readonly clear: import("@angular/core").OutputEmitterRef<string>;
  readonly popoverVisibleChange: import("@angular/core").OutputEmitterRef<boolean>;
  protected overlayCls: import("@angular/core").WritableSignal<string>;
  constructor();
  protected delayShow: import("@angular/core").WritableSignal<boolean>;
  onVisibleChange(result: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NoticeIconComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NoticeIconComponent, "notice-icon", ["noticeIcon"], {
    "data": {
      "alias": "data";
      "required": false;
      "isSignal": true;
    };
    "count": {
      "alias": "count";
      "required": false;
      "isSignal": true;
    };
    "loading": {
      "alias": "loading";
      "required": false;
      "isSignal": true;
    };
    "popoverVisible": {
      "alias": "popoverVisible";
      "required": false;
      "isSignal": true;
    };
    "btnClass": {
      "alias": "btnClass";
      "required": false;
      "isSignal": true;
    };
    "btnIconClass": {
      "alias": "btnIconClass";
      "required": false;
      "isSignal": true;
    };
    "centered": {
      "alias": "centered";
      "required": false;
      "isSignal": true;
    };
  }, {
    "select": "select";
    "clear": "clear";
    "popoverVisibleChange": "popoverVisibleChange";
  }, never, never, true, never>;
}
export declare class NoticeIconModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NoticeIconModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NoticeIconModule, never, [typeof i1.CommonModule, typeof i2.DelonLocaleModule, typeof i3.NzBadgeModule, typeof i4.NzDropdownModule, typeof i5.NzIconModule, typeof i6.NzListModule, typeof i7.NzSpinModule, typeof i8.NzTabsModule, typeof i9.NzTagModule, typeof i10.NzOutletModule, typeof NoticeIconComponent, typeof NoticeIconTabComponent], [typeof NoticeIconComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NoticeIconModule>;
}