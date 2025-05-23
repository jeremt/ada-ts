interface FamousWoman {
  name: string;
  famousQuote: string;
}

const simone: FamousWoman = {
  name: "Simone de Beauvoir",
  famousQuote: "On ne naît pas femme, on devient femme.",
};

console.log(simone.name);

const women: FamousWoman[] = [];

// on ajoute Simone à la liste
women.push(simone);

// puis Malala
women.push({
  name: "Malala Yousafzai",
  famousQuote:
    "L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde.",
});

women.push({
  name: "Marie Curry",
  famousQuote: "Il ne faut pas avoir peur de rêver et d'oser les réaliser.",
});

for (const woman of women) {
  console.log(`${woman.name} - ${woman.famousQuote}`);
}
