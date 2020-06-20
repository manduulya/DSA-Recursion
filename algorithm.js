//Counting sheeps

function CountingSheep(sheep) {
  if (sheep === 0) {
    return console.log("All sheep jumped over the fence");
  } else {
    console.log(sheep, "Another sheep jumps over the fence");
    return CountingSheep(sheep);
  }
}
CountingSheep(3);

//Power
function PowerCalculator(base, exp) {
  if (exp < 0) {
    console.log("exponent should be >= 0");
    return null;
  } else if (exp === 1) {
    return base;
  } else {
    base = base * base;
    return PowerCalculator(base, exp - 1);
  }
}

//Reverse String
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1) + str.charAt(0));
  }
}
//nth Triangular Number

function nthTriangle(n) {
  return n <= 1 ? n : n + nthTriangle(n - 1);
}

//string splitter
function stringSplitter(str, del) {
  if (str === "") {
    return str;
  } else if (str.charAt(0) === del) {
    return stringSplitter(str.substr(1), del);
  } else {
    return str.charAt(0) + stringSplitter(str.substr(1), del);
  }
}
//fibonacci
function fibSeq(n) {
  return n < 2 ? n : fibSeq(n - 1) + fibSeq(n - 2);
}

//factorial
function factorial(n) {
  return n === 2 ? n : n * factorial(n - 1);
}
// Find a way out of the maze
function mazeSolver(maze) {
  let mazeX = maze.length;
  let mazeY = maze[0].length;
  let solution = new Array(mazeX);
  for (i = 0; i < mazeX; i++) {
    solution[i] = new Array(mazeY);
    for (j = 0; j < mazeY; j++) {
      solution[i][j] = "-";
    }
  }
  return solveMaze(maze, 0, 0, solution);
}

function solveMaze(maze, x, y, sol, path = "") {
  if (x === maze.length - 1 && y === maze[0].length - 1) {
    sol[x][y] = 1;
    console.log(path);
    console.log(sol);
    return path;
  }

  if (isSafe(maze, x, y)) {
    sol[x][y] = 1;

    if (solveMaze(maze, x + 1, y, sol, path + "D")) {
      return true;
    } else if (solveMaze(maze, x, y + 1, sol, path + "R")) {
      return true;
    } else if (solveMaze(maze, x - 1, y, sol, path + "U")) {
      return true;
    } else if (solveMaze(maze, x, y - 1, sol, path + "L")) {
      return true;
    } else {
      sol[x][y] = 0;
      return false;
    }
  }

  return false;
}

function isSafe(maze, x, y) {
  return x >= 0 &&
    x < maze.length &&
    y >= 0 &&
    y < maze[0].length &&
    maze[x][y] !== "*"
    ? true
    : false;
}
//Find ALL the ways out of the maze
function isSafe(maze, x, y) {
  return x >= 0 &&
    x < maze.length &&
    y >= 0 &&
    y < maze[0].length &&
    maze[x][y] !== "*"
    ? true
    : false;
}

function findAllPaths(maze) {
  const currentPath = [];
  const visited = new Set();

  function check(x, y) {
    if (maze[x][y] === "e") {
      solutions.push([...currentPath]);
      return;
    }

    visited.add(x + ";" + y);

    const directions = {
      U: [x - 1, y],
      D: [x + 1, y],
      R: [x, y + 1],
      L: [x, y - 1],
    };

    for (const direction in directions) {
      const newX = directions[direction][0];
      const newY = directions[direction][1];

      if (isSafe(maze, newX, newY) && !visited.has(newX + ";" + newY)) {
        currentPath.push(dir);
        check(newX, newY);
        currentPath.pop();
      }
    }
    visited.delete(x + ";" + y);
  }

  check(0, 0);
  return solutions.map((s) => s.join(""));
}

//Anagrams
function anagramSolver(string) {
  function stringLoop(string, prefix) {
    if (string.length === 0) {
      return [prefix];
    } else {
      var out = [];
      for (var i = 0; i < string.length; i++) {
        var pre = string.substring(0, i);
        var post = string.substring(i + 1);
        out = out.concat(stringLoop(pre + post, string[i] + prefix));
      }
      return out;
    }
  }

  var distinct = {};
  stringLooper(string, "").forEach(function (result) {
    distinct[result] = true;
  });
  return Object.keys(distinct);
}

//Binary Representation
function binaryRep(num) {
  if (num === 0) {
    return 0;
  } else {
    return (num % 2) + 10 * binaryRep(num / 2);
  }
}
