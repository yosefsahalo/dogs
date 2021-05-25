import logo from './logo.svg';
import './App.css';
import Dog_Card from './Component/Featurs/Card/Dog-Card.Component'

function Home() {
  const DogsArray = [
    { name: "Simba", age: 1, kind: "Lion-King" },
    { name: "Rfiki", age: 6, kind: "Lion-King" },
    { name: "Scar", age: 2, kind: "Lion-King" },
    { name: "Mofsa", age: 8, kind: "Lion-King" },
  ]
  return (
    <div>
      {
        DogsArray.map(dog => {
          if (dog.age > 4) {
            return <Dog_Card  elementColor={"green"}/>
          }
          return <Dog_Card elementColor={"yellow"} />
        })
      }
    </div>
  )

}
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
