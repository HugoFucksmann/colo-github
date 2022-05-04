import styled from "@emotion/styled";
import { Grid, TextField, Typography } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import Title from "./comp/title";

const FooterTrece = () => {
  return (
    <ContentFooter>
      <Title>Contacto</Title>
      <br />
      <GridForm container spacing={0}>
        <Grid item xs={12} md={6}>
          <InputComp label="Nombre" />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputComp label="Email" />
        </Grid>
        <Grid item xs={12}>
          <InputComp label="Mensaje" />
        </Grid>
      </GridForm>
      <br />
    </ContentFooter>
  );
};

const ContentFooter = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: 40,
  backgroundColor: theme.palette.primary.main,
}));

const GridForm = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  border: "2px solid #fff",

  width: "50%",
  alignSelf: "center",
  padding: 20,
}));

const InputStyled = styled("input")(({ theme }) => ({
  width: "100%",
  height: 28,
  backgroundColor: "transparent",
  border: "0px",
  borderBottom: "1px solid #fff",
  color: "#fff",

  outline: "none",
}));

const LabelStyled = styled("span")(({ theme }) => ({
  color: "#fff",
  display: "flex",
  fontSize: 14,
  fontFamily: "museoSlab",
}));

const InputComp = ({ label }) => {
  return (
    <div style={{ margin: 10 }}>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled />
    </div>
  );
};

export default FooterTrece;
