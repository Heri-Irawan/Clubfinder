import "./club-item.js";

class ClubList extends HTMLElement {
  set Clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  render() {
    this._clubs.forEach((club) => {
      this.innerHTML = ``;
      const clubItemElement = document.createElement("club-item");
      clubItemElement.club = club;
      this.appendChild(clubItemElement);
    });
  }
  renderError(message) {
    this.innerHTML = ``;
    this.innerHTML += `<h2 class="placeholder"> ${message}</h2>`;
  }
}

customElements.define("club-list", ClubList);
