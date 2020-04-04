/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Dispatches a keydown event from an element. */
export declare function createKeyboardEvent(type: string, keyCode: number, target?: Element, key?: string): any;
/** Creates a fake event object with any desired event type. */
export declare function createFakeEvent(type: string, canBubble?: boolean, cancelable?: boolean): Event;
