export default class RedSquare extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: "open" })
        shadow.innerHTML = `
            <style>
                div {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    border: 1px solid fuchsia;
                    background-color: red;
                }
            </style>
            <div>
            </div>
        `

        alert("Red Square Constructor!")
    }

    static get observedAttributes() { 
        return ["draggable"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        alert(name + " changed to " + newValue)
    }

}
