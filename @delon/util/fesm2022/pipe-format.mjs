import * as i0 from "@angular/core";
import { NgModule, Pipe } from "@angular/core";
import { formatMask } from "@delon/util/format";
var FormatMaskPipe = class FormatMaskPipe {
	transform(value, mask) {
		return formatMask(value, mask);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FormatMaskPipe,
		deps: [],
		target: i0.ɵɵFactoryTarget.Pipe
	});
	static ɵpipe = i0.ɵɵngDeclarePipe({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FormatMaskPipe,
		isStandalone: true,
		name: "mask"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: FormatMaskPipe,
	decorators: [{
		type: Pipe,
		args: [{ name: "mask" }]
	}]
});
const PIPES = [FormatMaskPipe];
var FormatPipeModule = class FormatPipeModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FormatPipeModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FormatPipeModule,
		imports: [FormatMaskPipe],
		exports: [FormatMaskPipe]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FormatPipeModule
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: FormatPipeModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: PIPES,
			exports: PIPES
		}]
	}]
});
export { FormatMaskPipe, FormatPipeModule };

//# sourceMappingURL=pipe-format.mjs.map