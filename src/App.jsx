import Header from "./components/Header/Header.jsx"
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
function App() {
  return (
    <div>
      <Header/>
      <main>
         <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
              <CoreConcepts title={CORE_CONCEPTS[0].title}
                            image={CORE_CONCEPTS[0].image}
                            description={CORE_CONCEPTS[0].description}/>
              <CoreConcepts {...CORE_CONCEPTS[1]}/>
              <CoreConcepts {...CORE_CONCEPTS[2]}/>
              <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
      </section>
      </main>
    </div>
  );
}

export default App;
