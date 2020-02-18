import { Rule } from '@angular-devkit/schematics';
import { Schema as NgAddOptions } from './schema';
export default function (options: NgAddOptions): (host: import("@angular-devkit/schematics/src/tree/interface").Tree) => Rule;
