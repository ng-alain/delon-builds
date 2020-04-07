/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
export function urlBase64Decode(str) {
    /** @type {?} */
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
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
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
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
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    /** @type {?} */
    var output = '';
    str = String(str).replace(/=+$/, '');
    for (
    // initialize result and counters
    // tslint:disable:no-conditional-assignment binary-expression-operand-order
    var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
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
    function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }))
        .join(''));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2p3dC9qd3QuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sVUFBVSxlQUFlLENBQUMsR0FBVzs7UUFDckMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ3RELFFBQVEsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekIsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNOLE1BQU07U0FDUDtRQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksSUFBSSxDQUFDO1lBQ2YsTUFBTTtTQUNQO1FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNOLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDZCxNQUFNO1NBQ1A7UUFDRCxPQUFPLENBQUMsQ0FBQztZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztTQUN0RjtLQUNGO0lBQ0QsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVc7O1FBQ3RCLEtBQUssR0FBRyxtRUFBbUU7O1FBQzdFLE1BQU0sR0FBRyxFQUFFO0lBRWYsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXJDO0lBQ0UsaUNBQWlDO0lBQ2pDLDJFQUEyRTtJQUMzRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFLLEVBQUUsTUFBTSxTQUFLLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDekMscUJBQXFCO0lBQ3JCLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1Qiw0RUFBNEU7SUFDNUUsQ0FBQyxNQUFNO1FBQ0wsK0NBQStDO1FBQy9DLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN4Qyx5Q0FBeUM7WUFDekMsa0RBQWtEO1lBQ2xELEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDLEVBQ0w7UUFDQSx5REFBeUQ7UUFDekQsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7QUFHRCxTQUFTLGdCQUFnQixDQUFDLEdBQVc7SUFDbkMsT0FBTyxrQkFBa0IsQ0FDdkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHO1NBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDOzs7O0lBQUUsVUFBQyxDQUFTO1FBQzlCLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxFQUFDO1NBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNaLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHVybEJhc2U2NERlY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBvdXRwdXQgPSBzdHIucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xuICAgIGNhc2UgMDoge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgMjoge1xuICAgICAgb3V0cHV0ICs9ICc9PSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAzOiB7XG4gICAgICBvdXRwdXQgKz0gJz0nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2F0b2InIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGI2NERlY29kZVVuaWNvZGUob3V0cHV0KTtcbn1cblxuZnVuY3Rpb24gYjY0ZGVjb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgc3RyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvPSskLywgJycpO1xuXG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tY29uZGl0aW9uYWwtYXNzaWdubWVudCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG4gICAgbGV0IGJjID0gMCwgYnM6IGFueSwgYnVmZmVyOiBhbnksIGlkeCA9IDA7XG4gICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXG4gICAgKGJ1ZmZlciA9IHN0ci5jaGFyQXQoaWR4KyspKTtcbiAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XG4gICAgfmJ1ZmZlciAmJlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tY29tbWEtb3BlcmF0b3JcbiAgICAgICgoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyKSxcbiAgICAgICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcbiAgICAgICAgLy8gY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIG9uZSBhc2NpaSBjaGFyYWN0ZXJcbiAgICAgICAgYmMrKyAlIDQpXG4gICAgICA/IChvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiAoYnMgPj4gKCgtMiAqIGJjKSAmIDYpKSkpXG4gICAgICA6IDBcbiAgKSB7XG4gICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXG4gICAgYnVmZmVyID0gY2hhcnMuaW5kZXhPZihidWZmZXIpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZyNUaGVfVW5pY29kZV9Qcm9ibGVtXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcFxuICAgICAgLmNhbGwoYjY0ZGVjb2RlKHN0ciksIChjOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKSxcbiAgKTtcbn1cbiJdfQ==