import './../scss/style.scss'
import BaseHelpers from './helpers/BaseHelpers.js'
import PopupManager from './modules/PopupManager'
import BurgerMenu from './modules/BurgerMenu'
// import Tabs from './modules/Tabs'
import Accordion from './modules/Accordion.js'
import isMobile from './modules/dropdownmenu.js'
import menuLinks from './modules/gotolink.js'
// import MousePRLX from './modules/parallaxMouse'
import swipertop from './modules/swiperquestion'
import swiperBottom from './modules/swiperButton.js'
import './modules/spoilers.js'

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
