import React, { Component } from 'react';
import Team from './Team/Team';
import classes from '../Match/Match.css';
import axios from 'axios';
import Grid from 'material-ui/Grid';
import firebase, { auth, provider } from '../Firebase/Firebase';
import { connect } from 'react-redux';

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
import { CardSection } from '../common/CardSection';


class Match extends Component {


  componentDidMount() {

  }




  render() {

    return (
  <CardSection>
     
        <TableCell>
          

          <Team team={this.props.data.teams[this.props.match.home_team]} /> </TableCell>
            <TableCell> <TextField type="number"
              className="text-field-amount"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
              }}
          min={0} /> </TableCell>
        <TableCell>X </TableCell>
        <TableCell> <TextField type="number"
          className="text-field-amount"
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
          }}
          min={0} /> </TableCell>
        <TableCell><Team team={this.props.data.teams[this.props.match.away_team]} /> </TableCell>

        </CardSection>

    )
  }
}

const mapStateToProps = state => {

  return { data: state.data }

};

export default connect(mapStateToProps)(Match);


