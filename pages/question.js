import './../src/scss/style.scss'
import BaseHelpers from '../src/js/helpers/BaseHelpers.js'
import PopupManager from '../src/js/modules/PopupManager.js'
import BurgerMenu from '../src/js/modules/BurgerMenu.js'
// import Tabs from './modules/Tabs'
import Accordion from '../src/js/modules/Accordion.js'
import isMobile from '../src/js/modules/dropdownmenu.js'
import menuLinks from '../src/js/modules/gotolink.js'
import MousePRLX from '../src/js/modules/parallaxMouse.js'
import swipertop from '../src/js/modules/swiperquestion.js'
import swiperBottom from '../src/js/modules/swiperButton.js'
import '../src/js/modules/spoilers.js'

BaseHelpers.checkWebpSupport()

BaseHelpers.addTouchClass()

BaseHelpers.headerFixed()
/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager()

// new MousePRLX()

// new Tabs('tabs-example', {
// 	onChange: data => {
// 		console.log(data)
// 	},
// })

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
})

new BurgerMenu().init()

/* определение типа гаджета */
isMobile

/*Прокрутка при скроле*/
menuLinks

//свайпер верхний
swipertop

//свайпер нижний
swiperBottom
