// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'


// ** Styled Component Import
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'


// ** Demo Components Imports
import EditorControlled from 'src/views/forms/form-elements/editor/EditorControlled'
import EditorUncontrolled from 'src/views/forms/form-elements/editor/EditorUncontrolled'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Editors = () => {
  return (
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

        <Grid item xs={12}>
          <CardSnippet
            sx={{ overflow: 'visible' }}
            title='add any text'
            code={{
              tsx: null,
              // jsx: source.EditorControlledJSXCode
            }}
          >
            <EditorControlled />
          </CardSnippet>
        </Grid>

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
  )
}

export default Editors
