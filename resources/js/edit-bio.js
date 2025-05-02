import Quill from './quill'

const bio = new Quill('#bio', {
  theme: 'snow',
  modules: {
    toolbar: [['bold', 'italic', 'underline', 'strike'], ['link']],
    counter: {
      container: '#bio-counter',
      unit: 'character',
      limit: 360,
    },
  },

  formats: ['italic', 'bold', 'underline', 'link', 'strike'],
})
const form = document.querySelector('#bio-form')
form.addEventListener('formdata', (event) => {
  // Append Quill content before submitting
  event.formData.append('bio', bio.getSemanticHTML())
})
