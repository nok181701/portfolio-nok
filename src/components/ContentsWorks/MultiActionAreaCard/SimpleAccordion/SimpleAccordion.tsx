import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function SimpleAccordionSimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>使用ツール</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React, Next.js, TypeScript, JavaScript, Sass, Material UI, GitHub
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
