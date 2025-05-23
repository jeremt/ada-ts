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

for (const issue of issues) {
  if (issue.label) {
    console.log(`# [${issue.label.title}:${issue.label.color}] ${issue.title}`);
  } else {
    console.log(`# ${issue.title}`);
  }
  console.log(issue.description ?? "");
  console.log();
}
