import { DOCUMENT } from "@angular/common";
import * as i0 from "@angular/core";
import { Injectable, InjectionToken, inject, makeEnvironmentProviders } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject, filter, interval, map, share } from "rxjs";
import { AlainConfigService } from "@delon/util/config";
import { CookieService } from "@delon/util/browser";
import { HttpContextToken, HttpErrorResponse } from "@angular/common/http";
const AUTH_DEFAULT_CONFIG = {
	store_key: `_token`,
	token_invalid_redirect: true,
	token_exp_offset: 10,
	token_send_key: `token`,
	token_send_template: "${token}",
	token_send_place: "header",
	login_url: "/login",
	refreshTime: 3e3,
	refreshOffset: 6e3,
	ignores: [/\/assets\//]
};
function mergeConfig(srv) {
	return srv.merge("auth", AUTH_DEFAULT_CONFIG);
}
function DA_STORE_TOKEN_LOCAL_FACTORY() {
	return new LocalStorageStore();
}
var LocalStorageStore = class {
	get(key) {
		return JSON.parse(localStorage.getItem(key) ?? "{}") ?? {};
	}
	set(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
		return true;
	}
	remove(key) {
		localStorage.removeItem(key);
	}
};
const DA_STORE_TOKEN = new InjectionToken("AUTH_STORE_TOKEN", {
	providedIn: "root",
	factory: DA_STORE_TOKEN_LOCAL_FACTORY
});
function DA_SERVICE_TOKEN_FACTORY() {
	return new TokenService();
}
var TokenService = class TokenService {
	store = inject(DA_STORE_TOKEN);
	cogSrv = inject(AlainConfigService);
	refresh$ = new Subject();
	change$ = new BehaviorSubject(null);
	interval$;
	_referrer = {};
	_options;
	constructor() {
		this._options = mergeConfig(this.cogSrv);
	}
	get refresh() {
		this.builderRefresh();
		return this.refresh$.pipe(share());
	}
	get login_url() {
		return this._options.login_url;
	}
	get referrer() {
		return this._referrer;
	}
	get options() {
		return this._options;
	}
	set(data) {
		const res = this.store.set(this._options.store_key, data);
		this.change$.next(data);
		return res;
	}
	get(type) {
		const data = this.store.get(this._options.store_key);
		return type ? Object.assign(new type(), data) : data;
	}
	clear(options = { onlyToken: false }) {
		let data = null;
		if (options.onlyToken === true) {
			data = this.get();
			data.token = ``;
			this.set(data);
		} else this.store.remove(this._options.store_key);
		this.change$.next(data);
	}
	change() {
		return this.change$.pipe(share());
	}
	builderRefresh() {
		const { refreshTime, refreshOffset } = this._options;
		this.cleanRefresh();
		this.interval$ = interval(refreshTime).pipe(map(() => {
			const item = this.get();
			const expired = item.expired ?? item.exp ?? 0;
			if (expired <= 0) return null;
			return expired <= (/* @__PURE__ */ new Date()).valueOf() + refreshOffset ? item : null;
		}), filter((v) => v != null)).subscribe((res) => this.refresh$.next(res));
	}
	cleanRefresh() {
		if (this.interval$ && !this.interval$.closed) this.interval$.unsubscribe();
	}
	ngOnDestroy() {
		this.cleanRefresh();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TokenService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TokenService
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: TokenService,
	decorators: [{ type: Injectable }],
	ctorParameters: () => []
});
const DA_SERVICE_TOKEN = new InjectionToken("DA_SERVICE_TOKEN", {
	providedIn: "root",
	factory: DA_SERVICE_TOKEN_FACTORY
});
const OPENTYPE = "_delonAuthSocialType";
const HREFCALLBACK = "_delonAuthSocialCallbackByHref";
var SocialService = class SocialService {
	tokenService = inject(DA_SERVICE_TOKEN);
	doc = inject(DOCUMENT);
	router = inject(Router);
	_win = null;
	_winTime;
	observer;
	login(url, callback = "/", options = {}) {
		options = {
			type: "window",
			windowFeatures: "location=yes,height=570,width=520,scrollbars=yes,status=yes",
			...options
		};
		localStorage.setItem(OPENTYPE, options.type);
		localStorage.setItem(HREFCALLBACK, callback);
		if (options.type === "href") {
			this.doc.location.href = url;
			return;
		}
		this._win = window.open(url, "_blank", options.windowFeatures);
		this._winTime = setInterval(() => {
			if (this._win && this._win.closed) {
				this.ngOnDestroy();
				let model = this.tokenService.get();
				if (model && !model.token) model = null;
				if (model) this.tokenService.set(model);
				this.observer.next(model);
				this.observer.complete();
			}
		}, 100);
		return new Observable((observer) => {
			this.observer = observer;
		});
	}
	callback(rawData) {
		if (!rawData && this.router.url.indexOf("?") === -1) throw new Error(`url muse contain a ?`);
		let data;
		if (typeof rawData === "string") {
			const rightUrl = rawData.split("?")[1].split("#")[0];
			data = this.router.parseUrl(`./?${rightUrl}`).queryParams;
		} else data = rawData;
		if (!data || !data.token) throw new Error(`invalide token data`);
		this.tokenService.set(data);
		const url = localStorage.getItem(HREFCALLBACK) ?? "/";
		localStorage.removeItem(HREFCALLBACK);
		const type = localStorage.getItem(OPENTYPE);
		localStorage.removeItem(OPENTYPE);
		if (type === "window") window.close();
		else this.router.navigateByUrl(url);
		return data;
	}
	ngOnDestroy() {
		clearInterval(this._winTime);
		this._winTime = null;
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: SocialService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: SocialService
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: SocialService,
	decorators: [{ type: Injectable }]
});
var MemoryStore = class {
	cache = {};
	get(key) {
		return this.cache[key] ?? {};
	}
	set(key, value) {
		this.cache[key] = value;
		return true;
	}
	remove(key) {
		this.cache[key] = null;
	}
};
var SessionStorageStore = class {
	get(key) {
		return JSON.parse(sessionStorage.getItem(key) ?? "{}") ?? {};
	}
	set(key, value) {
		sessionStorage.setItem(key, JSON.stringify(value));
		return true;
	}
	remove(key) {
		sessionStorage.removeItem(key);
	}
};
var CookieStorageStore = class {
	srv = inject(CookieService);
	get(key) {
		try {
			return JSON.parse(this.srv.get(key) ?? "{}");
		} catch (ex) {
			if (typeof ngDevMode === "undefined" || ngDevMode) console.error(`CookieStorageStore: Invalid key-value format ${key}`, ex);
			return {};
		}
	}
	set(key, value) {
		const expires = (value?.expired ?? 0) / 1e3;
		this.srv.put(key, JSON.stringify(value ?? {}), { expires });
		return true;
	}
	remove(key) {
		this.srv.remove(key);
	}
};
function CheckSimple(model) {
	return model != null && typeof model.token === "string" && model.token.length > 0;
}
function CheckJwt(model, offset) {
	try {
		return model != null && !!model.token && !model.isExpired(offset);
	} catch (err) {
		if (typeof ngDevMode === "undefined" || ngDevMode) console.warn(`${err.message}, jump to login_url`);
		return false;
	}
}
function ToLogin(options, url) {
	const router = inject(Router);
	const token = inject(DA_SERVICE_TOKEN);
	const doc = inject(DOCUMENT);
	token.referrer.url = url ?? router.url;
	if (options.token_invalid_redirect === true) setTimeout(() => {
		const loginUrl = options.login_url;
		const search = doc.location.search ?? "";
		const target = search.length === 0 ? loginUrl : `${loginUrl}${loginUrl.includes("?") ? "&" : "?"}${search.slice(1)}`;
		if (/^https?:\/\//.test(loginUrl)) doc.location.href = target;
		else router.navigateByUrl(target);
	});
}
function urlBase64Decode(str) {
	let output = str.replace(/-/g, "+").replace(/_/g, "/");
	switch (output.length % 4) {
		case 0: break;
		case 2:
			output += "==";
			break;
		case 3:
			output += "=";
			break;
		default: throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
	}
	return b64DecodeUnicode(output);
}
function b64decode(str) {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	let output = "";
	str = String(str).replace(/=+$/, "");
	for (let bc = 0, bs, buffer, idx = 0; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) && (output += String.fromCharCode(255 & bs >> (-2 * bc & 6)))) buffer = chars.indexOf(buffer);
	return output;
}
function b64DecodeUnicode(str) {
	return decodeURIComponent(Array.prototype.map.call(b64decode(str), (c) => {
		return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
	}).join(""));
}
var JWTTokenModel = class {
	token;
	expired;
	get payload() {
		const parts = (this.token ?? "").split(".");
		if (parts.length !== 3) throw new Error("JWT must have 3 parts");
		const decoded = urlBase64Decode(parts[1]);
		return JSON.parse(decoded);
	}
	get exp() {
		const decoded = this.payload;
		if (!Object.prototype.hasOwnProperty.call(decoded, "exp")) return null;
		const date = /* @__PURE__ */ new Date(0);
		date.setUTCSeconds(decoded.exp);
		return date.valueOf();
	}
	isExpired(offsetSeconds = 0) {
		const exp = this.exp;
		if (exp == null) return null;
		return !(exp > (/* @__PURE__ */ new Date()).valueOf() + offsetSeconds * 1e3);
	}
};
var AuthJWTGuardService = class AuthJWTGuardService {
	srv = inject(DA_SERVICE_TOKEN);
	process(url) {
		const cog = this.srv.options;
		const res = CheckJwt(this.srv.get(JWTTokenModel), cog.token_exp_offset);
		if (!res) ToLogin(cog, url);
		return res;
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AuthJWTGuardService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AuthJWTGuardService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: AuthJWTGuardService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}]
});
const authJWTCanActivate = (_, state) => inject(AuthJWTGuardService).process(state.url);
const authJWTCanActivateChild = (_, state) => inject(AuthJWTGuardService).process(state.url);
const authJWTCanMatch = (route) => inject(AuthJWTGuardService).process(route.path);
const ALLOW_ANONYMOUS = new HttpContextToken(() => false);
function isAnonymous(req, options) {
	if (req.context.get(ALLOW_ANONYMOUS)) return true;
	if (Array.isArray(options.ignores)) {
		for (const item of options.ignores) if (item.test(req.url)) return true;
	}
	return false;
}
function throwErr(req, options) {
	ToLogin(options);
	return new Observable((observer) => {
		let statusText = "";
		if (typeof ngDevMode === "undefined" || ngDevMode) statusText = `来自 @delon/auth 的拦截，所请求URL未授权，若是登录API可加入 new HttpContext().set(ALLOW_ANONYMOUS, true) 来表示忽略校验，更多方法请参考： https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add new HttpContext().set(ALLOW_ANONYMOUS, true) to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig`;
		const res = new HttpErrorResponse({
			url: req.url,
			headers: req.headers,
			status: 401,
			statusText
		});
		observer.error(res);
	});
}
function newReq$1(req, model) {
	return req.clone({ setHeaders: { Authorization: `Bearer ${model.token}` } });
}
const authJWTInterceptor = (req, next) => {
	const options = mergeConfig(inject(AlainConfigService));
	if (isAnonymous(req, options)) return next(req);
	const model = inject(DA_SERVICE_TOKEN).get(JWTTokenModel);
	if (CheckJwt(model, options.token_exp_offset)) return next(newReq$1(req, model));
	return throwErr(req, options);
};
var AuthSimpleGuardService = class AuthSimpleGuardService {
	srv = inject(DA_SERVICE_TOKEN);
	process(url) {
		const res = CheckSimple(this.srv.get());
		if (!res) ToLogin(this.srv.options, url);
		return res;
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AuthSimpleGuardService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AuthSimpleGuardService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: AuthSimpleGuardService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}]
});
const authSimpleCanActivate = (_, state) => inject(AuthSimpleGuardService).process(state.url);
const authSimpleCanActivateChild = (_, state) => inject(AuthSimpleGuardService).process(state.url);
const authSimpleCanMatch = (route) => inject(AuthSimpleGuardService).process(route.path);
function newReq(req, model, options) {
	const { token_send_template, token_send_key } = options;
	const token = token_send_template.replace(/\$\{([\w]+)\}/g, (_, g) => model[g]);
	switch (options.token_send_place) {
		case "header":
			const obj = {};
			obj[token_send_key] = token;
			req = req.clone({ setHeaders: obj });
			break;
		case "body": {
			const body = req.body ?? {};
			body[token_send_key] = token;
			req = req.clone({ body });
			break;
		}
		case "url": req = req.clone({ params: req.params.append(token_send_key, token) });
	}
	return req;
}
const authSimpleInterceptor = (req, next) => {
	const options = mergeConfig(inject(AlainConfigService));
	if (isAnonymous(req, options)) return next(req);
	const model = inject(DA_SERVICE_TOKEN).get();
	if (CheckSimple(model)) return next(newReq(req, model, options));
	return throwErr(req, options);
};
var SimpleTokenModel = class {
	token;
	expired;
};
var AuthFeatureKind;
(function(AuthFeatureKind) {
	AuthFeatureKind[AuthFeatureKind["Store"] = 0] = "Store";
})(AuthFeatureKind || (AuthFeatureKind = {}));
function makeAuthFeature(kind, providers) {
	return {
		ɵkind: kind,
		ɵproviders: providers
	};
}
function provideAuth(store) {
	return makeEnvironmentProviders([(store ?? withLocalStorage()).ɵproviders]);
}
function withCookie() {
	return makeAuthFeature(AuthFeatureKind.Store, [{
		provide: DA_STORE_TOKEN,
		useClass: CookieStorageStore,
		deps: [CookieService]
	}]);
}
function withLocalStorage() {
	return makeAuthFeature(AuthFeatureKind.Store, [{
		provide: DA_STORE_TOKEN,
		useClass: LocalStorageStore
	}]);
}
function withSessionStorage() {
	return makeAuthFeature(AuthFeatureKind.Store, [{
		provide: DA_STORE_TOKEN,
		useClass: SessionStorageStore
	}]);
}
function withMemoryStorage() {
	return makeAuthFeature(AuthFeatureKind.Store, [{
		provide: DA_STORE_TOKEN,
		useClass: MemoryStore
	}]);
}
export { ALLOW_ANONYMOUS, AUTH_DEFAULT_CONFIG, AuthFeatureKind, AuthJWTGuardService, AuthSimpleGuardService, CookieStorageStore, DA_SERVICE_TOKEN, DA_SERVICE_TOKEN_FACTORY, DA_STORE_TOKEN, DA_STORE_TOKEN_LOCAL_FACTORY, JWTTokenModel, LocalStorageStore, MemoryStore, SessionStorageStore, SimpleTokenModel, SocialService, TokenService, authJWTCanActivate, authJWTCanActivateChild, authJWTCanMatch, authJWTInterceptor, authSimpleCanActivate, authSimpleCanActivateChild, authSimpleCanMatch, authSimpleInterceptor, isAnonymous, mergeConfig, provideAuth, throwErr, urlBase64Decode, withCookie, withLocalStorage, withMemoryStorage, withSessionStorage };

//# sourceMappingURL=auth.mjs.map