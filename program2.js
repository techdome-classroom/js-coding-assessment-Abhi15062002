const decodeTheRing = function (s, p) {
  let i = 0, j = 0; // pointers for message (s) and pattern (p)
  let star = -1, match = -1;

  while (i < s.length) {
      if (j < p.length && (p[j] === s[i] || p[j] === '?')) {
          // if characters match or there is a "?", move both pointers
          i++;
          j++;
      } else if (j < p.length && p[j] === '*') {
          // if "*" is found, mark its position and try to match the next character in message
          star = j++;
          match = i;
      } else if (star !== -1) {
          // if no match, but "*" was found earlier, try advancing the message pointer to match more
          j = star + 1;
          i = ++match;
      } else {
          // if no match is found and no "*" to backtrack, return false
          return false;
      }
  }

  // Skip remaining "*" characters in the pattern
  while (j < p.length && p[j] === '*') {
      j++;
  }

  // If we have exhausted both the message and pattern, return true, otherwise false
  return j === p.length;
};

module.exports = decodeTheRing;
