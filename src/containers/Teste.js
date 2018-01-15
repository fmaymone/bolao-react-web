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
import firebase from './auth/firebase';

const Teste = () => {

  const value = 3;

  console.log({ WorldCup })

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
            {WorldCup.groups.a.matches.map(match =>
              <Match match={match} />
            )}
          </TableBody>
        </Table>
        
      </div>
    </PageBase>
    
  );
};

export default Teste;


