import React from 'react';
import {
  PreviewContainer,
  PreviewImg,
  PreviewTitle,
  PreviewDescr
} from './Preview.style';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Preview = (
  {url, title, desc, img}
) =>{
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <PreviewContainer>
      {/* <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <Button variant="outlined" onClick={handleClickOpen} style={{
        position: "absolute",
        zIndex: 10,
        left: 0,
        top: 0,
        width: "100%",
        height:"100%"

      }}>
        Play Video
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        <PreviewTitle>{title}</PreviewTitle>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <PreviewImg src={img} alt="Desert"/>
          <PreviewDescr>{desc}</PreviewDescr>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
      <PreviewImg src={img} alt="Desert"/>
      <PreviewTitle>{title}</PreviewTitle>
      <PreviewDescr>{desc}</PreviewDescr>
      
    </PreviewContainer>
  )
}
export default Preview;