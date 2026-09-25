import * as i0 from "@angular/core";
import { LOCALE_ID, NgModule, Pipe, inject } from "@angular/core";
import { CurrencyService } from "@delon/util/format";
var CurrencyMegaPipe = class CurrencyMegaPipe {
	srv = inject(CurrencyService);
	isCN = inject(LOCALE_ID).startsWith("zh");
	transform(value, options) {
		const res = this.srv.mega(value, options);
		return res.value + (this.isCN ? res.unitI18n : res.unit);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyMegaPipe,
		deps: [],
		target: i0.ɵɵFactoryTarget.Pipe
	});
	static ɵpipe = i0.ɵɵngDeclarePipe({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyMegaPipe,
		isStandalone: true,
		name: "mega"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CurrencyMegaPipe,
	decorators: [{
		type: Pipe,
		args: [{ name: "mega" }]
	}]
});
var CurrencyPricePipe = class CurrencyPricePipe {
	srv = inject(CurrencyService);
	transform(value, options) {
		return this.srv.format(value, options);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyPricePipe,
		deps: [],
		target: i0.ɵɵFactoryTarget.Pipe
	});
	static ɵpipe = i0.ɵɵngDeclarePipe({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyPricePipe,
		isStandalone: true,
		name: "price"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CurrencyPricePipe,
	decorators: [{
		type: Pipe,
		args: [{ name: "price" }]
	}]
});
var CurrencyCNYPipe = class CurrencyCNYPipe {
	srv = inject(CurrencyService);
	transform(value, options) {
		return this.srv.cny(value, options);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyCNYPipe,
		deps: [],
		target: i0.ɵɵFactoryTarget.Pipe
	});
	static ɵpipe = i0.ɵɵngDeclarePipe({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyCNYPipe,
		isStandalone: true,
		name: "cny"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CurrencyCNYPipe,
	decorators: [{
		type: Pipe,
		args: [{ name: "cny" }]
	}]
});
const PIPES = [
	CurrencyMegaPipe,
	CurrencyPricePipe,
	CurrencyCNYPipe
];
var CurrencyPipeModule = class CurrencyPipeModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyPipeModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyPipeModule,
		imports: [
			CurrencyMegaPipe,
			CurrencyPricePipe,
			CurrencyCNYPipe
		],
		exports: [
			CurrencyMegaPipe,
			CurrencyPricePipe,
			CurrencyCNYPipe
		]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CurrencyPipeModule
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CurrencyPipeModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: PIPES,
			exports: PIPES
		}]
	}]
});
export { CurrencyCNYPipe, CurrencyMegaPipe, CurrencyPipeModule, CurrencyPricePipe };

//# sourceMappingURL=pipe-currency.mjs.map