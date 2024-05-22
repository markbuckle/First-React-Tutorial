
// all functions use the PascalCasing format
function Message() {
    // return function below uses JSX: JavaScript XML
    const name = 'Mosh';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;