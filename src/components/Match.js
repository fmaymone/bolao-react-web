import React, { Component } from 'react';
import Team from './Team';

import WorldCup from '../world-cup';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableCell,
  TableHead

} from 'material-ui/Table';

import TextField from 'material-ui/TextField';



class Match extends Component {


  componentDidMount() {

  }




  render() {
    const { match } = this.props;
     const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },

    columns: {
      home: {
        width: '20%',
        textAlign: 'left'
      },
      home_score: {
        width: '20%',
        textAlign: 'center'
        
      },
      versus: {
        width: '20%',
        textAlign: 'center'
      },
      away: {
        width: '20%',
        textAlign: 'right'

      },
      away_score: {
        width: '20%'
      }
    }
  };

    return (

      <TableRow key={match.id}>
        {console.log({ match })};
        <TableRowColumn style={styles.columns.home}><Team team={WorldCup.teams[match.home_team - 1]} home={true} /></TableRowColumn>
        <TableRowColumn style={styles.columns.home_score}>
          <TextField
            defaultValue={0}
            fullWidth={true}
            type="number"
            inputStyle={{ textAlign: 'center' }}

          /></TableRowColumn>
        <TableRowColumn style={styles.columns.versus}>X</TableRowColumn>

        <TableRowColumn style={styles.columns.home_score}>
          <TextField
            defaultValue={0}
            fullWidth={true}
            type="number"
            inputStyle={{ textAlign: 'center' }}
          /></TableRowColumn>
        <TableRowColumn style={styles.columns.away}><Team team={WorldCup.teams[match.away_team - 1]} home={false} /></TableRowColumn>

      </TableRow>


    )
  }
}



export default Match;


