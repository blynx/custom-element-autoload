/**
 * findCustomElementsIn
 * 
 * @param {Element} node 
 */
function findAndLoadCustomElementsIn(node) {
    if (node.nodeName.indexOf("-") > -1) {
        loadCustomElement(node.localName)
    }
    Array.from(node.children).forEach(node => {
        findAndLoadCustomElementsIn(node)
    })
}

/**
 * loadCustomElement
 * 
 * @param {string} tagName 
 */
async function loadCustomElement(tagName) {
    if (!customElements.get(tagName)) {
        const { default: Element } = await import(`/elements/${tagName}.js`)
        customElements.define(tagName, Element)
    }
}

(() => {
    // initial loading
    findAndLoadCustomElementsIn(document.body)

    // create observer
    const customElementObserver = new MutationObserver((mutations) => {
        mutations.forEach(({ addedNodes }) => {
            addedNodes.forEach(findAndLoadCustomElementsIn)
        })
    })

    // init observer
    customElementObserver.observe(document.body, { subtree: true, childList: true })
})()
