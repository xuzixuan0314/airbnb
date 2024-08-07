import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
// import store from "./store/features/entire/index";
import App from "./App";
import { theme } from "@/style/theme";
// 引入样式
import "@/style/index.less";
import { ThemeProvider } from "styled-components";
const root = createRoot(document.querySelector("#root"));
root.render(
  <Suspense fallback={<h2>loading</h2>}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App></App>
        </Provider>
      </ThemeProvider>
    </HashRouter>
  </Suspense>
);
