import { strings } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { findNodes } from '@schematics/angular/utility/ast-utils';
import { parseFragment, Attribute, DefaultTreeDocument, DefaultTreeElement, DefaultTreeNode } from 'parse5';
import * as ts from 'typescript';

import { PluginOptions } from './interface';

function genSharedLibsAutoFile(options: PluginOptions, host: Tree, icons: string[]) {
  const content = `/*
* Automatically generated by 'ng g ng-alain:plugin import'
* @see https://ng-alain.com/cli/plugin#import
*/

import {
  ${icons.join(',\n  ')}
} from '@ant-design/icons-angular/icons';

export const ICONS_AUTO = [
  ${icons.join(',\n  ')}
];
`;
  const savePath = options.sourceRoot + `/app/shared/shared-libs-auto.ts`;
  if (host.exists(savePath)) {
    host.overwrite(savePath, content);
  } else {
    host.create(savePath, content);
  }
}

export function pluginModule(options: PluginOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    console.log(`Analyzing files...`);

    console.log(`\n\n`);
    // console.log(`生成成功，如果是首次运行，需要手动引用，参考：https://ng-alain.com/theme/icon/zh`);
    // console.log(`Finished, if it's first run, you need manually reference it, refer to: https://ng-alain.com/theme/icon/en`);
    console.log(`\n\n`);
  };
}
