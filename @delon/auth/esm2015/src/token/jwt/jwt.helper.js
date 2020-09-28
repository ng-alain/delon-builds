/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
export function urlBase64Decode(str) {
    /** @type {?} */
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
        }
    }
    return b64DecodeUnicode(output);
}
/**
 * @param {?} str
 * @return {?}
 */
function b64decode(str) {
    /** @type {?} */
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    /** @type {?} */
    let output = '';
    str = String(str).replace(/=+$/, '');
    for (
    // initialize result and counters
    // tslint:disable:no-conditional-assignment binary-expression-operand-order
    let bc = 0, bs, buffer, idx = 0; 
    // get next character
    (buffer = str.charAt(idx++)); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer &&
        // tslint:disable-next-line: ban-comma-operator
        ((bs = bc % 4 ? bs * 64 + buffer : buffer),
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
/**
 * @param {?} str
 * @return {?}
 */
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map
        .call(b64decode(str), (/**
     * @param {?} c
     * @return {?}
     */
    (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }))
        .join(''));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFXOztRQUNyQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDdEQsUUFBUSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6QixLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTTtTQUNQO1FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNOLE1BQU0sSUFBSSxJQUFJLENBQUM7WUFDZixNQUFNO1NBQ1A7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUNkLE1BQU07U0FDUDtRQUNELE9BQU8sQ0FBQyxDQUFDO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1NBQ3RGO0tBQ0Y7SUFDRCxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBVzs7VUFDdEIsS0FBSyxHQUFHLG1FQUFtRTs7UUFDN0UsTUFBTSxHQUFHLEVBQUU7SUFFZixHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFckM7SUFDRSxpQ0FBaUM7SUFDakMsMkVBQTJFO0lBQzNFLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFPLEVBQUUsTUFBVyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ3pDLHFCQUFxQjtJQUNyQixDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUIsNEVBQTRFO0lBQzVFLENBQUMsTUFBTTtRQUNQLCtDQUErQztRQUMvQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUMseUNBQXlDO1lBQ3pDLGtEQUFrRDtZQUNsRCxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQyxFQUNMO1FBQ0EseURBQXlEO1FBQ3pELE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7O0FBR0QsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFXO0lBQ25DLE9BQU8sa0JBQWtCLENBQ3ZCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRztTQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7OztJQUFFLENBQUMsQ0FBUyxFQUFFLEVBQUU7UUFDbEMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDLEVBQUM7U0FDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQ1osQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdXJsQmFzZTY0RGVjb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IG91dHB1dCA9IHN0ci5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICBzd2l0Y2ggKG91dHB1dC5sZW5ndGggJSA0KSB7XG4gICAgY2FzZSAwOiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAyOiB7XG4gICAgICBvdXRwdXQgKz0gJz09JztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIDM6IHtcbiAgICAgIG91dHB1dCArPSAnPSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLmApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYjY0RGVjb2RlVW5pY29kZShvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBiNjRkZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gIGxldCBvdXRwdXQgPSAnJztcblxuICBzdHIgPSBTdHJpbmcoc3RyKS5yZXBsYWNlKC89KyQvLCAnJyk7XG5cbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlcnNcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25kaXRpb25hbC1hc3NpZ25tZW50IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXJcbiAgICBsZXQgYmMgPSAwLCBiczogYW55LCBidWZmZXI6IGFueSwgaWR4ID0gMDtcbiAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcbiAgICAoYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKykpO1xuICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcbiAgICB+YnVmZmVyICYmXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tY29tbWEtb3BlcmF0b3JcbiAgICAoKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlciksXG4gICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcbiAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxuICAgIGJjKysgJSA0KVxuICAgICAgPyAob3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgKGJzID4+ICgoLTIgKiBiYykgJiA2KSkpKVxuICAgICAgOiAwXG4gICkge1xuICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxuICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmcjVGhlX1VuaWNvZGVfUHJvYmxlbVxuZnVuY3Rpb24gYjY0RGVjb2RlVW5pY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcFxuICAgICAgLmNhbGwoYjY0ZGVjb2RlKHN0ciksIChjOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKSxcbiAgKTtcbn1cbiJdfQ==