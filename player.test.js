const Player = require('./player');

test('Crear jugador debe ser instancia de Player', () => {
  const player1 = new Player();
  expect(typeof player1).toBe('object');
  expect(player1).toBeInstanceOf(Object);
  expect(player1).toBeInstanceOf(Player);
});

test('Crear jugador con nombre, se almacena', () => {
  const player1 = new Player('Pepe');
  expect(player1.name).toBe('Pepe');
});

test('Crear jugador con genero, se almacena correctamente', () => {
  const p1 = new Player('Pepe', 'male');
  expect(p1.sex).toBe('male');
  const p2 = new Player('Maria', 'female');
  expect(p2.sex).toBe('female');
  const p3 = new Player('Paco', 'abc');
  p3.sex = 'male';
  expect(p3.sex).toBe('female');
});

test('Mostrar fecha nacimiento jugador debe ser correcta', () => {
  const p1 = new Player('Pepe', 'male', '22/10/2002');
  const fecha = new Date(p1.birthday);
  expect(p1.birthday).toEqual(fecha);
});
