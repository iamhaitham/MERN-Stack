import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: '#d50000',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height:"auto",
      '&:hover': {
        backgroundColor: '#d50000',
        color: 'white',
        boxShadow:'none',
    },
    },
    label: {
      textTransform: 'capitalize',
    },
  });

export default function AlertDialog(props) {
    const {player,deletePlayer} =props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletion=()=>{
    deletePlayer();
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" classes={{
        root: classes.root, 
        label: classes.label,
      }} onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Player?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By Clicking here you approve to delete {player}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeletion}  classes={{
        root: classes.root, 
        label: classes.label, 
      }} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}