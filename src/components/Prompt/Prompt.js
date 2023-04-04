import React from 'react';

const Prompt = () => {
	return (
		<div>
			<input className='br-pill br2 w-30 pa3 b--light-blue grow shadow-2' 
				   type='search' />
			<div className='pa3'>
				<button className='grow br-pill f4 pv1 dib gray bg-white' >Search</button>
			</div>
		</div>
	)
}

export default Prompt;