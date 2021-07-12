import { InjectionToken } from '@angular/core';
function WINDOW_FACTORY() {
    return typeof window === 'object' && !!window ? window : null;
}
/**
 * @deprecated Will be removed in 12.0.0, Pls used `import { WINDOW } from '{AT}delon/util/token';` instead
 */
export const WINDOW = new InjectionToken('Window', {
    providedIn: 'root',
    factory: WINDOW_FACTORY
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luX3Rva2Vucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy93aW5fdG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsU0FBUyxjQUFjO0lBQ3JCLE9BQU8sT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2hFLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDakQsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLGNBQWM7Q0FDeEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gV0lORE9XX0ZBQ1RPUlkoKTogYW55IHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICEhd2luZG93ID8gd2luZG93IDogbnVsbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gMTIuMC4wLCBQbHMgdXNlZCBgaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAne0FUfWRlbG9uL3V0aWwvdG9rZW4nO2AgaW5zdGVhZFxuICovXG5leHBvcnQgY29uc3QgV0lORE9XID0gbmV3IEluamVjdGlvblRva2VuKCdXaW5kb3cnLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogV0lORE9XX0ZBQ1RPUllcbn0pO1xuIl19