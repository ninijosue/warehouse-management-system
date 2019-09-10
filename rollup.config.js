import loadz0r from 'rollup-plugin-loadz0r';
import {terser} from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import rosolve from 'rollup-plugin-node-resolve';
import gzipPlugin from 'rollup-plugin-gzip';
import postcss from 'rollup-plugin-postcss';


const {version} = require("./package.json");

export default {
    input:[
        "./src/scripts/index.js"
    ],
    plugins: [
        rosolve(),
        replace({
            delimiters:["{{","}}"],
            values : {
                version
            }
        }),
        loadz0r({
            publicPath: './build/static/scripts/'
        }),
        terser(),
        postcss({
            minimize :true,
            styleinject : false,
            extract :false
        }),
        // gzipPlugin()

    ],
    output : {
        format : "amd",
        dir : "./build/static/scripts/"
    }
}