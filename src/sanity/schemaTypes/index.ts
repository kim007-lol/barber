import { type SchemaTypeDefinition } from 'sanity'

import { serviceType } from './serviceType'
import { galleryType } from './galleryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, galleryType],
}
