// ============================================================
// UBP.js — Unified Boot Pipeline (Eigenständiges Modul)
// ============================================================

import { RUN21 } from "./RUN21.js";
import { SLI_RAID } from "../sync/SLI_RAID.js";

export const UBP = {

    // Pipeline‑Entscheidung
    decide(runtimeLoad) {
        const mode = SLI_RAID.decide(runtimeLoad);
        const survival = RUN21.check();

        if (survival) {
            console.log("🚨 UBP: RUN21 übernimmt");
            return "RUN21";
        }

        if (mode === "SLI") {
            console.log("🔵 UBP: OS_BOOT empfohlen");
            return "OS_BOOT";
        }

        console.log("🟣 UBP: MXU_BOOT empfohlen");
        return "MXU_BOOT";
    }
};
