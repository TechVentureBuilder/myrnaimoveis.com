import type { NextPage } from "next"
import { useRouter } from "next/router"
import Container from "../../components/Container"
import { Product } from "../../types/Product"

const Sobre: NextPage = (props) => {
	const router = useRouter()
	const { slug } = router.query

	const productInfo: Product = {
		name: "Nome do Empreendimento",
		slug: "nome-do-empreendimento",
		neighborhood: "Nome do Bairro",
		city: "Nome da Cidade",
		state: "Sigla do Estado",
		area: { min: 123, max: 321 },
		bedrooms: { min: 1, max: 6 },
		bathrooms: { min: 1, max: 6 },
		price: 1000000,
		image: "",
	}

	return (
		<Container>
			<h1>{productInfo.name}</h1>
		</Container>
	)
}

export default Sobre
