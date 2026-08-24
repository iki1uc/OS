OS.OUreal = {

  // 1 · Energetische Werte
  aura: 1–9,
  mana: 1–9,
  spiegel: 1–9,

  // 2 · Sichtbarkeit
  sicht: function() {
    return (this.aura + this.mana + this.spiegel) / 3;
  },

  // 3 · Blockade
  blockade: function() {
    let b = 0;
    if (this.aura < 3) b++;
    if (this.mana < 3) b++;
    if (this.spiegel < 3) b++;
    return b;
  },

  // 4 · Status
  status: function() {
    if (this.blockade() >= 2) return "unsichtbar";
    if (this.sicht() >= 6) return "sichtbar";
    return "neutral";
  }
}
