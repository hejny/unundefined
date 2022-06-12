import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/unundefined.ts',
    output: [
        {
            file: './dist/umd/unundefined.js',
            name: 'unundefined',
            format: 'umd',
            sourcemap: true,
        },
        {
            file: './dist/esm/unundefined.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
};
