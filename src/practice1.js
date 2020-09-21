// TODO 没有使用column
const parseData = (input) => {
    const {data} = input;
    // TODO 使用map做数组与数组的转化，不用声明output，查查map的使用
    const output = [];
    data.map((obj) => {
        // TODO 不要hardcode这四个key，这是后端返回的，可能会发生变化
        const [name, age, gender, birthday] = obj;
        const newObj = { name, age, gender, birthday };
        output.push(newObj)
    })
    return output;
}
export { parseData };
