/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
var ReactPanels = require('react-panels/addons');

import ReactPanels, {FloatingPanel,ToggleButton} from 'react-panels';

import MyMainTab  from './main-tab.js';
import  MyItemTab from './item-tab.js';

//var FloatingPanel = ReactPanels.FloatingPanel;
//var ToggleButton = ReactPanels.ToggleButton;

var Map2uFloatingPanel = React.createClass({
  displayName: 'MyFloatingPanel',

  getInitialState: function () {
    this.itemsShown = [];
    return {toolbars: true};
  },

  handleClickOnItem: function (itemIndex) {
    this.refs.myPanel.setSelectedIndex(this.itemsShown.push($_data[itemIndex]));
    this.forceUpdate();
  },

  handleClickOnCloseItemTab: function (itemIndex) {
    this.itemsShown.splice(itemIndex - 1, 1);
    this.refs.myPanel.setSelectedIndex(0);
    this.forceUpdate();
  },

  handleToggleToolbars: function () {
    this.setState({toolbars: !this.state.toolbars});
    this.forceUpdate();
  },

  render: function() {
    var self = this;

    return (
      <FloatingPanel left={200} top={100} width={520} ref="myPanel" theme="chemical"
        buttons={[
          <ToggleButton title="Toggle Toolbar" active={self.state.toolbars} onChange={self.handleToggleToolbars}>
            <i className="fa fa-wrench"></i>
          </ToggleButton>
        ]}>
        <MyMainTab
          icon="fa fa-cubes"
          title="List of Items"
          pinned={true}
          onClickOnItem={self.handleClickOnItem}
          showToolbar={self.state.toolbars}
        />
        {self.itemsShown.map(function (item) {
          return (
            <MyItemTab title={item.name} icon="fa fa-cube" item={item} showToolbar={self.state.toolbars}
              onClose={self.handleClickOnCloseItemTab} key={item.id} />
          );
        })}
      </FloatingPanel>
    );
  }
});



export { Map2uFloatingPanel }