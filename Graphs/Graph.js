exports = module.exports = {};
var Queue = require('../Queue/Queue.js').Queue;

exports.AdjNode = function(source, destination) {
	this.source = source;
	this.destination = destination;
	this.next = null;
};

exports.AdjNode2 = function(destination) {
	this.destination = destination;
	this.next = null;
};


exports.AdjList = function() {
	this.head = null
};

exports.Graph = function(vertex) {
	this.vertex = vertex;
	this.array = Array.apply(null, Array(vertex)).map(function() {
		return new exports.AdjList();
	});

	for(var i = 0; i < vertex; i++) {
		this.array[i] = new exports.AdjList();
		this.array[i].head = null;
	}
};

exports.Graph.prototype.addEdge = function(source, destination) {
	var node = new exports.AdjNode(source, destination);

	//add this node to the source adj list
	node.next = this.array[source].head
	this.array[source].head = node;

	//now create a reverse edge since it's an undirected graph
	node = new exports.AdjNode(destination, source);
	node.next = this.array[destination].head;
	this.array[destination].head = node;
}

exports.Graph.prototype.addEdge2 = function(source, destination) {
	var node = new exports.AdjNode2(destination);

	//add this node to the source adj list
	node.next = this.array[source].head
	this.array[source].head = node;
}

exports.Graph.prototype.printGraph = function(graph) {
	var vertex = graph.vertex,
			node;

	for(var i = 0; i < vertex; i++) {
		node = graph.array[i].head;
		console.log("\nNodes connected to Vertex " + node.source + " are :");
		while(node !== null) {
			console.log(" " + node.destination);
			node = node.next;
		}
	}
}

exports.Graph.prototype.BFS = function(startVertex) {
	var q = new Queue(),
			visited = Array.apply(null, Array(this.vertex)).map(Boolean.prototype.valueOf, false);
	q.push(startVertex);
	while(!q.isEmpty()) {
		var top = q.pop();
		console.log(" ", top);
		visited[top] = true;
		var head = this.array[top].head;
		while (head !== null) {
			if(visited[head.destination] === false) {
				visited[head.destination] = true;
				q.push(head.destination);
			}
			head = head.next;
		}
	}
}

exports.Graph.prototype.BFS2 = function(startVertex, endVertex) {
	var q = new Queue(),
			visited = Array.apply(null, Array(this.vertex)).map(Boolean.prototype.valueOf, false);
	q.push(startVertex);
	while(!q.isEmpty()) {
		var top = q.pop();
		console.log("Top", top);
		visited[top] = true;
		var head = this.array[top].head;
		while (head !== null) {
			if(visited[head.destination] === false) {
				console.log(head.destination)
				if(head.destination === endVertex) {
					console.log("ha")
					return true;
				} else {
					visited[head.destination] = true;
					q.push(head.destination);
				}
			}
			head = head.next;
		}
	}

	return false;
}