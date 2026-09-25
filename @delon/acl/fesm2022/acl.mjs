import * as i0 from "@angular/core";
import { DestroyRef, Directive, ElementRef, Injectable, Injector, NgModule, Renderer2, TemplateRef, ViewContainerRef, afterNextRender, booleanAttribute, effect, inject, input } from "@angular/core";
import { BehaviorSubject, Observable, filter, map, of, tap } from "rxjs";
import { AlainConfigService } from "@delon/util/config";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
const ACL_DEFAULT_CONFIG = { guard_url: `/403` };
var ACLService = class ACLService {
	cogSrv = inject(AlainConfigService);
	options;
	roles = [];
	abilities = [];
	full = false;
	aclChange = new BehaviorSubject(null);
	get change() {
		return this.aclChange.asObservable();
	}
	get data() {
		return {
			full: this.full,
			roles: this.roles,
			abilities: this.abilities
		};
	}
	get guard_url() {
		return this.options.guard_url;
	}
	constructor() {
		this.options = this.cogSrv.merge("acl", ACL_DEFAULT_CONFIG);
	}
	parseACLType(val) {
		let t;
		if (typeof val === "number") t = { ability: [val] };
		else if (Array.isArray(val) && val.length > 0 && typeof val[0] === "number") t = { ability: val };
		else if (typeof val === "object" && !Array.isArray(val)) t = { ...val };
		else if (Array.isArray(val)) t = { role: val };
		else t = { role: val == null ? [] : [val] };
		return {
			except: false,
			...t
		};
	}
	set(value) {
		this.full = false;
		this.abilities = [];
		this.roles = [];
		this.add(value);
		this.aclChange.next(value);
	}
	setFull(val) {
		this.full = val;
		this.aclChange.next(val);
	}
	setAbility(abilities) {
		this.set({ ability: abilities });
	}
	setRole(roles) {
		this.set({ role: roles });
	}
	add(value) {
		if (value.role && value.role.length > 0) this.roles.push(...value.role);
		if (value.ability && value.ability.length > 0) this.abilities.push(...value.ability);
	}
	attachRole(roles) {
		for (const val of roles) if (!this.roles.includes(val)) this.roles.push(val);
		this.aclChange.next(this.data);
	}
	attachAbility(abilities) {
		for (const val of abilities) if (!this.abilities.includes(val)) this.abilities.push(val);
		this.aclChange.next(this.data);
	}
	removeRole(roles) {
		for (const val of roles) {
			const idx = this.roles.indexOf(val);
			if (idx !== -1) this.roles.splice(idx, 1);
		}
		this.aclChange.next(this.data);
	}
	removeAbility(abilities) {
		for (const val of abilities) {
			const idx = this.abilities.indexOf(val);
			if (idx !== -1) this.abilities.splice(idx, 1);
		}
		this.aclChange.next(this.data);
	}
	can(roleOrAbility) {
		const { preCan } = this.options;
		if (preCan) roleOrAbility = preCan(roleOrAbility);
		const t = this.parseACLType(roleOrAbility);
		let result = false;
		if (this.full === true || !roleOrAbility) result = true;
		else {
			if (t.role && t.role.length > 0) {
				if (t.mode === "allOf") result = t.role.every((v) => this.roles.includes(v));
				else result = t.role.some((v) => this.roles.includes(v));
			}
			if (t.ability && t.ability.length > 0) {
				if (t.mode === "allOf") result = t.ability.every((v) => this.abilities.includes(v));
				else result = t.ability.some((v) => this.abilities.includes(v));
			}
		}
		return t.except === true ? !result : result;
	}
	parseAbility(value) {
		if (typeof value === "number" || typeof value === "string" || Array.isArray(value)) value = { ability: Array.isArray(value) ? value : [value] };
		delete value.role;
		return value;
	}
	canAbility(value) {
		return this.can(this.parseAbility(value));
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ACLService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ACLService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ACLService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
var ACLIfDirective = class ACLIfDirective {
	srv = inject(ACLService);
	_viewContainer = inject(ViewContainerRef);
	d$ = inject(DestroyRef);
	_thenViewRef = null;
	_elseViewRef = null;
	aclIf = input.required(...ngDevMode ? [{ debugName: "aclIf" }] : /* istanbul ignore next */ []);
	aclIfThen = input(inject(TemplateRef), ...ngDevMode ? [{ debugName: "aclIfThen" }] : /* istanbul ignore next */ []);
	aclIfElse = input(...ngDevMode ? [void 0, { debugName: "aclIfElse" }] : /* istanbul ignore next */ []);
	except = input(false, {
		...ngDevMode ? { debugName: "except" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	constructor() {
		effect(() => this.updateView());
		afterNextRender(() => {
			this.srv.change.pipe(takeUntilDestroyed(this.d$), filter((r) => r != null)).subscribe(() => this.updateView());
		});
	}
	updateView() {
		const res = this.srv.can(this.aclIf());
		const except = this.except();
		const then = this.aclIfThen();
		const els = this.aclIfElse();
		if (res && !except || !res && except) {
			if (!this._thenViewRef) {
				this._viewContainer.clear();
				this._elseViewRef = null;
				if (then) this._thenViewRef = this._viewContainer.createEmbeddedView(then);
			}
		} else if (!this._elseViewRef) {
			this._viewContainer.clear();
			this._thenViewRef = null;
			if (els) this._elseViewRef = this._viewContainer.createEmbeddedView(els);
		}
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ACLIfDirective,
		deps: [],
		target: i0.ɵɵFactoryTarget.Directive
	});
	static ɵdir = i0.ɵɵngDeclareDirective({
		minVersion: "17.1.0",
		version: "22.2.0",
		type: ACLIfDirective,
		isStandalone: true,
		selector: "[aclIf]",
		inputs: {
			aclIf: {
				classPropertyName: "aclIf",
				publicName: "aclIf",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			aclIfThen: {
				classPropertyName: "aclIfThen",
				publicName: "aclIfThen",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			aclIfElse: {
				classPropertyName: "aclIfElse",
				publicName: "aclIfElse",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			except: {
				classPropertyName: "except",
				publicName: "except",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		exportAs: ["aclIf"],
		ngImport: i0
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ACLIfDirective,
	decorators: [{
		type: Directive,
		args: [{
			selector: "[aclIf]",
			exportAs: "aclIf"
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		aclIf: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "aclIf",
				required: true
			}]
		}],
		aclIfThen: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "aclIfThen",
				required: false
			}]
		}],
		aclIfElse: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "aclIfElse",
				required: false
			}]
		}],
		except: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "except",
				required: false
			}]
		}]
	}
});
var ACLDirective = class ACLDirective {
	el = inject(ElementRef).nativeElement;
	renderer = inject(Renderer2);
	srv = inject(ACLService);
	_value;
	acl = input(void 0, {
		...ngDevMode ? { debugName: "acl" } : /* istanbul ignore next */ {},
		transform: (v) => this.set(v)
	});
	ability = input(void 0, {
		...ngDevMode ? { debugName: "ability" } : /* istanbul ignore next */ {},
		alias: "acl-ability",
		transform: (v) => this.set(this.srv.parseAbility(v))
	});
	constructor() {
		this.srv.change.pipe(takeUntilDestroyed(), filter((r) => r != null)).subscribe(() => this.set(this._value));
	}
	set(value) {
		this._value = value;
		const CLS = "acl__hide";
		const el = this.el;
		if (this.srv.can(this._value)) this.renderer.removeClass(el, CLS);
		else this.renderer.addClass(el, CLS);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ACLDirective,
		deps: [],
		target: i0.ɵɵFactoryTarget.Directive
	});
	static ɵdir = i0.ɵɵngDeclareDirective({
		minVersion: "17.1.0",
		version: "22.2.0",
		type: ACLDirective,
		isStandalone: true,
		selector: "[acl]",
		inputs: {
			acl: {
				classPropertyName: "acl",
				publicName: "acl",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			ability: {
				classPropertyName: "ability",
				publicName: "acl-ability",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		exportAs: ["acl"],
		ngImport: i0
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ACLDirective,
	decorators: [{
		type: Directive,
		args: [{
			selector: "[acl]",
			exportAs: "acl"
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		acl: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "acl",
				required: false
			}]
		}],
		ability: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "acl-ability",
				required: false
			}]
		}]
	}
});
var ACLGuardService = class ACLGuardService {
	srv = inject(ACLService);
	router = inject(Router);
	injector = inject(Injector);
	process(data) {
		data = {
			guard: null,
			guard_url: this.srv.guard_url,
			...data
		};
		let guard = data.guard;
		if (typeof guard === "function") guard = guard(this.srv, this.injector);
		return (guard && guard instanceof Observable ? guard : of(guard != null ? guard : null)).pipe(map((v) => this.srv.can(v)), tap((v) => {
			if (v) return;
			this.router.navigateByUrl(data.guard_url);
		}));
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ACLGuardService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ACLGuardService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ACLGuardService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}]
});
const aclCanActivate = (route) => inject(ACLGuardService).process(route.data);
const aclCanActivateChild = (route) => inject(ACLGuardService).process(route.data);
const aclCanMatch = (route) => inject(ACLGuardService).process(route.data);
const COMPONENTS = [ACLDirective, ACLIfDirective];
var DelonACLModule = class DelonACLModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: DelonACLModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: DelonACLModule,
		imports: [
			CommonModule,
			ACLDirective,
			ACLIfDirective
		],
		exports: [ACLDirective, ACLIfDirective]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: DelonACLModule,
		imports: [CommonModule]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: DelonACLModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [CommonModule, ...COMPONENTS],
			exports: COMPONENTS
		}]
	}]
});
export { ACLDirective, ACLGuardService, ACLIfDirective, ACLService, ACL_DEFAULT_CONFIG, DelonACLModule, aclCanActivate, aclCanActivateChild, aclCanMatch };

//# sourceMappingURL=acl.mjs.map