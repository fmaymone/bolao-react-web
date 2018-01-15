import React, { Component } from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlagIcon from './FlagIcon';



class Team extends Component {
    render() {
        
      
        let name = this.props.team.name;
        let isoFlagName = this.props.team.iso2;
        let flag = null;
        let size = '2x';
        let team = null;

              
        const Flag = (props = {}) =>

            <FlagIcon code={props.code} size={props.size} />


        const appProps = { code: isoFlagName, size: size };

        flag = <Flag {...appProps} />;


        if (!this.props.home) {
            team = (
             <div>
                {name} {flag} 
              
                </div>
            )
          } else {
            team = (
              <div>
                {flag} {name} 
              
                </div>
         
            )
          }
          return team;


    }
}

// Team.propTypes = {

// isoFlagName: PropTypes.string.isRequired


// }
export default Team;
