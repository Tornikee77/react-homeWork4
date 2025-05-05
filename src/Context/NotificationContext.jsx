import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleMessage = (Notification, type) => {
    setMessage(Notification);
    setType(type);
    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 2000);
  };

  return (
    <NotificationContext.Provider
      value={{ message, setMessage, type, setType, handleMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
