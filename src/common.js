export const getTemplate = async (url) => {
    return (
        await fetch(url)
    ).text()
};

export const getDate = async (url, options) => {
    return (
        await fetch(`https://a-level-final.firebaseio.com/${url}`, options)
    ).json()
};

export function insertTemplate(str) {
    return str.split(/\{([^<|>]+)\}/g).map((item, index) => {
        return index % 2 === 1 || index === 1 ? eval(item): item
    }).join('')
}

export function createEl(container, tag = "div", attrs) {
    const newEl =  container.appendChild(
        document.createElement(tag)
    );
    if(attrs) for(let attr in attrs) {
        newEl[attr] = attrs[attr]
    }
    return newEl
}