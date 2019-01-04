let canvas, context;
let graphContainer;
let dataString = '{"title":"A study of countries","firstParam":"Average of Women Fertility (children/woman)","secondParam":"Average Years Of Schooling","thirdParam":"GDP per capita","years":[{"year":1979,"countries":[{"name":"Romania","color":"red","firstParam":1.26,"secondParam":11.2,"thirdParam":39231.13},{"name":"UK","color":"blue","firstParam":1.37,"secondParam":14.2,"thirdParam":439231.13},{"name":"USA","color":"green","firstParam":2.37,"secondParam":19.2,"thirdParam":49231.13}]}]}'
let data;
let yMarkDistance, xMarkDistance, yValueDistance, xValueDistance;

window.onload = function (event) {

    data = JSON.parse(dataString);
    graphContainer = document.querySelector('.graph-container');
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');

    setDimensions(canvas, graphContainer, 90, 20);
    window.onresize = function (event) {
        setDimensions(canvas, graphContainer, 90, 20);;
    }

    initUI(1979);
    drawAxis();
    drawCircle(1979)

}

function initUI(year) {
    document.getElementById('title').innerText = data.title + " - " + year;
}

function setDimensions(destination, source, heightDifference, widthDifferene) {
    destination.height = source.offsetHeight - heightDifference;
    destination.width = source.offsetWidth - widthDifferene;
    drawAxis();
}

function getMaxValue(parameter) {
    let max = 0;
    switch (parameter) {
        case "y":
            data.years.map((year) => {
                year.countries.map((country) => {
                    max = country.firstParam > max ? country.firstParam : max;
                })
            });
            return max;
            break;
        case "x":
            data.years.map((year) => {
                year.countries.map((country) => {
                    max = country.secondParam > max ? country.secondParam : max;
                })
            });
            return max;
            break;
        case "round":
            data.years.map((year) => {
                year.countries.map((country) => {
                    max = country.thirdParam > max ? country.thirdParam : max;
                })
            });
            return max;
            break;
        default:
            console.log('param is no good');
    }
}

function drawAxis() {
    let maxY = Math.round(getMaxValue("y") + 0.1 * getMaxValue("y"));
    let maxX = Math.round(getMaxValue("x") + 0.1 * getMaxValue("x"));
    //let maxRound = Math.round(getMaxValue("round") + 0.1 * getMaxValue("round"));

    let axisNumberDistance = 20;
    let yAxisTop = 40;
    let xAxisTop = 900;

    let yMark = {
        start: 60,
        end: 80
    };

    let xMark = {
        start: 510,
        end: 530
    };

    let origin = {
        x: 70,
        y: 520
    }

    yMarkDistance = (origin.y - yAxisTop) / 19;
    xMarkDistance = (xAxisTop - origin.x) / 19;

    yValueDistance = (maxY / 19);
    xValueDistance = (maxX / 19);

    context.font = "15px Arial";

    context.beginPath();
    context.moveTo(origin.x, origin.y);
    context.lineTo(origin.x, yAxisTop);
    context.stroke();

    context.beginPath();
    context.moveTo(origin.x, origin.y);
    context.lineTo(xAxisTop, origin.y);
    context.stroke();

    context.fillText("0", origin.x, origin.y + axisNumberDistance)

    context.font = "10px Arial";
    let currentYDistance = origin.y - yMarkDistance;
    let currentXDistance = origin.x + xMarkDistance;
    let currentYValue = yValueDistance;
    let currentXValue = xValueDistance;

    for (let i = 0; i < 19; i++) {
        //drawing y marks and numbers
        context.beginPath();
        context.moveTo(yMark.start, currentYDistance);
        context.lineTo(yMark.end, currentYDistance);
        context.stroke();

        context.fillText(currentYValue.toFixed(3), yMark.start - axisNumberDistance - 20, currentYDistance + 5);

        currentYDistance -= yMarkDistance;
        currentYValue = (currentYValue + yValueDistance);


        //drawing x marks and numbers
        context.beginPath();
        context.moveTo(currentXDistance, xMark.start);
        context.lineTo(currentXDistance, xMark.end);
        context.stroke();

        context.fillText(currentXValue.toFixed(3), currentXDistance - 15, xMark.start + axisNumberDistance + 15);

        currentXDistance += xMarkDistance;
        currentXValue = (currentXValue + xValueDistance);
    }

}

function drawCircles() { }

function drawCircle(year) {

    let maxRound = Math.round(getMaxValue("round") + 0.1 * getMaxValue("round"));

    //will need
    //let yMarkDistance, xMarkDistance, yValueDistance, xValueDistance to place the circle
    //we will draw the biggest circles first

    let searchedYear = data.years.find(currentYear => currentYear.year === year);

    if (!searchedYear) {
        console.log("The searched Year is not valid!");
    }

    countries = searchedYear.countries.sort(function (a, b) { return (a.thirdParam > b.thirdParam) ? 1 : ((b.thirdParam > a.thirdParam) ? -1 : 0); });

    console.log(countries);

}
