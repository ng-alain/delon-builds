import * as i0 from "@angular/core";
import { NgModule, Pipe } from "@angular/core";
var FilterPipe = class FilterPipe {
	transform(array, matcher, ...args) {
		return array.filter((i) => matcher(i, ...args));
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FilterPipe,
		deps: [],
		target: i0.ɵɵFactoryTarget.Pipe
	});
	static ɵpipe = i0.ɵɵngDeclarePipe({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FilterPipe,
		isStandalone: true,
		name: "filter",
		pure: false
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: FilterPipe,
	decorators: [{
		type: Pipe,
		args: [{
			name: "filter",
			pure: false
		}]
	}]
});
const PIPES = [FilterPipe];
var FilterPipeModule = class FilterPipeModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FilterPipeModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FilterPipeModule,
		imports: [FilterPipe],
		exports: [FilterPipe]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: FilterPipeModule
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: FilterPipeModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: PIPES,
			exports: PIPES
		}]
	}]
});
export { FilterPipe, FilterPipeModule };

//# sourceMappingURL=pipe-filter.mjs.map