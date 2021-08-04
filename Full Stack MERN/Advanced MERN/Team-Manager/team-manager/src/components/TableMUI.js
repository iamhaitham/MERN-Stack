import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Confirm from './Confirm';
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    width: '80%',
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const {players}=props;

  const deletePlayer = (e,personId) => {
    axios.delete('http://localhost:8000/api/players/' + personId)
        .then(res => {
            console.log("Deleted Successfully!");
        })
}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">

        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Player Name</StyledTableCell>
            <StyledTableCell align="center">Favourite Position</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {players.map((player,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" align="center">
                {player.playerName}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {player.playerPosition}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                <Confirm player={player.playerName} deletePlayer={(e)=>deletePlayer(e,player._id)}/>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
