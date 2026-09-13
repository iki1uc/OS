export const OS_mind_SYNC = {

  // ------------------------------------------------------------
  // 1 · Physikalische Achsen (Real‑Life‑Basis)
  // ------------------------------------------------------------
  CO2: 0,     // Last / Druck / Verbrauch
  O2: 0,      // Aktivierung / Energie / Präsenz
  H2O: 0,     // Fluss / Kontinuum / Stabilisierung

  // ------------------------------------------------------------
  // 2 · Mentale Achsen (OS.mind‑Basis)
  // ------------------------------------------------------------
  aura: 0,    // Außenwirkung
  mana: 0,    // Handlungskraft
  zen: 0,     // Ruhe / Mitte / Neutralität

  // ------------------------------------------------------------
  // 3 · SYNC‑Achsen (operative Wahrheit)
  // ------------------------------------------------------------
  fokus: 0,
  stabilitaet: 0,
  tiefe: 0,
  weite: 0,
  resonanzfeld: 0,
  impuls: 0,
  kontinuum: 0,
  finalisierung: 0,
  regeneration: 0,
  industriegrad: 0,
  systemlast: 0,
  synchronitaet: 0,
  koharenz: 0,
  evo: 0,
  qi_iqq: 0,

  // ------------------------------------------------------------
  // 4 · Atomare Cluster (G + M + V)
  // ------------------------------------------------------------
  gravitation: function() {
    return this.stabilitaet + this.systemlast + this.koharenz;
  },

  magnetismus: function() {
    return this.aura + this.resonanzfeld + this.synchronitaet;
  },

  vektorfluss: function() {
    return this.impuls + this.kontinuum + this.evo;
  },

  // ------------------------------------------------------------
  // 5 · RUN‑21 (physisch + mental + SYNC)
  // ------------------------------------------------------------
  run21: function() {
    const phys = this.CO2 + this.O2 + this.H2O;
    const mental = this.mana + this.aura + this.zen;
    const sync = this.fokus + this.stabilitaet + this.tiefe + this.weite +
                 this.resonanzfeld + this.impuls + this.kontinuum +
                 this.finalisierung + this.regeneration + this.industriegrad +
                 this.systemlast + this.synchronitaet + this.koharenz +
                 this.evo + this.qi_iqq;

    return phys + mental + sync;
  },

  // ------------------------------------------------------------
  // 6 · Poker‑Face (Neutralisierung)
  // ------------------------------------------------------------
  pokerface: function() {
    return {
      gravitation: 0,
      magnetismus: 0,
      zen: this.zen + 3, // Ruheverstärkung
      status: "neutralisiert"
    };
  },

  // ------------------------------------------------------------
  // 7 · All‑In / All‑Out (Modi)
  // ------------------------------------------------------------
  allIn: function() {
    return {
      magnetismus: this.magnetismus() + 3,
      gravitation: this.gravitation() + 3,
      industriegrad: this.industriegrad + 2,
      modus: "all-in"
    };
  },

  allOut: function() {
    return {
      magnetismus: this.magnetismus() - 2,
      gravitation: this.gravitation() - 2,
      regeneration: this.regeneration + 3,
      modus: "all-out"
    };
  }
};
