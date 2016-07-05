var lightYear = 9.461e+15;
var year = 3.154e+7;
var acceleration = 0.05;
var speedOfLight = 3e+8;
var time;
var maxSpeed;
var distance;

var distanceInput = $("#input1");

var timeOutput = $("#output1");
var maxSpeedOutput = $("#output2");
var maxRelativisticSpeed = $("#output3");

var calculateTime = function () {
    var dist = distance * lightYear;
    time = Math.sqrt(dist/acceleration)*2/year;
    timeOutput.text("Време: " + time + " години");
};

var calculateMaxSpeed = function () {
    maxSpeed = time*acceleration*year/2;
    maxSpeedOutput.text("Максимална скорост: " + (maxSpeed/1000) + " m/s");
    maxRelativisticSpeed.text("Максимална скорост: " + maxSpeed/speedOfLight + " *c");
};

distanceInput.change(function () {
    distance= distanceInput.val();
    calculateTime();
    calculateMaxSpeed();
});