import Quill from './quill'
const post = new Quill('#post', {
  theme: 'snow',
  modules: {
    toolbar: [['bold', 'italic', 'underline', 'strike'], ['link']],
    counter: {
      container: '#post-counter',
      unit: 'character',
      limit: 3000,
    },
  },

  formats: ['italic', 'bold', 'underline', 'link', 'strike'],
})

const form = document.querySelector('#post-form')
form.addEventListener('formdata', (event) => {
  // Append Quill content before submitting
  event.formData.append('bio', JSON.stringify(post.getContents().ops))
})
