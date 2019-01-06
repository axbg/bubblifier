let canvas, context, graphContainer;
let exampleDataString = '{"title":"A study of countries","firstParam":"Average of Women Fertility (children/woman)","secondParam":"Average Years Of Schooling (>25)","thirdParam":"$/capita","years":[{"year":1979,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.45,"secondParam":8.4,"thirdParam":3930},{"name":"UK","color":"#1F77B4","firstParam":1.72,"secondParam":10.4,"thirdParam":22300},{"name":"USA","color":"#9467BD","firstParam":1.8,"secondParam":12.1,"thirdParam":29100}]},{"year":1980,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.4,"secondParam":8.5,"thirdParam":4060},{"name":"UK","color":"#1F77B4","firstParam":1.73,"secondParam":10.5,"thirdParam":21900},{"name":"USA","color":"#9467BD","firstParam":1.82,"secondParam":12.2,"thirdParam":28700}]},{"year":1981,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.36,"secondParam":8.7,"thirdParam":4190},{"name":"UK","color":"#1F77B4","firstParam":1.74,"secondParam":10.6,"thirdParam":21700},{"name":"USA","color":"#9467BD","firstParam":1.81,"secondParam":12.3,"thirdParam":29200}]},{"year":1982,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.32,"secondParam":8.8,"thirdParam":4320},{"name":"UK","color":"#1F77B4","firstParam":1.76,"secondParam":10.8,"thirdParam":22100},{"name":"USA","color":"#9467BD","firstParam":1.81,"secondParam":12.4,"thirdParam":28400}]},{"year":1983,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.3,"secondParam":9,"thirdParam":4450},{"name":"UK","color":"#1F77B4","firstParam":1.78,"secondParam":10.9,"thirdParam":23100},{"name":"USA","color":"#9467BD","firstParam":1.78,"secondParam":12.4,"thirdParam":29400}]},{"year":1984,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.29,"secondParam":9.2,"thirdParam":4580},{"name":"UK","color":"#1F77B4","firstParam":1.8,"secondParam":11,"thirdParam":23500},{"name":"USA","color":"#9467BD","firstParam":1.79,"secondParam":12.5,"thirdParam":31300}]},{"year":1985,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.27,"secondParam":9.3,"thirdParam":4710},{"name":"UK","color":"#1F77B4","firstParam":1.81,"secondParam":11.1,"thirdParam":24500},{"name":"USA","color":"#9467BD","firstParam":1.84,"secondParam":12.6,"thirdParam":32300}]},{"year":1986,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.25,"secondParam":9.5,"thirdParam":4840},{"name":"UK","color":"#1F77B4","firstParam":1.82,"secondParam":11.2,"thirdParam":25200},{"name":"USA","color":"#9467BD","firstParam":1.84,"secondParam":12.7,"thirdParam":33100}]},{"year":1987,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.19,"secondParam":9.6,"thirdParam":4970},{"name":"UK","color":"#1F77B4","firstParam":1.83,"secondParam":11.3,"thirdParam":26500},{"name":"USA","color":"#9467BD","firstParam":1.87,"secondParam":12.7,"thirdParam":34000}]},{"year":1988,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2.11,"secondParam":9.7,"thirdParam":5100},{"name":"UK","color":"#1F77B4","firstParam":1.83,"secondParam":11.4,"thirdParam":27900},{"name":"USA","color":"#9467BD","firstParam":1.92,"secondParam":12.8,"thirdParam":35100}]},{"year":1989,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":2,"secondParam":9.9,"thirdParam":5230},{"name":"UK","color":"#1F77B4","firstParam":1.82,"secondParam":11.5,"thirdParam":28600},{"name":"USA","color":"#9467BD","firstParam":2,"secondParam":12.8,"thirdParam":36000}]},{"year":1990,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.87,"secondParam":10,"thirdParam":5360},{"name":"UK","color":"#1F77B4","firstParam":1.81,"secondParam":11.6,"thirdParam":28700},{"name":"USA","color":"#9467BD","firstParam":2.07,"secondParam":12.9,"thirdParam":36300}]},{"year":1991,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.74,"secondParam":10.1,"thirdParam":4710},{"name":"UK","color":"#1F77B4","firstParam":1.8,"secondParam":11.7,"thirdParam":28300},{"name":"USA","color":"#9467BD","firstParam":2.06,"secondParam":13,"thirdParam":35800}]},{"year":1992,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.61,"secondParam":10.3,"thirdParam":4330},{"name":"UK","color":"#1F77B4","firstParam":1.79,"secondParam":11.7,"thirdParam":28300},{"name":"USA","color":"#9467BD","firstParam":2.04,"secondParam":13,"thirdParam":36600}]},{"year":1993,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.51,"secondParam":10.4,"thirdParam":4400},{"name":"UK","color":"#1F77B4","firstParam":1.78,"secondParam":11.8,"thirdParam":29000},{"name":"USA","color":"#9467BD","firstParam":2.02,"secondParam":13.1,"thirdParam":37100}]},{"year":1994,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.43,"secondParam":10.5,"thirdParam":4580},{"name":"UK","color":"#1F77B4","firstParam":1.77,"secondParam":11.9,"thirdParam":30000},{"name":"USA","color":"#9467BD","firstParam":2,"secondParam":13.1,"thirdParam":38100}]},{"year":1995,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.37,"secondParam":10.7,"thirdParam":4920},{"name":"UK","color":"#1F77B4","firstParam":1.76,"secondParam":12,"thirdParam":30700},{"name":"USA","color":"#9467BD","firstParam":1.98,"secondParam":13.2,"thirdParam":38700}]},{"year":1996,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.34,"secondParam":10.8,"thirdParam":5130},{"name":"UK","color":"#1F77B4","firstParam":1.74,"secondParam":12.1,"thirdParam":31400},{"name":"USA","color":"#9467BD","firstParam":1.98,"secondParam":13.2,"thirdParam":39700}]},{"year":1997,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.32,"secondParam":10.9,"thirdParam":4890},{"name":"UK","color":"#1F77B4","firstParam":1.73,"secondParam":12.2,"thirdParam":32600},{"name":"USA","color":"#9467BD","firstParam":1.97,"secondParam":13.3,"thirdParam":41000}]},{"year":1998,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.31,"secondParam":11,"thirdParam":4800},{"name":"UK","color":"#1F77B4","firstParam":1.71,"secondParam":12.2,"thirdParam":33500},{"name":"USA","color":"#9467BD","firstParam":2,"secondParam":13.3,"thirdParam":42300}]},{"year":1999,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.31,"secondParam":11.1,"thirdParam":4790},{"name":"UK","color":"#1F77B4","firstParam":1.69,"secondParam":12.3,"thirdParam":34400},{"name":"USA","color":"#9467BD","firstParam":2.01,"secondParam":13.3,"thirdParam":43800}]},{"year":2000,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.31,"secondParam":11.3,"thirdParam":4910},{"name":"UK","color":"#1F77B4","firstParam":1.68,"secondParam":12.4,"thirdParam":35600},{"name":"USA","color":"#9467BD","firstParam":2.05,"secondParam":13.4,"thirdParam":45100}]},{"year":2001,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.31,"secondParam":11.4,"thirdParam":5260},{"name":"UK","color":"#1F77B4","firstParam":1.67,"secondParam":12.5,"thirdParam":36300},{"name":"USA","color":"#9467BD","firstParam":2.03,"secondParam":13.4,"thirdParam":45000}]},{"year":2002,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.32,"secondParam":11.5,"thirdParam":5630},{"name":"UK","color":"#1F77B4","firstParam":1.67,"secondParam":12.5,"thirdParam":37100},{"name":"USA","color":"#9467BD","firstParam":2.02,"secondParam":13.5,"thirdParam":45400}]},{"year":2003,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.33,"secondParam":11.6,"thirdParam":5990},{"name":"UK","color":"#1F77B4","firstParam":1.69,"secondParam":12.6,"thirdParam":38100},{"name":"USA","color":"#9467BD","firstParam":2.05,"secondParam":13.5,"thirdParam":46300}]},{"year":2004,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.36,"secondParam":11.7,"thirdParam":6520},{"name":"UK","color":"#1F77B4","firstParam":1.72,"secondParam":12.7,"thirdParam":38800},{"name":"USA","color":"#9467BD","firstParam":2.06,"secondParam":13.6,"thirdParam":46300}]},{"year":2005,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.38,"secondParam":11.8,"thirdParam":6840},{"name":"UK","color":"#1F77B4","firstParam":1.76,"secondParam":12.8,"thirdParam":39700},{"name":"USA","color":"#9467BD","firstParam":2.06,"secondParam":13.6,"thirdParam":48800}]},{"year":2006,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.4,"secondParam":11.9,"thirdParam":7430},{"name":"UK","color":"#1F77B4","firstParam":1.8,"secondParam":12.8,"thirdParam":40400},{"name":"USA","color":"#9467BD","firstParam":2.11,"secondParam":13.6,"thirdParam":49600}]},{"year":2007,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.43,"secondParam":12,"thirdParam":8060},{"name":"UK","color":"#1F77B4","firstParam":1.84,"secondParam":12.9,"thirdParam":41100},{"name":"USA","color":"#9467BD","firstParam":2.12,"secondParam":13.7,"thirdParam":50000}]},{"year":2008,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.45,"secondParam":12.1,"thirdParam":8870},{"name":"UK","color":"#1F77B4","firstParam":1.86,"secondParam":13,"thirdParam":40500},{"name":"USA","color":"#9467BD","firstParam":2.07,"secondParam":13.7,"thirdParam":49400}]},{"year":2009,"countries":[{"name":"Romania","color":"#FF7F0E","firstParam":1.46,"secondParam":12.2,"thirdParam":8420},{"name":"UK","color":"#1F77B4","firstParam":1.88,"secondParam":13,"thirdParam":38500},{"name":"USA","color":"#9467BD","firstParam":2,"secondParam":13.7,"thirdParam":47600}]}]}';
let data, countries;
let origin, yMarkDistance, xMarkDistance, yValueDistance, xValueDistance;
let minYear, maxYear, maxRound;
let currentYear, currentCountry = null;
let isPlaying = true;
let canvasFullWidth = null;
let animationInterval;
let isBubble = true;

//application and data init
window.onload = function (event) {
    data = JSON.parse(exampleDataString);
    graphContainer = document.querySelector('.graph-container');
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    slider = document.querySelector('input[type="range"');

    prepareData();

    //tab alternates between bubble and histogram
    //esc reloads page
    //p pauses or resumes the animation
    //r restarts the animation
    window.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 9:
                switchCanvas();
                break;
            case 27:
                location.reload();
                break;
            case 80:
                if (isBubble) {
                    pauseAnimation();
                }
                break;
            case 82:
                if (isBubble) {
                    restartAnimation();
                }
                break;
            default:
                break;
        }
    })

    window.onresize = function (event) {
        if (isBubble) {
            clearCanvas();
            setDimensions(canvas, graphContainer, 90, 20);
            scaleCanvasCoordinates();
            updateUI(currentYear);
            drawAxis();
            drawCircles(currentYear);
            countryFocus(currentCountry);
        }
    }

    slider.addEventListener('input', function (e) {
        isPlaying = false;
        drawBubble();
    });
}

function prepareData() {
    calculateYearRange();
    slider.setAttribute('max', maxYear);
    slider.setAttribute('min', minYear);
    slider.value = currentYear = minYear;
}

function calculateYearRange() {
    minYear = data.years[0].year;
    maxYear = data.years[data.years.length - 1].year;
}


//bubble js
function drawBubble() {
    currentYear = Number(slider.value);

    clearCanvas();
    updateUI(currentYear);
    drawAxis();
    drawCircles(currentYear);
    countryNextYear();
    countryFocus(currentCountry);
    populateInfo();

    if (currentCountry) {
        activateCurrentEntry(currentCountry.name);
    }
}

function clearCanvas() {
    context.clearRect(0, 0, canvasFullWidth, canvas.height);
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.setLineDash([]);
}

function updateUI(year) {
    window.document.title = year + " - " + data.title;
    document.getElementById('title').innerText = data.title + " - " + year;
}

function drawAxis() {
    let maxY = Math.round(getMaxValue("y") + 0.1 * getMaxValue("y"));
    let maxX = Math.round(getMaxValue("x") + 0.1 * getMaxValue("x"));

    let axisNumberDistance = 20;
    let yAxisTop = 55;
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
            console.log('Parameter is not valid');
    }
}

function getCircleSize(value) {
    return 100 * value / maxRound;
}

function drawCircles(year) {
    maxRound = Math.round(getMaxValue("round") + 0.1 * getMaxValue("round"));

    let searchedYear = data.years.find(currentYear => currentYear.year === year);

    if (!searchedYear) {
        alert("The searched Year is not valid!");
        return;
    }

    //descending sort based on third param
    countries = searchedYear.countries.sort(function (a, b) { return (a.thirdParam < b.thirdParam) ? 1 : ((b.thirdParam < a.thirdParam) ? -1 : 0); });

    countries.map(country => {
        drawCircle(country);
    });
}

function drawCircle(country) {

    let yDistance = origin.y - (country.firstParam / yValueDistance * yMarkDistance);
    let xDistance = origin.x + (country.secondParam / xValueDistance * xMarkDistance);

    context.fillStyle = country.color;
    context.beginPath();
    context.arc(xDistance, yDistance, getCircleSize(country.thirdParam), 0, 2 * Math.PI);
    context.fill();
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

function activateCurrentEntry(countryName) {

    if (!currentCountry) {
        return;
    }

    let entries = document.getElementsByClassName('info-entry');
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].firstElementChild.innerText === countryName) {
            entries[i].classList.add('info-entry-active');
            return;
        }
    }
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

function setDimensions(destination, source, heightDifference, widthDifference) {
    destination.height = source.offsetHeight - heightDifference;
    destination.width = source.offsetWidth - widthDifference;
}

function scaleCanvasCoordinates() {
    context.scale(canvas.width / canvasFullWidth, 1);
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


// called when bubblifier is opened from the landing page
function openBubblifier() {

    let bubblifier = document.getElementById('bubblifier');
    let landpage = document.getElementById('landpage');

    bubblifier.style.display = "block";
    landpage.style.display = "none";

    setDimensions(canvas, graphContainer, 90, 20);
    canvasFullWidth = canvas.width;
    drawBubble();
    animate();
}

function animate() {
    animationInterval = setInterval(function () {
        if (currentYear < maxYear && isPlaying) {
            currentYear++;
            slider.value = currentYear;
            clearCanvas();
            updateUI(currentYear);
            drawAxis();
            drawCircles(currentYear);
            countryNextYear();
            countryFocus(currentCountry);
            populateInfo();
            if (currentCountry) {
                activateCurrentEntry(currentCountry.name);
            }
        } else {
            clearInterval(animationInterval);
            isPlaying = false;
        }
    }, 200);
}

function pauseAnimation() {
    if (isPlaying) {
        clearInterval(animationInterval);
    } else {
        animate();
    }

    isPlaying = !isPlaying;
}

function restartAnimation() {
    if (!isPlaying) {
        slider.value = minYear;
        currentYear = minYear;
        isPlaying = true;
        animate();
    }
}


//changing interface between bubble and histogram
function switchCanvas() {

    clearCanvas();
    let switchButton = document.querySelector('.bublify-button');
    let bubblePanel = document.getElementById("bubble");
    let histogramPanel = document.getElementById("histogram");
    let timeRange = document.querySelector('input[type="range"]');
    let playButton = document.getElementById('play');
    let resetButton = document.getElementById('reset');
    let timelineYear = document.querySelector('.timeline-year');

    isBubble = !isBubble;

    if (isBubble) {
        let bubblePanel = document.getElementById("bubble");
        switchButton.innerText = "Histogram";
        bubblePanel.classList.remove('hidden');
        histogramPanel.classList.add('hidden');
        timeRange.classList.remove('hidden');
        playButton.classList.remove('hidden');
        resetButton.classList.remove('hidden');
        timelineYear.classList.remove('hidden');
        isBubble = true;
        drawBubble();
    } else {
        switchButton.innerText = "Bubble Chart";
        bubblePanel.classList.add('hidden');
        histogramPanel.classList.remove('hidden');
        if (isPlaying) {
            pauseAnimation();
        }
        timeRange.classList.add('hidden');
        playButton.classList.add('hidden');
        resetButton.classList.add('hidden');
        timelineYear.classList.add('hidden');
        isBubble = false;
        histogramInputMessage();
        histogramInfo();
    }

}


//histogram js
function histogramInputMessage() {
    context.font = "35px Arial";
    context.fillText('Please select a parameter and an entity.', 300, 250);
}

function histogramInfo() {
    let container = document.querySelector('.histogram-info');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let form = document.createElement('form');

    let paramBoxLabel = document.createElement('p')
    paramBoxLabel.innerText = "Select property";


    let paramBox = document.createElement('select');
    paramBox.name = "param";
    paramBox.style.width = "80%";

    let firstOption = document.createElement('option');
    let secondOption = document.createElement('option');
    let thirdOption = document.createElement('option');

    firstOption.value = "firstParam";
    firstOption.innerText = data.firstParam;
    secondOption.value = "secondParam";
    secondOption.innerText = data.secondParam;
    thirdOption.value = "thirdParam";
    thirdOption.innerText = data.thirdParam;

    paramBox.appendChild(firstOption);
    paramBox.appendChild(secondOption);
    paramBox.appendChild(thirdOption);

    let countryBoxLabel = document.createElement('p')
    countryBoxLabel.innerText = "Select entity";

    let countryBox = document.createElement('select');
    countryBox.name = "country";

    countries.map(country => {
        let countryOption = document.createElement('option');
        countryOption.value = country.name;
        countryOption.innerText = country.name;
        countryBox.appendChild(countryOption);
    })

    let submitButton = document.createElement('button');
    submitButton.innerText = "Create Histogram";
    submitButton.style.display = "block";
    submitButton.style.margin = "0 auto";
    submitButton.style.marginTop = "10px";
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        let country = countryBox.options[countryBox.selectedIndex].value;
        let param = paramBox.options[paramBox.selectedIndex].value;
        drawHistogram(param, country);
    });

    form.appendChild(paramBoxLabel);
    form.appendChild(paramBox);
    form.appendChild(countryBoxLabel);
    form.appendChild(countryBox);
    form.appendChild(submitButton);

    container.appendChild(form);
}

function drawHistogram(param, country) {
    let countryData = extractCountryData(param, country);
    clearCanvas();
    drawHistogramAxis(param, countryData, country);
}

function extractCountryData(param, country) {
    let countryData = [];
    switch (param) {
        case 'firstParam':
            data.years.map(year => {
                year.countries.map(indexCountry => {
                    if (indexCountry.name === country) {
                        countryData.push(indexCountry.firstParam);
                    }
                })
            });
            return countryData;
        case 'secondParam':
            data.years.map(year => {
                year.countries.map(indexCountry => {
                    if (indexCountry.name === country) {
                        countryData.push(indexCountry.secondParam);
                    }
                })
            })
            return countryData;
        case 'thirdParam':
            data.years.map(year => {
                year.countries.map(indexCountry => {
                    if (indexCountry.name === country) {
                        countryData.push(indexCountry.thirdParam);
                    }
                })
            })
            return countryData;
        default:
            console.log('Parameter is not valid');
    }
}

function drawHistogramAxis(param, countryData, country) {

    let maxY = Math.max(...countryData) + 1 / 10 * Math.max(...countryData);
    let maxX = maxYear;

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
    xMarkDistance = (xAxisTop - origin.x) / (countryData.length + 1);

    yValueDistance = (maxY / 19);

    context.fillStyle = "black";
    context.font = "15px Arial";

    context.beginPath();
    context.moveTo(origin.x, origin.y);
    context.lineTo(origin.x, yAxisTop);
    context.stroke();

    context.beginPath();
    context.moveTo(origin.x, origin.y);
    context.lineTo(xAxisTop, origin.y);
    context.stroke();

    context.fillText("0", origin.x - 30, origin.y + 5)

    context.font = "10px Arial";
    let currentYDistance = origin.y - yMarkDistance;
    let currentXDistance = origin.x + xMarkDistance;
    let currentYValue = yValueDistance;

    for (let i = 0; i < 19; i++) {
        //drawing y marks and numbers
        context.beginPath();
        context.moveTo(yMark.start, currentYDistance);
        context.lineTo(yMark.end, currentYDistance);
        context.stroke();

        context.fillText(currentYValue.toFixed(3), yMark.start - axisNumberDistance - 20, currentYDistance + 5);

        currentYDistance -= yMarkDistance;
        currentYValue = (currentYValue + yValueDistance);
    }

    drawRectangles(countryData, country);

    context.fillStyle = "black";
    for (let i = 0, currYear = minYear; i < countryData.length; i++ , currYear++) {
        //drawing x marks and numbers
        context.beginPath();
        context.moveTo(currentXDistance, xMark.start);
        context.lineTo(currentXDistance, xMark.end);
        context.stroke();

        context.fillText(currYear, currentXDistance - 15, xMark.start + axisNumberDistance + 15);

        currentXDistance += xMarkDistance;
    }

    context.font = "15px Arial";
    context.fillText(data[param], 5, 15);
    context.fillText("Years", xAxisTop + 20, origin.y + 5);

}

function drawRectangles(countryData, countryName) {

    let currentXDistance = origin.x;
    let color = (data.years[0].countries.find(country => country.name === countryName)).color;
    context.fillStyle = color;

    for (let i = 0; i < countryData.length; i++) {
        currentXDistance += xMarkDistance / 2;
        currentYDistance = (countryData[i] / yValueDistance) * yMarkDistance;
        context.rect(currentXDistance, origin.y - currentYDistance, xMarkDistance, currentYDistance);
        context.fill();
        context.rect(currentXDistance, origin.y - currentYDistance, xMarkDistance, currentYDistance);
        context.stroke();
        context.font = "10px Arial";
        context.fillText(countryData[i], currentXDistance + xMarkDistance / 2 - 5, origin.y - currentYDistance - 5);
        currentXDistance += xMarkDistance / 2;
    }
}


//--landing page js
function loadJSON(json) {
    try {
        data = JSON.parse(json);
        prepareData();
        openBubblifier();
    } catch (ex) {
        alert('The JSON is not valid!');
    }
}

function dragOver(event) {
    event.preventDefault();
}

function dropOver(event) {
    event.preventDefault();

    let file = event.dataTransfer.items[0].getAsFile();

    if (!file || file.type != "application/json") {
        alert('The uploaded file is not a json!');
    } else {

        let fileReader = new FileReader();

        fileReader.readAsBinaryString(file);

        fileReader.onloadend = function () {
            loadJSON(fileReader.result);
        }
    }
}