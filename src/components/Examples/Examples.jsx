import Section from "../Section/Section";
import TabButton from "../TabButton/TabButton";
// import { EXAMPLES } from "../../data.js";
import { useState } from "react";
import Tabs from "../Tabs/Tabs.jsx";
// const topics = ["components", "jsx", "props", "state"];
export default function Examples({ EXAMPLES, topics, title }) {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedItem) {
    setSelectedTopic(selectedItem);
    // console.log("item clicked is : " + selectedItem);
    // console.log("state is : " + selectedTopic);
  }
  let tabContent = <p>Nothing selected yet</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Section title={title} id="examples">
        <Tabs
          ButtonsContainer={"menu"}
          buttons={topics.map((topic) => (
            <TabButton
              key={topic}
              onClick={() => handleSelect(topic)}
              isSelected={selectedTopic === topic}
            >
              {topic}
            </TabButton>
          ))}
        >
          {tabContent}
        </Tabs>
      </Section>
      {/* {selectedTopic && <p>Nothing selected yet</p>}
      {!selectedTopic ? <p>Nothing selected yet</p> : null} */}
    </>
  );
}
/*
<section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect("Jsx")}>Jsx</TabButton>
            <TabButton onSelect={()=>handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect("State")}>State</TabButton>
            {topics.map((topic) => (
              <TabButton key={topic} onSelect={() => handleSelect(topic)} isSelected={selectedTopic === topic}>
                {topic}
              </TabButton>
            ))}
          </menu>
        </section> */
