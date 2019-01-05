let canvas, context;
let graphContainer;
let dataString = '{"title":"A study of countries","firstParam":"Average of Women Fertility (children/woman)","secondParam":"Average Years Of Schooling","thirdParam":"$/capita","years":[{"year":1979,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.45,"secondParam":8.4,"thirdParam":3930},{"name":"UK","color":"#1F77B4","firstParam":1.72,"secondParam":10.4,"thirdParam":22300},{"name":"USA","color":"#9467BD","firstParam":1.8,"secondParam":12.1,"thirdParam":29100}]},{"year":1980,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.4,"secondParam":8.5,"thirdParam":4060},{"name":"UK","color":"#1F77B4","firstParam":1.73,"secondParam":10.5,"thirdParam":21900},{"name":"USA","color":"#9467BD","firstParam":1.82,"secondParam":12.2,"thirdParam":28700}]},{"year":1981,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.36,"secondParam":8.7,"thirdParam":4190},{"name":"UK","color":"#1F77B4","firstParam":1.74,"secondParam":10.6,"thirdParam":21700},{"name":"USA","color":"#9467BD","firstParam":1.81,"secondParam":12.3,"thirdParam":29200}]},{"year":1982,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.32,"secondParam":8.8,"thirdParam":4320},{"name":"UK","color":"#1F77B4","firstParam":1.76,"secondParam":10.8,"thirdParam":22100},{"name":"USA","color":"#9467BD","firstParam":1.81,"secondParam":12.4,"thirdParam":28400}]}]}'
let data;
let yMarkDistance, xMarkDistance, yValueDistance, xValueDistance;
let origin, maxRound, countries;
let minYear, maxYear;
let currentCountry = null;
let currentYear;
let isPlaying = false;
let canvasFullWidth = null;

//create redraw function which calls whats needed to update

window.onload = function (event) {

    data = JSON.parse(dataString);
    graphContainer = document.querySelector('.graph-container');
    canvas = document.querySelector('canvas');
    slider = document.querySelector('input[type="range"');
    context = canvas.getContext('2d');

    calculateYearRange();
    slider.setAttribute('max', maxYear);
    slider.setAttribute('min', minYear);
    slider.value = currentYear = minYear;

    setDimensions(canvas, graphContainer, 90, 20);
    canvasFullWidth = canvas.width;

    window.onresize = function (event) {
        clearCanvas();
        setDimensions(canvas, graphContainer, 90, 20);
        scaleCanvasCoordinates();
        updateUI(currentYear);
        drawAxis();
        drawCircles(currentYear);
        countryFocus(currentCountry);
    }

    slider.addEventListener('input', function (e) {
        clearCanvas();
        currentYear = Number(slider.value);
        updateUI(currentYear);
        drawAxis();
        drawCircles(currentYear);
        countryNextYear();
        countryFocus(currentCountry);
        populateInfo();
        activateCurrentEntry(currentCountry.name);
    });

    updateUI(currentYear);
    drawAxis();
    drawCircles(currentYear);
    populateInfo();
    animate();
}

function updateUI(year) {
    document.getElementById('title').innerText = data.title + " - " + year;
}

function setDimensions(destination, source, heightDifference, widthDifference) {
    destination.height = source.offsetHeight - heightDifference;
    destination.width = source.offsetWidth - widthDifference;
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

function scaleCanvasCoordinates() {
    context.scale(canvas.width / canvasFullWidth, 1);
}

function drawAxis() {
    let maxY = Math.round(getMaxValue("y") + 0.1 * getMaxValue("y"));
    let maxX = Math.round(getMaxValue("x") + 0.1 * getMaxValue("x"));

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

    origin = {
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

    context.font = "15px Arial";
    context.fillText(data.firstParam, 5, 15);
    context.fillText(data.secondParam, xAxisTop + 20, origin.y + 5);


}

function drawCircle(country) {

    let yDistance = origin.y - (country.firstParam / yValueDistance * yMarkDistance);
    let xDistance = origin.x + (country.secondParam / xValueDistance * xMarkDistance);

    context.fillStyle = country.color;
    context.beginPath();
    context.arc(xDistance, yDistance, getCircleSize(country.thirdParam), 0, 2 * Math.PI);
    context.fill();
}

function drawCircles(year) {
    maxRound = Math.round(getMaxValue("round") + 0.1 * getMaxValue("round"));
    let searchedYear = data.years.find(currentYear => currentYear.year === year);

    if (!searchedYear) {
        alert("The searched Year is not valid!");
        return;
    }

    countries = searchedYear.countries.sort(function (a, b) { return (a.thirdParam < b.thirdParam) ? 1 : ((b.thirdParam < a.thirdParam) ? -1 : 0); });

    countries.map(country => {
        drawCircle(country);
    });
}

function getCircleSize(value) {
    return 100 * value / maxRound;
}

function populateInfo() {
    let container = document.querySelector('.info');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let fragment = document.createDocumentFragment();

    countries.map(country => {
        fragment.appendChild(createInfoEntry(country));
    })

    container.appendChild(fragment);
}

function createInfoEntry(country) {

    let entry = document.createElement('div');

    entry.classList.add('info-entry');

    let dot = document.createElement('div');
    dot.style.top = 0;
    dot.style.display = "inline";
    dot.style.height = "100px";
    dot.style.width = "100px";
    dot.innerText = "\u25CD";
    dot.style.color = country.color;

    let countryName = document.createElement('h4');
    countryName.innerText = country.name;
    countryName.style.margin = 0;

    entry.appendChild(countryName);
    entry.appendChild(dot);

    entry.addEventListener('click', function () {
        countryFocus(country);
    })

    return entry;
}

function clearCanvas() {
    context.clearRect(0, 0, canvasFullWidth, canvas.height);
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.setLineDash([]);
}

function countryFocus(country) {
    clearCanvas();
    drawAxis();
    drawCircles(currentYear);

    if (country === null) {
        return;
    }

    currentCountry = country;

    let yDistance = origin.y - (country.firstParam / yValueDistance * yMarkDistance);
    let xDistance = origin.x + (country.secondParam / xValueDistance * xMarkDistance);

    context.fillStyle = country.color;
    context.beginPath();
    context.arc(xDistance, yDistance, getCircleSize(country.thirdParam), 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = "black";
    context.beginPath();
    context.arc(xDistance, yDistance, getCircleSize(country.thirdParam) / 10, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(xDistance, yDistance, getCircleSize(country.thirdParam), 0, 2 * Math.PI);
    context.stroke();

    context.strokeStyle = "black";
    context.setLineDash([5, 15]);

    context.beginPath();
    context.moveTo(origin.x, yDistance);
    context.lineTo(xDistance, yDistance);
    context.stroke();

    context.beginPath();
    context.moveTo(xDistance, origin.y);
    context.lineTo(xDistance, yDistance);

    context.stroke();

    context.font = "bold 20px Arial";
    context.fillText(country.thirdParam + " " + data.thirdParam, xDistance + 15, yDistance);
    context.fillText(country.firstParam, xDistance / 2, yDistance - 5);
    context.fillText(country.secondParam, xDistance + 5, yDistance + yDistance / 2);

    resetActiveEntry();
    activateCurrentEntry(country.name);
}

function resetCountryFocus() {
    currentCountry = null;
    clearCanvas();
    drawAxis();
    drawCircles(currentYear);
    resetActiveEntry();
}

function resetActiveEntry() {
    let activeEntry = document.querySelector('.info-entry-active');

    if (activeEntry != null) {
        activeEntry.classList.remove("info-entry-active");
    }
}

function activateCurrentEntry(countryName) {
    let entries = document.getElementsByClassName('info-entry');
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].firstElementChild.innerText === countryName) {
            entries[i].classList.add('info-entry-active');
            return;
        }
    }
}

function calculateYearRange() {
    minYear = data.years[0].year;
    maxYear = data.years[data.years.length - 1].year;
}

function countryNextYear() {

    if (currentCountry === null) {
        return;
    }

    data.years.map(year => {
        if (year.year === currentYear) {
            year.countries.map(country => {
                if (country.name === currentCountry.name) {
                    currentCountry = country;
                    return;
                }
            })
        }
    })
}

function animate(){
    let interval = setInterval(function(){
        if(currentYear < maxYear){
            console.log('called');
            currentYear++;
            slider.value = currentYear;
            clearCanvas();
            updateUI(currentYear);
            drawAxis();
            drawCircles(currentYear);
            countryNextYear();
            countryFocus(currentCountry);
            populateInfo();
            if(currentCountry){
                activateCurrentEntry(currentCountry.name);
            }
        } else {
            clearInterval(interval);
        }
    }, 1000);
}