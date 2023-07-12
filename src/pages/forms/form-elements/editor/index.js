// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'
import cardTwitter from "../../../../views/ui/cards/basic/CardTwitter";


// ** Styled Component Import
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'



// ** Component Import


// ** Source code imports
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Twittercard from "../../../apps/managetweet";
import CardTwitter from "../../../../views/ui/cards/basic/CardTwitter";
import ReactDraftWysiwyg from "../../../../@core/components/react-draft-wysiwyg";
import {useEffect, useRef, useState} from "react";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Icon from "../../../../@core/components/icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

const options = ['Schedule Post', 'Share Now', 'Add To Queue']

const Editors = () => {
  const [value, setValue] = useState(EditorState.createEmpty())
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(1)

  // ** Ref
  const anchorRef = useRef(null)

  const handleClick = () => {
    console.info(`You clicked '${options[selectedIndex]}'`)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = () => {
    setOpen(false)
  }
  useEffect(()=>{
    console.log(draftToHtml(convertToRaw(value.getCurrentContent())))
  },[value])

  return (
    <>
      <EditorWrapper>
        <Grid container spacing={6} className='match-height'>
          <PageHeader
            title={
              <Typography variant='h5' color='Dodgerblue'>
                Create Post
              </Typography>
            }
            subtitle={<Typography variant='body2'>add  image avator</Typography>}
          />

          <Grid item xs={12} sm={6} md={draftToHtml(convertToRaw(value.getCurrentContent())).length > 8 ? 8 : 12}>
            <CardSnippet
              sx={{ overflow: 'visible' }}
              title='add any text'
              code={{
                tsx: null,
              }}
            >
              <ReactDraftWysiwyg editorState={value} onEditorStateChange={data => {
                setValue(data)
              }}/>
             <div style={{marginTop : '10px',display:'flex',justifyContent : 'end' , alignItems : 'center'}}>
               <ButtonGroup variant='contained' ref={anchorRef} aria-label='split button'>
                 <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                 <Button
                   sx={{ px: '0' }}
                   aria-haspopup='menu'
                   onClick={handleToggle}
                   aria-label='select merge strategy'
                   aria-expanded={open ? 'true' : undefined}
                   aria-controls={open ? 'split-button-menu' : undefined}
                 >
                   <Icon icon='mdi:menu-down' />
                 </Button>
               </ButtonGroup>
               <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                 {({ TransitionProps, placement }) => (
                   <Grow
                     {...TransitionProps}
                     style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                   >
                     <Paper>
                       <ClickAwayListener onClickAway={handleClose}>
                         <MenuList id='split-button-menu'>
                           {options.map((option, index) => (
                             <MenuItem
                               key={option}
                               disabled={index === 2}
                               selected={index === selectedIndex}
                               onClick={event => handleMenuItemClick(event, index)}
                             >
                               {option}
                             </MenuItem>
                           ))}
                         </MenuList>
                       </ClickAwayListener>
                     </Paper>
                   </Grow>
                 )}
               </Popper>
             </div>
            </CardSnippet>
          </Grid>

          {
            draftToHtml(convertToRaw(value.getCurrentContent())).length > 8 && <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ border: 5, boxShadow: 0, color: 'common.white', backgroundColor: 'white' }}>
                <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
                  <Box sx={{ mr: 2, display: 'flex', alignItems: 'center'}}>
                    <Avatar alt='Mary Vaughn' src='/images/avatars/6.png' sx={{ width: 34, height: 34, mr: 2.75 }} />
                    <Typography variant='body2' fontWeight={650} sx={{ color: 'common.black' }}>
                      Mary Vaughn
                    </Typography>
                    <Typography >
                      @Mary Vaughn
                    </Typography>

                  </Box>
                  <Typography variant='body2' sx={{ mb: 3, color: 'common.black' }}>
                    {
                      <div dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(value.getCurrentContent()))}} />
                    }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          }

          {/*<Grid item xs={12}>*/}
          {/*  <CardSnippet*/}
          {/*    sx={{ overflow: 'visible' }}*/}
          {/*    title='Uncontrolled Wysiwyg Editor'*/}
          {/*    code={{*/}
          {/*      tsx: null,*/}
          {/*      jsx: source.EditorUncontrolledJSXCode*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <EditorUncontrolled />*/}
          {/*  </CardSnippet>*/}
          {/*</Grid>*/}

        </Grid>
      </EditorWrapper>

    </>
  )
}

export default Editors
