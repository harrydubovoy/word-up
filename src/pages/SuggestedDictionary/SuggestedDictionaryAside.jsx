import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MuiCard from '@mui/material/Card';
import { styled } from '../../ui-kit/theme';

import { Alphabet } from './Alphabet';

export function SuggestedDictionaryAside({ onClick }) {
  return (
    <>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Alphabet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Alphabet onClick={onClick} />
        </AccordionDetails>
      </Accordion>
      {/*<Accordion>*/}
      {/*  <AccordionSummary*/}
      {/*    expandIcon={<ArrowDropDownIcon />}*/}
      {/*    aria-controls="panel2-content"*/}
      {/*    id="panel2-header"*/}
      {/*  >*/}
      {/*    <Typography component="span">Filters</Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*  <AccordionDetails>*/}
      {/*    <Typography>*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
      {/*      malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
      {/*    </Typography>*/}
      {/*  </AccordionDetails>*/}
      {/*</Accordion>*/}
    </>
  );
}
