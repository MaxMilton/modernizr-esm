/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/style/scoped.js **/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
Modernizr.addTest('stylescoped', 'scoped' in createElement('style'));
export default Modernizr.stylescoped;
