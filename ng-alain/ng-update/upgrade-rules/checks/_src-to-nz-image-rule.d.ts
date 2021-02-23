import { Migration, ResolvedResource, UpgradeData } from '@angular/cdk/schematics';
export declare class SrcToNzImageRule extends Migration<UpgradeData> {
    enabled: boolean;
    visitTemplate(template: ResolvedResource): void;
}
