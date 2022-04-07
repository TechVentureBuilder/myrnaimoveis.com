import React from "react"
import styled from "styled-components"
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
	const neighborhoods = [
		{
			display: "Ipiranga",
			value: "ipiranga",
		},
		{
			display: "Vila Mariana",
			value: "vila-mariana",
		},
		{
			display: "Morumbi",
			value: "morumbi",
		},
		{
			display: "Ibirapuera",
			value: "ibirapuera",
		},
		{
			display: "Bosque da Saúde",
			value: "bosque-da-saude",
		},
		{
			display: "Moema",
			value: "moema",
		},
		{
			display: "Mooca",
			value: "mooca",
		},
	]

	const cities = [
		{
			display: "São Paulo - SP",
			value: "sao-paulo-sp",
		},
		{
			display: "Rio de Janeiro - RJ",
			value: "rio-de-janeiro-rj",
		},
	]

	const categories = [
		{
			display: "Apartamento",
			value: "apartment",
		},
		{
			display: "Studio",
			value: "studio",
		},
		{
			display: "Loft",
			value: "loft",
		},
	]

	return (
		<SearchForm
			action="/catalogo"
			className={props.direction == "row" ? "row" : ""}
		>
			<h3>Buscar no catálogo</h3>
			{/* <Select
				label="Categoria"
				name="category"
				options={categories}
				placeholder="Selecione uma categoria"
				iconName="building"
			/> */}
			<Select
				label="Cidade"
				name="city"
				options={cities}
				placeholder="Selecione uma cidade"
				iconName="local"
			/>
			<Select
				label="Bairro"
				name="neighborhood"
				options={neighborhoods}
				placeholder="Selecione um bairro"
				iconName="local"
			/>
			<InputNumber
				label="Quartos"
				max={6}
				min={1}
				name="bedrooms"
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
