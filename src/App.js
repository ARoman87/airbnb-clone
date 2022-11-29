import './App.css';
import Nav from "./components/Nav";
import Card from "./components/Card";
import Hero from "./components/Hero"
import data from "./data"

const elements = data.map(x => {
    return <Card 
        data = {x}
        />
})



function App() {
  return (
    <div className="App">
        <Nav />
        <Hero />
        <section>
            {elements}
        </section>
      
    </div>
  );
}

export default App;
