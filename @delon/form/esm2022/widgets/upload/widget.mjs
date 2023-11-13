import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ControlUIWidget, DelonFormModule, getData, toBool } from '@delon/form';
import { deepGet } from '@delon/util/other';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
import * as i2 from "ng-zorro-antd/upload";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/core/wave";
export class UploadWidget extends ControlUIWidget {
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
            this.injector.get(NzImageService, null)?.preview([{ src: _url }]);
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: UploadWidget, isStandalone: true, selector: "sf-upload", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
      @switch (btnType) { @case ('plus') {
      <i nz-icon nzType="plus"></i>
      <div class="ant-upload-text" [innerHTML]="i.text"></div>
      } @case ('drag') {
      <p class="ant-upload-drag-icon"><i nz-icon nzType="inbox"></i></p>
      <p class="ant-upload-text" [innerHTML]="i.text"></p>
      <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
      } @default {
      <button type="button" nz-button><i nz-icon nzType="upload"></i><span [innerHTML]="i.text"></span></button>
      } }
    </nz-upload>
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzUploadModule }, { kind: "component", type: i2.NzUploadComponent, selector: "nz-upload", inputs: ["nzType", "nzLimit", "nzSize", "nzFileType", "nzAccept", "nzAction", "nzDirectory", "nzOpenFileDialogOnClick", "nzBeforeUpload", "nzCustomRequest", "nzData", "nzFilter", "nzFileList", "nzDisabled", "nzHeaders", "nzListType", "nzMultiple", "nzName", "nzShowUploadList", "nzShowButton", "nzWithCredentials", "nzRemove", "nzPreview", "nzPreviewFile", "nzPreviewIsImage", "nzTransformFile", "nzDownload", "nzIconRender", "nzFileListRender"], outputs: ["nzChange", "nzFileListChange"], exportAs: ["nzUpload"] }, { kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: NzButtonModule }, { kind: "component", type: i4.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i5.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i6.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }], encapsulation: i0.ViewEncapsulation.None }); }
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
      @switch (btnType) { @case ('plus') {
      <i nz-icon nzType="plus"></i>
      <div class="ant-upload-text" [innerHTML]="i.text"></div>
      } @case ('drag') {
      <p class="ant-upload-drag-icon"><i nz-icon nzType="inbox"></i></p>
      <p class="ant-upload-text" [innerHTML]="i.text"></p>
      <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
      } @default {
      <button type="button" nz-button><i nz-icon nzType="upload"></i><span [innerHTML]="i.text"></span></button>
      } }
    </nz-upload>
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzUploadModule, NzIconModule, NzButtonModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3VwbG9hZC93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBVyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQXFDLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7OztBQTREekYsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQXhEdkU7O1FBNERFLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFnR2IsaUJBQVksR0FBRyxHQUFZLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFRixrQkFBYSxHQUFHLENBQUMsSUFBa0IsRUFBUSxFQUFFO1lBQzNDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUks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QWUseUxBQUUsY0FBYywwbUJBQUUsWUFBWSxpTkFBRSxjQUFjOzsyRkFFekUsWUFBWTtrQkF4RHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWdETTtvQkFDaEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2lCQUN0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQsIERlbG9uRm9ybU1vZHVsZSwgU0ZWYWx1ZSwgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW1hZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbWFnZSc7XG5pbXBvcnQgeyBOelVwbG9hZENoYW5nZVBhcmFtLCBOelVwbG9hZEZpbGUsIE56VXBsb2FkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xuXG5pbXBvcnQgdHlwZSB7IFNGVXBsb2FkV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuei11cGxvYWRcbiAgICAgIFtuelR5cGVdPVwiaS50eXBlXCJcbiAgICAgIFsobnpGaWxlTGlzdCldPVwiZmlsZUxpc3RcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256QWN0aW9uXT1cImkuYWN0aW9uXCJcbiAgICAgIFtuekRpcmVjdG9yeV09XCJpLmRpcmVjdG9yeVwiXG4gICAgICBbbnpPcGVuRmlsZURpYWxvZ09uQ2xpY2tdPVwiaS5vcGVuRmlsZURpYWxvZ09uQ2xpY2tcIlxuICAgICAgW256QWNjZXB0XT1cImkuYWNjZXB0XCJcbiAgICAgIFtuekxpbWl0XT1cImkubGltaXRcIlxuICAgICAgW256RmlsdGVyXT1cImkuZmlsdGVyXCJcbiAgICAgIFtuelNpemVdPVwiaS5zaXplXCJcbiAgICAgIFtuekZpbGVUeXBlXT1cImkuZmlsZVR5cGVcIlxuICAgICAgW256SGVhZGVyc109XCJ1aS5oZWFkZXJzXCJcbiAgICAgIFtuekRhdGFdPVwidWkuZGF0YVwiXG4gICAgICBbbnpMaXN0VHlwZV09XCJpLmxpc3RUeXBlXCJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgW256TmFtZV09XCJpLm5hbWVcIlxuICAgICAgW256U2hvd1VwbG9hZExpc3RdPVwiaS5zaG93VXBsb2FkTGlzdFwiXG4gICAgICBbbnpXaXRoQ3JlZGVudGlhbHNdPVwiaS53aXRoQ3JlZGVudGlhbHNcIlxuICAgICAgW256QmVmb3JlVXBsb2FkXT1cImkuYmVmb3JlVXBsb2FkXCJcbiAgICAgIFtuekN1c3RvbVJlcXVlc3RdPVwiaS5jdXN0b21SZXF1ZXN0XCJcbiAgICAgIFtuelJlbW92ZV09XCJ1aS5yZW1vdmUgfHwgaGFuZGxlUmVtb3ZlXCJcbiAgICAgIFtuelByZXZpZXddPVwiaGFuZGxlUHJldmlld1wiXG4gICAgICBbbnpQcmV2aWV3RmlsZV09XCJ1aS5wcmV2aWV3RmlsZVwiXG4gICAgICBbbnpEb3dubG9hZF09XCJ1aS5kb3dubG9hZFwiXG4gICAgICBbbnpUcmFuc2Zvcm1GaWxlXT1cInVpLnRyYW5zZm9ybUZpbGVcIlxuICAgICAgKG56Q2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuelNob3dCdXR0b25dPVwiZmlsZUxpc3QubGVuZ3RoIDwgaS5saW1pdEZpbGVDb3VudFwiXG4gICAgPlxuICAgICAgQHN3aXRjaCAoYnRuVHlwZSkgeyBAY2FzZSAoJ3BsdXMnKSB7XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cInBsdXNcIj48L2k+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L2Rpdj5cbiAgICAgIH0gQGNhc2UgKCdkcmFnJykge1xuICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjxpIG56LWljb24gbnpUeXBlPVwiaW5ib3hcIj48L2k+PC9wPlxuICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvcD5cbiAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1oaW50XCIgW2lubmVySFRNTF09XCJpLmhpbnRcIj48L3A+XG4gICAgICB9IEBkZWZhdWx0IHtcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG56LWJ1dHRvbj48aSBuei1pY29uIG56VHlwZT1cInVwbG9hZFwiPjwvaT48c3BhbiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgIH0gfVxuICAgIDwvbnotdXBsb2FkPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56VXBsb2FkTW9kdWxlLCBOekljb25Nb2R1bGUsIE56QnV0dG9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZVcGxvYWRXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5IEtFWSA9ICd1cGxvYWQnO1xuXG4gIGk6IE56U2FmZUFueTtcbiAgZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdID0gW107XG4gIGJ0blR5cGUgPSAnJztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgdGV4dCxcbiAgICAgIGhpbnQsXG4gICAgICBhY3Rpb24sXG4gICAgICBhY2NlcHQsXG4gICAgICBsaW1pdCxcbiAgICAgIGZpbHRlcixcbiAgICAgIGZpbGVTaXplLFxuICAgICAgZmlsZVR5cGUsXG4gICAgICBsaXN0VHlwZSxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgbmFtZSxcbiAgICAgIHNob3dVcGxvYWRMaXN0LFxuICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgcmVzUmVOYW1lLFxuICAgICAgdXJsUmVOYW1lLFxuICAgICAgYmVmb3JlVXBsb2FkLFxuICAgICAgY3VzdG9tUmVxdWVzdCxcbiAgICAgIGRpcmVjdG9yeSxcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljayxcbiAgICAgIGxpbWl0RmlsZUNvdW50XG4gICAgfSA9IHRoaXMudWk7XG4gICAgY29uc3QgcmVzOiBOelNhZmVBbnkgPSB7XG4gICAgICB0eXBlOiB0eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGV4dCB8fCAn54K55Ye75LiK5LygJyxcbiAgICAgIGFjdGlvbjogYWN0aW9uIHx8ICcnLFxuICAgICAgYWNjZXB0OiBhY2NlcHQgfHwgJycsXG4gICAgICBkaXJlY3Rvcnk6IHRvQm9vbChkaXJlY3RvcnksIGZhbHNlKSxcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljazogdG9Cb29sKG9wZW5GaWxlRGlhbG9nT25DbGljaywgdHJ1ZSksXG4gICAgICBsaW1pdDogbGltaXQgPT0gbnVsbCA/IDAgOiArbGltaXQsXG4gICAgICBmaWx0ZXI6IGZpbHRlciA9PSBudWxsID8gW10gOiBmaWx0ZXIsXG4gICAgICBzaXplOiBmaWxlU2l6ZSA9PSBudWxsID8gMCA6ICtmaWxlU2l6ZSxcbiAgICAgIGZpbGVUeXBlOiBmaWxlVHlwZSB8fCAnJyxcbiAgICAgIGxpc3RUeXBlOiBsaXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKG11bHRpcGxlLCBmYWxzZSksXG4gICAgICBuYW1lOiBuYW1lIHx8ICdmaWxlJyxcbiAgICAgIHNob3dVcGxvYWRMaXN0OiBzaG93VXBsb2FkTGlzdCA9PSBudWxsID8gdHJ1ZSA6IHNob3dVcGxvYWRMaXN0LFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wod2l0aENyZWRlbnRpYWxzLCBmYWxzZSksXG4gICAgICByZXNSZU5hbWU6IChyZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgICB1cmxSZU5hbWU6ICh1cmxSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgICBiZWZvcmVVcGxvYWQ6IHR5cGVvZiBiZWZvcmVVcGxvYWQgPT09ICdmdW5jdGlvbicgPyBiZWZvcmVVcGxvYWQgOiBudWxsLFxuICAgICAgY3VzdG9tUmVxdWVzdDogdHlwZW9mIGN1c3RvbVJlcXVlc3QgPT09ICdmdW5jdGlvbicgPyBjdXN0b21SZXF1ZXN0IDogbnVsbCxcbiAgICAgIGxpbWl0RmlsZUNvdW50OiBsaW1pdEZpbGVDb3VudCB8fCA5OTlcbiAgICB9O1xuICAgIGlmIChyZXMubGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICB0aGlzLmJ0blR5cGUgPSAncGx1cyc7XG4gICAgfVxuICAgIGlmIChyZXMudHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICByZXMubGlzdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xuICAgICAgcmVzLnRleHQgPSB0ZXh0IHx8IGDljZXlh7vmiJbmi5bliqjmlofku7bliLDor6XljLrln5/kuIrkvKBgO1xuICAgICAgcmVzLmhpbnQgPSBoaW50IHx8IGDmlK/mjIHljZXkuKrmiJbmibnph4/vvIzkuKXnpoHkuIrkvKDlhazlj7jmlbDmja7miJblhbbku5blronlhajmlofku7ZgO1xuICAgIH1cbiAgICB0aGlzLmkgPSByZXM7XG4gIH1cblxuICBjaGFuZ2UoYXJnczogTnpVcGxvYWRDaGFuZ2VQYXJhbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UoYXJncyk7XG4gICAgaWYgKGFyZ3MudHlwZSAhPT0gJ3N1Y2Nlc3MnKSByZXR1cm47XG4gICAgdGhpcy5fc2V0VmFsdWUoYXJncy5maWxlTGlzdCk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgZmlsZUxpc3QgfSA9IHRoaXMudWk7XG4gICAgKGZpbGVMaXN0ID8gb2YoZmlsZUxpc3QpIDogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBvZih2YWx1ZSkgOiBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIE56VXBsb2FkRmlsZVtdO1xuICAgICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5fdmFsdWUgPSB0aGlzLnB1cmVWYWx1ZShsaXN0KTtcbiAgICAgICAgdGhpcy5mb3JtUHJvcGVydHkudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBmYWxzZSwgZW1pdFZhbHVlRXZlbnQ6IGZhbHNlLCBlbWl0VmFsaWRhdG9yOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFZhbHVlKGZpbGU6IE56VXBsb2FkRmlsZSk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIGRlZXBHZXQoZmlsZS5yZXNwb25zZSwgdGhpcy5pLnJlc1JlTmFtZSwgZmlsZS5yZXNwb25zZSk7XG4gIH1cblxuICBwcml2YXRlIHB1cmVWYWx1ZShmaWxlTGlzdDogTnpVcGxvYWRGaWxlW10pOiBOelNhZmVBbnkge1xuICAgIGZpbGVMaXN0XG4gICAgICAuZmlsdGVyKGZpbGUgPT4gIWZpbGUudXJsKVxuICAgICAgLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGZpbGUudXJsID0gZGVlcEdldChmaWxlLnJlc3BvbnNlLCB0aGlzLmkudXJsUmVOYW1lKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0LmZpbHRlcih3ID0+IHcuc3RhdHVzID09PSAnZG9uZScpLm1hcChmaWxlID0+IHRoaXMuX2dldFZhbHVlKGZpbGUpKTtcbiAgICByZXR1cm4gdGhpcy5pLm11bHRpcGxlID09PSB0cnVlID8gcmVzIDogcmVzLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUoZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnB1cmVWYWx1ZShmaWxlTGlzdCkpO1xuICB9XG5cbiAgaGFuZGxlUmVtb3ZlID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIHRoaXMuX3NldFZhbHVlKHRoaXMuZmlsZUxpc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGhhbmRsZVByZXZpZXcgPSAoZmlsZTogTnpVcGxvYWRGaWxlKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMudWkucHJldmlldykge1xuICAgICAgdGhpcy51aS5wcmV2aWV3KGZpbGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBfdXJsID0gZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybDtcbiAgICBpZiAoIV91cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbmplY3Rvci5nZXQoTnpJbWFnZVNlcnZpY2UsIG51bGwpPy5wcmV2aWV3KFt7IHNyYzogX3VybCB9XSk7XG4gIH07XG59XG4iXX0=