if (true) {

  console.log(a); // hoisted avec valeur undefined
  // console.log(b); //! ReferenceError: Cannot access 'b' before initialization
  // console.log(c); //! ReferenceError: Cannot access 'c' before initialization

  var a = 1;    // Portée fonctionnelle
                // Mais si déclarée dans un bloc {}, elle ignore le bloc.
  let b = 2;    // Portée de bloc
  const c = 3;  // Portée de bloc
                // Doit être initialisée dès la déclaration

  console.log(a);
  console.log(b);
  console.log(c);

  // c = 40; //! Erreur c ne peut pas etre réaffectée
}

console.log(a); // accessible hors du bloc
// console.log(b); //! Erreur: b is not defined
// console.log(c); //! Erreur: c is not defined