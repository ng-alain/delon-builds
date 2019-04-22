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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGNBQWMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBSWtDLHdDQUFhO0lBSi9DO1FBQUEscUVBaUhDO1FBM0dDLGNBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFxRmIsa0JBQVk7OztRQUFHO1lBQ2IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUE7UUFFRCxtQkFBYTs7OztRQUFHLFVBQUMsSUFBZ0I7WUFDL0IsSUFBSSxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87YUFDUjs7Z0JBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUc7WUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFRO2FBQ1Q7WUFDRCxLQUFJLENBQUMsUUFBUTtpQkFDVixHQUFHLENBQUMsY0FBYyxDQUFDO2lCQUNuQixNQUFNLENBQUM7Z0JB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QUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQzs7WUFDRyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFuQixDQUFtQixFQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsRUFBQztRQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkExRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwraEVBQW1DO2lCQUNwQzs7SUE4R0QsbUJBQUM7Q0FBQSxBQWpIRCxDQUlrQyxhQUFhLEdBNkc5QztTQTdHWSxZQUFZOzs7SUFDdkIseUJBQU87O0lBQ1AsZ0NBQTRCOztJQUM1QiwrQkFBYTs7SUFxRmIsb0NBR0M7O0lBRUQscUNBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlLCBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkRmlsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQud2lkZ2V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XG4gIGJ0blR5cGUgPSAnJztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgdGV4dCxcbiAgICAgIGFjdGlvbixcbiAgICAgIGFjY2VwdCxcbiAgICAgIGxpbWl0LFxuICAgICAgZmlsdGVyLFxuICAgICAgZmlsZVNpemUsXG4gICAgICBmaWxlVHlwZSxcbiAgICAgIGxpc3RUeXBlLFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBuYW1lLFxuICAgICAgc2hvd1VwbG9hZExpc3QsXG4gICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICByZXNSZU5hbWUsXG4gICAgICB1cmxSZU5hbWUsXG4gICAgICBiZWZvcmVVcGxvYWQsXG4gICAgICBjdXN0b21SZXF1ZXN0LFxuICAgICAgZGlyZWN0b3J5LFxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrLFxuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHR5cGU6IHR5cGUgfHwgJ3NlbGVjdCcsXG4gICAgICB0ZXh0OiB0ZXh0IHx8ICfngrnlh7vkuIrkvKAnLFxuICAgICAgYWN0aW9uOiBhY3Rpb24gfHwgJycsXG4gICAgICBhY2NlcHQ6IGFjY2VwdCB8fCAnJyxcbiAgICAgIGRpcmVjdG9yeTogdG9Cb29sKGRpcmVjdG9yeSwgZmFsc2UpLFxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrOiB0b0Jvb2wob3BlbkZpbGVEaWFsb2dPbkNsaWNrLCB0cnVlKSxcbiAgICAgIGxpbWl0OiBsaW1pdCA9PSBudWxsID8gMCA6ICtsaW1pdCxcbiAgICAgIGZpbHRlcjogZmlsdGVyID09IG51bGwgPyBbXSA6IGZpbHRlcixcbiAgICAgIHNpemU6IGZpbGVTaXplID09IG51bGwgPyAwIDogK2ZpbGVTaXplLFxuICAgICAgZmlsZVR5cGU6IGZpbGVUeXBlIHx8ICcnLFxuICAgICAgbGlzdFR5cGU6IGxpc3RUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wobXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIG5hbWU6IG5hbWUgfHwgJ2ZpbGUnLFxuICAgICAgc2hvd1VwbG9hZExpc3Q6IHRvQm9vbChzaG93VXBsb2FkTGlzdCwgdHJ1ZSksXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRvQm9vbCh3aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcbiAgICAgIHJlc1JlTmFtZTogKHJlc1JlTmFtZSB8fCAnJykuc3BsaXQoJy4nKSxcbiAgICAgIHVybFJlTmFtZTogKHVybFJlTmFtZSB8fCAnJykuc3BsaXQoJy4nKSxcbiAgICAgIGJlZm9yZVVwbG9hZDogdHlwZW9mIGJlZm9yZVVwbG9hZCA9PT0gJ2Z1bmN0aW9uJyA/IGJlZm9yZVVwbG9hZCA6IG51bGwsXG4gICAgICBjdXN0b21SZXF1ZXN0OiB0eXBlb2YgY3VzdG9tUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbVJlcXVlc3QgOiBudWxsLFxuICAgIH07XG4gICAgaWYgKHRoaXMuaS5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdwbHVzJztcbiAgICB9XG4gICAgaWYgKHRoaXMuaS50eXBlID09PSAnZHJhZycpIHtcbiAgICAgIHRoaXMuaS5saXN0VHlwZSA9IG51bGw7XG4gICAgICB0aGlzLmJ0blR5cGUgPSAnZHJhZyc7XG4gICAgICB0aGlzLmkudGV4dCA9IHRoaXMudWkudGV4dCB8fCBg5Y2V5Ye75oiW5ouW5Yqo5paH5Lu25Yiw6K+l5Yy65Z+f5LiK5LygYDtcbiAgICAgIHRoaXMuaS5oaW50ID0gdGhpcy51aS5oaW50IHx8IGDmlK/mjIHljZXkuKrmiJbmibnph4/vvIzkuKXnpoHkuIrkvKDlhazlj7jmlbDmja7miJblhbbku5blronlhajmlofku7ZgO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZShhcmdzOiBVcGxvYWRDaGFuZ2VQYXJhbSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UoYXJncyk7XG4gICAgaWYgKGFyZ3MudHlwZSAhPT0gJ3N1Y2Nlc3MnKSByZXR1cm47XG4gICAgdGhpcy5fc2V0VmFsdWUoYXJncy5maWxlTGlzdCk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGNvbnN0IHsgZmlsZUxpc3QgfSA9IHRoaXMudWk7XG4gICAgKGZpbGVMaXN0ID8gb2YoZmlsZUxpc3QpIDogZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5maWxlTGlzdCA9IGxpc3QgYXMgVXBsb2FkRmlsZVtdO1xuICAgICAgICB0aGlzLl9zZXRWYWx1ZSh0aGlzLmZpbGVMaXN0KTtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRWYWx1ZShmaWxlOiBVcGxvYWRGaWxlKSB7XG4gICAgcmV0dXJuIGRlZXBHZXQoZmlsZS5yZXNwb25zZSwgdGhpcy5pLnJlc1JlTmFtZSwgZmlsZS5yZXNwb25zZSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRWYWx1ZShmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSB7XG4gICAgZmlsZUxpc3QuZmlsdGVyKGZpbGUgPT4gIWZpbGUudXJsKS5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS51cmwgPSBkZWVwR2V0KGZpbGUucmVzcG9uc2UsIHRoaXMuaS51cmxSZU5hbWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0LmZpbHRlcih3ID0+IHcuc3RhdHVzID09PSAnZG9uZScpLm1hcChmaWxlID0+IHRoaXMuX2dldFZhbHVlKGZpbGUpKTtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuaS5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHJlcyA6IHJlcy5wb3AoKSk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5fc2V0VmFsdWUodGhpcy5maWxlTGlzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICBpZiAodGhpcy51aS5wcmV2aWV3KSB7XG4gICAgICB0aGlzLnVpLnByZXZpZXcoZmlsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IF91cmwgPSBmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsO1xuICAgIGlmICghX3VybCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdGhpcy5pbmplY3RvclxuICAgICAgLmdldChOek1vZGFsU2VydmljZSlcbiAgICAgIC5jcmVhdGUoe1xuICAgICAgICBuekNvbnRlbnQ6IGA8aW1nIHNyYz1cIiR7X3VybH1cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+YCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICB9KTtcbiAgfVxufVxuIl19