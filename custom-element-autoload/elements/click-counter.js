export default class ClickCounter extends HTMLElement {
    value = 0
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: "open" })
        shadow.innerHTML = `
            <style>
                div {
                    display: inline-flex;
                    padding: .25rem;
                    border: 1px solid black;
                    border-radius: 6px;
                    align-items: baseline;
                }
                span {
                    font-family: monospace;
                    min-width: 6ch;
                }
            </style>
            <div>
                <span>count</span>
                <button>+1</button>
            </div>
        `
    }

    get button() { return this.shadowRoot.querySelector("button") }
    get output() { return this.shadowRoot.querySelector("span") }
    set output(value) { this.output ? this.output.textContent = value : undefined }

    connectedCallback() {
        this.button.addEventListener("click", this.increment.bind(this))
    }

    increment() {
        this.output = (this.value += 1)
    }
}
