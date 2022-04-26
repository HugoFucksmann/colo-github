import { Button } from '@mui/material';
var utterance = new SpeechSynthesisUtterance();
utterance.text =
	"My name's Guybrush Threepwood, and I want to be a pirate!";
const ButtonStyled = ({ ...props }) => {
	const { text = '', variant = 'contained' } = props;
	return <PenExagonGrid />;
};

export default ButtonStyled;
