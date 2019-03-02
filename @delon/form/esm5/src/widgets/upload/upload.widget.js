/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var UploadWidget = /** @class */ (function (_super) {
    tslib_1.__extends(UploadWidget, _super);
    function UploadWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fileList = [];
        _this.btnType = '';
        _this.handlePreview = (/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            if (_this.ui.preview) {
                _this.ui.preview(file);
                return;
            }
            /** @type {?} */
            var _url = file.thumbUrl || file.url;
            if (!_url) {
                return;
            }
            _this.injector
                .get(NzModalService)
                .create({
                nzContent: "<img src=\"" + _url + "\" class=\"img-fluid\" />",
                nzFooter: null,
            });
        });
        return _this;
    }
    /**
     * @return {?}
     */
    UploadWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this.ui, type = _a.type, text = _a.text, action = _a.action, accept = _a.accept, limit = _a.limit, filter = _a.filter, fileSize = _a.fileSize, fileType = _a.fileType, listType = _a.listType, multiple = _a.multiple, name = _a.name, showUploadList = _a.showUploadList, withCredentials = _a.withCredentials, resReName = _a.resReName, urlReName = _a.urlReName, beforeUpload = _a.beforeUpload, customRequest = _a.customRequest, directory = _a.directory, openFileDialogOnClick = _a.openFileDialogOnClick;
        this.i = {
            type: type || 'select',
            text: text || '点击上传',
            action: action || '',
            accept: accept || '',
            directory: toBool(directory, false),
            openFileDialogOnClick: toBool(openFileDialogOnClick, true),
            limit: limit == null ? 0 : +limit,
            filter: filter == null ? [] : filter,
            size: fileSize == null ? 0 : +fileSize,
            fileType: fileType || '',
            listType: listType || 'text',
            multiple: toBool(multiple, false),
            name: name || 'file',
            showUploadList: toBool(showUploadList, true),
            withCredentials: toBool(withCredentials, false),
            resReName: (resReName || '').split('.'),
            urlReName: (urlReName || '').split('.'),
            beforeUpload: typeof beforeUpload === 'function' ? beforeUpload : null,
            customRequest: typeof customRequest === 'function' ? customRequest : null,
        };
        if (this.i.listType === 'picture-card') {
            this.btnType = 'plus';
        }
        if (this.i.type === 'drag') {
            this.i.listType = null;
            this.btnType = 'drag';
            this.i.text = this.ui.text || "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8BE5\u533A\u57DF\u4E0A\u4F20";
            this.i.hint = this.ui.hint || "\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6";
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
        this._setValue(args.fileList);
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
        var fileList = this.ui.fileList;
        (fileList ? of(fileList) : getData(this.schema, this.ui, this.formProperty.formData)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.fileList = (/** @type {?} */ (list));
            _this._setValue(_this.fileList);
            _this.detectChanges();
        }));
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    UploadWidget.prototype._getValue = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return deepGet(file.response, this.i.resReName, file.response);
    };
    /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    UploadWidget.prototype._setValue = /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        var _this = this;
        fileList.filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return !file.url; })).forEach((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            file.url = deepGet(file.response, _this.i.urlReName);
        }));
        /** @type {?} */
        var res = fileList.map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return _this._getValue(file); }));
        this.setValue(this.i.multiple === true ? res : res.pop());
    };
    UploadWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-upload',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-upload [nzType]=\"i.type\"\n             [nzFileList]=\"fileList\"\n             [nzDisabled]=\"disabled\"\n             [nzAction]=\"i.action\"\n             [nzDirectory]=\"i.directory\"\n             [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n             [nzAccept]=\"i.accept\"\n             [nzLimit]=\"i.limit\"\n             [nzFilter]=\"i.filter\"\n             [nzSize]=\"i.size\"\n             [nzFileType]=\"i.fileType\"\n             [nzHeaders]=\"ui.headers\"\n             [nzData]=\"ui.data\"\n             [nzListType]=\"i.listType\"\n             [nzMultiple]=\"i.multiple\"\n             [nzName]=\"i.name\"\n             [nzShowUploadList]=\"i.showUploadList\"\n             [nzWithCredentials]=\"i.withCredentials\"\n             [nzBeforeUpload]=\"i.beforeUpload\"\n             [nzCustomRequest]=\"i.customRequest\"\n             [nzRemove]=\"ui.remove\"\n             [nzPreview]=\"handlePreview\"\n             (nzChange)=\"change($event)\">\n    <ng-container [ngSwitch]=\"btnType\">\n      <ng-container *ngSwitchCase=\"'plus'\">\n        <i nz-icon\n           type=\"plus\"></i>\n        <div class=\"ant-upload-text\"\n             [innerHTML]=\"i.text\"></div>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'drag'\">\n        <p class=\"ant-upload-drag-icon\"><i nz-icon\n             type=\"inbox\"></i></p>\n        <p class=\"ant-upload-text\"\n           [innerHTML]=\"i.text\"></p>\n        <p class=\"ant-upload-hint\"\n           [innerHTML]=\"i.hint\"></p>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button type=\"button\"\n                nz-button>\n          <i nz-icon\n             type=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </nz-upload>\n</sf-item-wrap>\n"
                }] }
    ];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGNBQWMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBSWtDLHdDQUFhO0lBSi9DO1FBQUEscUVBNEdDO1FBdEdDLGNBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFxRmIsbUJBQWE7Ozs7UUFBRyxVQUFDLElBQWdCO1lBQy9CLElBQUksS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixPQUFPO2FBQ1I7O2dCQUNLLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHO1lBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBUTthQUNUO1lBQ0QsS0FBSSxDQUFDLFFBQVE7aUJBQ1YsR0FBRyxDQUFDLGNBQWMsQ0FBQztpQkFDbkIsTUFBTSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxnQkFBYSxJQUFJLDhCQUF3QjtnQkFDcEQsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUE7O0lBQ0gsQ0FBQzs7OztJQW5HQywrQkFBUTs7O0lBQVI7UUFDUSxJQUFBLFlBb0JLLEVBbkJULGNBQUksRUFDSixjQUFJLEVBQ0osa0JBQU0sRUFDTixrQkFBTSxFQUNOLGdCQUFLLEVBQ0wsa0JBQU0sRUFDTixzQkFBUSxFQUNSLHNCQUFRLEVBQ1Isc0JBQVEsRUFDUixzQkFBUSxFQUNSLGNBQUksRUFDSixrQ0FBYyxFQUNkLG9DQUFlLEVBQ2Ysd0JBQVMsRUFDVCx3QkFBUyxFQUNULDhCQUFZLEVBQ1osZ0NBQWEsRUFDYix3QkFBUyxFQUNULGdEQUNTO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLElBQUksRUFBRSxJQUFJLElBQUksUUFBUTtZQUN0QixJQUFJLEVBQUUsSUFBSSxJQUFJLE1BQU07WUFDcEIsTUFBTSxFQUFFLE1BQU0sSUFBSSxFQUFFO1lBQ3BCLE1BQU0sRUFBRSxNQUFNLElBQUksRUFBRTtZQUNwQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDbkMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQztZQUMxRCxLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDakMsTUFBTSxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUNwQyxJQUFJLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7WUFDdEMsUUFBUSxFQUFFLFFBQVEsSUFBSSxFQUFFO1lBQ3hCLFFBQVEsRUFBRSxRQUFRLElBQUksTUFBTTtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDakMsSUFBSSxFQUFFLElBQUksSUFBSSxNQUFNO1lBQ3BCLGNBQWMsRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztZQUM1QyxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7WUFDL0MsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDdkMsWUFBWSxFQUFFLE9BQU8sWUFBWSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3RFLGFBQWEsRUFBRSxPQUFPLGFBQWEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUMxRSxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksZ0ZBQWUsQ0FBQztZQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSw0SUFBeUIsQ0FBQztTQUN6RDtJQUNILENBQUM7Ozs7O0lBRUQsNkJBQU07Ozs7SUFBTixVQUFPLElBQXVCO1FBQzVCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBRSxPQUFPO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLEtBQWM7UUFBcEIsaUJBU0M7UUFSUyxJQUFBLDJCQUFRO1FBQ2hCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDN0YsVUFBQSxJQUFJO1lBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxJQUFJLEVBQWdCLENBQUM7WUFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sZ0NBQVM7Ozs7O0lBQWpCLFVBQWtCLElBQWdCO1FBQ2hDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVPLGdDQUFTOzs7OztJQUFqQixVQUFrQixRQUFzQjtRQUF4QyxpQkFNQztRQUxDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQVQsQ0FBUyxFQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsSUFBSTtZQUM3QyxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFDLENBQUM7O1lBQ0csR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQixDQUFvQixFQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQTFGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDZnRUFBbUM7aUJBQ3BDOztJQXlHRCxtQkFBQztDQUFBLEFBNUdELENBSWtDLGFBQWEsR0F3RzlDO1NBeEdZLFlBQVk7OztJQUN2Qix5QkFBTzs7SUFDUCxnQ0FBNEI7O0lBQzVCLCtCQUFhOztJQXFGYixxQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UsIFVwbG9hZENoYW5nZVBhcmFtLCBVcGxvYWRGaWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwbG9hZC53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcbiAgYnRuVHlwZSA9ICcnO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICB0ZXh0LFxuICAgICAgYWN0aW9uLFxuICAgICAgYWNjZXB0LFxuICAgICAgbGltaXQsXG4gICAgICBmaWx0ZXIsXG4gICAgICBmaWxlU2l6ZSxcbiAgICAgIGZpbGVUeXBlLFxuICAgICAgbGlzdFR5cGUsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG5hbWUsXG4gICAgICBzaG93VXBsb2FkTGlzdCxcbiAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgIHJlc1JlTmFtZSxcbiAgICAgIHVybFJlTmFtZSxcbiAgICAgIGJlZm9yZVVwbG9hZCxcbiAgICAgIGN1c3RvbVJlcXVlc3QsXG4gICAgICBkaXJlY3RvcnksXG4gICAgICBvcGVuRmlsZURpYWxvZ09uQ2xpY2ssXG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdHlwZTogdHlwZSB8fCAnc2VsZWN0JyxcbiAgICAgIHRleHQ6IHRleHQgfHwgJ+eCueWHu+S4iuS8oCcsXG4gICAgICBhY3Rpb246IGFjdGlvbiB8fCAnJyxcbiAgICAgIGFjY2VwdDogYWNjZXB0IHx8ICcnLFxuICAgICAgZGlyZWN0b3J5OiB0b0Jvb2woZGlyZWN0b3J5LCBmYWxzZSksXG4gICAgICBvcGVuRmlsZURpYWxvZ09uQ2xpY2s6IHRvQm9vbChvcGVuRmlsZURpYWxvZ09uQ2xpY2ssIHRydWUpLFxuICAgICAgbGltaXQ6IGxpbWl0ID09IG51bGwgPyAwIDogK2xpbWl0LFxuICAgICAgZmlsdGVyOiBmaWx0ZXIgPT0gbnVsbCA/IFtdIDogZmlsdGVyLFxuICAgICAgc2l6ZTogZmlsZVNpemUgPT0gbnVsbCA/IDAgOiArZmlsZVNpemUsXG4gICAgICBmaWxlVHlwZTogZmlsZVR5cGUgfHwgJycsXG4gICAgICBsaXN0VHlwZTogbGlzdFR5cGUgfHwgJ3RleHQnLFxuICAgICAgbXVsdGlwbGU6IHRvQm9vbChtdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgbmFtZTogbmFtZSB8fCAnZmlsZScsXG4gICAgICBzaG93VXBsb2FkTGlzdDogdG9Cb29sKHNob3dVcGxvYWRMaXN0LCB0cnVlKSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdG9Cb29sKHdpdGhDcmVkZW50aWFscywgZmFsc2UpLFxuICAgICAgcmVzUmVOYW1lOiAocmVzUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgICAgdXJsUmVOYW1lOiAodXJsUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgICAgYmVmb3JlVXBsb2FkOiB0eXBlb2YgYmVmb3JlVXBsb2FkID09PSAnZnVuY3Rpb24nID8gYmVmb3JlVXBsb2FkIDogbnVsbCxcbiAgICAgIGN1c3RvbVJlcXVlc3Q6IHR5cGVvZiBjdXN0b21SZXF1ZXN0ID09PSAnZnVuY3Rpb24nID8gY3VzdG9tUmVxdWVzdCA6IG51bGwsXG4gICAgfTtcbiAgICBpZiAodGhpcy5pLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykge1xuICAgICAgdGhpcy5idG5UeXBlID0gJ3BsdXMnO1xuICAgIH1cbiAgICBpZiAodGhpcy5pLnR5cGUgPT09ICdkcmFnJykge1xuICAgICAgdGhpcy5pLmxpc3RUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcbiAgICAgIHRoaXMuaS50ZXh0ID0gdGhpcy51aS50ZXh0IHx8IGDljZXlh7vmiJbmi5bliqjmlofku7bliLDor6XljLrln5/kuIrkvKBgO1xuICAgICAgdGhpcy5pLmhpbnQgPSB0aGlzLnVpLmhpbnQgfHwgYOaUr+aMgeWNleS4quaIluaJuemHj++8jOS4peemgeS4iuS8oOWFrOWPuOaVsOaNruaIluWFtuS7luWuieWFqOaWh+S7tmA7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShhcmdzKTtcbiAgICBpZiAoYXJncy50eXBlICE9PSAnc3VjY2VzcycpIHJldHVybjtcbiAgICB0aGlzLl9zZXRWYWx1ZShhcmdzLmZpbGVMaXN0KTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgY29uc3QgeyBmaWxlTGlzdCB9ID0gdGhpcy51aTtcbiAgICAoZmlsZUxpc3QgPyBvZihmaWxlTGlzdCkgOiBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmZpbGVMaXN0ID0gbGlzdCBhcyBVcGxvYWRGaWxlW107XG4gICAgICAgIHRoaXMuX3NldFZhbHVlKHRoaXMuZmlsZUxpc3QpO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFZhbHVlKGZpbGU6IFVwbG9hZEZpbGUpIHtcbiAgICByZXR1cm4gZGVlcEdldChmaWxlLnJlc3BvbnNlLCB0aGlzLmkucmVzUmVOYW1lLCBmaWxlLnJlc3BvbnNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFZhbHVlKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pIHtcbiAgICBmaWxlTGlzdC5maWx0ZXIoZmlsZSA9PiAhZmlsZS51cmwpLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBmaWxlLnVybCA9IGRlZXBHZXQoZmlsZS5yZXNwb25zZSwgdGhpcy5pLnVybFJlTmFtZSk7XG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0gZmlsZUxpc3QubWFwKGZpbGUgPT4gdGhpcy5fZ2V0VmFsdWUoZmlsZSkpO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pLm11bHRpcGxlID09PSB0cnVlID8gcmVzIDogcmVzLnBvcCgpKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpZXcgPSAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xuICAgIGlmICh0aGlzLnVpLnByZXZpZXcpIHtcbiAgICAgIHRoaXMudWkucHJldmlldyhmaWxlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgX3VybCA9IGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmw7XG4gICAgaWYgKCFfdXJsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB0aGlzLmluamVjdG9yXG4gICAgICAuZ2V0KE56TW9kYWxTZXJ2aWNlKVxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIG56Q29udGVudDogYDxpbWcgc3JjPVwiJHtfdXJsfVwiIGNsYXNzPVwiaW1nLWZsdWlkXCIgLz5gLFxuICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=