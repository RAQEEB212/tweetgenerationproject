// ** React Imports
import {useEffect, useState} from 'react'

// ** Third Party Imports
import {EditorState,convertToRaw} from 'draft-js'

// ** Component Import
import ReactDraftWysiwyg from 'src/@core/components/react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html';


const EditorControlled = () => {

  // ** State
  const [value, setValue] = useState(EditorState.createEmpty())

  useEffect(()=>{
    console.log(draftToHtml(convertToRaw(value.getCurrentContent())))
  },[value])

  return (
    <>
      <ReactDraftWysiwyg editorState={value} onEditorStateChange={data => {
        setValue(data)
      }}/>

    </>)
}

export default EditorControlled
