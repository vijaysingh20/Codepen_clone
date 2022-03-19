import React from "react";
import { Box } from "@mui/material";
import Editor from "./Editor";
import { styled } from "@mui/system";

import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  height: 60vh;
  background-color: #060606;
  display: flex;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#ff3c41"
        language="xml"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0ebeff"
        language="css"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JS"
        icon="( )"
        color="#fcd000"
        language="javascript"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;
