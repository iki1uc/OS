// ============================================================
// SLI.js — Sync‑Link‑Interface · Ultra‑Version
// ============================================================
// Features:
// ✔ Sync‑Pulse
// ✔ RAW‑Multiplikation
// ✔ Score‑Engine
// ✔ Slide‑Engine
// ✔ Deep‑Check
// ✔ Auto‑Recovery
// ✔ Self‑Protect
// ✔ Log‑System
// ✔ MXU‑Kompatibel
// ✔ AXINXA‑Kompatibel
// ============================================================

export const SLI = {

    attach(mod) {

        // ------------------------------------------------------------
        // BASIS
        // ------------------------------------------------------------
        mod.sli = true;
        mod.sli_state = "SYNCED";
        mod.sli_score = 0;
        mod.sli_slide = 0;
        mod.sli_pulse = 0;
        mod.sli_log = [];

        // ------------------------------------------------------------
        // LOGGING
        // ------------------------------------------------------------
        mod.sli_addLog = (type, msg) => {
            mod.sli_log.push({
                type,
                msg,
                time: new Date().toISOString()
            });
        };

        mod.sli_addLog("INIT", "SLI erfolgreich verbunden");

        // ------------------------------------------------------------
        // SCORE‑ENGINE
        // ------------------------------------------------------------
        mod.sli_addScore = v => {
            mod.sli_score += v;
            mod.sli_addLog("SCORE", `+${v} → ${mod.sli_score}`);
            return mod.sli_score;
        };

        // ------------------------------------------------------------
        // SLIDE‑ENGINE
        // ------------------------------------------------------------
        mod.sli_slideTo = v => {
            mod.sli_slide = v;
            mod.sli_addLog("SLIDE", `Slide gesetzt auf ${v}`);
            return mod.sli_slide;
        };

        // ------------------------------------------------------------
        // RAW‑MULTIPLIKATION
        // ------------------------------------------------------------
        mod.sli_raw = (p, z) => {
            const out = p * z;
            mod.sli_addLog("RAW", `${p} × ${z} = ${out}`);
            return out;
        };

        // ------------------------------------------------------------
        // SYNC‑PULSE
        // ------------------------------------------------------------
        mod.sli_pulseSync = () => {
            mod.sli_pulse++;
            mod.sli_addLog("PULSE", `Sync‑Pulse #${mod.sli_pulse}`);
            return mod.sli_pulse;
        };

        // ------------------------------------------------------------
        // DEEP‑CHECK
        // ------------------------------------------------------------
        mod.sli_check = () => {
            const out = {
                status: mod.sli ? "OK" : "FAIL",
                score: mod.sli_score,
                slide: mod.sli_slide,
                pulse: mod.sli_pulse,
                logCount: mod.sli_log.length,
                lastEvent: mod.sli_log[mod.sli_log.length - 1] || null
            };
            mod.sli_addLog("CHECK", "Deep‑Check ausgeführt");
            return out;
        };

        // ------------------------------------------------------------
        // AUTO‑RECOVERY
        // ------------------------------------------------------------
        mod.sli_recover = () => {
            mod.sli_addLog("RECOVER", "Auto‑Recovery gestartet");
            mod.sli_state = "RECOVER";

            setTimeout(() => {
                mod.sli_state = "SYNCED";
                mod.sli_addLog("RECOVER", "Recovery abgeschlossen");
            }, 300);

            return mod.sli_state;
        };

        // ------------------------------------------------------------
        // SELF‑PROTECT
        // ------------------------------------------------------------
        mod.sli_protect = () => {
            if (mod.sli_state === "ERROR") {
                mod.sli_addLog("PROTECT", "Self‑Protect aktiviert");
                return mod.sli_recover();
            }
            mod.sli_addLog("PROTECT", "Self‑Protect OK");
            return "OK";
        };

        // ------------------------------------------------------------
        // FERTIG
        // ------------------------------------------------------------
        mod.sli_addLog("READY", "SLI vollständig initialisiert");
        return mod;
    }
};
