import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  height: 31vh;
`;

const Result = () => {
  const { html, css, js } = useContext(DataContext);

  const src = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
  `;

  return (
    <Container>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
