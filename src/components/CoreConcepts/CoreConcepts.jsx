import Section from "../Section/Section";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data.js";
export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((x) => (
                    <CoreConcept key={x.title} {...x} />
                ))}
            </ul>
        </Section>
    );
}
/*
<section id="core-concepts">
                  <h2>Core Concepts</h2>
                  <ul>
                    <CoreConcepts title={CORE_CONCEPTS[0].title}
                                    image={CORE_CONCEPTS[0].image}
                                    description={CORE_CONCEPTS[0].description}/>
                      <CoreConcepts {...CORE_CONCEPTS[1]}/>
                      <CoreConcepts {...CORE_CONCEPTS[2]}/>
                      <CoreConcepts {...CORE_CONCEPTS[3]}/> 
        
                    {CORE_CONCEPTS.map(concept => (
                        <CoreConcepts key={concept.title} {...concept} />
                      ))} 
        
                    {CORE_CONCEPTS.map((x) => (
                      <CoreConcept key={x.title} {...x} />
                    ))}
                  </ul>
                </section>
*/