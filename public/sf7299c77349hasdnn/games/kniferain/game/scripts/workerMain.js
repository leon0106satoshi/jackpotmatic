"use strict"; {
    async function a(a) {
        if (b) throw new Error("already initialised");
        b = !0;
        const d = a["baseUrl"];
        self.devicePixelRatio = a["devicePixelRatio"];
        const e = a["workerDependencyScripts"].map((a) => {
                let b = a;
                return b = a instanceof Blob ? URL.createObjectURL(a) : new URL(b, d).toString(), b
            }),
            f = a["engineScripts"].map((a) => new URL(a, d).toString());
        try {
            importScripts(...[...e, ...f])
        } catch (a) {
            console.error("[C3 runtime] Failed to load all engine scripts in worker: ", a)
        }
        c = self["C3_CreateRuntime"](a), await self["C3_InitRuntime"](c, a)
    }
    let b = !1,
        c = null;
    self.addEventListener("message", (b) => {
        const c = b.data,
            d = c["type"];
        if ("init-runtime" === d) a(c);
        else throw new Error(`unknown message '${d}'`)
    })
}