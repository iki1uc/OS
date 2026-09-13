// ============================================================
// SLI_RAID.js — Einzelheit/Symbiose Switch (Eigenständiges Modul)
// ============================================================
//
// SLI  = Einzelheit (1-Knoten)
// RAID = Symbiose   (Mehr-Knoten)
// 
// Dieses Modul entscheidet dynamisch, ob das System
// im Einzelmodus (SLI) oder im Symbiosemodus (RAID) laufen soll.
// 
// Es ist vollständig neu geschrieben und NICHT aus deinem Repo kopiert.
// ============================================================

export const SLI_RAID = {

    mode: "SLI",   // Startmodus: Einzelheit
    load: 0,       // Systemlast (0–100)

    // ------------------------------------------------------------
    // 1 · Last setzen
    // ------------------------------------------------------------
    setLoad(value) {
        this.load = Math.max(0, Math.min(100, value));
        return this.load;
    },

    // ------------------------------------------------------------
    // 2 · Entscheidung treffen
    // ------------------------------------------------------------
    decide() {
        if (this.load < 50) {
            this.mode = "SLI";
            console.log("🔵 SLI aktiv — Einzelheit");
        } else {
            this.mode = "RAID";
            console.log("🟣 RAID aktiv — Symbiose");
        }
        return this.mode;
    },

    // ------------------------------------------------------------
    // 3 · Runtime-Konfiguration zurückgeben
    // ------------------------------------------------------------
    runtime() {
        if (this.mode === "SLI") {
            return {
                mode: "SLI",
                cluster: 1,
                runtime: "light",
                description: "Einzelheit — leichte Runtime"
            };
        }

        return {
            mode: "RAID",
            cluster: 4,
            runtime: "deep",
            description: "Symbiose — tiefe Runtime"
        };
    },

    // ------------------------------------------------------------
    // 4 · Vollständiger Zyklus
    // ------------------------------------------------------------
    cycle(loadValue) {
        this.setLoad(loadValue);
        this.decide();
        return this.runtime();
    }
};

