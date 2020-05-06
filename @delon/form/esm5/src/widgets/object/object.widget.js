/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/object/object.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends, __values } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayProperty } from '../../model/array.property';
import { ObjectLayoutWidget } from '../../widget';
var ObjectWidget = /** @class */ (function (_super) {
    __extends(ObjectWidget, _super);
    function ObjectWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'default';
        _this.list = [];
        return _this;
    }
    /**
     * @return {?}
     */
    ObjectWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        var _b = this, formProperty = _b.formProperty, ui = _b.ui;
        var grid = ui.grid, showTitle = ui.showTitle, type = ui.type;
        this.type = type !== null && type !== void 0 ? type : 'default';
        if (this.type === 'card' || (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true)) {
            this.title = (/** @type {?} */ (this.schema.title));
        }
        this.grid = (/** @type {?} */ (grid));
        /** @type {?} */
        var list = [];
        try {
            for (var _c = __values(formProperty.propertiesId), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                /** @type {?} */
                var property = (/** @type {?} */ (((/** @type {?} */ (formProperty.properties)))[key]));
                /** @type {?} */
                var item = {
                    property: property,
                    grid: property.ui.grid || grid || {},
                    spanLabelFixed: property.ui.spanLabelFixed,
                    show: property.ui.hidden === false,
                };
                list.push(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.list = list;
    };
    ObjectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-object',
                    template: "<ng-template #default let-noTitle>\n  <div *ngIf=\"!noTitle && title\" class=\"sf__title\">{{ title }}</div>\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div\n            nz-col\n            [nzSpan]=\"i.grid.span\"\n            [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\"\n            [nzSm]=\"i.grid.sm\"\n            [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\"\n            [nzXl]=\"i.grid.xl\"\n            [nzXXl]=\"i.grid.xxl\"\n          >\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</ng-template>\n<nz-card\n  *ngIf=\"type === 'card'; else default\"\n  [nzTitle]=\"title\"\n  [nzExtra]=\"ui.cardExtra\"\n  [nzSize]=\"ui.cardSize || 'small'\"\n  [nzActions]=\"ui.cardActions || []\"\n  [nzBodyStyle]=\"cardBodyStyle\"\n  [nzBordered]=\"cardBordered || true\"\n  class=\"sf__object-card\"\n>\n  <ng-template [ngTemplateOutlet]=\"default\" [ngTemplateOutletContext]=\"{ $implicit: true }\"></ng-template>\n</nz-card>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return ObjectWidget;
}(ObjectLayoutWidget));
export { ObjectWidget };
if (false) {
    /** @type {?} */
    ObjectWidget.prototype.grid;
    /** @type {?} */
    ObjectWidget.prototype.type;
    /** @type {?} */
    ObjectWidget.prototype.list;
    /** @type {?} */
    ObjectWidget.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2xEO0lBTWtDLGdDQUFrQjtJQU5wRDtRQUFBLHFFQWlDQztRQXpCQyxVQUFJLEdBQTZCLFNBQVMsQ0FBQztRQUMzQyxVQUFJLEdBQWMsRUFBRSxDQUFDOztJQXdCdkIsQ0FBQzs7OztJQXJCQywrQkFBUTs7O0lBQVI7O1FBQ1EsSUFBQSxTQUEyQixFQUF6Qiw4QkFBWSxFQUFFLFVBQVc7UUFDekIsSUFBQSxjQUFJLEVBQUUsd0JBQVMsRUFBRSxjQUFJO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFKLElBQUksY0FBSixJQUFJLEdBQUksU0FBUyxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sWUFBWSxhQUFhLENBQUMsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDN0gsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBQSxJQUFJLEVBQWdCLENBQUM7O1lBQzNCLElBQUksR0FBYyxFQUFFOztZQUMxQixLQUFrQixJQUFBLEtBQUEsU0FBQSxZQUFZLENBQUMsWUFBWSxDQUFBLGdCQUFBLDRCQUFFO2dCQUF4QyxJQUFNLEdBQUcsV0FBQTs7b0JBQ04sUUFBUSxHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFVBQVUsRUFBbUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFnQjs7b0JBQzVGLElBQUksR0FBRztvQkFDWCxRQUFRLFVBQUE7b0JBQ1IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNwQyxjQUFjLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjO29CQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIscWlEQUFtQztvQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOztJQTRCRCxtQkFBQztDQUFBLEFBakNELENBTWtDLGtCQUFrQixHQTJCbkQ7U0EzQlksWUFBWTs7O0lBQ3ZCLDRCQUFtQjs7SUFDbkIsNEJBQTJDOztJQUMzQyw0QkFBcUI7O0lBQ3JCLDZCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTRkdyaWRTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGT2JqZWN0V2lkZ2V0UmVuZGVyVHlwZSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29iamVjdC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncmlkOiBTRkdyaWRTY2hlbWE7XG4gIHR5cGU6IFNGT2JqZWN0V2lkZ2V0UmVuZGVyVHlwZSA9ICdkZWZhdWx0JztcbiAgbGlzdDogQXJyYXk8e30+ID0gW107XG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBmb3JtUHJvcGVydHksIHVpIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ3JpZCwgc2hvd1RpdGxlLCB0eXBlIH0gPSB1aTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlID8/ICdkZWZhdWx0JztcbiAgICBpZiAodGhpcy50eXBlID09PSAnY2FyZCcgfHwgKCFmb3JtUHJvcGVydHkuaXNSb290KCkgJiYgIShmb3JtUHJvcGVydHkucGFyZW50IGluc3RhbmNlb2YgQXJyYXlQcm9wZXJ0eSkgJiYgc2hvd1RpdGxlID09PSB0cnVlKSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuc2NoZW1hLnRpdGxlIGFzIHN0cmluZztcbiAgICB9XG4gICAgdGhpcy5ncmlkID0gZ3JpZCBhcyBTRkdyaWRTY2hlbWE7XG4gICAgY29uc3QgbGlzdDogQXJyYXk8e30+ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSAoZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSlba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCBncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2UsXG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG59XG4iXX0=