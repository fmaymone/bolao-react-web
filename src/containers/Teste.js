import React from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import Data from '../data';
import WorldCup from '../world-cup';
import Team from '../components/Team';
import Match from '../components/Match';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper/Paper';

const Teste = () => {

 

 

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


    

    <PageBase title="Primeira Fase"
      navigation="Apostas / Primeira Fase">

      <div>


        <Table selectable={false}  >
        
          <TableBody displayRowCheckbox={false}>
<<<<<<< HEAD
    
            {WorldCup.groups.g.matches.map(item =>
              <TableRow key={item.id}>
             
                <TableRowColumn style={styles.columns.home}><Team team={WorldCup.teams[item.home_team - 1]} home={true} /></TableRowColumn>
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
                <TableRowColumn style={styles.columns.away}><Team team={WorldCup.teams[item.away_team - 1]} home={false} /></TableRowColumn>

              </TableRow>
=======
            {WorldCup.groups.a.matches.map(match =>
              <Match match={match} />
>>>>>>> 943abf8c8b6f3edc9a84c6f84e052b84f0652b8b
            )}
          </TableBody>
        </Table>
      </div>
    </PageBase>
    

  );
};

export default Teste;


