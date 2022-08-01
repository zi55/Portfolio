import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
let NavLink = [
  {
    txt: 'Главная',
    url: "/",
  },
  {
    txt: 'SKILLS',
    url: "/",
  },
  {
    txt: 'SERVICES',
    url: "/",

  },
  {
    txt: 'INTEREST',
    url: "/",
  },
];
function App() {
  return (
    <div className="App">
      <main>
      
            <NavBar arrLink={NavLink}></NavBar>
      <Outlet/>
      </main>
    </div>
  );
}

export default App;