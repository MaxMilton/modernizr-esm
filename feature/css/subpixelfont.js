/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/css/subpixelfont.js **/
import Modernizr from '../src/Modernizr.js';
import testStyles from '../src/testStyles.js';
testStyles('#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}', function (elem) {
  var subpixel = elem.firstChild;
  subpixel.innerHTML = 'This is a text written in Arial';
  Modernizr.addTest('subpixelfont', window.getComputedStyle ? window.getComputedStyle(subpixel, null).getPropertyValue('width') !== '44px' : false);
}, 1, ['subpixel']);
export default Modernizr.subpixelfont;
