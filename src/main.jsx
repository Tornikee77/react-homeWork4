import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import NotificationProvider from "./Context/NotificationContext.jsx";
createRoot(document.getElementById("root")).render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
