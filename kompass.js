OS.KOMPASS = function(OU) {

  const { aura, mana, spiegel } = OU;

  const x = mana - spiegel;   // Ost-West
  const y = aura - mana;      // Nord-Süd

  // Zentrum
  if (Math.abs(x) < 1 && Math.abs(y) < 1)
    return "Zentrum";

  // Hauptachsen
  if (y >= 3 && Math.abs(x) < 2) return "Norden";
  if (y <= -3 && Math.abs(x) < 2) return "Süden";
  if (x >= 3 && Math.abs(y) < 2) return "Osten";
  if (x <= -3 && Math.abs(y) < 2) return "Westen";

  // OCTA
  if (x >= 2 && y >= 2) return "Nord-Ost";
  if (x >= 2 && y <= -2) return "Süd-Ost";
  if (x <= -2 && y <= -2) return "Süd-West";
  if (x <= -2 && y >= 2) return "Nord-West";

  return "Zentrum";
};
