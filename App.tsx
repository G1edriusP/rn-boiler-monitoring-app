import React from "react";
import { SENTRY_URL } from "@env";

// Components
import * as Sentry from "@sentry/react-native";
import { Provider } from "mobx-react";

// Screens
import Home from "./src/screens/Home";

// Utils
import BoilerStore from "./src/utils/mobx/store";

// Initialize error monitoring
Sentry.init({
  dsn: `${SENTRY_URL}`,
});

const App = () => {
  return (
    <Provider store={BoilerStore}>
      <Home />
    </Provider>
  );
};

export default Sentry.wrap(App);
