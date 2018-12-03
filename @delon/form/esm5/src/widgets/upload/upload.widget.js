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
            size: this.ui.fileSize == null ? 0 : +this.ui.fileSize,
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
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-upload\n      [nzType]=\"i.type\"\n      [nzFileList]=\"fileList\"\n      [nzDisabled]=\"disabled\"\n      [nzAction]=\"i.action\"\n      [nzAccept]=\"i.accept\"\n      [nzLimit]=\"i.limit\"\n      [nzSize]=\"i.size\"\n      [nzFileType]=\"i.fileType\"\n      [nzHeaders]=\"ui.headers\"\n      [nzData]=\"ui.data\"\n      [nzListType]=\"i.listType\"\n      [nzMultiple]=\"i.multiple\"\n      [nzName]=\"i.name\"\n      [nzShowUploadList]=\"i.showUploadList\"\n      [nzWithCredentials]=\"i.withCredentials\"\n      [nzRemove]=\"ui.remove\"\n      [nzPreview]=\"handlePreview\"\n      (nzChange)=\"change($event)\">\n      <ng-container [ngSwitch]=\"btnType\">\n        <ng-container *ngSwitchCase=\"'plus'\">\n          <i nz-icon type=\"plus\"></i>\n          <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'drag'\">\n          <p class=\"ant-upload-drag-icon\"><i nz-icon type=\"inbox\"></i></p>\n          <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n          <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n          <button type=\"button\" nz-button>\n            <i nz-icon type=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n          </button>\n        </ng-container>\n      </ng-container>\n    </nz-upload>\n\n  </sf-item-wrap>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFpQyxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU5QztJQTZDa0Msd0NBQWE7SUFLN0Msc0JBQVksRUFBcUIsRUFBVSxRQUF3QjtRQUFuRSxZQUNFLGtCQUFNLEVBQUUsQ0FBQyxTQUNWO1FBRjBDLGNBQVEsR0FBUixRQUFRLENBQWdCO1FBSG5FLGNBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUEwRGIsbUJBQWEsR0FBRyxVQUFDLElBQWdCO1lBQy9CLEtBQUksQ0FBQyxRQUFRO2lCQUNWLE1BQU0sQ0FBQztnQkFDTixTQUFTLEVBQUUsaUJBQWEsSUFBSSxDQUFDLEdBQUc7b0JBQzlCLElBQUksQ0FBQyxRQUFRLCtCQUF3QjtnQkFDdkMsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDO2lCQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQzs7SUE5REYsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksUUFB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QXJDLGlCQVFDOztZQVBPLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUMzQixPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFBdkQsQ0FBdUQsQ0FDeEQ7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFDMUMsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOztnQkF4R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsNmhEQXlDVDtpQkFDRjs7OztnQkFsRDJCLGlCQUFpQjtnQkFFTCxjQUFjOztJQXVIdEQsbUJBQUM7Q0FBQSxBQW5IRCxDQTZDa0MsYUFBYSxHQXNFOUM7U0F0RVksWUFBWTs7O0lBQ3ZCLHlCQUFPOztJQUNQLGdDQUE0Qjs7SUFDNUIsK0JBQWE7O0lBMERiLHFDQVFFOztJQWhFaUMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkQ2hhbmdlUGFyYW0sIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdXBsb2FkJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei11cGxvYWRcbiAgICAgIFtuelR5cGVdPVwiaS50eXBlXCJcbiAgICAgIFtuekZpbGVMaXN0XT1cImZpbGVMaXN0XCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuekFjdGlvbl09XCJpLmFjdGlvblwiXG4gICAgICBbbnpBY2NlcHRdPVwiaS5hY2NlcHRcIlxuICAgICAgW256TGltaXRdPVwiaS5saW1pdFwiXG4gICAgICBbbnpTaXplXT1cImkuc2l6ZVwiXG4gICAgICBbbnpGaWxlVHlwZV09XCJpLmZpbGVUeXBlXCJcbiAgICAgIFtuekhlYWRlcnNdPVwidWkuaGVhZGVyc1wiXG4gICAgICBbbnpEYXRhXT1cInVpLmRhdGFcIlxuICAgICAgW256TGlzdFR5cGVdPVwiaS5saXN0VHlwZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuek5hbWVdPVwiaS5uYW1lXCJcbiAgICAgIFtuelNob3dVcGxvYWRMaXN0XT1cImkuc2hvd1VwbG9hZExpc3RcIlxuICAgICAgW256V2l0aENyZWRlbnRpYWxzXT1cImkud2l0aENyZWRlbnRpYWxzXCJcbiAgICAgIFtuelJlbW92ZV09XCJ1aS5yZW1vdmVcIlxuICAgICAgW256UHJldmlld109XCJoYW5kbGVQcmV2aWV3XCJcbiAgICAgIChuekNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiYnRuVHlwZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGx1cydcIj5cbiAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJwbHVzXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RyYWcnXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjxpIG56LWljb24gdHlwZT1cImluYm94XCI+PC9pPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1oaW50XCIgW2lubmVySFRNTF09XCJpLmhpbnRcIj48L3A+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uPlxuICAgICAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwidXBsb2FkXCI+PC9pPjxzcGFuIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotdXBsb2FkPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XG4gIGJ0blR5cGUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbW9kYWxTcnY6IE56TW9kYWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2QpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdHlwZTogdGhpcy51aS50eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGhpcy51aS50ZXh0IHx8ICfngrnlh7vkuIrkvKAnLFxuICAgICAgYWN0aW9uOiB0aGlzLnVpLmFjdGlvbiB8fCAnJyxcbiAgICAgIGFjY2VwdDogdGhpcy51aS5hY2NlcHQgfHwgJycsXG4gICAgICBsaW1pdDogdGhpcy51aS5saW1pdCA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmxpbWl0LFxuICAgICAgc2l6ZTogdGhpcy51aS5maWxlU2l6ZSA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmZpbGVTaXplLFxuICAgICAgZmlsZVR5cGU6IHRoaXMudWkuZmlsZVR5cGUgfHwgJycsXG4gICAgICBsaXN0VHlwZTogdGhpcy51aS5saXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHRoaXMudWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIG5hbWU6IHRoaXMudWkubmFtZSB8fCAnZmlsZScsXG4gICAgICBzaG93VXBsb2FkTGlzdDogdG9Cb29sKHRoaXMudWkuc2hvd1VwbG9hZExpc3QsIHRydWUpLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wodGhpcy51aS53aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcbiAgICAgIHJlc1JlTmFtZTogKHRoaXMudWkucmVzUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgIH07XG4gICAgaWYgKHRoaXMuaS5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHRoaXMuYnRuVHlwZSA9ICdwbHVzJztcbiAgICBpZiAodGhpcy5pLnR5cGUgPT09ICdkcmFnJykge1xuICAgICAgdGhpcy5pLmxpc3RUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcbiAgICAgIHRoaXMuaS50ZXh0ID0gdGhpcy51aS50ZXh0IHx8IGDljZXlh7vmiJbmi5bliqjmlofku7bliLDor6XljLrln5/kuIrkvKBgO1xuICAgICAgdGhpcy5pLmhpbnQgPVxuICAgICAgICB0aGlzLnVpLmhpbnQgfHwgYOaUr+aMgeWNleS4quaIluaJuemHj++8jOS4peemgeS4iuS8oOWFrOWPuOaVsOaNruaIluWFtuS7luWuieWFqOaWh+S7tmA7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShhcmdzKTtcbiAgICBpZiAoYXJncy50eXBlICE9PSAnc3VjY2VzcycpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeShhcmdzLmZpbGVMaXN0KTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIFVwbG9hZEZpbGVbXTtcbiAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5maWxlTGlzdCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkge1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0Lm1hcChpdGVtID0+XG4gICAgICBkZWVwR2V0KGl0ZW0ucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGl0ZW0ucmVzcG9uc2UpLFxuICAgICk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXG4gICAgICB0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgdGhpcy5tb2RhbFNydlxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIG56Q29udGVudDogYDxpbWcgc3JjPVwiJHtmaWxlLnVybCB8fFxuICAgICAgICAgIGZpbGUudGh1bWJVcmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgfSlcbiAgICAgIC5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gIH07XG59XG4iXX0=