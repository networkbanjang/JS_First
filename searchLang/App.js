import { fetchedLanguage } from "./api.js";
import SearchInput from "./searchInput.js"
import Suggestion from "./suggestion.js";
import SelectedLanguage from "./selectedLanguage.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  }
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    }
    suggestion.setState({
      selectedindex: 0,
      items: this.state.fetchedLanguages,
    })
    selectedLanguages.setState(this.state.selectedLanguages)
  }

  const selectedLanguages = new SelectedLanguage({
    $target,
    initialState: []
  })

  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        })
      } else {
        const languages = await fetchedLanguage(keyword)
        this.setState({
          fetchedLanguages: languages
        })
      }
    }
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      selectedIndex: 0,
      items: []
    },
    onSelect: (language) => {
      alert(language);
      const nextSelectedLanguages = [...this.state.selectedLanguages];

      const index = nextSelectedLanguages.findIndex((selectedLanguage) => selectedLanguage === language)

      if (index > -1) {
        nextSelectedLanguages.splice(index, 1)
      }
      nextSelectedLanguages.push(language)

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages
      })
    }
  })


}