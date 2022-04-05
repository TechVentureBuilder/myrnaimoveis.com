import type { NextPage } from "next"
import { useRouter } from "next/router"
import Container from "../../components/Container"

const Sobre: NextPage = (props) => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<Container>
			<h1>Produto:</h1>
			<h2>{slug}</h2>
		</Container>
	)
}

export default Sobre
