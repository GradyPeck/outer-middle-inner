import './App.css'
import data from './assets/data';
import Outer from './components/Outer';

function App() {
  //extract a list of just the outer values from the full data
  let outers = data.map(
    (item) => item.out
  )
  //make a list of unique outer values (each one only listed once)
  let uniqueOuters = [];
  for(let i = 0; i < outers.length; i++) {
    if(!uniqueOuters.includes(outers[i])) {
      uniqueOuters.push(outers[i]);
    }
  }
  //create a list of Outer-type components to use in the return
  let outerComponents = uniqueOuters.map(
    (uniqueOuter) => {
      //make a list of the items in the full dataset that have this outer value
      const itemsWithOuter = data.filter(
        (item) => item.out === uniqueOuter
      )
      return <Outer key={uniqueOuter} myOuter={uniqueOuter} items={itemsWithOuter} />
    }
  )
  return (
    <>
      {outerComponents}
    </>
  )
}

export default App
