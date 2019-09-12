const fs = require('fs');
const CleanCSS = require('clean-css');
const sass = require('node-sass')


const files = [
  'home',
];

files.forEach(f => {
  sass.render({
  
    file: `src/styles/${f}.scss`,
    outFile: `build/static/styles/${f}.css`
  }, 
  function(err, results) { 
    if(!err)
      fs.writeFileSync(`build/static/styles/${f}.css`, new CleanCSS().minify(results.css).styles, 'utf8');
    else
      console.error(err);
      
   }
);
});