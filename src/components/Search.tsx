import React, { useEffect, useState } from "react"
import styled from "styled-components"
import api from "../api"
import Button from "./Button"
import InputNumber from "./form/InputNumber"
import Select from "./form/Select"

const SearchForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	&.row {
		display: grid;
		grid-template-columns: 14rem 14rem 6rem auto;
		h3 {
			display: none;
		}
		button {
			margin-top: auto;
			margin-bottom: 0;
			width: max-content;
		}
		@media (max-width: ${(props) => props.theme.screens.m}) {
			display: flex;
			flex-direction: column;
			button {
				width: inherit;
			}
		}
	}
`

type Props = {
	direction?: "row" | "column"
}

const Search: React.FC<Props> = (props) => {
	const [cities, setCities] = useState([])
	const [neighborhoods, setNeighborhoods] = useState([])

	useEffect(() => {
		api
			.get("/cities")
			.then((result) => {
				setCities(result.data.cities)
			})
			.catch((err) => {
				console.log(err)
			})
		api
			.get("/neighborhoods")
			.then((result) => {
				setNeighborhoods(result.data.neighborhoods)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	const getNeighborhoodsInCity = async (city: string) => {
		await api
			.get("/neighborhoods", {
				params: {
					city: city,
				},
			})
			.then((result) => {
				setNeighborhoods(result.data.neighborhoods)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<SearchForm
			action="/catalogo"
			className={props.direction == "row" ? "row" : ""}
		>
			<h3>Buscar no catálogo</h3>
			<Select
				label="Cidade"
				name="cidade"
				options={cities}
				placeholder="Selecione uma cidade"
				iconName="local"
				onChange={getNeighborhoodsInCity}
			/>
			<Select
				label="Bairro"
				name="bairro"
				options={neighborhoods}
				placeholder="Selecione um bairro"
				iconName="local"
			/>
			<InputNumber
				label="Quartos"
				max={6}
				min={1}
				name="quartos"
				iconName="bed"
			/>
			<Button
				type="submit"
				fill={true}
				text="Buscar Imóvel"
				iconName="search"
			/>
		</SearchForm>
	)
}

export default Search
