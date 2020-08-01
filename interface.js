$(document).ready(function () {
  var thermostat = new Thermostat();
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage);
  }
  updateTemperature();
  $('#up').click(function () {
    thermostat.up(1);
    updateTemperature();
  });
  $('#down').click(function () {
    thermostat.down(1);
    updateTemperature();
  });
  $('#reset').click(function () {
    thermostat.reset();
    updateTemperature();
  });
  $('#off').click(function () {
    thermostat.powerSaveOff();
    $('#state').text('off');
  });
  $('#on').click(function () {
    thermostat.powerSaveOn();
    $('#state').text('on');
    updateTemperature();
  });
  $('#city').change(function () {
    var city = $('#city').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b209f11fecf66d24fb44d4fdb65c7021&units=metric', function (data) {
      $('#degrees').text(data.main.temp);
    });
  });
});