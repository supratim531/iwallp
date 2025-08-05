import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { App } from "./App";
import router from "./routes/router";

import "./index.css";

if (process.env.NODE_ENV === "development") {
  window.addEventListener("error", (e) => {
    if (
      e.message &&
      (e.message.includes(
        "ResizeObserver loop completed with undelivered notifications",
      ) ||
        e.message.includes("ResizeObserver loop limit exceeded"))
    ) {
      // Prevent React dev overlay
      e.stopImmediatePropagation();
    }
  });

  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("ResizeObserver loop") ||
        args[0].includes("ResizeObserver loop limit"))
    ) {
      return;
    }
    originalConsoleError(...args);
  };

  // 🩹 Chrome/Elfsight-specific workaround
  requestAnimationFrame(() => {
    try {
      const ro = new ResizeObserver(() => {});
      ro.observe(document.body);
      ro.disconnect();
    } catch (_) {}
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);
