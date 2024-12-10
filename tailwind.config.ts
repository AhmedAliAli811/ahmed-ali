import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            spacing: {
                "5p": "5%",
                "10p": "10%",
                "15p": "15%",
            },
            fontFamily: {
                bokor: ['Caveat'],
            },
        },
    },
    plugins: [],
} satisfies Config;
