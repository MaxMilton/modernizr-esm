/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/elem/datalist.js **/
import Modernizr from '../src/Modernizr.js';
import './input.js';
Modernizr.addTest('datalistelem', Modernizr.input.list);
export default Modernizr.datalistelem;
