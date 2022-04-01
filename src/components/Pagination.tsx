import Link from "next/link"
import React from "react"
import styled from "styled-components"

type Props = {
	page: number
	amount: number
}

const PaginationWrapper = styled.div`
	background-color: red;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.theme.sizes.m};
	a {
		background-color: ${(props) => props.theme.colors.card};
		color: ${(props) => props.theme.colors.text};
		display: flex;
		justify-content: center;
		align-items: center;
		height: ${(props) => props.theme.sizes.interaction};
		width: ${(props) => props.theme.sizes.interaction};
		text-decoration: none;
		&.current {
			background-color: ${(props) => props.theme.colors.main};
		}
	}
`

const Pagination = (props: Props) => {
	const after = []
	for (let i = props.amount - 1; i < props.amount + 1; i++) {
		if (props.amount - 2 == props.page) {
			after.push(i)
		} else if (after.length < 1) {
			after.push("...")
		} else {
			after.push(i)
		}
	}

	const before = []
	for (let i = props.page - 2; i < props.page; i++) {}

	return (
		<PaginationWrapper>
			{/* Prev Pages Group */}
			{before.map((page, index) => (
				<Link href={`/${page}`} key={index}>
					{`${page}`}
				</Link>
			))}

			{/* Current Page Indicator */}
			<Link href={"/"}>
				<a className="current">{props.page}</a>
			</Link>

			{/* Next Pages Group */}
			{after.map((page, index) => (
				<Link href={`/${page}`} key={index}>
					{`${page}`}
				</Link>
			))}
		</PaginationWrapper>
	)
}

export default Pagination
