import Popup from '../helpers/Popup.js'

class BurgerMenu extends Popup {
  constructor() {
    super()

    this.burgerButton = document.querySelector('.icon-menu')
  }

  /**
   * Initialize the menu functionality.
   */
  init() {
    const headerMenu = document.querySelector('.header__menu')
    if (this.burgerButton) {
      document.addEventListener('click', ({ target }) => {
        if (target.closest('.icon-menu')) {
          this.html.classList.toggle('menu-open')
          this.toggleBodyLock(this.isMenuOpen)
          headerMenu.classList.toggle('_active')
          // if (this.headerMenu) {
          //   headerMenu.classList.toggle('_active')
          // }
        }
      })
    }
  }

  /**
   * Open the menu.
   */
  menuOpen() {
    this.toggleBodyLock(true)
    this.html.classList.add('menu-open')
  }

  /**
   * Close the menu.
   */
  menuClose() {
    this.toggleBodyLock(false)
    this.html.classList.remove('menu-open')
  }

  get isMenuOpen() {
    return this.html.classList.contains('menu-open')
  }
}

export default BurgerMenu
