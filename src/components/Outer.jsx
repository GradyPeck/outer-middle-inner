import Middle from "./Middle";

export default function Outer({myOuter, items}) {
    //extract a list of just the middle values from the subset of data passed to this component
    let middles = items.map(
        (item) => item.mid
    )
    //make a list of unique middle values (each listed only once)
    let uniqueMiddles = [];
    for(let i = 0; i < middles.length; i++) {
        if(!uniqueMiddles.includes(middles[i])) {
        uniqueMiddles.push(middles[i]);
        }
    }
    //create a list of Middle-type components to use in the return
    let middleComponents = uniqueMiddles.map(
        (uniqueMiddle) => {
          const itemsWithMiddle = items.filter(
            (item) => item.mid === uniqueMiddle
          )
          return <Middle key={uniqueMiddle} myMiddle={uniqueMiddle} items={itemsWithMiddle} />
        }
      )
    return (
        <>
            <h1>{myOuter}</h1>

            {middleComponents}
        </>
    )
}