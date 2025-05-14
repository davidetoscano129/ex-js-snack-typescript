// Snack 2
type Dipendente = {
    nome: string;
    cognome: string;
    annoNascita: number;
    sesso: 'm' | 'f';
    anniDiServizio: number[];
}

type Developer = Dipendente & {
    livelloEsperienza: "junior" | "Mid" | "Senior";
    linguaggi?: string[];
    certificazioni: string[]
}

type ProjectManager = Dipendente & {
    teamSize: number | null;
    budgetGestito: number;
    stakeholderPrincipali: string[]
}