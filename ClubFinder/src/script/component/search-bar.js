class searchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  getValue() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `<div id="search-container" class="search-container">
    <input
      placeholder="Search football club"
      id="searchElement"
      type="search"
    />
    <button id="searchButtonElement" type="submit">Search</button>
  </div>`;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", searchBar);
