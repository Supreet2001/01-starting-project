import Header from "./components/Header/Header.jsx"
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcepts title={CORE_CONCEPTS[0].title}
                            image={CORE_CONCEPTS[0].image}
                            description={CORE_CONCEPTS[0].description}/>
              <CoreConcepts {...CORE_CONCEPTS[1]}/>
              <CoreConcepts {...CORE_CONCEPTS[2]}/>
              <CoreConcepts {...CORE_CONCEPTS[3]}/> */}

              {/* {CORE_CONCEPTS.map(concept => (
                <CoreConcepts key={concept.title} {...concept} />
              ))} */}
              
            {CORE_CONCEPTS.map(x => <CoreConcepts {...x} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Jsx</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
