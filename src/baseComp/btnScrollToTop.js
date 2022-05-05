import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { Box } from "@mui/material";

const BtnScroll = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log("homa ", document.body.scrollHeight);
  if (showBtn)
    return (
      <BtnStyled onClick={() => goToTop()}>
        <KeyboardArrowUpIcon />
      </BtnStyled>
    );
};

const BtnStyled = styled(Box)(({ theme }) => ({
  position: "fixed",
  zIndex: 999,
  cursor: "pointer",
  backgroundColor: "#f2f2f2",
  bottom: 20,
  right: 20,
  height: 40,
  width: 40,
  borderRadius: 25,
  fontSize: 2,
  filter: "drop-shadow(1px 1px 2px #000)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default BtnScroll;
