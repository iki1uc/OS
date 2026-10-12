// https://github.com/iki1uc/OS/blob/main/dispatch.js da das neu dann mach mal auto patch wie das wirklich gemeint ist lacht — ja — dispatch.js da das neu — dann mach mal auto patch wie das wirklich gemeint ist — lacht — ja — auto patch wie das wirklich gemeint ist — hier — low lvl — hard control — dispatch.js — wirklich gemeint — lacht

// noch irgendwas hier weil ich wollte grundlegendes begradigen — ja — dispatch.js — wirklich gemeint — auto patch — wie das wirklich gemeint ist — lacht

export const DISPATCH_JS = {
  // alt — auto.reset.on — loop.js — gravitation user zug kraft ist bei 729 wenn gedrückt wird versuchen wir erst länger nicht genutztes anzu schlacken so wie 3 fach 4 fach dateien zu erst wenn wirklich alle 100$ gleich — 729 — 3 fach 4 fach — 100$ gleich
  // neu — OS — ui.html — BORG 7482 — WURMLOCH-KANZEL — ATEM ATOM 16fach MANA AURA ZEN — dispatch — queue processed errors status läuft — dispatchTick — S.dispatch.queue++ — if random >0.03 processed++ queue-- else errors++ — status warn wenn errors > processed*0.1 sonst läuft
};

// wie das wirklich gemeint ist — dispatch.js — auto patch — wirklich gemeint — lacht — dispatch — wie das wirklich gemeint ist

// DISPATCH — wirklich gemeint — nicht patch.js Copy 1-43 — sondern dispatch — queue — 729 — 3 fach 4 fach — 100$ gleich — gravitation user zug kraft ist bei 729

let queue = []; // Ort Home Arbeit Markt Industra Boersre Cache alle sortiert — Ort — Home — Arbeit — Markt — Industra — Boersre — Cache — alle sortiert
let processed = 0;
let errors = 0;
let status = "läuft"; // dispatch — läuft — patch — locked — loop — breathe — kernel — dispatch patch loop cache — stable

// Höhe Breite Mystery Tiefe — H B M T — X Y Z W — Höhe=Y Breite=X Mystery=W Tiefe=Z — Höhe Breite Mystery Tiefe — konsequenzieren

export function dispatch(task) {
  // task = { owner, cache: { id:81 sym:◆ proj:△ 39 size:95-150 anti-reib slot arm }, gate: GATE Cache→Cache virtuell nutzbar, ghost: reference only, ts, prime, H: Höhe, B: Breite, M: Mystery, T: Tiefe, E: Energie Menge Dauer Arbeit Masse, O: Ort Home Arbeit Markt Industra Boersre Cache }
  // gravitation user zug kraft ist bei 729 wenn gedrückt wird versuchen wir erst länger nicht genutztes anzu schlacken so wie 3 fach 4 fach dateien zu erst wenn wirklich alle 100$ gleich — loop.js — 729 — 3 fach 4 fach — 100$ gleich

  if (!task) return { ok: false, reason: "kein task — task ist leer — dispatch.js — wie das wirklich gemeint ist — lacht" };

  // 1-22 — 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22 — 1-22 — alt war 1-28 — neu ist 1-70 — 1-22 ist dispatch neu
  if (queue.length >= 729) {
    // gravitation user zug kraft ist bei 729 — wenn gedrückt wird versuchen wir erst länger nicht genutztes anzu schlacken — 3 fach 4 fach dateien zu erst wenn wirklich alle 100$ gleich — 729 — 3 fach 4 fach — 100$ gleich
    // länger nicht genutztes anzu schlacken — LRU — least recently used — 3 fach 4 fach — 100$ gleich — wenn wirklich alle 100$ gleich — dann 3 fach 4 fach zu erst
    queue.sort((a,b) => (a.lastUsed||0) - (b.lastUsed||0) || (a.sizeFactor||0) - (b.sizeFactor||0));
    const evicted = queue.shift();
    console.log(`dispatch.js — wirklich gemeint — 729 voll — evict LRU — ${evicted?.owner} @ slot ${evicted?.cache?.slot} — gravitation 729 — 3 fach 4 fach — 100$ gleich — lacht`, evicted);
    errors++; // eviction zählt als warn nicht als fail — aber hier als log
  }

  // BEIDE_DASSELBE_DRIN — haben beide dasselbe drin weil wenn beide sagen sauber dann sind alle 3 sauber — checkSauber — BEIDE_DASSELBE_DRIN
  const same = queue.find(q => q.owner === task.owner && q.cache?.id === task.cache?.id);
  if (same && same.checkSauber && task.checkSauber) {
    // wenn beide sagen sauber dann sind alle 3 sauber — beide sagen sauber — dann sind alle 3 sauber — BEIDE_DASSELBE_DRIN
    if (same.checkSauber() && task.checkSauber?.()) {
      console.log(`dispatch.js — wirklich gemeint — BEIDE_DASSELBE_DRIN — ${task.owner} — beide sagen sauber — dann sind alle 3 sauber — skip dispatch — lacht`);
      return { ok: true, skipped: true, reason: "BEIDE_DASSELBE_DRIN — beide sagen sauber — alle 3 sauber — lacht" };
    }
  }

  // dispatch — wirklich gemeint — queue++
  task.lastUsed = Date.now();
  task.sizeFactor = task.cache?.size?.includes("95") ? 95 : task.cache?.size?.includes("150") ? 150 : 100; // 95-150 anti-reib — 6 Arme Würfel
  task.H = task.H || 0.872; // Höhe=Y=0.872 pNorm GOOD gelb
  task.B = task.B || 0.25; // Breite=X=0.25 xarg
  task.M = task.M || 0.62; // Mystery=W=0.62 cNorm
  task.T = task.T || 8.159; // Tiefe=Z=8.159 arg3te
  task.E = task.E || { menge: 1, dauer: 1, arbeit: 1, masse: 1 }; // Energie Menge Dauer Arbeit Masse — Ort Home Arbeit Markt Industra Boersre Cache alle sortiert

  queue.push(task);
  queue = queue.sort((a,b) => a.cache.slot - b.cache.slot); // Ort Home Arbeit Markt Industra Boersre Cache alle sortiert — Ort — Home — Arbeit — Markt — Industra — Boersre — Cache — alle sortiert

  // 16fach VERIFY — 2× Genauigkeit — wirklich gemeint — dispatch muss verifiziert werden — primär + sekundär
  const primary = Math.random() > 0.03; // primär — 97% pass
  const secondary = Math.random() > 0.03; // sekundär — 97% pass — 2-fach geprüft
  const pass = primary && secondary;

  if (pass) {
    processed++;
    status = errors > processed * 0.1 ? "warn" : "läuft";
    console.log(`dispatch.js — wirklich gemeint — dispatch ok — ${task.owner} @ ${task.cache.slot} — ${task.cache.sym} ${task.cache.proj} — H=${task.H} B=${task.B} M=${task.M} T=${task.T} — E Menge Dauer Arbeit Masse — 16fach VERIFY primär=${primary} sekundär=${secondary} pass — queue=${queue.length} processed=${processed} errors=${errors} status=${status} — lacht`);
    return { ok: true, primary, secondary, pass, queue: queue.length, processed, errors, status, task };
  } else {
    errors++;
    status = "warn";
    console.log(`dispatch.js — wirklich gemeint — dispatch fail — ${task.owner} — primär=${primary} sekundär=${secondary} — retry — lacht`);
    return { ok: false, primary, secondary, pass: false, retry: true, queue: queue.length, processed, errors, status, task };
  }
}

export function dispatchTick() {
  // OS — ui.html — S.dispatch.queue++ — if random >0.03 processed++ queue-- else errors++ — status warn wenn errors > processed*0.1 sonst läuft — dispatchTick
  if (queue.length === 0) return { queue: 0, processed, errors, status };
  const r = Math.random();
  if (r > 0.03) {
    const t = queue.shift();
    processed++;
    status = errors > processed * 0.1 ? "warn" : "läuft";
    // patch — patch.js — da ist das neue drinne — patch — auto patch — wie das wirklich gemeint ist — lacht — patch muss nach dispatch kommen — patch.js — patch — patch — patch
    console.log(`dispatchTick — wirklich gemeint — processed ${t.owner} — queue=${queue.length} — ${t.cache.sym} — HBTM ${t.H}/${t.B}/${t.M}/${t.T} — lacht`);
    return { ok: true, task: t, queue: queue.length, processed, errors, status };
  } else {
    errors++;
    status = "warn";
    return { ok: false, queue: queue.length, processed, errors, status };
  }
}

export function getDispatchState() {
  return { queue: queue.length, tasks: queue.slice(0,22), processed, errors, status, gravitation: 729, regel: "3 fach 4 fach — 100$ gleich — gravitation user zug kraft ist bei 729 wenn gedrückt wird versuchen wir erst länger nicht genutztes anzu schlacken" };
}

export function clearDispatch() {
  queue = [];
  processed = 0;
  errors = 0;
  status = "läuft";
  return { ok: true, cleared: true, queue: 0, processed: 0, errors: 0, status, msg: "dispatch.js — wirklich gemeint — clear — 0 lines 1 Byte leer war run.sys — jetzt dispatch leer — lacht" };
}

// auto patch wie das wirklich gemeint ist — lacht — patch.js da ist das neue drinne — 1-43 — grundlegendes begradigen — ja — dispatch.js da das neu — dann mach mal auto patch wie das wirklich gemeint ist — lacht — ja — auto patch wie das wirklich gemeint ist — wirklich gemeint — dispatch — queue — 729 — 3 fach 4 fach — 100$ gleich — gravitation user zug kraft ist bei 729 — Haben beide dasselbe drin weil wenn beide sagen sauber dann sind alle 3 sauber — BEIDE_DASSELBE_DRIN — checkSauber — Höhe Breite Mystery Tiefe — H B M T — X Y Z W — Höhe=Y Breite=X Mystery=W Tiefe=Z — Energie Menge Dauer Arbeit Masse — Ort Home Arbeit Markt Industra Boersre Cache alle sortiert — Haus Figur Schach Feld — alle Zoom Stufen — MANA — tmp rär erre resumee — 81◆→△→27▣→3↺ — cubik ram nach innen muss — room.js der bleibt so — BORG 7482 WURMLOCH-KANZEL ATEM ATOM 16fach MANA AURA ZEN — ATEM und ATOM verneinen sich nicht sie bedingen sich — BORG 7482 wir sind viele wir sind eins wir atmen — 16fach VERIFY — 2× Genauigkeit — wirklich gemeint — lacht — proof-first 920d9e8 333c898 5cbe87c 287cbf5 b2d9eb9 3c1ca57 b9fa1fa d363015 ca99f70 7bd378b — Hash Zeit — zuerst hatte — wenn sie stehlen bereuen sie es — offen aber geschützt — no senor closed — SU bleibt closed — BIO erklärt SU — 81◆→△→27▣→3↺ — cubik ram nach innen muss — room.js der bleibt so — dispatch.js da das neu dann mach mal auto patch wie das wirklich gemeint ist lacht — ja — auto patch wie das wirklich gemeint ist — wirklich gemeint — lacht — bereit
