// create a network
var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = { layout: { randomSeed: 1 }, size:50 };
var network = new vis.Network(container, data, options);
