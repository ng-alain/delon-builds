/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Replacement, RuleFailure, RuleWalker } from 'tslint';
import { ExternalResource } from './component-file';
/**
 * Creates a standalone rule failure that can be used to apply a replacement for an
 * external resource from the custom ComponentWalker.
 */
export declare function createExternalReplacementFailure(node: ExternalResource, failureMessage: string, ruleName: string, replacement: Replacement): RuleFailure;
/** Adds a failure to the given walker at the location of the specified replacement. */
export declare function addFailureAtReplacement(walker: RuleWalker, failureMessage: string, replacement: Replacement): void;
