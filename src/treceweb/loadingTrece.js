const LoadingWeb = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				height: '100vh',
				width: '100%',
				backgroundColor: '#f2f2f2',
			}}
		>
			<img src={logoo} />
			<div style={{ width: 230 }}>
				<LinearProgress />
			</div>
			<br />
			<Typography
				variant='h5'
				style={{
					fontWeight: 'bold',
					fontFamily: 'serif',
					color: '#005F9F',
				}}
			>
				sitio en construccion
			</Typography>
		</div>
	);
};

export default LoadingWeb;
