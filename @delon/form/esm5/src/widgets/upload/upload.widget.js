/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            text: this.ui.text || '点击上传',
            action: this.ui.action || '',
            accept: this.ui.accept || '',
            limit: this.ui.limit == null ? 0 : +this.ui.limit,
            size: this.ui.size == null ? 0 : +this.ui.size,
            fileType: this.ui.fileType || '',
            listType: this.ui.listType || 'text',
            multiple: toBool(this.ui.multiple, false),
            name: this.ui.name || 'file',
            showUploadList: toBool(this.ui.showUploadList, true),
            withCredentials: toBool(this.ui.withCredentials, false),
            resReName: (this.ui.resReName || '').split('.'),
        };
        if (this.i.listType === 'picture-card')
            this.btnType = 'plus';
        if (this.i.type === 'drag') {
            this.i.listType = null;
            this.btnType = 'drag';
            this.i.text = this.ui.text || "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8BE5\u533A\u57DF\u4E0A\u4F20";
            this.i.hint =
                this.ui.hint || "\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6";
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
        if (this.ui.change)
            this.ui.change(args);
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
            _this.fileList = (/** @type {?} */ (list));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFpQyxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU5QztJQThDa0Msd0NBQWE7SUFLN0Msc0JBQVksRUFBcUIsRUFBVSxRQUF3QjtRQUFuRSxZQUNFLGtCQUFNLEVBQUUsQ0FBQyxTQUNWO1FBRjBDLGNBQVEsR0FBUixRQUFRLENBQWdCO1FBSG5FLGNBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUEwRGIsbUJBQWEsR0FBRyxVQUFDLElBQWdCO1lBQy9CLEtBQUksQ0FBQyxRQUFRO2lCQUNWLE1BQU0sQ0FBQztnQkFDTixTQUFTLEVBQUUsaUJBQWEsSUFBSSxDQUFDLEdBQUc7b0JBQzlCLElBQUksQ0FBQyxRQUFRLCtCQUF3QjtnQkFDdkMsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDO2lCQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQzs7SUE5REYsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksUUFB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QXJDLGlCQVFDOztZQVBPLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUMzQixPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFBdkQsQ0FBdUQsQ0FDeEQ7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFDMUMsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOztnQkF6R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsNmhEQXlDVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFuRDJCLGlCQUFpQjtnQkFFTCxjQUFjOztJQXdIdEQsbUJBQUM7Q0FBQSxBQXBIRCxDQThDa0MsYUFBYSxHQXNFOUM7U0F0RVksWUFBWTs7O0lBQ3ZCLHlCQUFPOztJQUNQLGdDQUE0Qjs7SUFDNUIsK0JBQWE7O0lBMERiLHFDQVFFOztJQWhFaUMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkQ2hhbmdlUGFyYW0sIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdXBsb2FkJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei11cGxvYWRcbiAgICAgIFtuelR5cGVdPVwiaS50eXBlXCJcbiAgICAgIFtuekZpbGVMaXN0XT1cImZpbGVMaXN0XCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuekFjdGlvbl09XCJpLmFjdGlvblwiXG4gICAgICBbbnpBY2NlcHRdPVwiaS5hY2NlcHRcIlxuICAgICAgW256TGltaXRdPVwiaS5saW1pdFwiXG4gICAgICBbbnpTaXplXT1cImkuc2l6ZVwiXG4gICAgICBbbnpGaWxlVHlwZV09XCJpLmZpbGVUeXBlXCJcbiAgICAgIFtuekhlYWRlcnNdPVwidWkuaGVhZGVyc1wiXG4gICAgICBbbnpEYXRhXT1cInVpLmRhdGFcIlxuICAgICAgW256TGlzdFR5cGVdPVwiaS5saXN0VHlwZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuek5hbWVdPVwiaS5uYW1lXCJcbiAgICAgIFtuelNob3dVcGxvYWRMaXN0XT1cImkuc2hvd1VwbG9hZExpc3RcIlxuICAgICAgW256V2l0aENyZWRlbnRpYWxzXT1cImkud2l0aENyZWRlbnRpYWxzXCJcbiAgICAgIFtuelJlbW92ZV09XCJ1aS5yZW1vdmVcIlxuICAgICAgW256UHJldmlld109XCJoYW5kbGVQcmV2aWV3XCJcbiAgICAgIChuekNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiYnRuVHlwZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGx1cydcIj5cbiAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJwbHVzXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RyYWcnXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjxpIG56LWljb24gdHlwZT1cImluYm94XCI+PC9pPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1oaW50XCIgW2lubmVySFRNTF09XCJpLmhpbnRcIj48L3A+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uPlxuICAgICAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwidXBsb2FkXCI+PC9pPjxzcGFuIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotdXBsb2FkPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xuICBidG5UeXBlID0gJyc7XG5cbiAgY29uc3RydWN0b3IoY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG1vZGFsU3J2OiBOek1vZGFsU2VydmljZSkge1xuICAgIHN1cGVyKGNkKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHR5cGU6IHRoaXMudWkudHlwZSB8fCAnc2VsZWN0JyxcbiAgICAgIHRleHQ6IHRoaXMudWkudGV4dCB8fCAn54K55Ye75LiK5LygJyxcbiAgICAgIGFjdGlvbjogdGhpcy51aS5hY3Rpb24gfHwgJycsXG4gICAgICBhY2NlcHQ6IHRoaXMudWkuYWNjZXB0IHx8ICcnLFxuICAgICAgbGltaXQ6IHRoaXMudWkubGltaXQgPT0gbnVsbCA/IDAgOiArdGhpcy51aS5saW1pdCxcbiAgICAgIHNpemU6IHRoaXMudWkuc2l6ZSA9PSBudWxsID8gMCA6ICt0aGlzLnVpLnNpemUsXG4gICAgICBmaWxlVHlwZTogdGhpcy51aS5maWxlVHlwZSB8fCAnJyxcbiAgICAgIGxpc3RUeXBlOiB0aGlzLnVpLmxpc3RUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodGhpcy51aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgbmFtZTogdGhpcy51aS5uYW1lIHx8ICdmaWxlJyxcbiAgICAgIHNob3dVcGxvYWRMaXN0OiB0b0Jvb2wodGhpcy51aS5zaG93VXBsb2FkTGlzdCwgdHJ1ZSksXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRvQm9vbCh0aGlzLnVpLndpdGhDcmVkZW50aWFscywgZmFsc2UpLFxuICAgICAgcmVzUmVOYW1lOiAodGhpcy51aS5yZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgfTtcbiAgICBpZiAodGhpcy5pLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykgdGhpcy5idG5UeXBlID0gJ3BsdXMnO1xuICAgIGlmICh0aGlzLmkudHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLmkubGlzdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xuICAgICAgdGhpcy5pLnRleHQgPSB0aGlzLnVpLnRleHQgfHwgYOWNleWHu+aIluaLluWKqOaWh+S7tuWIsOivpeWMuuWfn+S4iuS8oGA7XG4gICAgICB0aGlzLmkuaGludCA9XG4gICAgICAgIHRoaXMudWkuaGludCB8fCBg5pSv5oyB5Y2V5Liq5oiW5om56YeP77yM5Lil56aB5LiK5Lyg5YWs5Y+45pWw5o2u5oiW5YW25LuW5a6J5YWo5paH5Lu2YDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UoYXJnczogVXBsb2FkQ2hhbmdlUGFyYW0pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGFyZ3MpO1xuICAgIGlmIChhcmdzLnR5cGUgIT09ICdzdWNjZXNzJykgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KGFyZ3MuZmlsZUxpc3QpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5maWxlTGlzdCA9IGxpc3QgYXMgVXBsb2FkRmlsZVtdO1xuICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmZpbGVMaXN0KTtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeShmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSB7XG4gICAgY29uc3QgcmVzID0gZmlsZUxpc3QubWFwKGl0ZW0gPT5cbiAgICAgIGRlZXBHZXQoaXRlbS5yZXNwb25zZSwgdGhpcy5pLnJlc1JlTmFtZSwgaXRlbS5yZXNwb25zZSksXG4gICAgKTtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuaS5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHJlcyA6IHJlcy5wb3AoKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH1cblxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICB0aGlzLm1vZGFsU3J2XG4gICAgICAuY3JlYXRlKHtcbiAgICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke2ZpbGUudXJsIHx8XG4gICAgICAgICAgZmlsZS50aHVtYlVybH1cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+YCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICB9KVxuICAgICAgLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfTtcbn1cbiJdfQ==