export default function Suggestion({ $target, initialState, onSelect }) {
  this.$element = document.createElement('div');
  this.$element.className = 'Suggestion'
  $target.appendChild(this.$element);

  this.state = initialState

  this.$element = document.createElement('div')
  this.$element.className = "Suggestion"
  $target.appendChild(this.$element)

  this.state = {
    selectedIndex: 0,
    items: initialState.items
  }

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }

  this.render = () => {
    const { selectedIndex, items = [] } = this.state
    if (items.length > 0) {
      this.$element.style.display = 'block'
      this.$element.innerHTML = `
      <ul>
      ${items.map((item, index) => `
      <li class="${index === selectedIndex ? 'Suggestion__item--selected' : ''}" data-index="${index}">${item}</li>
      `).join('')
        }
    </ul >
        `
    } else {
      this.$element.style.display = 'node'
      this.$element.innerHTML = ''
    }
  }

  window.addEventListener('keyup', (e) => {
    if (this.state.items.length > 0) {
      const { selectedIndex } = this.state
      const lastIndex = this.state.items.length - 1
      const navigationkeys = ['ArrowUp', 'ArrowDown', "Enter"]

      let nextIndex = selectedIndex

      if (navigationkeys.includes(e.key)) {
        if (e.key === 'ArrowUp') {
          nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1
        } else if (e.key === 'ArrowDown') {
          nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1
        } else if (e.key ==='Enter'){
          onSelect(this.state.items[this.state.selectedIndex]);
        }
      }

      this.setState({
        ...this.state,
        selectedIndex: nextIndex
      })
    }
  })

  this.$element.addEventListener('click',(e)=>{
    const $li=e.target.closest('li')
    if($li){
      const {index} = $li.dataset
      try {
        onSelect(this.state.items[parseInt(index)])
      } catch (e) {
        alert('에러',e);
      }
    }
  })

  this.render()
}