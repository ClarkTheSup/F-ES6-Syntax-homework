const inject = (items, sections) => {
    sections = sections.sort((obj1, obj2) => obj1.index < obj2.index ? 1 : -1);
    sections.map((obj) => {
        const {content, index} = obj;
        items.splice(index, 0, content);
    });
    return items;
}
export { inject };
