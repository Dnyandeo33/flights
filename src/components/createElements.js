const createElement = (tagName = 'div', className, textContent) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    element.innerText = textContent;
    return element;
};
export default createElement;
