import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, toBool, getData, DelonFormModule } from '@delon/form';
import * as i5 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i4 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i3 from 'ng-zorro-antd/upload';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { of } from 'rxjs';
import { deepGet } from '@delon/util/other';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as i6 from 'ng-zorro-antd/core/transition-patch';
import * as i7 from 'ng-zorro-antd/core/wave';

class UploadWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.fileList = [];
        this.btnType = '';
        this.handleRemove = () => {
            this._setValue(this.fileList);
            return true;
        };
        this.handlePreview = (file) => {
            if (this.ui.preview) {
                this.ui.preview(file);
                return;
            }
            const _url = file.thumbUrl || file.url;
            if (!_url) {
                return;
            }
            this.injector.get(NzModalService).create({
                nzContent: `<img src="${_url}" class="img-fluid" />`,
                nzFooter: null
            });
        };
    }
    static { this.KEY = 'upload'; }
    ngOnInit() {
        const { type, text, hint, action, accept, limit, filter, fileSize, fileType, listType, multiple, name, showUploadList, withCredentials, resReName, urlReName, beforeUpload, customRequest, directory, openFileDialogOnClick, limitFileCount } = this.ui;
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
            limitFileCount: limitFileCount || 999
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
    change(args) {
        if (this.ui.change)
            this.ui.change(args);
        if (args.type !== 'success')
            return;
        this._setValue(args.fileList);
    }
    reset(value) {
        const { fileList } = this.ui;
        (fileList ? of(fileList) : Array.isArray(value) ? of(value) : getData(this.schema, this.ui, null)).subscribe(list => {
            this.fileList = list;
            this.formProperty._value = this.pureValue(list);
            this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: false });
            this.detectChanges();
        });
    }
    _getValue(file) {
        return deepGet(file.response, this.i.resReName, file.response);
    }
    pureValue(fileList) {
        fileList
            .filter(file => !file.url)
            .forEach(file => {
            file.url = deepGet(file.response, this.i.urlReName);
        });
        const res = fileList.filter(w => w.status === 'done').map(file => this._getValue(file));
        return this.i.multiple === true ? res : res.pop();
    }
    _setValue(fileList) {
        this.setValue(this.pureValue(fileList));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: UploadWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: UploadWidget, selector: "sf-upload", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-upload
      [nzType]="i.type"
      [(nzFileList)]="fileList"
      [nzDisabled]="disabled"
      [nzAction]="i.action"
      [nzDirectory]="i.directory"
      [nzOpenFileDialogOnClick]="i.openFileDialogOnClick"
      [nzAccept]="i.accept"
      [nzLimit]="i.limit"
      [nzFilter]="i.filter"
      [nzSize]="i.size"
      [nzFileType]="i.fileType"
      [nzHeaders]="ui.headers"
      [nzData]="ui.data"
      [nzListType]="i.listType"
      [nzMultiple]="i.multiple"
      [nzName]="i.name"
      [nzShowUploadList]="i.showUploadList"
      [nzWithCredentials]="i.withCredentials"
      [nzBeforeUpload]="i.beforeUpload"
      [nzCustomRequest]="i.customRequest"
      [nzRemove]="ui.remove || handleRemove"
      [nzPreview]="handlePreview"
      [nzPreviewFile]="ui.previewFile"
      [nzDownload]="ui.download"
      [nzTransformFile]="ui.transformFile"
      (nzChange)="change($event)"
      [nzShowButton]="fileList.length < i.limitFileCount"
    >
      <ng-container [ngSwitch]="btnType">
        <ng-container *ngSwitchCase="'plus'">
          <i nz-icon nzType="plus"></i>
          <div class="ant-upload-text" [innerHTML]="i.text"></div>
        </ng-container>
        <ng-container *ngSwitchCase="'drag'">
          <p class="ant-upload-drag-icon"><i nz-icon nzType="inbox"></i></p>
          <p class="ant-upload-text" [innerHTML]="i.text"></p>
          <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
        </ng-container>
        <ng-container *ngSwitchDefault>
          <button type="button" nz-button><i nz-icon nzType="upload"></i><span [innerHTML]="i.text"></span></button>
        </ng-container>
      </ng-container>
    </nz-upload>
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.NzUploadComponent, selector: "nz-upload", inputs: ["nzType", "nzLimit", "nzSize", "nzFileType", "nzAccept", "nzAction", "nzDirectory", "nzOpenFileDialogOnClick", "nzBeforeUpload", "nzCustomRequest", "nzData", "nzFilter", "nzFileList", "nzDisabled", "nzHeaders", "nzListType", "nzMultiple", "nzName", "nzShowUploadList", "nzShowButton", "nzWithCredentials", "nzRemove", "nzPreview", "nzPreviewFile", "nzPreviewIsImage", "nzTransformFile", "nzDownload", "nzIconRender", "nzFileListRender"], outputs: ["nzChange", "nzFileListChange"], exportAs: ["nzUpload"] }, { kind: "directive", type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i5.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i6.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i7.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: UploadWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-upload',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-upload
      [nzType]="i.type"
      [(nzFileList)]="fileList"
      [nzDisabled]="disabled"
      [nzAction]="i.action"
      [nzDirectory]="i.directory"
      [nzOpenFileDialogOnClick]="i.openFileDialogOnClick"
      [nzAccept]="i.accept"
      [nzLimit]="i.limit"
      [nzFilter]="i.filter"
      [nzSize]="i.size"
      [nzFileType]="i.fileType"
      [nzHeaders]="ui.headers"
      [nzData]="ui.data"
      [nzListType]="i.listType"
      [nzMultiple]="i.multiple"
      [nzName]="i.name"
      [nzShowUploadList]="i.showUploadList"
      [nzWithCredentials]="i.withCredentials"
      [nzBeforeUpload]="i.beforeUpload"
      [nzCustomRequest]="i.customRequest"
      [nzRemove]="ui.remove || handleRemove"
      [nzPreview]="handlePreview"
      [nzPreviewFile]="ui.previewFile"
      [nzDownload]="ui.download"
      [nzTransformFile]="ui.transformFile"
      (nzChange)="change($event)"
      [nzShowButton]="fileList.length < i.limitFileCount"
    >
      <ng-container [ngSwitch]="btnType">
        <ng-container *ngSwitchCase="'plus'">
          <i nz-icon nzType="plus"></i>
          <div class="ant-upload-text" [innerHTML]="i.text"></div>
        </ng-container>
        <ng-container *ngSwitchCase="'drag'">
          <p class="ant-upload-drag-icon"><i nz-icon nzType="inbox"></i></p>
          <p class="ant-upload-text" [innerHTML]="i.text"></p>
          <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
        </ng-container>
        <ng-container *ngSwitchDefault>
          <button type="button" nz-button><i nz-icon nzType="upload"></i><span [innerHTML]="i.text"></span></button>
        </ng-container>
      </ng-container>
    </nz-upload>
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });

class UploadWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(UploadWidget.KEY, UploadWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: UploadWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: UploadWidgetModule, declarations: [UploadWidget], imports: [FormsModule, CommonModule, DelonFormModule, NzUploadModule, NzIconModule, NzButtonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: UploadWidgetModule, imports: [FormsModule, CommonModule, DelonFormModule, NzUploadModule, NzIconModule, NzButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: UploadWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, CommonModule, DelonFormModule, NzUploadModule, NzIconModule, NzButtonModule],
                    declarations: [UploadWidget]
                }]
        }], ctorParameters: () => [{ type: i1$1.WidgetRegistry }] });

/**
 * Generated bundle index. Do not edit.
 */

export { UploadWidget, UploadWidgetModule };
//# sourceMappingURL=widgets-upload.mjs.map
