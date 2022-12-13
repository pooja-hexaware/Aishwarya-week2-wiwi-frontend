import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import { Checkbox } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopping } from 'menu/store/topping.action';
function SimpleDialog(props) {
  const { onClose, open } = props;
  const [selectedValue, setSelectedValue] = useState([])
  const dispatch = useDispatch();
  const toppings = useSelector((state) => state.Topping.topping.toppings);
  useEffect(() => {
    dispatch(fetchTopping());
  }, []);
  useEffect(() => {
    console.log(toppings)
  }, [toppings]);
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value) => {
    setSelectedValue(value);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        {toppings?.map((res) => (
          <ListItem button onClick={() => handleListItemClick(res)} key={res}>
            <ListItemAvatar>
              {/* <Avatar src={res.top_image} sx={{ bgcolor: blue[100], color: blue[600] }}>
              </Avatar> */}
            </ListItemAvatar>
            <ListItemText primary={res.name} secondary={res.price} />
            <Checkbox />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
export default function Toppingcard(toppings) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(toppings[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div>
      <br />
      <Button variant="contained" onClick={handleClickOpen} startIcon={<ControlPointIcon />} style={{'background-color': 'black'}}>
        toppings
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}