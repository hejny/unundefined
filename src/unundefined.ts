export default unundefined;

/**
 * Proxies an object so that non of the properties will be undefined.
 *
 * @param object
 * @returns object which will never return undefined
 */
export function unundefined<T extends object | Function>(
    object: T,
): T & any /* <- TODO: How to not use any? */ {
    return object;
}
