class Athlete {
  public _goldMedals = ""; // ajouter private permet d'empécher l'accès en dehors de la classe
  constructor(
    // ajouter public ou private dans le constructeur ajoute les champs automatiquement
    private _name: string,
    private _country: string,
    private _sport: string,
    numberOfMedals: number
  ) {
    this._goldMedals = "🥇".repeat(numberOfMedals);
  }

  presentation() {
    console.log(
      `${this._name} (${this._sport}, 🥇 ${this._goldMedals.length}, 📍 ${this._country})`
    );
  }

  winGold() {
    this._goldMedals += "🥇";
  }

  get goldMedals() {
    return this._goldMedals;
  }
}

const yuna = new Athlete("Yuna Kim", "Corée du Sud", "Patinage artistique", 1);
const nadia = new Athlete("Nadia Comăneci", "Roumanie", "Gymnastique", 5);
const marit = new Athlete("Marit Bjørgen", "Norvège", "Ski de fond", 8);
const valentina = new Athlete("Valentina Vezzali", "Escrime", "Escrime", 6);

yuna.presentation();
nadia.winGold();
nadia.presentation();
marit.winGold();
console.log(marit.goldMedals);
marit._goldMedals = "💩"; // erreur car le champs est privé !
