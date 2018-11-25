/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd';
import { ControlWidget } from '../../widget';
import { getData, toBool } from '../../utils';
var UploadWidget = /** @class */ (function (_super) {
    tslib_1.__extends(UploadWidget, _super);
    function UploadWidget(cd, modalSrv) {
        var _this = _super.call(this, cd) || this;
        _this.modalSrv = modalSrv;
        _this.fileList = [];
        _this.btnType = '';
        _this.handlePreview = function (file) {
            _this.modalSrv
                .create({
                nzContent: "<img src=\"" + (file.url ||
                    file.thumbUrl) + "\" class=\"img-fluid\" />",
                nzFooter: null,
            })
                .afterClose.subscribe(function () { return _this.detectChanges(); });
        };
        return _this;
    }
    /**
     * @return {?}
     */
    UploadWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.i = {
            type: this.ui.type || 'select',
            text: this.ui["text"] || '点击上传',
            action: this.ui["action"] || '',
            accept: this.ui["accept"] || '',
            limit: this.ui["limit"] == null ? 0 : +this.ui["limit"],
            size: this.ui["fileSize"] == null ? 0 : +this.ui["fileSize"],
            fileType: this.ui["fileType"] || '',
            listType: this.ui["listType"] || 'text',
            multiple: toBool(this.ui["multiple"], false),
            name: this.ui["name"] || 'file',
            showUploadList: toBool(this.ui["showUploadList"], true),
            withCredentials: toBool(this.ui["withCredentials"], false),
            resReName: (this.ui["resReName"] || '').split('.'),
        };
        if (this.i.listType === 'picture-card')
            this.btnType = 'plus';
        if (this.i.type === 'drag') {
            this.i.listType = null;
            this.btnType = 'drag';
            this.i.text = this.ui["text"] || "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8BE5\u533A\u57DF\u4E0A\u4F20";
            this.i.hint =
                this.ui["hint"] || "\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6";
        }
    };
    /**
     * @param {?} args
     * @return {?}
     */
    UploadWidget.prototype.change = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (this.ui["change"])
            this.ui["change"](args);
        if (args.type !== 'success')
            return;
        this.notify(args.fileList);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UploadWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
            _this.fileList = /** @type {?} */ (list);
            _this.notify(_this.fileList);
            _this.detectChanges();
        });
    };
    /**
     * @param {?} fileList
     * @return {?}
     */
    UploadWidget.prototype.notify = /**
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        var _this = this;
        /** @type {?} */
        var res = fileList.map(function (item) {
            return deepGet(item.response, _this.i.resReName, item.response);
        });
        this.formProperty.setValue(this.i.multiple === true ? res : res.pop(), false);
    };
    UploadWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-upload',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-upload\n      [nzType]=\"i.type\"\n      [nzFileList]=\"fileList\"\n      [nzDisabled]=\"disabled\"\n      [nzAction]=\"i.action\"\n      [nzAccept]=\"i.accept\"\n      [nzLimit]=\"i.limit\"\n      [nzSize]=\"i.size\"\n      [nzFileType]=\"i.fileType\"\n      [nzHeaders]=\"ui.headers\"\n      [nzData]=\"ui.data\"\n      [nzListType]=\"i.listType\"\n      [nzMultiple]=\"i.multiple\"\n      [nzName]=\"i.name\"\n      [nzShowUploadList]=\"i.showUploadList\"\n      [nzWithCredentials]=\"i.withCredentials\"\n      [nzRemove]=\"ui.remove\"\n      [nzPreview]=\"handlePreview\"\n      (nzChange)=\"change($event)\">\n      <ng-container [ngSwitch]=\"btnType\">\n        <ng-container *ngSwitchCase=\"'plus'\">\n          <i nz-icon type=\"plus\"></i>\n          <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'drag'\">\n          <p class=\"ant-upload-drag-icon\"><i nz-icon type=\"inbox\"></i></p>\n          <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n          <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n          <button type=\"button\" nz-button>\n            <i nz-icon type=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n          </button>\n        </ng-container>\n      </ng-container>\n    </nz-upload>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    UploadWidget.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzModalService }
    ]; };
    return UploadWidget;
}(ControlWidget));
export { UploadWidget };
if (false) {
    /** @type {?} */
    UploadWidget.prototype.i;
    /** @type {?} */
    UploadWidget.prototype.fileList;
    /** @type {?} */
    UploadWidget.prototype.btnType;
    /** @type {?} */
    UploadWidget.prototype.handlePreview;
    /** @type {?} */
    UploadWidget.prototype.modalSrv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFpQyxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFnRFosd0NBQWE7SUFLN0Msc0JBQVksRUFBcUIsRUFBVSxRQUF3QjtRQUFuRSxZQUNFLGtCQUFNLEVBQUUsQ0FBQyxTQUNWO1FBRjBDLGNBQVEsR0FBUixRQUFRLENBQWdCO3lCQUgxQyxFQUFFO3dCQUNqQixFQUFFOzhCQTBESSxVQUFDLElBQWdCO1lBQy9CLEtBQUksQ0FBQyxRQUFRO2lCQUNWLE1BQU0sQ0FBQztnQkFDTixTQUFTLEVBQUUsaUJBQWEsSUFBSSxDQUFDLEdBQUc7b0JBQzlCLElBQUksQ0FBQyxRQUFRLCtCQUF3QjtnQkFDdkMsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDO2lCQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1NBQ3JEOztLQTlEQTs7OztJQUVELCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksUUFBUTtZQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsWUFBUyxNQUFNO1lBQzVCLE1BQU0sRUFBRSxJ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QUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFDMUMsS0FBSyxDQUNOLENBQUM7OztnQkF4R0wsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsNmhEQXlDVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFuRDJCLGlCQUFpQjtnQkFFTCxjQUFjOzt1QkFGdEQ7RUFvRGtDLGFBQWE7U0FBbEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFVwbG9hZEZpbGUsIFVwbG9hZENoYW5nZVBhcmFtLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXVwbG9hZCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdXBsb2FkXG4gICAgICBbbnpUeXBlXT1cImkudHlwZVwiXG4gICAgICBbbnpGaWxlTGlzdF09XCJmaWxlTGlzdFwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpBY3Rpb25dPVwiaS5hY3Rpb25cIlxuICAgICAgW256QWNjZXB0XT1cImkuYWNjZXB0XCJcbiAgICAgIFtuekxpbWl0XT1cImkubGltaXRcIlxuICAgICAgW256U2l6ZV09XCJpLnNpemVcIlxuICAgICAgW256RmlsZVR5cGVdPVwiaS5maWxlVHlwZVwiXG4gICAgICBbbnpIZWFkZXJzXT1cInVpLmhlYWRlcnNcIlxuICAgICAgW256RGF0YV09XCJ1aS5kYXRhXCJcbiAgICAgIFtuekxpc3RUeXBlXT1cImkubGlzdFR5cGVcIlxuICAgICAgW256TXVsdGlwbGVdPVwiaS5tdWx0aXBsZVwiXG4gICAgICBbbnpOYW1lXT1cImkubmFtZVwiXG4gICAgICBbbnpTaG93VXBsb2FkTGlzdF09XCJpLnNob3dVcGxvYWRMaXN0XCJcbiAgICAgIFtueldpdGhDcmVkZW50aWFsc109XCJpLndpdGhDcmVkZW50aWFsc1wiXG4gICAgICBbbnpSZW1vdmVdPVwidWkucmVtb3ZlXCJcbiAgICAgIFtuelByZXZpZXddPVwiaGFuZGxlUHJldmlld1wiXG4gICAgICAobnpDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImJ0blR5cGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3BsdXMnXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwicGx1c1wiPjwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkcmFnJ1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj48aSBuei1pY29uIHR5cGU9XCJpbmJveFwiPjwvaT48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtaGludFwiIFtpbm5lckhUTUxdPVwiaS5oaW50XCI+PC9wPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG56LWJ1dHRvbj5cbiAgICAgICAgICAgIDxpIG56LWljb24gdHlwZT1cInVwbG9hZFwiPjwvaT48c3BhbiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXVwbG9hZD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcbiAgYnRuVHlwZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBtb2RhbFNydjogTnpNb2RhbFNlcnZpY2UpIHtcbiAgICBzdXBlcihjZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0eXBlOiB0aGlzLnVpLnR5cGUgfHwgJ3NlbGVjdCcsXG4gICAgICB0ZXh0OiB0aGlzLnVpLnRleHQgfHwgJ+eCueWHu+S4iuS8oCcsXG4gICAgICBhY3Rpb246IHRoaXMudWkuYWN0aW9uIHx8ICcnLFxuICAgICAgYWNjZXB0OiB0aGlzLnVpLmFjY2VwdCB8fCAnJyxcbiAgICAgIGxpbWl0OiB0aGlzLnVpLmxpbWl0ID09IG51bGwgPyAwIDogK3RoaXMudWkubGltaXQsXG4gICAgICBzaXplOiB0aGlzLnVpLmZpbGVTaXplID09IG51bGwgPyAwIDogK3RoaXMudWkuZmlsZVNpemUsXG4gICAgICBmaWxlVHlwZTogdGhpcy51aS5maWxlVHlwZSB8fCAnJyxcbiAgICAgIGxpc3RUeXBlOiB0aGlzLnVpLmxpc3RUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodGhpcy51aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgbmFtZTogdGhpcy51aS5uYW1lIHx8ICdmaWxlJyxcbiAgICAgIHNob3dVcGxvYWRMaXN0OiB0b0Jvb2wodGhpcy51aS5zaG93VXBsb2FkTGlzdCwgdHJ1ZSksXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRvQm9vbCh0aGlzLnVpLndpdGhDcmVkZW50aWFscywgZmFsc2UpLFxuICAgICAgcmVzUmVOYW1lOiAodGhpcy51aS5yZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgfTtcbiAgICBpZiAodGhpcy5pLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykgdGhpcy5idG5UeXBlID0gJ3BsdXMnO1xuICAgIGlmICh0aGlzLmkudHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLmkubGlzdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xuICAgICAgdGhpcy5pLnRleHQgPSB0aGlzLnVpLnRleHQgfHwgYOWNleWHu+aIluaLluWKqOaWh+S7tuWIsOivpeWMuuWfn+S4iuS8oGA7XG4gICAgICB0aGlzLmkuaGludCA9XG4gICAgICAgIHRoaXMudWkuaGludCB8fCBg5pSv5oyB5Y2V5Liq5oiW5om56YeP77yM5Lil56aB5LiK5Lyg5YWs5Y+45pWw5o2u5oiW5YW25LuW5a6J5YWo5paH5Lu2YDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UoYXJnczogVXBsb2FkQ2hhbmdlUGFyYW0pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGFyZ3MpO1xuICAgIGlmIChhcmdzLnR5cGUgIT09ICdzdWNjZXNzJykgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KGFyZ3MuZmlsZUxpc3QpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5maWxlTGlzdCA9IGxpc3QgYXMgVXBsb2FkRmlsZVtdO1xuICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmZpbGVMaXN0KTtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeShmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSB7XG4gICAgY29uc3QgcmVzID0gZmlsZUxpc3QubWFwKGl0ZW0gPT5cbiAgICAgIGRlZXBHZXQoaXRlbS5yZXNwb25zZSwgdGhpcy5pLnJlc1JlTmFtZSwgaXRlbS5yZXNwb25zZSksXG4gICAgKTtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuaS5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHJlcyA6IHJlcy5wb3AoKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH1cblxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICB0aGlzLm1vZGFsU3J2XG4gICAgICAuY3JlYXRlKHtcbiAgICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke2ZpbGUudXJsIHx8XG4gICAgICAgICAgZmlsZS50aHVtYlVybH1cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+YCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICB9KVxuICAgICAgLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfTtcbn1cbiJdfQ==