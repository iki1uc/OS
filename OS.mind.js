export const OS_mind = {

  // 1 · Energetische Grundwerte (OUreal)
  aura: 1,      // 1–9
  mana: 1,      // 1–9
  spiegel: 1,   // 1–9

  // ------------------------------------------------------------
  // 2 · Sichtbarkeit (Continuum)
  // ------------------------------------------------------------
  sicht: function() {
    return (this.aura + this.mana + this.spiegel) / 3;
  },

  // ------------------------------------------------------------
  // 3 · Blockade (realitätsnah)
  // ------------------------------------------------------------
  blockade: function() {
    let b = 0;
    if (this.aura < 3) b++;
    if (this.mana < 3) b++;
    if (this.spiegel < 3) b++;
    return b; // 0–3
  },

  // ------------------------------------------------------------
  // 4 · Status (kontinuierlich)
  // ------------------------------------------------------------
  status: function() {
    if (this.blockade() >= 2) return "unsichtbar";
    if (this.sicht() >= 6) return "sichtbar";
    return "neutral";
  },

  // ------------------------------------------------------------
  // 5 · OCTA-KOMPASS (vektor-gerecht)
  // ------------------------------------------------------------
  kompass: function() {

    // Vektor-Projektion
    const x = this.mana - this.spiegel; // Ost-West
    const y = this.aura - this.mana;    // Nord-Süd

    // Zentrum (Continuum)
    if (Math.abs(x) < 1 && Math.abs(y) < 1)
      return "Zentrum";

    // Norden
    if (y >= 3 && Math.abs(x) < 2)
      return "Norden";

    // Süden
    if (y <= -3 && Math.abs(x) < 2)
      return "Süden";

    // Osten
    if (x >= 3 && Math.abs(y) < 2)
      return "Osten";

    // Westen
    if (x <= -3 && Math.abs(y) < 2)
      return "Westen";

    // Zwischenrichtungen (OCTA)
    if (x >= 2 && y >= 2)
      return "Nord-Ost";

    if (x >= 2 && y <= -2)
      return "Süd-Ost";

    if (x <= -2 && y <= -2)
      return "Süd-West";

    if (x <= -2 && y >= 2)
      return "Nord-West";

    return "Zentrum";
  },

  // ------------------------------------------------------------
  // 6 · Verhalten (realitätsnah)
  // ------------------------------------------------------------
  verhalten: function() {

    return {

      wirkung:
        this.aura >= 6 ? "hohe Präsenz" :
        this.aura <= 3 ? "geringe Sichtbarkeit" :
        "neutral",

      energie:
        this.mana >= 6 ? "aktive Handlung" :
        this.mana <= 3 ? "niedrige Aktivität" :
        "stabile Aktivität",

      resonanz:
        this.spiegel >= 6 ? "hohe soziale Resonanz" :
        this.spiegel <= 3 ? "geringe Resonanz" :
        "normale Resonanz"
    };
  },

  // ------------------------------------------------------------
  // 7 · Statistik (legal, realitätsnah)
  // ------------------------------------------------------------
  stats: function() {

    let s = [];

    if (this.aura >= 7) s.push("starke Außenwirkung");
    if (this.mana >= 7) s.push("hohe Energieentwicklung");
    if (this.spiegel >= 7) s.push("soziale Resonanzsteigerung");

    if (this.aura <= 2) s.push("niedrige Sichtbarkeit");
    if (this.mana <= 2) s.push("Energieverlust");
    if (this.spiegel <= 2) s.push("soziale Isolation");

    return s;
  }
};
