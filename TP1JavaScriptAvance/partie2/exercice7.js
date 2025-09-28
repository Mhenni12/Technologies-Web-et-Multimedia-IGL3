const notes = [12, 5, 17, 9, 20];

const moyenne = notes.reduce((somme, note) => somme + note, 0) / notes.length;
console.log("Moyenne :", moyenne);

const notesTriees = [...notes].sort((a, b) => b - a);
console.log("Notes triées :", notesTriees);

const notesValides = notes.filter((note) => note >= 10);
console.log("Notes ≥ 10 :", notesValides);
