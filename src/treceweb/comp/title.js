import { Typography } from "@mui/material";

const Title = (props) => {
  return (
    <>
      <Typography {...props} variant="h2">
        {props.children}
      </Typography>
      <div
        style={{
          borderTop: "4px solid #6ec4b0",
          width: 36,
          marginTop: -5,
          borderRadius: 15,
          alignSelf: "center",
        }}
      />
      <br />
    </>
  );
};

export default Title;
