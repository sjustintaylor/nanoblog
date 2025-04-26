import edge from 'edge.js'

import { edgeIconify, addCollection } from 'edge-iconify'
import { icons as lucide } from '@iconify-json/lucide'

/**
 * Add heroIcons collection
 */
addCollection(lucide)
/**
 * Register a plugin
 */
edge.use(edgeIconify)
