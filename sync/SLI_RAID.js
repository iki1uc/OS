// ============================================================
// SLI_RAID.js — Einzelheit/Symbiose Runtime Switch (Eigenständiges Modul)
// ============================================================

export const SLI_RAID = {

    mode: "SLI", // SLI = Einzelheit, RAID = Symbiose

    // Entscheidung basierend auf Last
    decide(load) {
        if (load < 50) {
            this.mode = "SLI";
            console.log("🔵 SLI: Einzelheit aktiv");
        } else {
            this.mode = "RAID";
            console.log("🟣 RAID: Symbiose aktiv");
        }
        return this.mode;
    },

    // Runtime‑Switch
    switch() {
        if (this.mode === "SLI") {
            console.log("🔧 SLI: Leichte Runtime");
            return { runtime: "light", cluster: 1 };
        } else {
            console.log("🔧 RAID: Tiefe Runtime");
            return { runtime: "deep", cluster: 4 };
        }
    }
};
