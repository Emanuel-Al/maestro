import "./App.css";
import RouterProvider from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <RouterProvider />;
    </>
  );
}

export default App;
