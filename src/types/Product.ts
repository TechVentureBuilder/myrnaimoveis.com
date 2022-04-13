export type Product = {
	name: string
	slug: string
	neighborhood: string
	city: string
	state: string
	area: { min: number; max: number }
	bedrooms: { min: number; max: number }
	bathrooms: { min: number; max: number }
	price: number
	image?: string
  images?: Array<{alt:string, url: string, width: number, height: number}>
  description?: string,
	features?: Array<string>
}