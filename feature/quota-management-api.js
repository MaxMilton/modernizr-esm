/** Original source code: https://github.com/Modernizr/Modernizr/blob/v3.7.1/feature-detects/quota-management-api.js **/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
Modernizr.addTest('quotamanagement', function () {
  var tempStorage = prefixed('temporaryStorage', navigator);
  var persStorage = prefixed('persistentStorage', navigator);
  return !!(tempStorage && persStorage);
});
export default Modernizr.quotamanagement;
