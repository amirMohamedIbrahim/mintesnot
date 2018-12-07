
module.export = function salutation() {
  var t = (new Date()).getHours();
  var t = d.getHours();
  return t < 12 ? 'morning' : t < 18 ? 'afternoon' : 'evening';
}




