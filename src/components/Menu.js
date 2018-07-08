import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


const Repair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`

const Worktime = styled.div`
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;
	color: #2a2a2a;
	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 500;
	}
`

const Calls = styled.div`
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;
	color: #2a2a2a;
	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 500;
	}
`

const CallButton = styled.button`
	width: 176px;
	height: 48px;
	background-color: #3fc7db;
	border-radius: 30px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
`

class TelNumber extends React.Component {
	render () {
		return (
			<span>{this.props.tel}</span>
			)
	}
}

class Adress extends React.Component {
	render () {
		return (
			<span>{this.props.addr}</span>
			)
	}
}

class Menu extends React.Component {
	render () {
		return (
			<Row>
				<Col lg={3}>
					<Repair>Ремонт айфонов в сервисном
					центре на выезде
					</Repair>
				</Col>
				<Col lg={3} lgOffset={1}>
					<Worktime>Пн-Пт с 10 до 20, сб, вс с 11 до 18
						<Adress addr="Ленинская, 301"/>
					</Worktime>
				</Col>
				<Col lg={3}>
					<Calls>Звонки принимаются 24 часа
						<TelNumber tel="8 (846) 922 55 44" />
					</Calls>
				</Col>
					<CallButton>Заказать звонок!</CallButton>
				<Col lg={2}>

				</Col>
			</Row>
			)
	}
}

export default Menu