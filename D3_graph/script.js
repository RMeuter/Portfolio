var h = 500;
var w = 500;
var r = 5;

// https://archive.nytimes.com/www.nytimes.com/interactive/2012/10/15/us/politics/swing-history.html
// https://checklists.opquast.com/en/web-quality-assurance/

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);

function rand(mi, ma){
    return Math.random()*(ma-mi)+mi;
}

d3.json("miserables.json").then(function(graph) {


    for(i=0;i<graph.nodes.length;i++){
        var node = svg.append("circle"); // ajout d’un cercle
        node.attr("id", "node"+graph.nodes[i].id); // identifiant
        node.attr("r", rand(r)); 
        node.attr("cx", rand(2*r, w-2*r)); // position X
        node.attr("cy", rand(2*r, h-2*r)); // position y
        node.attr("class", ".node"); // ajout d'une classe
    }

    for(let d = 0;  d < graph.links.length; d++){
        var link = svg.append("line")
        link.attr( "x1", d3.select("#node"+graph.links[d].source).attr("cx"));
        link.attr( "y1", d3.select("#node"+graph.links[d].source).attr("cy"));
        link.attr( "x2", d3.select("#node"+graph.links[d].target).attr("cx"));
        link.attr( "y2", d3.select("#node"+graph.links[d].target).attr("cy"));
        link.attr("stroke-width", 1).attr("stroke", "#aaaaaa"); // couleur de la bordure
    }

    for(i=0;i<graph.nodes.length;i++){
        var node = svg.append("circle"); // ajout d’un cercle
        node.attr("id", "node"+graph.nodes[i].id); // identifiant
        node.attr("r", rand(r)); 
        node.attr("cx", rand(2*r, w-2*r)); // position X
        node.attr("cy", rand(2*r, h-2*r)); // position y
        node.attr("class", ".node"); // ajout d'une classe
    }

    
    //Creation de ligne des entre les ronds

});