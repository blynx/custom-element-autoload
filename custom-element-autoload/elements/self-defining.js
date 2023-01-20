class XRedSquare extends HTMLElement {
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
}

customElements.define("x-red-square", XRedSquare)
