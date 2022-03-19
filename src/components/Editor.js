import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import { Controlled } from "react-codemirror2-react-17";

import "codemirror/theme/material.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const Container = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-basic: 0;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Editor = ({ heading, icon, color, language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              color: "#000",
              display: "flex",
              placeContent: "center",
              paddingBottom: 2,
              borderRadius: 5,
              margin: 5,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <SettingsIcon fontSize="small" style={{ alignSelf: "center" }} />
      </Header>
      <Controlled
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Container>
  );
};

export default Editor;
