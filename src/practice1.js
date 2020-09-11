const parseData = (input) => {
    const {data} = input;
    const output = [];
    data.map((obj) => {
        const [name, age, gender, birthday] = obj;
        const newObj = { name, age, gender, birthday };
        output.push(newObj)
    })
    return output;
}
export { parseData };
