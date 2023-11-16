import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function MenuList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      style={{ border: '1px solid lightgray', borderTop: 'none', marginBottom: '30px' }}
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style={{background: '#106F85', color: 'white', fontWeight: 'bold'}}>
          DANH MỤC SẢN PHẨM
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemText primary="Trang chủ" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Giới thiệu" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Sản phẩm" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Sản phẩm nổi bật" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Sản phẩm thủ công" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Trang trí" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="Tin Tức" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Liên hệ" />
      </ListItemButton>
    </List>
  );
}