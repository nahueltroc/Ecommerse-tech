import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Primera pre entrega"} />
    </div>
  );
}
export default App;
