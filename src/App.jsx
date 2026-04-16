import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
import { EXAMPLES, MORE_EXAMPLES } from "./data.js";
const topics = ["components", "jsx", "props", "state"];
const moreTopics = ["hooks", "events", "lists", "forms"];
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples EXAMPLES={EXAMPLES} topics={topics} title="Core Concepts" />
        <Examples EXAMPLES={MORE_EXAMPLES} topics={moreTopics} title="More Core Concepts" />
      </main>
    </>
  );
}

export default App;
