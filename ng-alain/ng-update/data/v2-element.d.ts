import { VersionChanges } from '../upgrade-data';
import { ConvertAction } from '../dom/interfaces';
export interface V2ElementUpgradeData extends ConvertAction {
}
export declare const v2Element: VersionChanges<V2ElementUpgradeData>;
