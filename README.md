# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Analysis:

The runtime depends on the number of vertices. Specifically $ \Theta(|V|^2)$ since we need to go through the length of the vertices then for each row. And there are |V| rows whichs means it's $|V|^2$. The number of edges doesn't matter because we have to check if the spot in the matrix is a 1 regardless of if there is an edge. And if there is one we just push it to the adjacency list which takes constant time.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

