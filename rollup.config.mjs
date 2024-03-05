import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/jquery.affix.min.js',
        format: 'cjs',
        plugins: [terser()]
    },
    plugins: [
        commonjs(),
        babel()
    ]
}
