import "./App.css";
import CollapsibleExample from "./component/navigation/index";
import ControlledCarousel from "./component/carousel/index";
import GridComplexExample from "./component/form/index";

function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <ControlledCarousel />
      <GridComplexExample />
    </div>
  );
}

export default App;
