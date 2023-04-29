import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddKeyRing from './AddKeyRing';
import SearchKeyRing from './SearchKeyRing';
import ModifyKeyRing from './ModifyKeyRing';
import DeleteKeyRing from './DeleteKeyRing';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: "init"};
    this.add = props.add;
    this.delete = props.delete;
    this.modify = props.modify;
  } 

  handleChange = (panel) => (event, isExpanded) => {
    this.setState({expanded: (panel === this.state.expanded)? "init" : panel})
  };
  
  render() {
    return <div>
      <Accordion expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography>키링 생성</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddKeyRing add={this.add}/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"            
          id="panel2bh-header">
          <Typography>키링 검색</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SearchKeyRing />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={this.state.expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header">
          <Typography>키링 수정</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ModifyKeyRing modify={this.modify}/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={this.state.expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography>키링 삭제</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DeleteKeyRing delete={this.delete}/>
        </AccordionDetails>
      </Accordion>
    </div>
  };
}

export default Menu;