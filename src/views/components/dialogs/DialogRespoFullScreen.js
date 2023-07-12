// ** React Imports
import {Fragment, useEffect, useRef, useState} from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Grid from "@mui/material/Grid";
import PageHeader from "../../../@core/components/page-header";
import Typography from "@mui/material/Typography";
import draftToHtml from "draftjs-to-html";
import {convertToRaw, EditorState} from "draft-js";
import CardSnippet from "../../../@core/components/card-snippet";
import ReactDraftWysiwyg from "../../../@core/components/react-draft-wysiwyg";
import ButtonGroup from "@mui/material/ButtonGroup";
import Icon from "../../../@core/components/icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {EditorWrapper} from "../../../@core/styles/libs/react-draft-wysiwyg";
import Editors from "../../../pages/forms/form-elements/editor";

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge']


const DialogRespoFullScreen = () => {
  // ** State
  const [open, setOpen] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const handleClickOpen = () => setOpen(true)


  const handleClose = () => {
    setOpen(false)
  }

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Fragment>
      <Button variant='contained' onClick={handleClickOpen}>
        Create Tweet
      </Button>
      <Dialog maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
        <DialogContent >
          <DialogContentText  sx={{ width: 1 }} >
            <Editors sx={{ width: '75%' }} />
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </Fragment>

  )
}

export default DialogRespoFullScreen
