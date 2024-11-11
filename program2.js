const decodeTheRing = function (s, p) {

  let pattern = p
                  .replace(/\*/g, '.*')  
                  .replace(/\?/g, '.')    
  
  const regex = new RegExp('^' + pattern + '$');  / Ensure it matches the entire strin
  return regex.test(s);  // Return true if the message matches the pattern

};

module.exports = decodeTheRing;
