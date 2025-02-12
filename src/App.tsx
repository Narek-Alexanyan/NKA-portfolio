import {Navbar} from "./section/Navbar.tsx";
import {Hero} from "./section/Hero.tsx";
import {About} from "./section/About.tsx";
import {Projects} from "./section/Projects.tsx";

function App() {

  return (
   <main className="max-w-7xl mx-auto">
       <Navbar />
       <Hero />
       <About />
       <Projects />
   </main>
  )
}

export default App
