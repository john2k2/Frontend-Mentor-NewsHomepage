const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "Soft-orange": "hsl(35, 77%, 62%)",
                "Soft-red": "hsl(5, 85%, 63%)",
                "Off-white": "hsl(36, 100%, 99%)",
                "rayish-blue": "hsl(233, 8%, 79%)",
                "Dark-grayish-blue": "hsl(236, 13%, 42%)",
                "Very-dark-blue": "hsl(240, 100%, 5%)",
            },
        },
    },
    plugins: [],
};
