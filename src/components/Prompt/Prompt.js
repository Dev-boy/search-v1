import React from 'react';
import './Prompt.css';

const Prompt = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='prompt'>
			<input className='br-pill br2 w-30 pa3 shadow-2' 
				   type='search'
				   onChange={onInputChange} />
			<div className='pa3'>
				<button className='br-pill f4 pv1 dib 
								   bg-white shadow-2' 
						onClick={onButtonSubmit}
				>Search</button>
			</div>
		</div>
	)
}

export default Prompt;