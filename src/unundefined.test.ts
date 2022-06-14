import { unundefined } from './unundefined';

describe('how unundefined works', () => {
    it('works as just a simple identity', () => {
        const object = unundefined({ a: 1, b: { c: 2 } });
        expect(object.a).toBe(1);
        expect(object.b).toEqual({ c: 2 });
        expect(object.b.c).toBe(2);
        expect(JSON.stringify(object)).toBe('{"a":1,"b":{"c":2}}');

        const fn = unundefined(() => 'hello');
        expect(fn()).toBe('hello');
    });

    it('allows to modify the object', () => {
        const object = unundefined({ a: 1, b: { c: 2 } });
        object.a = 2;
        object.b.c = 3;
        expect(object.a).toBe(2);
        expect(object.b).toEqual({ c: 3 });
        expect(object.b.c).toBe(3);
    });

    it('works on full objects', () => {
        const object = unundefined({ a: 1, b: { c: 2 } });
        expect(object.a).toBe(1);
        expect(object.b).toEqual({ c: 2 });
        expect(object.b.c).toBe(2);
        expect(object.a).not.toBeUndefined();
        expect(object.b).not.toBeUndefined();
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


    it('works on functions', () => {
        const fn = unundefined(() => 'hello');
        expect(fn()).toBe('hello');
        expect(fn.a).not.toBeUndefined();
        expect(fn.a()).not.toBeUndefined();
    });

    it('works on functions with extra keys', () => {
        const fn = unundefined(() => {});
        fn.a = 1;
        expect(fn.a).toBe(1);
        expect(fn.b).not.toBeUndefined();
    });
 

    // TODO: it('works on instances', () => {});
});
