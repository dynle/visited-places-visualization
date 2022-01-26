// create a network
var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {
    layout: { randomSeed: 1 },
    edges: { width: 3 },
    nodes: { }
};
var network = new vis.Network(container, data, options);
