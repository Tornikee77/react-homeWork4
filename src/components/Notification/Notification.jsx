import { useContext } from "react";
import { NotificationContext } from "../../Context/NotificationContext";

const Notification = () => {
  const { message, type } = useContext(NotificationContext);

  if (!message) return null;
  const bgColor =
    type === "success" ? "bg-green-200" : type === "error" ? "bg-red-200" : "";

  return (
    <div
      className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-md ${bgColor}`}
    >
      <p className={`text-[20px] `}>{message}</p>
    </div>
  );
};

export default Notification;
