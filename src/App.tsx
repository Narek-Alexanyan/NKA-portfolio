import {Navbar} from "./section/Navbar.tsx";
import {Hero} from "./section/Hero.tsx";
import {About} from "./section/About.tsx";
import {Projects} from "./section/Projects.tsx";
import {Clients} from "./section/Clients.tsx";
import {Experience} from "./section/Experience.tsx";

function App() {

  return (
   <main className="max-w-7xl mx-auto">
       <Navbar />
       <Hero />
       <About />
       <Projects />
       <Clients />
       <Experience />
   </main>
  )
}

export default App
