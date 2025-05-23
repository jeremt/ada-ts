interface FamousWoman {
  name: string;
  famousQuote: string;
}

// grace à l'interface, simone est correctement typée
const simone: FamousWoman = {
  name: "Simone de Beauvoir",
  famousQuote: "On ne naît pas femme, on devient femme.",
};

// si tu tapes simone. l'autocomplétion te propose name et famousQuote
// automatiquement.
console.log(simone.name);

// TODO: utilise l'interface pour typer correctement le tableau avec l'interface
const women: FamousWoman[] = [];

// on ajoute Simone à la liste
women.push(simone);

// puis Malala
women.push({
  name: "Malala Yousafzai",
  famousQuote:
    "L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde.",
});
console.log("Array:",[women])

// TODO: corrige l'erreur grace au typage !
women.push({
  name: "Marie Curry",
  famousQuote: "Il ne faut pas avoir peur de rêver et d'oser les réaliser.",
});

for (const woman of women) {
  // TODO: affiche le nom suivi de la citation
  // si tu as tout bien fait correctement, typescript devrait t'autocompléler
  // les champs automatiquement !
  console.log(`${woman.name}: "${woman.famousQuote}"` )
}
