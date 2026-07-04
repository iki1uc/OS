# SYNC — Synchronisations-Modul im NC-System

SYNC ist ein neutrales Synchronisations-Modul im NC-System.
Es erzeugt keine eigenen Werte und trifft keine eigenen Entscheidungen.
SYNC hält Abläufe stabil, ohne selbst aktiv in Prozesse einzugreifen.

SYNC dient als systeminterner Sync-Punkt für:

- MXU Channel
- RESPO-Abläufe
- Attach-Module
- Flow-Stabilität
- zukünftige Erweiterungen

## Funktion

SYNC führt drei grundlegende Aufgaben aus:

1. Sync-Punkt bereitstellen  
2. Abläufe stabilisieren  
3. Module synchron halten  

SYNC bleibt vollständig neutral und überschreibt keine Werte.

## Integration

SYNC kann an MXU oder andere Module angehängt werden:

```js
SYNC.attach(MXU);


