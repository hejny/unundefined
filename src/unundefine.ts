import { NotFunction } from './interfaces/NotFunction';
import { createDeepFake } from './utils/createDeepFake';


/**
 * Proxies an object so that non of the properties will be undefined.
 *
 * @param object
 * @returns object which will never return undefined
 */
export function unundefine<T extends NotFunction>(
    object: T,
): T & any /* <- TODO: How to not use any? */ {
    return new Proxy(object, {
        get(target, key, reciever) {
            const ownValue = Reflect.get(target, key, reciever);

            if (ownValue !== undefined) {
                if (typeof ownValue === 'object' && ownValue !== null) {
                    return unundefine(ownValue);
                } else {
                    return ownValue;
                }
            }

            if (key === 'toString') {
                return () => '[object Object]'; // <- TODO: Probbably sth better like "[fake Object]"
            }

            if (key === 'toValue') {
                return () => 0;
            }

            if (key === 'toJSON') {
                return () => object;
            }

            return createDeepFake();
        },
    });
}
