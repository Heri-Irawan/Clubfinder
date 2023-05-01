class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<div id="appBar" class="app-bar"> 
    <h2>Club Finder</h2>
    `;
  }
}

customElements.define("app-bar", Appbar);
