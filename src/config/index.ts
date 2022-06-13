const by = 1488 / 1080

const APP_CONFIG = {
  ORIGINAL_SIZE: false,
  SIZE: undefined,
  BACKGROUND_VIDEO: undefined,
  SIZES: [
    { width: 3720 * 2, height: 1488 * 2 },
    // { width: Math.floor(3840 * 2 * by), height: Math.floor(1080 * 2 * by) }
  ]
}

Object.assign(APP_CONFIG, {
  ...(window.APP_CONFIG || {})
})

export default APP_CONFIG
