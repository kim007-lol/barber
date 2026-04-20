import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Gentlemens Cut Content')
    .items([
      S.documentTypeListItem('service').title('Services & Pricing'),
      S.documentTypeListItem('gallery').title('Gallery & Lookbook'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['service', 'gallery'].includes(item.getId()!)
      ),
    ])
