import React from 'react';
import SearchCard from '../components/TripleCardView/SearchCard/SearchCard';
import ResultList from '../components/TripleCardView/ResultList/ResultList';
import CardView from '../components/TripleCardView/CardView/CardView';

// ez az oldal az első keresés megadása után jön be

const TripleCardView = () => {
	return (
		<div className='bg-white'>
			<div className='bg-white shadow-2 grow'>
				<SearchCard />
			</div>
			<div className='bg-white shadow-2 grow'>
				<ResultList />
			</div>
			<div className='bg-white shadow-2 grow'>
				<CardView />
			</div>

		</div>

	)
}

export default TripleCardView;