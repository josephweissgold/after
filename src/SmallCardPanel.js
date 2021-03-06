import React, { Component } from 'react';
import care1 from './images/care1.jpg';
import care2 from './images/care2.jpg';
import care3 from './images/care3.jpg';
import care4 from './images/care4.jpg';
import care5 from './images/care5.jpg';
import body1 from './images/body1.jpg';
import body2 from './images/body2.jpg';
import body3 from './images/body3.jpg';
import body4 from './images/body4.jpg';
import body5 from './images/body5.jpg';
import ceremony1 from './images/ceremony1.jpg';
import ceremony2 from './images/ceremony2.jpg';
import ceremony3 from './images/ceremony3.jpg';
import ceremony4 from './images/ceremony4.jpg';
import ceremony5 from './images/ceremony5.jpg';
import treasures1 from './images/treasures1.jpg';
import treasures2 from './images/treasures2.jpg';
import treasures3 from './images/treasures3.jpg';
import treasures4 from './images/treasures4.jpg';
import treasures5 from './images/treasures5.jpg';
import legacy1 from './images/legacy1.jpg';
import legacy2 from './images/legacy2.jpg';
import legacy3 from './images/legacy3.jpg';
import legacy4 from './images/legacy4.jpg';
import legacy5 from './images/legacy5.jpg';

import './SmallCardPanel.css';

class SmallCardPanel extends Component {
	static defaultProps = {
		cards: [
			{
				name: 'Care 1',
				src: care1,
				id: 1
			},
			{
				name: 'Care 2',
				src: care2,
				id: 2
			},
			{
				name: 'Care 3',
				src: care3,
				id: 3
			},
			{
				name: 'Care 4',
				src: care4,
				id: 4
			},
			{
				name: 'Care 5',
				src: care5,
				id: 5
			}
		]
	};

	render () {
		return (
			<div>
				<div className="row">
					{this.props.cards.map((c) => (
						<div className="Card col-lg-1 col-md-1 text-center" key={c.id}>
							<img src={c.src} alt={c.name} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default SmallCardPanel;
