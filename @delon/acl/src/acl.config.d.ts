import { ACLCanType, ACLType } from './acl.type';
export declare class DelonACLConfig {
    /**
     * Router URL when guard fail, default: `/403`
     */
    guard_url?: string;
    /**
     * `can` before execution callback
     */
    preCan?: ((roleOrAbility: ACLCanType) => ACLType | null) | null;
}
