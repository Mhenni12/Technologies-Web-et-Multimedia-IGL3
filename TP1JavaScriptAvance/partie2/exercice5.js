const livre = {
  titre: "1984",
  auteur: "George Orwell",
  annee: 1949,
  getInfo() {
    return `${this.auteur}'s book, ${this.titre} was written in ${this.annee}.`;
  },
};
console.log(livre.getInfo());
