import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Icon from "./Icon"

type Props = {
	page: number
	amount: number
}

const PaginationWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.theme.sizes.xl};
	margin-bottom: ${(props) => props.theme.sizes.xl};
	a {
		text-decoration: none;
	}
`

const Pagination = (props: Props) => {
	const router = useRouter()

	return (
		<PaginationWrapper>
			{props.page > 1 ? (
				<Button
					type="button"
					iconName="chevronLeft"
					variant="secondary"
					onClick={() => {
						router.push({
							pathname: router.pathname,
							query: {
								...router.query,
								pagina: Number(props.page) - 1,
							},
						})
					}}
				></Button>
			) : (
				""
			)}
			<p>
				{props.page}
				<span style={{ opacity: 0.3 }}>{" / " + props.amount}</span>
			</p>
			{props.page < props.amount ? (
				<Button
					type="button"
					iconName="chevronRight"
					variant="secondary"
					onClick={() => {
						router.push({
							pathname: router.pathname,
							query: {
								...router.query,
								pagina: Number(props.page) + 1,
							},
						})
					}}
				></Button>
			) : (
				""
			)}
		</PaginationWrapper>
	)
}

export default Pagination
