/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/upload/upload.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd/modal';
import { of } from 'rxjs';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class UploadWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.fileList = [];
        this.btnType = '';
        this.handleRemove = (/**
         * @return {?}
         */
        () => {
            this._setValue(this.fileList);
            return true;
        });
        this.handlePreview = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            if (this.ui.preview) {
                this.ui.preview(file);
                return;
            }
            /** @type {?} */
            const _url = file.thumbUrl || file.url;
            if (!_url) {
                return;
            }
            this.injector.get(NzModalService).create({
                nzContent: `<img src="${_url}" class="img-fluid" />`,
                nzFooter: null,
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { type, text, hint, action, accept, limit, filter, fileSize, fileType, listType, multiple, name, showUploadList, withCredentials, resReName, urlReName, beforeUpload, customRequest, directory, openFileDialogOnClick, limitFileCount, } = this.ui;
        /** @type {?} */
        const res = {
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
            showUploadList: showUploadList == null ? true : showUploadList,
            withCredentials: toBool(withCredentials, false),
            resReName: (resReName || '').split('.'),
            urlReName: (urlReName || '').split('.'),
            beforeUpload: typeof beforeUpload === 'function' ? beforeUpload : null,
            customRequest: typeof customRequest === 'function' ? customRequest : null,
            limitFileCount: limitFileCount || 999,
        };
        if (res.listType === 'picture-card') {
            this.btnType = 'plus';
        }
        if (res.type === 'drag') {
            res.listType = null;
            this.btnType = 'drag';
            res.text = text || `单击或拖动文件到该区域上传`;
            res.hint = hint || `支持单个或批量，严禁上传公司数据或其他安全文件`;
        }
        this.i = res;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    change(args) {
        if (this.ui.change)
            this.ui.change(args);
        if (args.type !== 'success')
            return;
        this._setValue(args.fileList);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        const { fileList } = this.ui;
        (fileList ? of(fileList) : Array.isArray(value) ? of(value) : getData(this.schema, this.ui, null)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.fileList = (/** @type {?} */ (list));
            this.formProperty._value = this.pureValue(list);
            this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: false });
            this.detectChanges();
        }));
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    _getValue(file) {
        return deepGet(file.response, this.i.resReName, file.response);
    }
    /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    pureValue(fileList) {
        fileList
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        file => !file.url))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.url = deepGet(file.response, this.i.urlReName);
        }));
        /** @type {?} */
        const res = fileList.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.status === 'done')).map((/**
         * @param {?} file
         * @return {?}
         */
        file => this._getValue(file)));
        return this.i.multiple === true ? res : res.pop();
    }
    /**
     * @private
     * @param {?} fileList
     * @return {?}
     */
    _setValue(fileList) {
        this.setValue(this.pureValue(fileList));
    }
}
UploadWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-upload',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-upload\n    [nzType]=\"i.type\"\n    [(nzFileList)]=\"fileList\"\n    [nzDisabled]=\"disabled\"\n    [nzAction]=\"i.action\"\n    [nzDirectory]=\"i.directory\"\n    [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n    [nzAccept]=\"i.accept\"\n    [nzLimit]=\"i.limit\"\n    [nzFilter]=\"i.filter\"\n    [nzSize]=\"i.size\"\n    [nzFileType]=\"i.fileType\"\n    [nzHeaders]=\"ui.headers\"\n    [nzData]=\"ui.data\"\n    [nzListType]=\"i.listType\"\n    [nzMultiple]=\"i.multiple\"\n    [nzName]=\"i.name\"\n    [nzShowUploadList]=\"i.showUploadList\"\n    [nzWithCredentials]=\"i.withCredentials\"\n    [nzBeforeUpload]=\"i.beforeUpload\"\n    [nzCustomRequest]=\"i.customRequest\"\n    [nzRemove]=\"ui.remove || handleRemove\"\n    [nzPreview]=\"handlePreview\"\n    [nzPreviewFile]=\"ui.previewFile\"\n    [nzDownload]=\"ui.download\"\n    [nzTransformFile]=\"ui.transformFile\"\n    (nzChange)=\"change($event)\"\n    [nzShowButton]=\"fileList.length < i.limitFileCount\"\n  >\n    <ng-container [ngSwitch]=\"btnType\">\n      <ng-container *ngSwitchCase=\"'plus'\">\n        <i nz-icon nzType=\"plus\"></i>\n        <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'drag'\">\n        <p class=\"ant-upload-drag-icon\"><i nz-icon nzType=\"inbox\"></i></p>\n        <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n        <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button type=\"button\" nz-button><i nz-icon nzType=\"upload\"></i><span [innerHTML]=\"i.text\"></span></button>\n      </ng-container>\n    </ng-container>\n  </nz-upload>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBTnZFOztRQVFFLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUE4RmIsaUJBQVk7OztRQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQztRQUVGLGtCQUFhOzs7O1FBQUcsQ0FBQyxJQUFrQixFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87YUFDUjs7a0JBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUc7WUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcs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O0lBQ2pFLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxRQUF3QjtRQUN4QyxRQUFRO2FBQ0wsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDO2FBQ3pCLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQzs7Y0FDQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFDLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQztRQUN2RixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLFFBQXdCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQXJHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHkxREFBbUM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O0lBRUMseUJBQU87O0lBQ1AsZ0NBQThCOztJQUM5QiwrQkFBYTs7SUE4RmIsb0NBR0U7O0lBRUYscUNBYUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgTnpVcGxvYWRDaGFuZ2VQYXJhbSwgTnpVcGxvYWRGaWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVXBsb2FkV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlVwbG9hZFdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGZpbGVMaXN0OiBOelVwbG9hZEZpbGVbXSA9IFtdO1xuICBidG5UeXBlID0gJyc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIHRleHQsXG4gICAgICBoaW50LFxuICAgICAgYWN0aW9uLFxuICAgICAgYWNjZXB0LFxuICAgICAgbGltaXQsXG4gICAgICBmaWx0ZXIsXG4gICAgICBmaWxlU2l6ZSxcbiAgICAgIGZpbGVUeXBlLFxuICAgICAgbGlzdFR5cGUsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG5hbWUsXG4gICAgICBzaG93VXBsb2FkTGlzdCxcbiAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgIHJlc1JlTmFtZSxcbiAgICAgIHVybFJlTmFtZSxcbiAgICAgIGJlZm9yZVVwbG9hZCxcbiAgICAgIGN1c3RvbVJlcXVlc3QsXG4gICAgICBkaXJlY3RvcnksXG4gICAgICBvcGVuRmlsZURpYWxvZ09uQ2xpY2ssXG4gICAgICBsaW1pdEZpbGVDb3VudCxcbiAgICB9ID0gdGhpcy51aTtcbiAgICBjb25zdCByZXM6IGFueSA9IHtcbiAgICAgIHR5cGU6IHR5cGUgfHwgJ3NlbGVjdCcsXG4gICAgICB0ZXh0OiB0ZXh0IHx8ICfngrnlh7vkuIrkvKAnLFxuICAgICAgYWN0aW9uOiBhY3Rpb24gfHwgJycsXG4gICAgICBhY2NlcHQ6IGFjY2VwdCB8fCAnJyxcbiAgICAgIGRpcmVjdG9yeTogdG9Cb29sKGRpcmVjdG9yeSwgZmFsc2UpLFxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrOiB0b0Jvb2wob3BlbkZpbGVEaWFsb2dPbkNsaWNrLCB0cnVlKSxcbiAgICAgIGxpbWl0OiBsaW1pdCA9PSBudWxsID8gMCA6ICtsaW1pdCxcbiAgICAgIGZpbHRlcjogZmlsdGVyID09IG51bGwgPyBbXSA6IGZpbHRlcixcbiAgICAgIHNpemU6IGZpbGVTaXplID09IG51bGwgPyAwIDogK2ZpbGVTaXplLFxuICAgICAgZmlsZVR5cGU6IGZpbGVUeXBlIHx8ICcnLFxuICAgICAgbGlzdFR5cGU6IGxpc3RUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wobXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIG5hbWU6IG5hbWUgfHwgJ2ZpbGUnLFxuICAgICAgc2hvd1VwbG9hZExpc3Q6IHNob3dVcGxvYWRMaXN0ID09IG51bGwgPyB0cnVlIDogc2hvd1VwbG9hZExpc3QsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRvQm9vbCh3aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcbiAgICAgIHJlc1JlTmFtZTogKHJlc1JlTmFtZSB8fCAnJykuc3BsaXQoJy4nKSxcbiAgICAgIHVybFJlTmFtZTogKHVybFJlTmFtZSB8fCAnJykuc3BsaXQoJy4nKSxcbiAgICAgIGJlZm9yZVVwbG9hZDogdHlwZW9mIGJlZm9yZVVwbG9hZCA9PT0gJ2Z1bmN0aW9uJyA/IGJlZm9yZVVwbG9hZCA6IG51bGwsXG4gICAgICBjdXN0b21SZXF1ZXN0OiB0eXBlb2YgY3VzdG9tUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbVJlcXVlc3QgOiBudWxsLFxuICAgICAgbGltaXRGaWxlQ291bnQ6IGxpbWl0RmlsZUNvdW50IHx8IDk5OSxcbiAgICB9O1xuICAgIGlmIChyZXMubGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICB0aGlzLmJ0blR5cGUgPSAncGx1cyc7XG4gICAgfVxuICAgIGlmIChyZXMudHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICByZXMubGlzdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xuICAgICAgcmVzLnRleHQgPSB0ZXh0IHx8IGDljZXlh7vmiJbmi5bliqjmlofku7bliLDor6XljLrln5/kuIrkvKBgO1xuICAgICAgcmVzLmhpbnQgPSBoaW50IHx8IGDmlK/mjIHljZXkuKrmiJbmibnph4/vvIzkuKXnpoHkuIrkvKDlhazlj7jmlbDmja7miJblhbbku5blronlhajmlofku7ZgO1xuICAgIH1cbiAgICB0aGlzLmkgPSByZXM7XG4gIH1cblxuICBjaGFuZ2UoYXJnczogTnpVcGxvYWRDaGFuZ2VQYXJhbSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UoYXJncyk7XG4gICAgaWYgKGFyZ3MudHlwZSAhPT0gJ3N1Y2Nlc3MnKSByZXR1cm47XG4gICAgdGhpcy5fc2V0VmFsdWUoYXJncy5maWxlTGlzdCk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGNvbnN0IHsgZmlsZUxpc3QgfSA9IHRoaXMudWk7XG4gICAgKGZpbGVMaXN0ID8gb2YoZmlsZUxpc3QpIDogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBvZih2YWx1ZSkgOiBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5maWxlTGlzdCA9IGxpc3QgYXMgTnpVcGxvYWRGaWxlW107XG4gICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5fdmFsdWUgPSB0aGlzLnB1cmVWYWx1ZShsaXN0KTtcbiAgICAgIHRoaXMuZm9ybVByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogZmFsc2UsIGVtaXRWYWx1ZUV2ZW50OiBmYWxzZSwgZW1pdFZhbGlkYXRvcjogZmFsc2UgfSk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFZhbHVlKGZpbGU6IE56VXBsb2FkRmlsZSkge1xuICAgIHJldHVybiBkZWVwR2V0KGZpbGUucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGZpbGUucmVzcG9uc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXJlVmFsdWUoZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdKSB7XG4gICAgZmlsZUxpc3RcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiAhZmlsZS51cmwpXG4gICAgICAuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgZmlsZS51cmwgPSBkZWVwR2V0KGZpbGUucmVzcG9uc2UsIHRoaXMuaS51cmxSZU5hbWUpO1xuICAgICAgfSk7XG4gICAgY29uc3QgcmVzID0gZmlsZUxpc3QuZmlsdGVyKHcgPT4gdy5zdGF0dXMgPT09ICdkb25lJykubWFwKGZpbGUgPT4gdGhpcy5fZ2V0VmFsdWUoZmlsZSkpO1xuICAgIHJldHVybiB0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRWYWx1ZShmaWxlTGlzdDogTnpVcGxvYWRGaWxlW10pIHtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMucHVyZVZhbHVlKGZpbGVMaXN0KSk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5fc2V0VmFsdWUodGhpcy5maWxlTGlzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHtcbiAgICBpZiAodGhpcy51aS5wcmV2aWV3KSB7XG4gICAgICB0aGlzLnVpLnByZXZpZXcoZmlsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IF91cmwgPSBmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsO1xuICAgIGlmICghX3VybCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluamVjdG9yLmdldDxOek1vZGFsU2VydmljZT4oTnpNb2RhbFNlcnZpY2UpLmNyZWF0ZSh7XG4gICAgICBuekNvbnRlbnQ6IGA8aW1nIHNyYz1cIiR7X3VybH1cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+YCxcbiAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgIH0pO1xuICB9O1xufVxuIl19