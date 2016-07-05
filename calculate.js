var lightYear = 9.461e+15;
var year = 3.154e+7;
var acceleration = 0.05;
var distance = $("#input1");
var time = $("#output1");

var calculateTime = function (dist) {
    dist *= lightYear;
    var t = Math.sqrt(dist/acceleration)*2/year;
    time.text(t);
};

distance.change(function () {
    var distanceValue = distance.val();
    calculateTime(distanceValue);
});