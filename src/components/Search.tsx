import React from "react"
import styled from "styled-components"
import Button from "./Button"
import InputNumber from "./form/InputNumber"
import Select from "./form/Select"

const SearchForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
`

const Search: React.FC = (props) => {
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
		<SearchForm>
			<h3>Buscar no catálogo</h3>
			<Select
				label="Categoria"
				name="category"
				options={categories}
				placeholder="Selecione uma categoria"
				iconName="building"
			/>
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
