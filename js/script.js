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

//* - 1 Creo un nuovo Array inserendo i dati aggiuntivi tramite il metodo ".map"
const guestList = guests.map((guest, i) => {
    return {
        tableName: 'Tavolo Vip',
        name: guest,
        place: i++
    }
});

console.log(guestList)





