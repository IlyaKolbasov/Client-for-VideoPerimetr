import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { deleteRecord } from "../../http";

export function BasicAccordion({ record, handleClick, inProgress }) {
  const {
    firstName,
    lastName,
    city,
    street,
    buildingNumber,
    flatNumber,
    fromDate,
    fromTime,
    toDate,
    toTime,
    number,
    id,
    email,
  } = record;

  const handleDelete = async () => {
    const result = await deleteRecord(id);
    handleClick();
  };

  return (
    <div>
      <Accordion
        style={{
          maxWidth: "1200px",
          border: "unset !important",
          margin: "40px auto",
          background: "#c8c8c870",
          boxShadow: "5px 5px 10px #716a6a6b"
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ display: "flex", borderBottom: "1px solid #80808047" }}
          className="accordion-title-block"
        >
          <Typography>{`${lastName} ${firstName} - ${city}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
          style={{ display: "flex", justifyContent: "space-between", marginBottom: "-15px" }}
          >
            {`Город - ${city}`}
            <IconButton
                aria-label="delete"
                style={{ color: "#231f20", transform: "translateX(7px)"}}
                onClick={handleDelete}
                className={!inProgress ? "process-btn" : ''}
            >
              { !inProgress ? 'В процесс' :  <CloseIcon /> }
            </IconButton>
          </Typography>
          <Typography>{`Улица, дом - ${street}, ${buildingNumber}`}</Typography>
          <Typography>{`Номер квартиры - ${flatNumber}`}</Typography>
          <Typography>
            {`Период: с ${fromDate}, ${fromTime} по ${toDate}, ${toTime}`}
          </Typography>
          <Typography>{`Email: ${email}`}</Typography>
          <Typography>{`Телефон: ${number}`}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
