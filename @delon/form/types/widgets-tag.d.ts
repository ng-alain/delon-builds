import * as i2 from "@delon/form";
import { ControlUIWidget, SFSchemaEnum, SFSchemaEnumType, SFUISchemaItem, SFValue, SFWidgetProvideConfig, WidgetRegistry } from "@delon/form";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i3 from "ng-zorro-antd/tag";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "@angular/common";
export interface SFTagWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;
  /**
   * 设定标签工作的模式，默认：`checkable`
   */
  mode?: 'closeable' | 'default' | 'checkable';
  /**
   * 关闭时的回调，在 `nzMode="closable"` 时可用
   */
  onClose?: (e: MouseEvent) => void;
  /**
   * 设置标签的选中状态的回调
   */
  checkedChange?: (status: boolean) => void;
}
declare namespace widget_d_exports {
  export { TagWidget };
}
export declare class TagWidget extends ControlUIWidget<SFTagWidgetSchema> {
  static readonly KEY = "tag";
  protected readonly data: import("@angular/core").WritableSignal<SFSchemaEnum[]>;
  reset(value: SFValue): void;
  onChange(item: SFSchemaEnum): void;
  _close(e: MouseEvent): void;
  private updateValue;
  static ɵfac: i0.ɵɵFactoryDeclaration<TagWidget, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<TagWidget, "sf-tag", never, {}, {}, never, never, true, never>;
}
export declare class TagWidgetModule {
  constructor(widgetRegistry: WidgetRegistry);
  static ɵfac: i0.ɵɵFactoryDeclaration<TagWidgetModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<TagWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NzTagModule, typeof i4.NzIconModule, typeof i5.CommonModule, typeof TagWidget], never>;
  static ɵinj: i0.ɵɵInjectorDeclaration<TagWidgetModule>;
}
export declare function withTagWidget(): SFWidgetProvideConfig;