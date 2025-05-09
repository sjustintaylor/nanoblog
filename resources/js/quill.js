import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { Counter } from './character-counter'
Quill.register('modules/counter', Counter)
export default Quill

let editor = null
let form = null

export function createEditor(editorSelector, formSelector, counterSelector, counterLimit) {
  editor = new Quill(editorSelector, {
    theme: 'snow',
    modules: {
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['link']],
      counter: counterLimit
        ? {
            container: counterSelector,
            unit: 'character',
            limit: counterLimit,
          }
        : undefined,
    },
    formats: ['italic', 'bold', 'underline', 'link', 'strike'],
  })

  form = document.querySelector(formSelector)
  form.addEventListener('formdata', (event) => {
    // Append Quill content before submitting
    event.formData.append('content', editor.getSemanticHTML())
  })
}

export function deleteEditor() {
  editor = null
  form = null
}
