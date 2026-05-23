import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [million.vite({
        auto: {
            threshold: 0.05,
            skip: ["useBadHook", /badVariable/g, "Nav"],
        },
    }), react(), cloudflare()],
});