let nom: string = "Aziz";
let age :number=20;
let isStudent : boolean=true;

function add (a:number,b:number):number{
    return a+b;
}

interface etudiant{
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

class student implements etudiant{
    constructor(
        public id: number, 
        public nom: string,
        public prenom: string, 
        public age: number
    ) {}

  affichage():void{
    console.log(`Étudiant #${this.id} : ${this.prenom} ${this.nom}, ${this.age} ans`);
  }
}

const etu1 = new student(1, "Mhenni", "Mphamed Aziz", 20);
etu1.affichage();

function fonctionTableau<T>(tab: T[]): T[] {
  return tab;
}

const tabnombres=fonctionTableau<number>([1,2]);

function fonction_union_opt(union: string | number, opt?: string): void {
  if (opt) {
    console.log(`params : ${union} ${opt}`);
  } else {
    console.log(` params : ${union}`);
  }
}

enum Role {
  STUDENT = "Student",
  TEACHER = "Teacher",
}

function afficherNiveau(role: Role): void {
  console.log(`Niveau sélectionné : ${role}`);
}

