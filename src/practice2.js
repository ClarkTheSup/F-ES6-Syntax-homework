const inject = (items, sections) => {
    // TODO 这里 obj1.index， obj2.index直接相减就好
    sections = sections.sort((obj1, obj2) => obj1.index < obj2.index ? 1 : -1);
    // TODO 不是map的使用场景
    sections.map((obj) => {
        const {content, index} = obj;
        items.splice(index, 0, content);
    });
    return items;
}
export { inject };
