let canvas;
let graphContainer;
let data;

window.onload = function (event) {

    graphContainer = document.querySelector('.graph-container');
    canvas = document.querySelector('canvas');

    setDimensions(canvas, graphContainer, 90, 20);
    window.onresize = function (event) {
        setDimensions(canvas, graphContainer, 90, 20);;
    }


}

function setDimensions(destination, source, heightDifference, widthDifferene) {
    destination.height = source.offsetHeight - heightDifference;
    destination.width = source.offsetWidth - widthDifferene;
}