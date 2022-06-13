/* eslint-disable no-debugger */
/* eslint-disable no-restricted-syntax */

if (import.meta.env.PROD && window.location.search !== '?dev=true') {
// 禁止F12键盘事件
  window.addEventListener('keydown', (event) => {
    const s1 = event.code === 'F12' || event.keyCode === 123
    const s2 = event.ctrlKey && event.shiftKey && (event.code === 'KeyI' || event.keyCode === 73)

    if (s1 || s2) {
      event.preventDefault()
      event.stopPropagation()
      event.returnValue = false
      return false
    }
  })

  // 禁止右键、选择、复制
  window.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    event.stopPropagation()
    event.returnValue = false
    return false
  })

  const listening1 = function(callback: Function) {
    const devtools: {
      isOpen: boolean
      orientation?: 'vertical' | 'horizontal'
    } = {
      isOpen: false,
      orientation: undefined,
    }

    const threshold = 300

    const emitEvent = (isOpen: typeof devtools.isOpen, orientation: typeof devtools.orientation) => {
      globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
        detail: {
          isOpen,
          orientation,
        },
      }))
    }

    const main = ({ emitEvents = true } = {}) => {
      const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold
      const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold
      const orientation = widthThreshold ? 'vertical' : 'horizontal'

      const Firebug = (globalThis as any).Firebug

      if (!(heightThreshold && widthThreshold) && ((Firebug && Firebug.chrome && Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
        if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents)
          emitEvent(true, orientation)

        devtools.isOpen = true
        devtools.orientation = orientation
      }
      else {
        if (devtools.isOpen && emitEvents)
          emitEvent(false, undefined)

        devtools.isOpen = false
        devtools.orientation = undefined
      }
    }

    main({ emitEvents: false })
    setInterval(main, 500)

    window.addEventListener('devtoolschange', (event: any) => {
      if (event.detail.isOpen) return callback()
    })
  }

  const listening2 = function(callback: Function) {
    window.addEventListener('load', () => {
      const threshold = 500
      const measure = () => {
        const start = performance.now()
        debugger
        const time = performance.now() - start
        if (time > threshold) return callback()
      }
      setInterval(measure, 300)
    })
  }

  const listening = function(callback: Function) {
    listening1(callback)
    listening2(callback)
  }

  listening(() => {
    // console.log('打开了')
  })
}
