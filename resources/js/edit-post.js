import Quill from './quill'

export function createPostEditor(id) {
  const post = new Quill(id, {
    theme: 'snow',
    modules: {
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['link']],
      counter: {
        container: id,
        unit: 'character',
        limit: 3000,
      },
    },

    formats: ['italic', 'bold', 'underline', 'link', 'strike'],
  })

  const form = document.querySelector(`#${id}-form`)
  form.addEventListener('formdata', (event) => {
    // Append Quill content before submitting
    event.formData.append('data', JSON.stringify(post.getContents().ops))
  })
  return post
}
