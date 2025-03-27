function convertToAdjList(adjMatrix) {
  var L = [];

  for (var u = 0; u < adjMatrix.length; u++) {
    L.push([]);
    var col = adjMatrix[u]; // matrix column

    for (var v = 0; v < col.length; v++) {
      if (col[v] == 1) {
        L[u].push(v);
      }
    }
  }
  return L;
}
