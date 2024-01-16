const intrebari = [
    {
        intrebare: "Care este capitala Frantei?",
        optiuni: ["Berlin", "Paris", "Madrid", "Roma"],
        indexRaspunsCorect: 1
    },
    {
        intrebare: "Care planeta este cunoscuta ca Planeta Rosie?",
        optiuni: ["Marte", "Jupiter", "Venus", "Saturn"],
        indexRaspunsCorect: 0
    },
    {
        intrebare: "Care este cel mai mare mamifer din lume?",
        optiuni: ["Elefant", "Balena albastra", "Girafa", "Hipopotam"],
        indexRaspunsCorect: 1
    }
];

let indexIntrebareCurenta = 0;
let scor = 0;

function afiseazaIntrebare() {
    const intrebareCurenta = intrebari[indexIntrebareCurenta];
    document.getElementById("question").textContent = intrebareCurenta.intrebare;

    const containerOptiuni = document.getElementById("options-container");
    const butoane = containerOptiuni.getElementsByTagName("button");

    for (let i = 0; i < butoane.length; i++) {
        butoane[i].textContent = intrebareCurenta.optiuni[i];
    }
}

function verificaRaspuns(indexSelectat) {
    const intrebareCurenta = intrebari[indexIntrebareCurenta];
    if (indexSelectat === intrebareCurenta.indexRaspunsCorect) {
        scor++;
    }

    indexIntrebareCurenta++;

    if (indexIntrebareCurenta < intrebari.length) {
        afiseazaIntrebare();
    } else {
        afiseazaRezultat();
    }
}

function afiseazaRezultat() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    document.getElementById("result").textContent = `Scorul tau: ${scor} din ${intrebari.length}`;
}

afiseazaIntrebare();