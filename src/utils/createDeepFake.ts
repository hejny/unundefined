/**
 * Creates an object that has any property you want
 *  which has any property you want
 *   which has any property you want
 *    which has any property you want
 *     ...
 * + Everything is callable and return the deep fake object
 *
 * @returns this fake object+function
 */
export function createDeepFake(): any {
    return new Proxy(
        function () {
            return createDeepFake();
        },
        { get: createDeepFake },
    );
}
