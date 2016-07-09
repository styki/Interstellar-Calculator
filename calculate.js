var lightYear = 9.461e+15;
var year = 3.154e+7;
var acceleration = 0.05;
var speedOfLight = 3e+8;
var time, maxSpeed, distance, density, mass, area, cd, drag, thrust;

var distanceInput = $("#input1");
var massInput = $("#input2");
var densityInput = $("#input3");
var areaInput = $("#input4");
var cdInput = $("#input5");

var timeOutput = $("#output1");
var maxSpeedOutput = $("#output2");
var maxRelativisticSpeedOutput = $("#output3");
var maxThrustOutput = $("#output4");

var calculateTime = function () {
    var dist = distance * lightYear;
    time = Math.sqrt(dist / acceleration) * 2 / year;
    timeOutput.text("Време: " + time + " години");
};

var calculateMaxSpeed = function () {
    maxSpeed = time * acceleration * year / 2;
    maxSpeedOutput.text("Максимална скорост: " + (maxSpeed / 1000) + " km/s");
    maxRelativisticSpeedOutput.text("Максимална скорост: " + maxSpeed/speedOfLight + " *c");
};

var calculateMaxThrust = function () {
    drag = density * maxSpeed * maxSpeed * area * cd / 2;
    thrust = drag + (mass * acceleration);
    maxThrustOutput.text("Максимална тяга: " + thrust + " N");
};

distanceInput.change(function () {
    distance= distanceInput.val();
    calculateTime();
    calculateMaxSpeed();
    calculateMaxThrust();
});

massInput.change(function () {
    mass = massInput.val();
    calculateMaxThrust();
});

densityInput.change(function () {
    density = densityInput.val();
    calculateMaxThrust();
});

areaInput.change(function () {
    area = areaInput.val();
    calculateMaxThrust();
});

cdInput.change(function () {
    cd = cdInput.val();
    calculateMaxThrust();
});