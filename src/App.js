
import './App.css';
import Navigation from './Components/Navigation';
import AboutMeComponent from "./Components/AboutMeComponent";
import ProjectsComponent from './Components/ProjectsComponent';
import HomePageComponent from './Components/HomePageComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <main>
        <HomePageComponent></HomePageComponent>
        <ProjectsComponent></ProjectsComponent>
        <AboutMeComponent></AboutMeComponent>
      </main>
      <footer>
        <FooterComponent></FooterComponent>
      </footer>

    
    </div>
  );
}

export default App;
