import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

const browserGlobals = {
    document: "readonly",
    window: "readonly",
    navigator: "readonly",
    performance: "readonly",
    requestAnimationFrame: "readonly",
    cancelAnimationFrame: "readonly",
    setTimeout: "readonly",
    clearTimeout: "readonly",
    setInterval: "readonly",
    clearInterval: "readonly",
    IntersectionObserver: "readonly",
    ResizeObserver: "readonly",
    URL: "readonly",
    URLSearchParams: "readonly",
    console: "readonly",
    fetch: "readonly",
};

export default [
    {
        ignores: [
            "dist/**",
            "node_modules/**",
        ],
    },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: browserGlobals,
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react/prop-types": "off",
            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true,
                },
            ],
        },
    },
];
