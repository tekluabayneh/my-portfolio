import { useEffect } from "react";
import "./mainStyle.css";
import AppRouter from "./Router";
function App() {
  return (
    <main className="bg-[#e8e9e8] scroll-smooth font-poppins overflow-hidden  overflow-x-scroll snap-x snap-mandatory scroll-smooth">
      <AppRouter />
    </main>
  );
}

export default App;
