import DataSource from "../data/data-source.js";
import "../component/search-bar.js";
import "../component/club-list.js";

// mengubah function menjadi arrow function
const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("club-list");

  const onButtonSearchClicked = async () => {
    try {
      const results = await DataSource.searchClub(searchElement.value);
      renderResult(results);
      console.log(results);
    } catch (message) {
      fallbackResult(message);
      console.log(message);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
