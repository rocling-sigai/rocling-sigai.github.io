// config.js
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "brand-blue-light": "#0485E2",
                "brand-blue-dark": "#0458C9",
                "brand-teal": "#A5C9C4",
                "brand-olive": "#566B17",
                "brand-dark": "#1A260B",
                "surface-container-lowest": "#ffffff",
                "on-surface": "#131f05",
            },
            "spacing": {
                "gutter": "32px",
                "lg": "48px",
                "md": "24px",
                "xl": "80px",
                "base": "8px"
            },
            "fontFamily": {
                "h1": ["Space Grotesk"],
                "h2": ["Space Grotesk"],
                "h3": ["Space Grotesk"],
                "body-md": ["Space Grotesk"],
                "body-lg": ["Space Grotesk"],
                "label-sm": ["Space Grotesk"]
            }
        },
    },
}