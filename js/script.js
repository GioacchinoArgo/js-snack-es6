console.log('JS OK')

//# Esercizio 1

const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

// - 1
const guestList = guests.map((g, i) => {
    return {
        tableName: 'Tavolo Vip',
        name: g,
        place: i++
    }
});

console.log(guestList)

