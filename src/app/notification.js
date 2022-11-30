import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useToastify = () => {
  const createToast = (toastConfigObj) => {
    const { msg, dataType } = toastConfigObj;
    toast(msg, { type: dataType });
  };
  return { createToast };
};

export const Notification = () => {
  return <ToastContainer position="top-right" hideProgressBar={true} />;
};
