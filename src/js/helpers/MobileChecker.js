/**
 * Класс для проверки мобильного браузера.
 */
class MobileChecker {
  // static userAgent = navigator.userAgent
  static userAgent() {
    return navigator.userAgent
  }

  /**
   * Проверяет, является ли устройство Android.
  //  * @returns {boolean} true, если устройство Android, в противном случае false.
   */
  static get isAndroid() {
    const agentToString = String(this.userAgent)
    const android = agentToString.match(/Android/i)
    return Boolean(android)
  }

  /**
   * Проверяет, является ли устройство BlackBerry.
  //  * @returns {boolean} true, если устройство BlackBerry, в противном случае false.
   */
  static get isBlackBerry() {
    const agentToString = String(this.userAgent)
    const BlackBerry = agentToString.match(/BlackBerry/i)
    return Boolean(BlackBerry)
  }

  /**
   * Проверяет, является ли устройство iOS (iPhone, iPad или iPod).
  //  * @returns {boolean} true, если устройство iOS, в противном случае false.
   */
  static get isAppleOS() {
    const agentToString = String(this.userAgent)
    const iPhoneiPadiPod = agentToString.match(/iPhone|iPad|iPod/i)
    return Boolean(iPhoneiPadiPod)
  }

  /**
   * Проверяет, является ли устройство Opera Mini.
  //  * @returns {boolean} true, если устройство Opera Mini, в противном случае false.
   */
  static get isOpera() {
    const agentToString = String(this.userAgent)
    const operaMini = agentToString.match(/Opera Mini/i)
    return Boolean(operaMini)
  }

  /**
   * Проверяет, является ли устройство Windows.
  //  * @returns {boolean} true, если устройство Windows, в противном случае false.
   */
  static get isWindows() {
    const agentToString = String(this.userAgent)
    const iEMobile = agentToString.match(/IEMobile/i)
    return Boolean(iEMobile)
  }

  /**
   * Проверяет, является ли устройство любым из поддерживаемых типов (Android, BlackBerry, iOS, Opera Mini, Windows).
  //  * @returns {boolean} true, если устройство является любым из поддерживаемых типов, в противном случае false.
   */
  static get isAny() {
    return (
      MobileChecker.isAndroid ||
      MobileChecker.isBlackBerry ||
      MobileChecker.isAppleOS ||
      MobileChecker.isOpera ||
      MobileChecker.isWindows
    )
  }
}

export default MobileChecker
