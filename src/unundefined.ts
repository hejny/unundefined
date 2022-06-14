export default unundefined;

// !!! Export + to new file
function createDeepFake() {
    new Proxy(
        function () {
            return createDeepFake();
        },
        { get: () => createDeepFake() },
    );
}

type NotFunction = { [k: string]: unknown } & (
    | { bind?: never }
    | { call?: never }
);
const a: NotFunction = {};

/**
 * Proxies an object so that non of the properties will be undefined.
 *
 * @param object
 * @returns object which will never return undefined
 */
export function unundefined<T extends NotFunction>(
    object: T,
): T & any /* <- TODO: How to not use any? */ {
    return new Proxy(object, {
        get(target, key, reciever) {
            const ownValue = Reflect.get(target, key, reciever);

            if (ownValue !== undefined) {
                return ownValue;
            }

            if (key === 'toString') {
                return () => '[object Object]'; // <- TODO: Probbably sth better like "[fake Object]"
            }

            if (key === 'toValue') {
                return () => 0;
            }

            if (key === 'toJSON') {
                return () => {};
            }

            return createDeepFake();
        },
    });
}
