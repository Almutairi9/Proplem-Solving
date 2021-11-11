

function highestRank(arr) {
    b = {};
    (max = []), (maxi = 0);
    for (let k of arr) {
      if (b[k]) b[k]++;
      else b[k] = 1;
      if (maxi < b[k]) {
        max = k;
        maxi = b[k];
      }
    } 
    return max;
  } 