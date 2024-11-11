const decodeTheRing = function (s, p) {

  let pattern = p
                  .replace(/\*/g, '.*')  // Star symbol matches any sequence of characters
                  .replace(/\?/g, '.')    // Question mark matches exactly one character
  
  // Check if the message matches the entire pattern
  const regex = new RegExp('^' + pattern + '$');  // Ensure it matches the entire string
  return regex.test(s);  // Return true if the message matches the pattern

};

module.exports = decodeTheRing;
