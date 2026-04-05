// https://codesandbox.io/p/sandbox/tiptap-react-ts-simple-text-editor-hcyp3l?file=%2Fsrc%2FSimpleEditor.tsx%3A20%2C33
// import './styles.scss'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import type { Editor } from '@tiptap/core'

const MenuBar = ({ editor }: {editor: Editor | null}) => {
  if (!editor) {
    return null
  }

  return (
    <div className="control-group py-2 px-1 border-b-2 border-black">
      <div className="button-group">
        {/* <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          Paragraph
        </button> */}
        Wstecz undo
        Do przodu redo
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active mx-2' : 'mx-2'}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active mx-2' : 'mx-2'}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active mx-2' : 'mx-2'}
        >
          Strike
        </button>
        <button
          type="button" 
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active mx-2' : 'mx-2'}
        >
          Bullet list
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Ordered list
        </button>
      </div>
    </div>
  )
}

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        undoRedo: false
      })
    ],
    content: ``, 
    immediatelyRender: false,
    editorProps: {
        attributes: {
            class: 'p-3 max-h-[360px] overflow-scroll focus:outline-none',
        },
    },
  })

  return (
    <div className="border-2 border-black rounded-[8px]">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}