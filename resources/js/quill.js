import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { Counter } from './character-counter'
Quill.register('modules/counter', Counter)
export default Quill
