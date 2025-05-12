import Quill from './quill'

const post = new Quill('#post', {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ font: [] }],
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block', 'link'],

      [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ align: [] }],

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
