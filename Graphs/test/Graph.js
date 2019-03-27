var expect = require('chai').expect;
var Graph = require('../Graph.js').Graph;

describe('#Graph', function() {
	xit('should construct an undirected graph with edges', function() {
		var g = new Graph(5);
		g.addEdge(0, 1);
		g.addEdge(0, 2);
		g.addEdge(0, 3);
		g.addEdge(1, 2);
		g.addEdge(2, 4);
		g.printGraph(g);
	});

	xit('should traverse a graph using BFS', function() {
		var g = new Graph(6);
		g.addEdge2(0, 1);
		g.addEdge2(0, 2);
		g.addEdge2(1, 2);
		g.addEdge2(1, 3);
		g.addEdge2(3, 4);
		g.addEdge2(2, 3);
		g.addEdge2(4, 0);
		g.addEdge2(4, 1);
		g.addEdge2(4, 5);
		g.BFS(0);
	});

	it('should traverse a graph using BFS', function() {
		var g = new Graph(6);
		g.addEdge2(0, 1);
		g.addEdge2(0, 2);
		g.addEdge2(1, 2);
		g.addEdge2(1, 3);
		g.addEdge2(3, 4);
		g.addEdge2(2, 3);
		g.addEdge2(4, 0);
		g.addEdge2(4, 1);
		g.addEdge2(4, 5);

		//expect(g.BFS2(0, 2)).to.equal(true);
		expect(g.BFS2(0, 4)).to.equal(true);

	});
});