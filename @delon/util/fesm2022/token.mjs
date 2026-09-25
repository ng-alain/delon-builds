import { DOCUMENT } from "@angular/common";
import { InjectionToken, inject } from "@angular/core";
import { distinctUntilChanged, fromEvent, map, share, startWith } from "rxjs";
const WINDOW = new InjectionToken("WINDOW", { factory: () => {
	const { defaultView } = inject(DOCUMENT);
	if (!defaultView) throw new Error("Window is not available");
	return defaultView;
} });
const PAGE_VISIBILITY = new InjectionToken("PAGE_VISIBILITY`", { factory: () => {
	const doc = inject(DOCUMENT);
	return fromEvent(doc, "visibilitychange").pipe(startWith(0), map(() => !doc.hidden), distinctUntilChanged(), share());
} });
export { PAGE_VISIBILITY, WINDOW };

//# sourceMappingURL=token.mjs.map