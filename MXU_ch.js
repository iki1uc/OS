// ============================================================
// MXU_CH — Erweiterte Version · 4.0.0
// ============================================================
// Features:
// ✔ Versionierung
// ✔ Dynamische Achsen
// ✔ Log-System
// ✔ Status-API
// ✔ Error-API
// ✔ Auto-Recovery
// ✔ Self-Protect
// ✔ Deep-Check
// ✔ Attach-Kompatibilität (SLI, AXINXA, MXU)
// ============================================================

export const MXU_CH = {

    id: "MXU-CH",
    version: "4.0.0",
    mode: "CH",
    axis: "B°",
    state: "INIT",
    timestamp: null,
    log: [],
    sli: null,
    axinxa: null,
    mxu: null,

    // ------------------------------------------------------------
    // INIT
    // ------------------------------------------------------------
    init(config = {}) {

        this.axis = config.axis || this.axis;
        this.mode = config.mode || this.mode;
        this.version = config.version || this.version;

        this.timestamp = Date.now();
        this.state = "OK";

        this._log("INIT", `MXU_CH gestartet (Axis=${this.axis}, Mode=${this.mode})`);

        return this._status();
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
    // STATUS
    // ------------------------------------------------------------
    _status() {
        return {
            id: this.id,
            version: this.version,
            mode: this.mode,
            axis: this.axis,
            state: this.state,
            timestamp: this.timestamp,
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
        return this._status();
    },

    // ------------------------------------------------------------
    // AUTO-RECOVERY
    // ------------------------------------------------------------
    recover() {
        this._log("RECOVER", "Auto-Recovery gestartet");
        this.state = "RECOVER";

        setTimeout(() => {
            this.state = "OK";
            this._log("RECOVER", "Recovery abgeschlossen");
        }, 300);

        return this._status();
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
            axis: this.axis,
            mode: this.mode,
            state: this.state,
            sli: !!this.sli,
            axinxa: !!this.axinxa,
            mxu: !!this.mxu,
            logCount: this.log.length
        };

        this._log("CHECK", "Deep-Check ausgeführt");
        return out;
    },

    // ------------------------------------------------------------
    // ATTACH SLI
    // ------------------------------------------------------------
    attachSLI(sli) {
        if (!sli) return this.error("SLI fehlt");
        this.sli = sli.attach(this);
        this._log("ATTACH", "SLI verbunden");
        return this._status();
    },

    // ------------------------------------------------------------
    // ATTACH AXINXA
    // ------------------------------------------------------------
    attachAXINXA(ax) {
        if (!ax) return this.error("AXINXA fehlt");
        this.axinxa = ax.attach(this);
        this._log("ATTACH", "AXINXA verbunden");
        return this._status();
    },

    // ------------------------------------------------------------
    // ATTACH MXU
    // ------------------------------------------------------------
    attachMXU(mxu) {
        if (!mxu) return this.error("MXU fehlt");
        this.mxu = mxu;
        this._log("ATTACH", "MXU Kernel verbunden");
        return this._status();
    }
};
