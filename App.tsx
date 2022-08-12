import React from "react";

// Components
import * as Sentry from "@sentry/react-native";

// Screens
import Home from "./src/screens/Home";

// Initialize error monitoring
Sentry.init({
  dsn: "https://2bb78eab9a0b4af2bbf0cf2571e225c9@o1355877.ingest.sentry.io/6640749",
});

const App = () => {
  return <Home />;
};

export default Sentry.wrap(App);
