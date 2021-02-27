const record = {};
export const PREFIX = '[@DELON]:';
function notRecorded(...args) {
    const asRecord = args.reduce((acc, c) => acc + c.toString(), '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
function consoleCommonBehavior(consoleFunc, ...args) {
    if (ngDevMode && notRecorded(...args)) {
        consoleFunc(...args);
    }
}
// Warning should only be printed in dev mode and only once.
export const warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);
export const deprecation11 = (comp, from, to) => {
    warnDeprecation(`${comp} => '${from}' is going to be removed in 11.0.0${to ? `, Please use '${to}' instead` : ``}.`);
};
export const warnDeprecation = (...args) => {
    if (!ngDevMode) {
        const stack = new Error().stack;
        return consoleCommonBehavior((...arg) => console.warn(PREFIX, 'deprecated:', ...arg, stack), ...args);
    }
    else {
        return () => { };
    }
};
// Log should only be printed in dev mode.
export const log = (...args) => {
    if (ngDevMode) {
        console.log(PREFIX, ...args);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9vdGhlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxNQUFNLEdBQTRCLEVBQUUsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBRWxDLFNBQVMsV0FBVyxDQUFDLEdBQUcsSUFBaUI7SUFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFakUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQztBQUVELFNBQVMscUJBQXFCLENBQUMsV0FBeUMsRUFBRSxHQUFHLElBQWlCO0lBQzVGLElBQUksU0FBUyxJQUFJLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ3JDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQztBQUVELDREQUE0RDtBQUM1RCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFcEksTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxFQUFXLEVBQUUsRUFBRTtJQUN2RSxlQUFlLENBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxxQ0FBcUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkgsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBRyxJQUFpQixFQUFFLEVBQUU7SUFDdEQsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2hDLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxHQUFHLEdBQWdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3BIO1NBQU07UUFDTCxPQUFPLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUMsQ0FBQztBQUVGLDBDQUEwQztBQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRTtJQUMxQyxJQUFJLFNBQVMsRUFBRTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDOUI7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5kZWNsYXJlIGNvbnN0IG5nRGV2TW9kZTogYm9vbGVhbjtcblxuY29uc3QgcmVjb3JkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuXG5leHBvcnQgY29uc3QgUFJFRklYID0gJ1tAREVMT05dOic7XG5cbmZ1bmN0aW9uIG5vdFJlY29yZGVkKC4uLmFyZ3M6IE56U2FmZUFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGFzUmVjb3JkID0gYXJncy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICsgYy50b1N0cmluZygpLCAnJyk7XG5cbiAgaWYgKHJlY29yZFthc1JlY29yZF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmVjb3JkW2FzUmVjb3JkXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc29sZUNvbW1vbkJlaGF2aW9yKGNvbnNvbGVGdW5jOiAoLi4uYXJnczogTnpTYWZlQW55KSA9PiB2b2lkLCAuLi5hcmdzOiBOelNhZmVBbnlbXSk6IHZvaWQge1xuICBpZiAobmdEZXZNb2RlICYmIG5vdFJlY29yZGVkKC4uLmFyZ3MpKSB7XG4gICAgY29uc29sZUZ1bmMoLi4uYXJncyk7XG4gIH1cbn1cblxuLy8gV2FybmluZyBzaG91bGQgb25seSBiZSBwcmludGVkIGluIGRldiBtb2RlIGFuZCBvbmx5IG9uY2UuXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4gY29uc29sZUNvbW1vbkJlaGF2aW9yKCguLi5hcmc6IE56U2FmZUFueVtdKSA9PiBjb25zb2xlLndhcm4oUFJFRklYLCAuLi5hcmcpLCAuLi5hcmdzKTtcblxuZXhwb3J0IGNvbnN0IGRlcHJlY2F0aW9uMTEgPSAoY29tcDogc3RyaW5nLCBmcm9tOiBzdHJpbmcsIHRvPzogc3RyaW5nKSA9PiB7XG4gIHdhcm5EZXByZWNhdGlvbihgJHtjb21wfSA9PiAnJHtmcm9tfScgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMS4wLjAke3RvID8gYCwgUGxlYXNlIHVzZSAnJHt0b30nIGluc3RlYWRgIDogYGB9LmApO1xufTtcblxuZXhwb3J0IGNvbnN0IHdhcm5EZXByZWNhdGlvbiA9ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4ge1xuICBpZiAoIW5nRGV2TW9kZSkge1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgcmV0dXJuIGNvbnNvbGVDb21tb25CZWhhdmlvcigoLi4uYXJnOiBOelNhZmVBbnlbXSkgPT4gY29uc29sZS53YXJuKFBSRUZJWCwgJ2RlcHJlY2F0ZWQ6JywgLi4uYXJnLCBzdGFjayksIC4uLmFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfVxufTtcblxuLy8gTG9nIHNob3VsZCBvbmx5IGJlIHByaW50ZWQgaW4gZGV2IG1vZGUuXG5leHBvcnQgY29uc3QgbG9nID0gKC4uLmFyZ3M6IE56U2FmZUFueVtdKSA9PiB7XG4gIGlmIChuZ0Rldk1vZGUpIHtcbiAgICBjb25zb2xlLmxvZyhQUkVGSVgsIC4uLmFyZ3MpO1xuICB9XG59O1xuIl19