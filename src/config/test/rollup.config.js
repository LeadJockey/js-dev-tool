// const cmdArgs = require('shell-arguments');
// const dir = cmdArgs.dirname || 'temp';
// const path = require('path');
// const rootPath = path.join(__dirname, '..', 'view');
// const targetPaht = path.join(rootPath, dir);
// const jsPath = path.join(targetPaht, 'js');
// const jsRollupPath = path.join(targetPaht, 'js.rollup');

// export default [
//   {
//     entry:jsPath,
//     input: path.join(jsPath, 'pc.js'),
//     output: { file: path.join(jsRollupPath, 'pc.rollup.js'), format: 'iife' },
//     watch: {
//       exclude:['node_modules/**']
//     }
//   },
//   {
//     input: path.join(jsPath, 'mo.js'),
//     output: { file: path.join(jsRollupPath, 'mo.rollup.js'), format: 'iife' }
//   },
//   {
//     input: path.join(jsPath, 'app.js'),
//     output: { file: path.join(jsRollupPath, 'app.rollup.js'), format: 'iife' }
//   }
// ];