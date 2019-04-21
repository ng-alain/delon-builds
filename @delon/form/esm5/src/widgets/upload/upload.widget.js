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
        _this.handleRemove = (/**
         * @return {?}
         */
        function () {
            _this._setValue(_this.fileList);
            return true;
        });
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
            _this.injector.get(NzModalService).create({
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
        fileList
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return !file.url; }))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            file.url = deepGet(file.response, _this.i.urlReName);
        }));
        /** @type {?} */
        var res = fileList.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.status === 'done'; })).map((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return _this._getValue(file); }));
        this.setValue(this.i.multiple === true ? res : res.pop());
    };
    UploadWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-upload',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-upload [nzType]=\"i.type\"\n             [(nzFileList)]=\"fileList\"\n             [nzDisabled]=\"disabled\"\n             [nzAction]=\"i.action\"\n             [nzDirectory]=\"i.directory\"\n             [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n             [nzAccept]=\"i.accept\"\n             [nzLimit]=\"i.limit\"\n             [nzFilter]=\"i.filter\"\n             [nzSize]=\"i.size\"\n             [nzFileType]=\"i.fileType\"\n             [nzHeaders]=\"ui.headers\"\n             [nzData]=\"ui.data\"\n             [nzListType]=\"i.listType\"\n             [nzMultiple]=\"i.multiple\"\n             [nzName]=\"i.name\"\n             [nzShowUploadList]=\"i.showUploadList\"\n             [nzWithCredentials]=\"i.withCredentials\"\n             [nzBeforeUpload]=\"i.beforeUpload\"\n             [nzCustomRequest]=\"i.customRequest\"\n             [nzRemove]=\"ui.remove || handleRemove\"\n             [nzPreview]=\"handlePreview\"\n             (nzChange)=\"change($event)\">\n    <ng-container [ngSwitch]=\"btnType\">\n      <ng-container *ngSwitchCase=\"'plus'\">\n        <i nz-icon\n           type=\"plus\"></i>\n        <div class=\"ant-upload-text\"\n             [innerHTML]=\"i.text\"></div>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'drag'\">\n        <p class=\"ant-upload-drag-icon\"><i nz-icon\n             type=\"inbox\"></i></p>\n        <p class=\"ant-upload-text\"\n           [innerHTML]=\"i.text\"></p>\n        <p class=\"ant-upload-hint\"\n           [innerHTML]=\"i.hint\"></p>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button type=\"button\"\n                nz-button>\n          <i nz-icon\n             type=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </nz-upload>\n</sf-item-wrap>\n"
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
    UploadWidget.prototype.handleRemove;
    /** @type {?} */
    UploadWidget.prototype.handlePreview;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGNBQWMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBSWtDLHdDQUFhO0lBSi9DO1FBQUEscUVBK0dDO1FBekdDLGNBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFxRmIsa0JBQVk7OztRQUFHO1lBQ2IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUM7UUFFRixtQkFBYTs7OztRQUFHLFVBQUMsSUFBZ0I7WUFDL0IsSUFBSSxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87YUFDUjs7Z0JBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUc7WUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFPO2FBQ1I7WUFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZD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LENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFDLENBQUM7O1lBQ0MsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBbkIsQ0FBbUIsRUFBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBCLENBQW9CLEVBQUM7UUFDdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBMUZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsK2hFQUFtQztpQkFDcEM7O0lBNEdELG1CQUFDO0NBQUEsQUEvR0QsQ0FJa0MsYUFBYSxHQTJHOUM7U0EzR1ksWUFBWTs7O0lBQ3ZCLHlCQUFPOztJQUNQLGdDQUE0Qjs7SUFDNUIsK0JBQWE7O0lBcUZiLG9DQUdFOztJQUVGLHFDQWFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSwgVXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZEZpbGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xuICBidG5UeXBlID0gJyc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIHRleHQsXG4gICAgICBhY3Rpb24sXG4gICAgICBhY2NlcHQsXG4gICAgICBsaW1pdCxcbiAgICAgIGZpbHRlcixcbiAgICAgIGZpbGVTaXplLFxuICAgICAgZmlsZVR5cGUsXG4gICAgICBsaXN0VHlwZSxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgbmFtZSxcbiAgICAgIHNob3dVcGxvYWRMaXN0LFxuICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgcmVzUmVOYW1lLFxuICAgICAgdXJsUmVOYW1lLFxuICAgICAgYmVmb3JlVXBsb2FkLFxuICAgICAgY3VzdG9tUmVxdWVzdCxcbiAgICAgIGRpcmVjdG9yeSxcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljayxcbiAgICB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0eXBlOiB0eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGV4dCB8fCAn54K55Ye75LiK5LygJyxcbiAgICAgIGFjdGlvbjogYWN0aW9uIHx8ICcnLFxuICAgICAgYWNjZXB0OiBhY2NlcHQgfHwgJycsXG4gICAgICBkaXJlY3Rvcnk6IHRvQm9vbChkaXJlY3RvcnksIGZhbHNlKSxcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljazogdG9Cb29sKG9wZW5GaWxlRGlhbG9nT25DbGljaywgdHJ1ZSksXG4gICAgICBsaW1pdDogbGltaXQgPT0gbnVsbCA/IDAgOiArbGltaXQsXG4gICAgICBmaWx0ZXI6IGZpbHRlciA9PSBudWxsID8gW10gOiBmaWx0ZXIsXG4gICAgICBzaXplOiBmaWxlU2l6ZSA9PSBudWxsID8gMCA6ICtmaWxlU2l6ZSxcbiAgICAgIGZpbGVUeXBlOiBmaWxlVHlwZSB8fCAnJyxcbiAgICAgIGxpc3RUeXBlOiBsaXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKG11bHRpcGxlLCBmYWxzZSksXG4gICAgICBuYW1lOiBuYW1lIHx8ICdmaWxlJyxcbiAgICAgIHNob3dVcGxvYWRMaXN0OiB0b0Jvb2woc2hvd1VwbG9hZExpc3QsIHRydWUpLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wod2l0aENyZWRlbnRpYWxzLCBmYWxzZSksXG4gICAgICByZXNSZU5hbWU6IChyZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgICB1cmxSZU5hbWU6ICh1cmxSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgICBiZWZvcmVVcGxvYWQ6IHR5cGVvZiBiZWZvcmVVcGxvYWQgPT09ICdmdW5jdGlvbicgPyBiZWZvcmVVcGxvYWQgOiBudWxsLFxuICAgICAgY3VzdG9tUmVxdWVzdDogdHlwZW9mIGN1c3RvbVJlcXVlc3QgPT09ICdmdW5jdGlvbicgPyBjdXN0b21SZXF1ZXN0IDogbnVsbCxcbiAgICB9O1xuICAgIGlmICh0aGlzLmkubGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICB0aGlzLmJ0blR5cGUgPSAncGx1cyc7XG4gICAgfVxuICAgIGlmICh0aGlzLmkudHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLmkubGlzdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xuICAgICAgdGhpcy5pLnRleHQgPSB0aGlzLnVpLnRleHQgfHwgYOWNleWHu+aIluaLluWKqOaWh+S7tuWIsOivpeWMuuWfn+S4iuS8oGA7XG4gICAgICB0aGlzLmkuaGludCA9IHRoaXMudWkuaGludCB8fCBg5pSv5oyB5Y2V5Liq5oiW5om56YeP77yM5Lil56aB5LiK5Lyg5YWs5Y+45pWw5o2u5oiW5YW25LuW5a6J5YWo5paH5Lu2YDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UoYXJnczogVXBsb2FkQ2hhbmdlUGFyYW0pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGFyZ3MpO1xuICAgIGlmIChhcmdzLnR5cGUgIT09ICdzdWNjZXNzJykgcmV0dXJuO1xuICAgIHRoaXMuX3NldFZhbHVlKGFyZ3MuZmlsZUxpc3QpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBjb25zdCB7IGZpbGVMaXN0IH0gPSB0aGlzLnVpO1xuICAgIChmaWxlTGlzdCA/IG9mKGZpbGVMaXN0KSA6IGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5maWxlTGlzdCA9IGxpc3QgYXMgVXBsb2FkRmlsZVtdO1xuICAgICAgdGhpcy5fc2V0VmFsdWUodGhpcy5maWxlTGlzdCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFZhbHVlKGZpbGU6IFVwbG9hZEZpbGUpIHtcbiAgICByZXR1cm4gZGVlcEdldChmaWxlLnJlc3BvbnNlLCB0aGlzLmkucmVzUmVOYW1lLCBmaWxlLnJlc3BvbnNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFZhbHVlKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pIHtcbiAgICBmaWxlTGlzdFxuICAgICAgLmZpbHRlcihmaWxlID0+ICFmaWxlLnVybClcbiAgICAgIC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBmaWxlLnVybCA9IGRlZXBHZXQoZmlsZS5yZXNwb25zZSwgdGhpcy5pLnVybFJlTmFtZSk7XG4gICAgICB9KTtcbiAgICBjb25zdCByZXMgPSBmaWxlTGlzdC5maWx0ZXIodyA9PiB3LnN0YXR1cyA9PT0gJ2RvbmUnKS5tYXAoZmlsZSA9PiB0aGlzLl9nZXRWYWx1ZShmaWxlKSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCkpO1xuICB9XG5cbiAgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgIHRoaXMuX3NldFZhbHVlKHRoaXMuZmlsZUxpc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGhhbmRsZVByZXZpZXcgPSAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xuICAgIGlmICh0aGlzLnVpLnByZXZpZXcpIHtcbiAgICAgIHRoaXMudWkucHJldmlldyhmaWxlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgX3VybCA9IGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmw7XG4gICAgaWYgKCFfdXJsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5qZWN0b3IuZ2V0KE56TW9kYWxTZXJ2aWNlKS5jcmVhdGUoe1xuICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke191cmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICBuekZvb3RlcjogbnVsbCxcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==