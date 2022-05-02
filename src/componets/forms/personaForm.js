import styled from '@emotion/styled';
import {
	Button,
	TextField,
	Grid,
	Select,
	MenuItem,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRef } from 'react';
import { useState } from 'react';

const PersonaForm = () => {
	const [refresh, setRefresh] = useState(false);
	const formInputs = useRef({});
	console.log(formInputs.current);
	return (
		<ContainerForm>
			<Grid container spacing={3}>
				{dataForm.map((data, i) => (
					<Grid item md={6} xs={12} key={data.label}>
						<SpanLabel>{data.label}</SpanLabel>
						{data.type !== 'select' ? (
							<TextField
								fullWidth
								onChange={(e) =>
									(formInputs.current[data.label] = e.target.value)
								}
								sx={{ input: { backgroundColor: '#fff' } }}
								InputLabelProps={{
									shrink: true,
								}}
								autoFocus={i === 0 && true}
								style={{ marginBottom: 15 }}
								size='small'
								type={data.type}
								variant='outlined'
							/>
						) : (
							<Select
								fullWidth
								size='small'
								key={data.label}
								sx={{ backgroundColor: '#fff' }}
								value={formInputs.current[data.label]}
								onChange={(e) =>
									(formInputs.current[data.label] = e.target.value)
								}
							>
								{data.ops.map((op) => (
									<MenuItem key={op} value={op}>
										{op}
									</MenuItem>
								))}
							</Select>
						)}
					</Grid>
				))}
				<Grid item xs={12}>
					<Button
						fullWidth
						variant='contained'
						onClick={() => setRefresh(!refresh)}
					>
						Cargar
					</Button>
				</Grid>
			</Grid>
		</ContainerForm>
	);
};

const dataForm = [
	{
		label: 'nobmre',
		type: 'text',
		input: 'text',
		helperTxt: { error: 'error', help: 'introduce la informacion' },
	},
	{
		label: 'apellido',
		type: 'text',
		input: 'text',
		helperTxt: { error: 'error', help: 'introduce la informacion' },
	},
	{
		label: 'DNI',
		type: 'number',
		input: 'text',
		helperTxt: { error: 'error', help: 'introduce la informacion' },
	},
	{
		label: 'edad',
		type: 'number',
		input: 'text',
		helperTxt: { error: 'error', help: 'introduce la informacion' },
	},
	{
		label: 'fecha de nacimiento',
		type: 'date',
		input: 'date',
		helperTxt: { error: 'error', help: 'introduce la informacion' },
	},
	{
		label: 'sexo',
		type: 'select',
		ops: ['Hombre', 'Mujer'],
		helperTxt: { error: 'error', help: 'introduce la informacion' },
	},
];

const SpanLabel = styled('div')(({ theme }) => ({
	color: 'grey',
	marginBottom: 5,
	marginLeft: 5,
}));

const ContainerForm = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: 40,
	paddingBottom: 30,

	borderRadius: 15,
	backgroundColor: '#f2f2f2',
	border: '2px solid',
	borderColor: theme.palette.primary.main,
	marginTop: 30,
}));

const useStyles = makeStyles((theme) => ({
	textField: {
		backgroundColor: 'red',
	},
}));

export default PersonaForm;
