export interface Product {
	_id?: string
	name: string
	slug: string
	address: {
		neighborhood: string
		city: string
		state: string
	}
	size: { min: number; max: number }
	bedrooms: { min: number; max: number }
	bathrooms: { min: number; max: number }
	parking: { min: number; max: number }
	price: number
	description?: string
	images: [{ _id: string; description: string }]
	features?: Array<string>
}
