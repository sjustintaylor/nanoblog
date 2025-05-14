import Quill from './quill'
import 'quill/dist/quill.snow.css'
const post = new Quill('#post', {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons

      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
    ],
    counter: {
      container: '#post-counter',
      unit: 'character',
      limit: 3000,
    },
  },
})

const form = document.querySelector(`#post-form`)
form.addEventListener('formdata', (event) => {
  // Append Quill content before submitting
  event.formData.append('post', post.getSemanticHTML())
})
