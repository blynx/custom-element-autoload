export default class AddMarkup extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: "open" })
        shadow.innerHTML= `
            <style>
                div {
                    display: inline-flex;
                    flex-direction: column;
                }
            </style>
            <div>
                <textarea></textarea>
                <button>Append Markup</button>
            </div>
        `
    }

    get button() {
        return this.shadowRoot.querySelector("button")
    }

    get markup() {
        return this.shadowRoot.querySelector("textarea")?.value
    }

    get output() {
        return document.querySelector(this.getAttribute("to") ?? "")
    }

    handleClick() {
        this.output.innerHTML = this.markup
    }

    connectedCallback() {
        this.button.addEventListener("click", this.handleClick.bind(this))
        this.shadowRoot.querySelector("textarea").value = "<red-square></red-square>"
    }
}
