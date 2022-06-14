/**
 * Any object which is not a function
 */
export type NotFunction = { [k: string | number | symbol]: unknown } & (
    | { bind?: never }
    | { call?: never }
);
