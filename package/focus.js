module.exports = {
  name: 'focus',
  bind: () => {},
  inserted: (el) => {
    el && el.focus()
  },
  update: () => {},
  componentUpdated: () => {},
  unbind: () => {},
}
