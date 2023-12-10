
export default function Middle({myMiddle, items}) {
    //create a list of <p> elements, one for each item passed to this component
    const innerElements = items.map(
        (item) => <p key={item.in}>Inner: {item.in}</p>
    )
    return (
        <>
            <h2>{myMiddle}</h2>

            {innerElements}
        </>
    )
}