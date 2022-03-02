const Ship = require('../src/cruiseships');

describe('constructor', () => {
    it('returns an object', () => {
        let olympos = new Ship('olympos');
        expect(olympos).toBeInstanceOf(Object);
    });
    it('has a name', () => {
        let olympos = new Ship('Olympos', 'Mağusa');
        expect(olympos.name).toEqual('Olympos');
    });
    it('has a starting port', () => {
        let olympos = new Ship('olympos', 'Mağusa');
        expect(olympos.startingPort).toEqual('Mağusa');
    });

});