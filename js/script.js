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

//# Esercizio 2

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
];

//* - 1 Creo un Array con gli studenti che hanno un totale di voti superiore a 70 usando il metodo "filter".

const over70StudentsGrades = students.filter(({grades}) => grades > 70);

console.log('Il numero di studenti con un grado superiore al 70: ',over70StudentsGrades)

//* - 2 Creo un Array con gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 usando il metodo "filter".

const over70StudentsAndIdOver120 = students.filter(({grades, id}) => grades > 70 && id > 120);

console.log('Il numero di studenti con un grado superiore al 70 e id superiore a 120: ',over70StudentsAndIdOver120)

//* - 3 Creo un Array con tutti i nomi degli studenti in maiuscolo tramite il metodo ".map".

const studentsList = students.map(({name})  => name.toUpperCase());

console.log('I nomi degli studenti sono: ',studentsList)




