import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

//* props del componente
//? Landing, header, body, footer

const LayoutWebUno = (props) => {
	const classes = useStyles();
	const { header, landing, body, footer } = props;
	return (
		<div>
			<div className={classes.header}>{header}</div>
			<div className={classes.landing}>{landing}</div>
			<div className={classes.body}>{body}</div>
			<div className={classes.footer}>{footer}</div>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	header: {
		position: 'absolute',
	},
	landing: { height: '90vh' },
	body: {
		padding: 30,
		paddingRight: '10%',
		paddingLeft: '10%',
	},
	footer: { height: '20vh' },
}));

LayoutWebUno.propTypes = {
	header: PropTypes.element.isRequired,
	footer: PropTypes.element.isRequired,
	body: PropTypes.element.isRequired,
	landing: PropTypes.element.isRequired,
};

export default LayoutWebUno;
