const decodeTheRing = function (s, p) {
  let i = 0, j = 0; 
  let star = -1, match = -1;

  while (i < s.length) {
      if (j < p.length && (p[j] === s[i] || p[j] === '?')) {
          i++;
          j++;
      } else if (j < p.length && p[j] === '*') {
          star = j++;
          match = i;
      } else if (star !== -1) {
          j = star + 1;
          i = ++match;
      } else {
          return false;
      }
  }

  while (j < p.length && p[j] === '*') {
      j++;
  }

  return j === p.length;
};

module.exports = decodeTheRing;
