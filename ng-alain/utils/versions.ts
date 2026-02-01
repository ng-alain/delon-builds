import { Tree, Rule } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { VERSION } from './lib-versions';
import { addPackage } from './package';
import { BUILD_TARGET_LINT, getProjectFromWorkspace } from './workspace';

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
      `angular-eslint@^21.2.0`,
      `@typescript-eslint/eslint-plugin@^8.54.0`,
      `@typescript-eslint/parser@^8.54.0`,
      `@typescript-eslint/utils@^8.54.0`,
      `eslint@^9.39.2`,
      `eslint-config-prettier@^10.1.8`,
      `eslint-plugin-import@~2.32.0`,
      `eslint-plugin-jsdoc@~62.5.0`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@~5.5.5`,
      `eslint-plugin-unused-imports@^4.3.0`,
      `typescript@~5.9.2`,
      `typescript-eslint@8.54.0`,
      `prettier@^3.8.1`,
      `prettier-eslint@^9.39.2`,
      `husky@^9.1.7`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^18.0.0`,
      `source-map-explorer@^2.5.3`,
      `ngx-tinymce@^21.0.0`,
      `@ng-util/monaco-editor@^21.1.0`,
      `@delon/testing@${version}`,
      // vi test
      // `@playwright/test@undefined`,
      // `@vitest/browser-playwright@undefined`,
      // `@vitest/coverage-v8@undefined`,
      // `vitest@undefined`,
      // `jsdom@undefined`,
      // When use vitest
      `@playwright/test@^1.57.0`,
      `@vitest/browser-playwright@^4.0.17`,
      `@vitest/coverage-v8@^4.0.16`,
      `vitest@^4.0.16`,
      `jsdom@^27.4.0`
    ],
    'devDependencies'
  );
  addPackage(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^21.0.2`]);
}

export function addESLintRule(projectName: string): Rule {
  return updateWorkspace(async workspace => {
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null) return;

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
}
