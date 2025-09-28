class Etudiant {
  nom;
  note;
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }
  getMention() {
    if (this.note >= 16) return "Tres bien";
    else if (this.note < 16 && this.note >= 14) return "Bien";
    else if (this.note < 14 && this.note >= 10) return "passable";
    else if (this.note < 10) return "Echec";
  }
}

const etudiant1 = new Etudiant("Ali", 16);
const etudiant2 = new Etudiant("Asma", 13);
const etudiant3 = new Etudiant("Sami", 9);
console.log(etudiant1.getMention());
console.log(etudiant2.getMention());
console.log(etudiant3.getMention());
