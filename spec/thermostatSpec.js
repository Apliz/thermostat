describe('Thermostat', function () {

  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });
  it('temp starts at 20', function () {
    expect(thermostat.temperature).toEqual(20);
  });
  it('up method exists', function () {
    spyOn(thermostat, 'up');
    thermostat.up();
    expect(thermostat.up).toHaveBeenCalled();
  });
  it('up method changes temperature', function () {
    thermostat.up(5);
    expect(thermostat.temperature).toEqual(25);
  });
  it('down method exists', function () {
    thermostat.down(10);
    expect(thermostat.temperature).toEqual(10);
  });
  it('temp does not drop below 10', function () {
    thermostat.down(15);
    expect(thermostat.temperature).toEqual(10);
  });
  it('powerSave defaults to on', function () {
    expect(thermostat.powerSave).toEqual(true);
  });
  it('temperature max is 25 when powerSave is on', function () {
    thermostat.up(10);
    expect(thermostat.temperature).toEqual(25);
  });
  it('powerSaveOff/ powerSaveOn switches state', function () {
    thermostat.powerSaveOff();
    expect(thermostat.powerSave).toEqual(false);
    thermostat.powerSaveOn();
    expect(thermostat.powerSave).toEqual(true);
  });
  it('resets temperature back to 20', function(){
    thermostat.up(3);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });
  it('returns low usage if temperature < 18', function(){
    thermostat.down(3);
    thermostat.usageState();
    expect(thermostat.usage).toEqual('low-usage');
  });
  it('returns high usage if temperature > 24', function(){
    thermostat.up(5);
    thermostat.usageState();
    expect(thermostat.usage).toEqual('high-usage');
  });
});