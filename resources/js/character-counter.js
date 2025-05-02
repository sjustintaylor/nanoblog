import Quill from 'quill'
export function Counter(quill, options) {
  const container = document.querySelector(options.container)
  quill.on(Quill.events.TEXT_CHANGE, () => {
    const text = quill.getText()

    if (options.unit === 'word') {
      container.innerText = text.split(/\s+/).length + ' words'
    } else {
      container.innerText = `${text.length - 1} of ${options.limit} characters`
      if (quill.getLength() > options.limit) {
        quill.deleteText(options.limit, quill.getLength())
      }
    }
  })
}
