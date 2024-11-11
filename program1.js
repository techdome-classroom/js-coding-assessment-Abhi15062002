const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) {
      return 0;
  }

  let rows = grid.length;
  let cols = grid[0].length;
  
  function dfs(r, c) {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return;
      }
      
      grid[r][c] = 'W';
      
      dfs(r + 1, c); 
      dfs(r - 1, c); 
      dfs(r, c + 1); 
      dfs(r, c - 1); 
  }

  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {  
              dfs(i, j);  
              islandCount++;  // Increment island count
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
