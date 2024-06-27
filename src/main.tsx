import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./components/common/GlobalStyle/Globalstyle.ts";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
