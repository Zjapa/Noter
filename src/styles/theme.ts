const theme = {
  colors: {
    // Existing colors
    primary: "#007bff",
    secondary: "#6c757d",
    light: "#f8f9fa",
    dark: "#343a40",

    // Neutral color palette
    neutral: {
      950: "#0E121B",
      900: "#191B25",
      800: "#232530",
      700: "#2B303B",
      600: "#525866",
      500: "#717784",
      400: "#99A0AE",
      300: "#CACFD8",
      200: "#EDE4EA",
      100: "#F3F5F8",
      50: "#F5F7FA",
      0: "#FFFFFF",
    },

    // Blue, Green, and Red color palettes
    blue: {
      700: "#2547D0",
      500: "#335CFF",
      50: "#EBF1FF",
    },
    green: {
      500: "#21C16B",
      100: "#01FB69",
    },
    red: {
      500: "#FB3748",
      100: "#FFD5D8",
    },
  },
  fonts: {
    primary: "Inter, sans-serif", // Set Inter as the primary font
  },
  typography: {
    preset1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "120%",
      letterSpacing: "-0.2px",
    },
    preset2: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "120%",
      letterSpacing: "-0.2px",
    },
    preset3: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "600", // Semi Bold
      fontSize: "18px",
      lineHeight: "120%",
      letterSpacing: "-0.2px",
    },
    preset4: {
      fontFamily: "Inter",
      fontWeight: "500", // Medium
      fontSize: "16px",
      lineHeight: "120%",
      letterSpacing: "-0.2px",
    },
    preset5: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "400", // Regular
      fontSize: "14px",
      lineHeight: "120%",
      letterSpacing: "-0.2px",
    },
    preset6: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "400", // Regular
      fontSize: "12px",
      lineHeight: "120%",
      letterSpacing: "-0.2px",
    },
  },
  spacing: {
    0: "0",
    25: "2px",
    50: "4px",
    75: "6px",
    100: "8px",
    150: "12px",
    200: "16px",
    250: "20px",
    300: "24px",
    400: "32px",
    500: "40px",
    600: "48px",
    800: "64px",
    1000: "80px",
  },
};

export default theme;
