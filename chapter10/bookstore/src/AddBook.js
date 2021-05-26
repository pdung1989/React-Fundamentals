import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddBook(props) {
  const [book, setBook] = useState({ title: '', author: '', year: '', isbn: '', price: '' });
  const [open, setOpen] = useState(false);

  //if press the button Add book, open state value change to true
  const handleOpen = () => {
    setOpen(true);
  }

  //if press Cancel, open state value change to false
  const handleClose = () => {
    setOpen(false);
  }

  //Add book to the list and close the dialog
  const handleSave = () => {
    props.addBook(book);
    handleClose();
  }

  //handle user input
  const inputChanged = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        ADD BOOK
      </Button>
      <Dialog open={open}>
        <DialogTitle>New Book</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            value={book.title}
            onChange={inputChanged}
            margin="dense"
            label="Title"
            fullWidth
          />
          <TextField
            name="author"
            value={book.author}
            onChange={inputChanged}
            margin="dense"
            label="Author"
            fullWidth
          />
          <TextField
            name="year"
            value={book.year}
            onChange={inputChanged}
            margin="dense"
            label="Year"
            fullWidth
          />
          <TextField
            name="isbn"
            value={book.isbn}
            onChange={inputChanged}
            margin="dense"
            label="Isbn"
            fullWidth
          />
          <TextField
            name="price"
            value={book.price}
            onChange={inputChanged}
            margin="dense"
            label="Price"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddBook;