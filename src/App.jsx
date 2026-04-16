import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
const topics = ["components", "jsx", "props", "state"];
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedItem) {
    setSelectedTopic(selectedItem);
    // console.log("item clicked is : " + selectedItem);
    // console.log("state is : " + selectedTopic);
  }
  let tabContent = <p>Nothing selected yet</p>;
  if(selectedTopic) {
    tabContent = <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>;
  }
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

            {CORE_CONCEPTS.map((x) => (
              <CoreConcepts key={x.title} {...x} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton onSelect={()=>handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect("Jsx")}>Jsx</TabButton>
            <TabButton onSelect={()=>handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect("State")}>State</TabButton> */}
            {topics.map((topic) => (
              <TabButton key={topic} onSelect={() => handleSelect(topic)} isSelected={selectedTopic === topic}>
                {topic}
              </TabButton>
            ))}
          </menu>
        </section>
        {/* {selectedTopic && <p>Nothing selected yet</p>} */}
        {/* {!selectedTopic ? <p>Nothing selected yet</p> : null} */}
        {tabContent}
      </main>
    </div>
  );
}

export default App;
