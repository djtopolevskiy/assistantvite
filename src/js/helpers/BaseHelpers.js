import { document } from 'postcss'
import MobileChecker from './MobileChecker.js'

class BaseHelpers {
  static header() {
    return document.querySelector('.header')
  }
  static firstScreen() {
    return document.querySelector('[data-observ]')
  }
  static html() {
    return document.documentElement
  }
  /**
   * Проверка браузера на поддержку .webp изображений
   * (i) необходимо для корректного отображения webp из css
   * */
  static checkWebpSupport() {
    /** Проверка поддержки webp */
    const testWebp = (callback) => {
      const webP = new Image()
      if (this.webP) {
        webP.onload = webP.onerror = () => callback(webP.height === 2)
        webP.src =
          'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
      }
    }

    /** Добавление класса _webp или _no-webp для HTML */
    testWebp((support) => {
      const className = support ? 'webp' : 'no-webp'
      if (this.html) {
        this.html.classList.add(className)
      }

      console.log(support ? 'webp поддерживается' : 'webp не поддерживается')
    })
  }

  /**
   * Добавление класса touch для HTML если браузер мобильный
   * */
  static addTouchClass() {
    if (MobileChecker.isAny) {
      this.html.classList.add('touch')
    }
  }

  /** Функция для фиксированной шапки при скролле */
  static headerFixed() {
    const headerStickyObserver = new IntersectionObserver(([entry]) => {
      this.html.classList.toggle('header-is-sticky', !entry.isIntersecting)
    })

    if (this.firstScreen) {
      if (this.headerStickyObserver) {
        headerStickyObserver.observe(this.firstScreen)
      }
    }
  }
}

export default BaseHelpers
