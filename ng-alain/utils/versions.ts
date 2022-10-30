import { Tree, Rule, SchematicContext } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { VERSION } from './lib-versions';
import { logInfo } from './log';
import { addPackage } from './package';
import { BUILD_TARGET_LINT } from './workspace';

/**
 * 修复主要依赖的版本号
 */
export function UpgradeMainVersions(tree: Tree, version: string = VERSION): void {
  addPackage(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`)
  );
  addPackage(
    tree,
    [
      `@angular-eslint/builder@~14.0.3`,
      `@angular-eslint/eslint-plugin@~14.0.3`,
      `@angular-eslint/eslint-plugin-template@~14.0.3`,
      `@angular-eslint/schematics@~14.0.3`,
      `@angular-eslint/template-parser@~14.0.3`,
      `@typescript-eslint/eslint-plugin@~5.35.1`,
      `@typescript-eslint/parser@~5.35.1`,
      `eslint@^8.23.0`,
      `eslint-config-prettier@~8.5.0`,
      `eslint-plugin-import@~2.26.0`,
      `eslint-plugin-jsdoc@~39.3.6`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@~4.2.1`,
      `eslint-plugin-deprecation@~1.3.2`,
      `prettier@^2.7.1`,
      `husky@^7.0.4`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^14.0.0`,
      `source-map-explorer@^2.5.2`,
      `@angular/language-service@^14.2.0`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, [`rxjs@~7.5.0`, `ng-zorro-antd@^14.0.0`]);
}

export function addESLintRule(context: SchematicContext, showLog: Boolean = true): Rule {
  return updateWorkspace(async workspace => {
    workspace.projects.forEach(project => {
      if (project.targets.has(BUILD_TARGET_LINT)) {
        project.targets.delete(BUILD_TARGET_LINT);
      }
      project.targets.set(BUILD_TARGET_LINT, {
        builder: '@angular-eslint/builder:lint',
        options: {
          lintFilePatterns: ['src/**/*.ts', 'src/**/*.html']
        }
      });
    });
    if (showLog) {
      logInfo(context, `Update 'lint' node in angular.json`);
    }
  });
}
