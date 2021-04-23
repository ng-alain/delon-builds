import { Tree } from '@angular-devkit/schematics';
import { VERSION } from './lib-versions';
import { addPackage } from './package';

/**
 * 修复主要依赖的版本号
 */
export function UpgradeMainVersions(tree: Tree, version: string = VERSION): void {
  addPackage(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`),
  );
  addPackage(
    tree,
    [
      `ng-alain@${version}`,
      `ng-alain-codelyzer@^0.0.1`,
      `ng-alain-plugin-theme@^11.0.1`,
      `source-map-explorer@^2.5.1`,
      `@delon/testing@${version}`,
    ],
    'devDependencies',
  );
  // TODO: fix angular depends on 6.x
  addPackage(tree, ['ajv@^7.1.1', 'ajv-formats@^2.0.2']);
}
