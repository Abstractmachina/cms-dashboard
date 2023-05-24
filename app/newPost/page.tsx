
'use client';

import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const NewPost = () => {
    const router = useRouter();

    const editorRef = useRef<Editor | null>(null);
    const log = () => {
        if (editorRef.current) {
        //   console.log(editorRef.current.getContent());
        }
    };


    const editor = useRef(null);
    const [editorContent, setEditorContent] = useState("");
  
    const onButtonClick = () => {
      setEditorContent(editor.current.props.value);
    };
  
    const handleEditorChange = (content) => {
      setEditorContent(content);
    };



    return (
        <form action="/api/postSubmitted" method="post">
            <div className="flex flex-row justify-between items-center">
                <Link href='' onClick={() => router.back()}>
                    Back
                </Link>
                <div className="flex flex-row gap-2">
                    <div>2023</div>
                    <div>cat</div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">Publish</button>

            </div>
            <input type="text" placeholder="Your Title Here" name="post_title" className="w-full"/>
            <div>Location</div>
            <Editor
                tinymceScriptSrc={ '/tinymce/tinymce.min.js'}
                onInit={(evt, editor) =>  editorRef.current = editor}
                ref={editorRef}
                initialValue='<p>This is the initial content of the editor.</p>'
                value={editorContent}
                onEditorChange={handleEditorChange}
                init={{
                    height: (window.innerHeight - 50),
                    menubar: 'insert',
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | image' + '| help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    promotion: false,
                    branding: false,
                }}
            />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Save draft</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Preview</button>

        </form>
    )
}

export default NewPost