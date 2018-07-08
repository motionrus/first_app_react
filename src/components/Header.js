import React, { Component } from 'react';

import Link from './Link'

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	height: 49px;
`

class Header extends React.Component {
	render () {
		return (
			<Row>
				<Col lg={12}>
					<nav>
						<List>
							<Link link='#' text='вызов мастера' />
							<Link link='#' text='прайс на ремонт' />
							<Link link='#' text='наши преимущества' />
							<Link link='#' text='схема работы' />
							<Link link='#' text='отзывы клиентов' />
							<Link link='#' text='примеры работ' />
							<Link link='#' text='контакты' />
						</List>
					</nav>
				</Col>
			</Row>
			)
	}
}

export default Header