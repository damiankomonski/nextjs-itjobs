'use client'
// https://codesandbox.io/p/sandbox/tiptap-react-ts-simple-text-editor-hcyp3l?file=%2Fsrc%2FSimpleEditor.tsx%3A20%2C33
// https://tiptap.dev/docs/examples/basics/default-text-editor

import { EditorContent, useEditor, useEditorState } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import type { Editor } from '@tiptap/core'
import { Bold, Italic, Strikethrough, List, ListOrdered, Undo, Redo } from 'lucide-react'
import { menuBarStateSelector } from './MenuBarState'

const MenuBar = ({ editor }: {editor: Editor}) => {
  const editorState = useEditorState({
    editor,
    selector: menuBarStateSelector,
  })

  return (
    <div className="control-group tiptap-menu pt-3 pb-2 px-1 border-b border-grey-500">
      <div className="button-group">
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()} 
          className='mx-2' 
          disabled={!editorState.canUndo}
        >
          <Undo className="tiptap-btn" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()} 
          className='mx-2'
          disabled={!editorState.canRedo}
        >
          <Redo className="tiptap-btn" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editorState.isBold ? 'is-active mx-2' : 'mx-2'} 
          disabled={!editorState.canBold}
        >
          <Bold className="tiptap-btn" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editorState.isItalic ? 'is-active mx-2' : 'mx-2'} 
          disabled={!editorState.canItalic}
        >
          <Italic className="tiptap-btn" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editorState.isStrike ? 'is-active mx-2' : 'mx-2'} 
          disabled={!editorState.canStrike}
        >
          <Strikethrough className="tiptap-btn" />
        </button>
        <button
          type="button" 
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editorState.isBulletList ? 'is-active mx-2' : 'mx-2'} 
        >
          <List />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editorState.isOrderedList ? 'is-active mx-2' : 'mx-2'}
        >
          <ListOrdered />
        </button>
      </div>
    </div>
  )
}

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: ``, 
    immediatelyRender: false,
    editorProps: {
        attributes: {
            class: 'p-3 h-[360px] overflow-scroll focus:outline-none',
        },
    },
  })

  if (!editor) {
    return null
  }
  
  return (
    <div className="border-2 border-black">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}