import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AsideForProductsList.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function AsideForProductsList({ setCategory }) {
  const theme = createTheme({
    components: {
      // Name of the component
      MuiAccordion: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            boxShadow: 'none',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="products_layout-aside-accordion">
        <Accordion disableGutters={true} classes={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              onClick={() => {
                setCategory('植物奶');
              }}
            >
              植物奶
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list-group">
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                    className="link-decoration"
                    onClick={() => {
                      setCategory('燕麥奶');
                    }}
                  >
                    燕麥奶
                  </button>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                  className="link-decoration"
                    onClick={() => {
                      setCategory('杏仁奶');
                    }}
                  >
                    杏仁奶
                  </button>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                  className="link-decoration"
                    onClick={() => {
                      setCategory('堅果奶');
                    }}
                  >
                    堅果奶
                  </button>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              onClick={() => {
                setCategory('有機蔬果汁');
              }}
            >
              有機蔬果汁
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list-group">
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                    onClick={() => {
                      setCategory('果汁');
                    }}
                  >
                    果汁
                  </button>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                    onClick={() => {
                      setCategory('蔬菜汁、氣泡水');
                    }}
                  >
                    蔬菜汁、氣泡水
                  </button>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                    onClick={() => {
                      setCategory('果昔、果醋');
                    }}
                  >
                    果昔、果醋
                  </button>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              onClick={() => {
                setCategory('營養點心');
              }}
            >
              營養點心
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="list-group">
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                  className="link-decoration"
                    onClick={() => {
                      setCategory('麥片');
                    }}
                  >
                    麥片
                  </button>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                  className="link-decoration"
                    onClick={() => {
                      setCategory('燕麥棒、蛋白棒');
                    }}
                  >
                    燕麥棒、蛋白棒
                  </button>
                </li>
                <li className="list-group-item products_layout-aside-list-group-item">
                  <button
                  className="link-decoration"
                    onClick={() => {
                      setCategory('堅果');
                    }}
                  >
                    堅果
                  </button>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
}

export default AsideForProductsList;
