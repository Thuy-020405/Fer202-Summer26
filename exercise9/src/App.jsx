
import MyProfile from "./components/MyProfile";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter"; 
import SimpleCard from "./components/SimpleCard";

const myItem = {
  title: "Card Title",
  description: "This is a simple card component.",
  image: "https://via.placeholder.com/300x150"
};  

function App() {
  return (
    <div style={{padding: "20px"}}>
      <MyProfile />
      <hr />
      <HelloWorld />
      <hr />
      <Counter />
      <hr />
      <SimpleCard item={myItem} />
    </div>
  );
} 
export default App;