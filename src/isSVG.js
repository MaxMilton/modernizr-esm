/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/src/isSVG.js **/
import docElement from './docElement.js';

var _isBrowser = typeof window !== "undefined";

var isSVG = _isBrowser && docElement.nodeName.toLowerCase() === 'svg';

export default isSVG;
