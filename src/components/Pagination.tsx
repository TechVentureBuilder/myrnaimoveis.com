import Link from "next/link"
import React from "react"
import styled from "styled-components"

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
	gap: ${(props) => props.theme.sizes.xs};
	a {
		background-color: ${(props) => props.theme.colors.bg};
		border: ${(props) => props.theme.border.width} solid
			${(props) => props.theme.colors.card};
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
	let pagesList: Array<number> = []

	if (props.amount > 5) {
		pagesList.push(props.page)

		for (let i = 1; props.page - i > 0; i++) {
			if (pagesList.length < 3) {
				pagesList.unshift(props.page - i)
			}
		}

		if (props.page < props.amount) {
			for (let i = props.page + 1; pagesList.length < 5; i++) {
				if (props.page == props.amount - 1) {
					if (props.page == props.amount - 1) {
						pagesList.push(i)
						pagesList.unshift(pagesList[0] - 1)
					}
					break
				} else {
					pagesList.push(i)
				}
			}
		} else {
			for (let j = pagesList[0] - 1; j > 0 && pagesList.length < 5; j--) {
				pagesList.unshift(j)
			}
		}
	} else {
		for (let i = 0; i < 5; i++) {
			pagesList.unshift(5 - i)
		}
	}

	return (
		<PaginationWrapper>
			{pagesList.map((page, index) => (
				<Link href={`/${page}`} key={index}>
					<a className={page == props.page ? "current" : ""}>{page}</a>
				</Link>
			))}
		</PaginationWrapper>
	)
}

export default Pagination
