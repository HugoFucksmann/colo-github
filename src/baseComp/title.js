import { Typography } from '@mui/material';
const Title = (props) => {
	const { border = 36 } = props;
	return (
		<>
			<Typography {...props} variant='h2'>
				{props.children}
			</Typography>
			<div
				style={{
					borderTop: '4px solid #6ec4b0',
					width: border,
					marginTop: -5,
					borderRadius: 15,
					alignSelf: 'center',
				}}
			/>
		</>
	);
};

export default Title;
