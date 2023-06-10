import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddKeyRing from '../component/AddKeyRing';
import SearchKeyRing from '../component/SearchKeyRing';
import ModifyKeyRing from '../component/ModifyKeyRing';
import DeleteKeyRing from '../component/DeleteKeyRing';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

class VerticalTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0, activateTab: true}; 

        this.add = props.add;               // 생성
        this.modify = props.modify;         // 수정
        this.delete = props.delete;         // 삭제
        // 검색은 각 컴포넌트 내에 넣어둠

        this.setValue = this.setValue.bind(this);
        this.setActivateTab = this.setActivateTab.bind(this);
      } 

      setValue(newValue) {
        this.setState({value: newValue})
      }

      setActivateTab() {
        this.setState({activateTab: !this.state.activateTab})
      }

    handleChange = (event, newValue) => {
      this.setValue(newValue);
    };

    render() {
        var tabsArr=[
            {
                label:"키링 생성",
                key: `tab-0`,
            },
            {
                label:"키링 검색",
                key: `tab-1`,
            },
            {
              label:"키링 수정",
              key: `tab-2`,
            },
            {
                label:"키링 삭제",
                key: `tab-3`,
            }
           ]

        return <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs orientation="vertical" value = {this.state.value} onChange = {this.handleChange}>
                {this.state.activateTab && (
                        tabsArr.map((item)=>(
                            <Tab {...item} />
                        ))
                    )
                }
            </Tabs>
        </Box>
        <TabPanel value={this.state.value} index={0}>
          <AddKeyRing add={this.add} />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <SearchKeyRing />
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <ModifyKeyRing modify={this.modify} />
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          <DeleteKeyRing delete={this.delete} />
        </TabPanel>
    </Box>
    };
  
}

export default VerticalTabs;