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
const guestList = guests.map((name, i) => ({ tableName, name, place: i + 1 }));

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

//# Esercizio 3

const cycles = [
    { name: 'Bianchi', weight: 10.5 },
    { name: 'Look', weight: 8.2 },
    { name: 'Willier Triestina', weight: 7.2 },
    { name: 'Pinarello', weight: 9.0 },
    { name: 'Colnago', weight: 12.1 },
    { name: 'Cervelo S5', weight: 10.5 },
    { name: 'Canyon', weight: 6.0 },
    { name: 'Specialized', weight: 5.0 },
  ];

  //* - 1 Inizializzo una variabile alla bici con il peso minore stabilendo che si troverà all'inizio dell'Erray.
  let lighterCycle = cycles[0];

  //* - 2 Utilizzo un ciclo forEach per controllare i valori di ogni elemento dell'Erray.
  cycles.forEach((cycle, i) => {

    //* - 3 Verifico tramite una condizionale che l'index sia diverso da 0 e che il peso di ogni bicicletta 
    //* sia minore del peso della bicicletta che si trova all'inizio dell'Erray.
    if (i !== 0 && cycle.weight < lighterCycle.weight) {
        lighterCycle = cycle;
    }
  });
  
  //* - 4 Stampo in console il risultato.
  console.log(`La bici con il peso minore è ${lighterCycle.name} con un peso di ${lighterCycle.weight} kg.`);

//# Esercizio 4

//* - 1 Costruisco l'Array di partenza con i nomi delle squadre.
const teams = [
    {   name: "Juventus",
        points: 0,
        fouls: 0 
    },
    { 
        name: "Milan", 
        points: 0, 
        fouls: 0 
    },
    { 
        name: "Inter", 
        points: 0, 
        fouls: 0 
    },
    { 
        name: "Roma", 
        points: 0, 
        fouls: 0 
    },
    { 
        name: "Napoli", 
        points: 0, 
        fouls: 0 
    },
    { 
        name: "Lazio", 
        points: 0, 
        fouls: 0 
    },
  ];

//* - 2 Genero la funzione del numero casuale.
  const getRandomNumber = (min,max) => Math.floor(Math.random() * (max-min + 1) + min);
  
  //* - 3 Riassegno i valori sia ai punti che ai falli di ogni squadra con un ciclo forEach tramite la funzione dei numeri random.
  teams.forEach(team => {
    team.points = getRandomNumber(0,100);
    team.fouls = getRandomNumber(0,100);
  });

console.log(teams)

//* - 4 Costruisco un nuovo array con i nomi delle squadre e i falli subiti, tramite il destructuring, stampandolo in console.
const newTeams = teams.map((team) => {
    const { name, fouls } = team;
    return { name, fouls };
})

console.log(newTeams)
