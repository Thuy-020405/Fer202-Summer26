import TodoApp from "./components/TodoApp";
import Calculator from "./components/Calculator";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div style={{padding: "20px"}}>
      <TodoApp />
      <hr />
      <Calculator />
      <hr />
      <SearchFilter />
    </div>
  );
} 
export default App;