export const co_mind = {

  // ------------------------------------------------------------
  // 1 · Unklarheits-Check (Proportion / Blockade / Zentrum-Stau)
  // ------------------------------------------------------------
  unklar(os) {
    return (
      os.blockade() >= 2 ||
      os.sicht() < 4 ||
      Math.abs(os.aura - os.mana) > 4 ||
      Math.abs(os.mana - os.spiegel) > 4 ||
      (os.kompass() === "Zentrum" && os.blockade() >= 1)
    );
  },

  // ------------------------------------------------------------
  // 2 · Proportions-Korrektur (leicht, nicht invasiv)
  // ------------------------------------------------------------
  proportion(os) {
    return {
      aura: os.aura * 0.9,
      mana: os.mana * 0.9,
      spiegel: os.spiegel * 0.9
    };
  },

  // ------------------------------------------------------------
  // 3 · Blockade-Korrektur (nur wenn nötig)
  // ------------------------------------------------------------
  unblock(os) {
    return {
      aura: os.aura < 3 ? os.aura + 1 : os.aura,
      mana: os.mana < 3 ? os.mana + 1 : os.mana,
      spiegel: os.spiegel < 3 ? os.spiegel + 1 : os.spiegel
    };
  },

  // ------------------------------------------------------------
  // 4 · Korrektur-Engine (wird nur aktiv, wenn unklar)
  // ------------------------------------------------------------
  correct(os) {
    if (!this.unklar(os)) {
      return { status: "klar", correction: false };
    }

    return {
      status: "unklar",
      correction: true,
      proportion: this.proportion(os),
      unblock: this.unblock(os)
    };
  }
};
