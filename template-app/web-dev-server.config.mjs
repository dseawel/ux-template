// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');
function ConvertToEsmFactory(content) {
    
  let esmContent = content.replace(
      /(^|\s|;)((var|let|const)\s*([^=]+)=\s*)?require\(([^)]+)\)/g,
      (fullMatch, leadingChar, varSetup, varType, varName, url) => {
      let slashIndex = url.indexOf('/');
      if (slashIndex >= 0 && /^['"]@/.test(url))  {
          slashIndex = url.indexOf('/', slashIndex + 1);
      }
      if (slashIndex >= 0 && !/\.m?js['"]/.test(url)) {
          url = url.replace(/['"]$/, '.js$&');
      }
      if (varSetup.length > 0) {
          return `${leadingChar}import ${varName}from ${url}`;
      }
      return `${leadingChar}import ${url}`;
      });

  return `const module = {exports:{}};let exports = module.exports;let define;${esmContent}\nexport default module.exports;`;
}

function parseToEsm() {
  return {
    transform(context) {
      const filesToTransform = ['/node_modules/page/index.js', '/node_modules/isarray/index.js', '/node_modules/path-to-regexp/index.js', '/node_modules/qs/lib/utils.js', '/node_modules/qs/lib/parse.js'];
      if (filesToTransform.includes(context.path)) {
        console.log('found');
        return ConvertToEsmFactory(context.body);
      }
    },
  }
}

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: '/',
  watch: !hmr,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  appIndex: 'index.html',

  /** Confgure bare import resolve plugin */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development']
  // },

  plugins: [
    parseToEsm()
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
  ],

  // See documentation for all available options
});
