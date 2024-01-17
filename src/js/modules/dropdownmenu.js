'use strict'

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBarry: function () {
    return navigator.userAgent.match(/BlackBarry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBarry() ||
      isMobile.Opera() ||
      isMobile.iOS() ||
      isMobile.Windows()
    )
  }
}
if (isMobile.any()) {
  document.body.classList.add('_touch')
} else {
  document.body.classList.add('_pc')
}

if (isMobile.any()) {
  document.body.classList.add('_touch')

  let menuArrows = document.querySelectorAll('.menu__arrow')
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index]
      menuArrow.addEventListener('click', function (e) {
        console.log(menuArrow)
        menuArrow.parentElement.classList.toggle('_active')
      })
    }
  }
} else {
  document.body.classList.add('_pc')
}

export default isMobile
