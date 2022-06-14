import { unundefined } from './unundefined';

describe('how unundefined works', () => {
    it('can be stringified', () => {
        const object = unundefined({ a: 1, b: { c: 2 } });
        expect(JSON.stringify(object.a)).toBe('1');
        expect(JSON.stringify(object.b.c)).toBe('2');
        expect(JSON.stringify(object.b)).toBe('{"c":2}');
        expect(JSON.stringify(object)).toBe('{"a":1,"b":{"c":2}}');
    });

    it('works as just a simple identity', () => {
        const object = unundefined({ a: 1, b: { c: 2 } });
        expect(object.a).toBe(1);
        expect(JSON.stringify(object.b /* [1] */)).toBe(
            JSON.stringify({ c: 2 }),
        );
        expect(object.b.c).toBe(2);
    });

    it('allows to modify the object', () => {
        const object = unundefined({ a: 1, b: { c: 2 } });
        object.a = 2;
        object.b.c = 3;
        expect(object.a).toBe(2);
        expect(JSON.stringify(object.b /* [1] */)).toBe(
            JSON.stringify({ c: 3 }),
        );
        expect(object.b.c).toBe(3);
    });

    it('works on full objects', () => {
        const object = unundefined({ a: 1, b: { c: 2 } });
        const x = object.c;

        expect(object.c).not.toBeUndefined();
    });

    it('works on empty objects', () => {
        expect(unundefined({}).foo).not.toBeUndefined();
        expect(unundefined({}).foo.bar).not.toBeUndefined();
    });

    /*
    TODO: @see https://github.com/hejny/unundefined/issues/1
    it('works on full objects', () => {
      const object = unundefined({a: 1,b:{c:2}});
        expect(object.a.x).not.toBeUndefined();
        expect(object.b.x).not.toBeUndefined();
    });
    it('works on functions', () => {
      const fn = unundefined(()=>{});
      expect(fn()).not.toBeUndefined();
    });
    */

    it('works calling of non-existing functions', () => {
        expect(unundefined({}).foo()).not.toBeUndefined();
        expect(unundefined({}).foo.bar()).not.toBeUndefined();
        expect(unundefined({}).foo().bar()).not.toBeUndefined();
    });

    it('works conversion to value', () => {
        expect(unundefined({}).foo.toString()).not.toBeUndefined();
        expect(unundefined({}).foo.toValue()).not.toBeUndefined();
        expect(unundefined({}).foo.toJSON()).not.toBeUndefined();
    });

    // TODO: it('works on instances', () => {});
});

/**
 * Note: [1] This is a workaround because .toEqual() does not work on proxies. It throws "Cannot convert object to primitive value".
 */
