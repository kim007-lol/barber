export interface ServiceItem {
  _id: string
  title: string
  description: string
  price?: string
  partner?: string
}

export interface FeatureItem {
  iconName: string
  title: string
  desc: string
}

export interface CrewMember {
  name: string
  role: string
  image: string
  specialty: string
}

export interface ReviewItem {
  name: string
  review: string
  rating: number
}

export interface GalleryItem {
  _id: string
  image: any
  altText?: string
  category?: string
}
