import React from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

type Props = {
	children: any
}

const Layout = (props: Props) => {
	const router = useRouter()
	return (
		<>
			<NavBar />
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					key={router.asPath}
				>
					{props.children}
				</motion.div>
			</AnimatePresence>
			<Footer />
		</>
	)
}

export default Layout
