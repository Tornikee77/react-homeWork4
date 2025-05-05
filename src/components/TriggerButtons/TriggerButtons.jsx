import { useContext } from "react";
import { NotificationContext } from "../../Context/NotificationContext";

const TriggerButtons = () => {
  const { handleMessage } = useContext(NotificationContext);
  return (
    <div>
      <div className="flex justify-center items-center gap-10 mx-auto mt-[200px] w-[600px] h-[300px] buttonContainer">
        <button
          onClick={() => handleMessage("Message sent successfully", "success")}
          className="bg-green-300 rounded-[50px] w-[100px] h-[50px] font-bold text-[22px] text-green-600 cursor-pointer"
        >
          Success
        </button>
        <button
          onClick={() => handleMessage("file! error message", "error")}
          className="bg-red-300 rounded-[50px] w-[100px] h-[50px] font-bold text-[22px] text-red-600 cursor-pointer"
        >
          Error
        </button>
      </div>
    </div>
  );
};

export default TriggerButtons;
