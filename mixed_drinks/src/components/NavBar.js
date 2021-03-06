import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
  	<div>
  		<nav className="pt3 pt4-ns pb-2 dib w-100 top navigation">
  			<h1 onClick={props.homeClick}>Mixed Drinks</h1>
  			<div className="tc pb3">
				<Link 
					to="/home" 
					onClick={props.homeClick} 
					style={{margin: '20px'}}>
						Home
				</Link>
				<Link 
					to="/favorites" 
					style={{margin: '20px'}} 
					onClick={() => props.updateAppDrinks(props.favoriteDrinks, true)}>
						Favorites
				</Link>		
				<Link 
					to="/about" 
					style={{margin: '20px'}}>
						About
				</Link>			    
  			</div>
		</nav>
	</div>
	)
}

export default Navbar;
