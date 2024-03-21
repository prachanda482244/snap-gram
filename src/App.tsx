import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SigninForm from "./components/SigninForm";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route path="/sign-in" element={<SigninForm />} />
        {/* Private Routes */}
      </Routes>
    </main>
  );
};

export default App;
