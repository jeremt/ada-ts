interface Label {
  title: string;
  color: string;
}

interface Issue {
  title: string;
  description?: string;
  label?: Label;
}

// Avec le ? on n'est pas obligé de préciser description ou label à chaque fois
const issues: Issue[] = [
  {
    title: "Finish landing page",
    description: "Still a lot of work...",
    label: { color: "blue", title: "feature" },
  },
  {
    title: "Handle responsive",
    label: { color: "cyan", title: "improvement" },
  },
  { title: "Fix footer links" },
];

// TODO: affiche toutes les issues, avec leur label si présent
// {
//     title: "Finish landing page",
//     description: "Still a lot of work...",
//     label: { color: "blue", title: "feature" },
// }
// affiche :
// # [feature:blue] Finish landing page
// Still a lot of work...
//
// { title: "Fix footer links" },
// affiche :
// # Fix footer links
//
// (attention aux valeurs optionnelles !)
