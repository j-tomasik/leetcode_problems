const largestComponent = (graph) => {
if(graph.length < 1) return 0;
	let maxCount = 0;
let visited = new Set()

	for(let node in graph) {
			let subCount = traverseCount(graph, visited, node);

			maxCount = Math.max(maxCount, subCount)
			}

	return maxCount
}

const traverseCount = (graph, visited, node) => {
		if(visited.has(node)) return 0;
		let count = 1;

		visited.add(String(src));
		for(let neighbor of graph[src]) {
			count += traverseCount(graph, visited, neighbor) 

			}
	
		return count;
}