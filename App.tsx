import React from "react";
import { SENTRY_URL } from "@env";

// Components
import * as Sentry from "@sentry/react-native";

// Screens
import Home from "./src/screens/Home";

// Initialize error monitoring
Sentry.init({
  dsn: `${SENTRY_URL}`,
});

const App = () => {
  return <Home />;
};

export default Sentry.wrap(App);
