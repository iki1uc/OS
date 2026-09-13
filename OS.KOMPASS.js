// ============================================================
// OS.KOMPASS — Ultra-Version · Richtungs-Engine 5D
// ============================================================
// Features:
// ✔ 5 Haupt-Richtungen (N, O, S, W, C)
// ✔ 4 Zwischenrichtungen (NE, SE, SW, NW)
// ✔ 2 Meta-Zonen (ZENITH, NADIR)
// ✔ Deep-Check
// ✔ Log-System
// ✔ Self-Protect
// ✔ Auto-Recovery
// ✔ MXU-kompatibel
// ============================================================

export const OS_KOMPASS = {

    id: "OS-KOMPASS",
    version: "3.0.0",
    state: "INIT",
    timestamp: null,
    log: [],

    // ------------------------------------------------------------
    // INIT
    // ------------------------------------------------------------
    init() {
        this.timestamp = Date.now();
        this.state = "READY";
        this._log("INIT", "OS.KOMPASS gestartet");
        return this.state;
    },

    // ------------------------------------------------------------
    // LOGGING
    // ------------------------------------------------------------
    _log(type, msg) {
        this.log.push({
            type,
            msg,
            time: new Date().toISOString()
        });
    },

    // ------------------------------------------------------------
    // RICHTUNG
    // ------------------------------------------------------------
    richtung(OU) {

        const { aura, mana, spiegel } = OU;

        // -------------------------
        // Meta-Zonen
        // -------------------------
        if (aura >= 8 && mana >= 8 && spiegel >= 8) {
            this._log("ZONE", "ZENITH erreicht");
            return "ZENITH"; // Höchste Klarheit
        }

        if (aura <= 2 && mana <= 2 && spiegel <= 2) {
            this._log("ZONE", "NADIR erreicht");
            return "NADIR"; // Tiefste Ruhe
        }

        // -------------------------
        // Haupt-Richtungen
        // -------------------------
        if (aura >= 6 && mana >= 6) {
            this._log("DIR", "Norden");
            return "Norden"; // Präsenz · Klarheit · Fokus
        }

        if (mana >= 6 && spiegel >= 6) {
            this._log("DIR", "Osten");
            return "Osten"; // Öffnung · Lernen · Wachstum
        }

        if (mana <= 3 && spiegel >= 5) {
            this._log("DIR", "Süden");
            return "Süden"; // Ruhe · Regeneration · Tiefe
        }

        if (spiegel >= 6 && aura <= 4) {
            this._log("DIR", "Westen");
            return "Westen"; // Reflexion · Abschluss · Spiegelung
        }

        // -------------------------
        // Zwischenrichtungen
        // -------------------------
        if (aura >= 6 && mana >= 6 && spiegel >= 6) {
            this._log("DIR", "Nord-Ost");
            return "Nord-Ost";
        }

        if (mana >= 6 && spiegel >= 6 && aura <= 5) {
            this._log("DIR", "Süd-Ost");
            return "Süd-Ost";
        }

        if (spiegel >= 6 && aura <= 4 && mana <= 4) {
            this._log("DIR", "Süd-West");
            return "Süd-West";
        }

        if (aura >= 6 && spiegel >= 6 && mana <= 4) {
            this._log("DIR", "Nord-West");
            return "Nord-West";
        }

        // -------------------------
        // Zentrum
        // -------------------------
        this._log("DIR", "Zentrum");
        return "Zentrum"; // Balance · Mitte · Selbst
    },

    // ------------------------------------------------------------
    // STATUS
    // ------------------------------------------------------------
    status() {
        return {
            id: this.id,
            version: this.version,
            state: this.state,
            logCount: this.log.length,
            lastEvent: this.log[this.log.length - 1] || null
        };
    },

    // ------------------------------------------------------------
    // ERROR
    // ------------------------------------------------------------
    error(msg) {
        this.state = "ERROR";
        this._log("ERROR", msg);
        return this.status();
    },

    // ------------------------------------------------------------
    // AUTO-RECOVERY
    // ------------------------------------------------------------
    recover() {
        this._log("RECOVER", "Auto-Recovery gestartet");
        this.state = "RECOVER";

        setTimeout(() => {
            this.state = "READY";
            this._log("RECOVER", "Recovery abgeschlossen");
        }, 300);

        return this.status();
    },

    // ------------------------------------------------------------
    // SELF-PROTECT
    // ------------------------------------------------------------
    protect() {
        if (this.state === "ERROR") {
            this._log("PROTECT", "Self-Protect aktiviert");
            return this.recover();
        }
        this._log("PROTECT", "Self-Protect OK");
        return "OK";
    },

    // ------------------------------------------------------------
    // DEEP-CHECK
    // ------------------------------------------------------------
    deepCheck() {
        const out = {
            id: this.id,
            version: this.version,
            state: this.state,
            logCount: this.log.length
        };

        this._log("CHECK", "Deep-Check ausgeführt");
        return out;
    },

    // ------------------------------------------------------------
    // ATTACH
    // ------------------------------------------------------------
    attach(mod) {
        mod.kompass = this;
        this._log("ATTACH", `Kompass an Modul ${mod.id || "UNKNOWN"} gebunden`);
        return mod;
    }
};
