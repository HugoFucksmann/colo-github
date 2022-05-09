import styled from '@emotion/styled';

const InputC = (props) => {
	return (
		<div style={{ margin: 10 }}>
			<LabelStyled>{props.label}</LabelStyled>
			<InputStyled {...props} />
		</div>
	);
};

const InputStyled = styled('input')(({ theme }) => ({
	width: '100%',
	height: 28,
	backgroundColor: 'transparent',
	border: '0px',
	borderBottom: '1px solid #fff',
	color: '#fff',

	outline: 'none',
}));

const LabelStyled = styled('span')(({ theme }) => ({
	color: '#fff',
	display: 'flex',
	fontSize: 14,
}));

export default InputC;
