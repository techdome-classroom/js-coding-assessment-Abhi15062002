const decodeTheRing = function (s, p) {

  let pattern = p
                  .replace(/\*/g, '.*')  
                  .replace(/\?/g, '.')    
  
  const regex = new RegExp('^' + pattern + '$');  
  return regex.test(s);  
};

module.exports = decodeTheRing;
