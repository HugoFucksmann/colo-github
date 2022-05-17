import './basejs.css';

const BaseJs = () => {
	return <CompContent>hola mundo</CompContent>;
};

const CompContent = styled('div')(({ theme }) => ({
	/* 	'&:hover': {
		
	}, */
}));

export default BaseJs;
