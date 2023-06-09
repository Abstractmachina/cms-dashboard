
'use client';

import { FormEvent, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const NewPost = () => {
    const router = useRouter();
    const editorRef = useRef(null);
    
    const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }
    };


    const editor = useRef(null);
    const [editorContent, setEditorContent] = useState("");
    const [title, setTitle] = useState("");
  
  
    const handleEditorChange = (content:any) => {
      setEditorContent(content);
      console.log("onButtonClick: ", editorContent);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const response = await fetch('/api/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content: editorContent,
                    author: "test",
                    category: "test",
                    tags: ["tagA", "tagB"],
                    location: "Here"
                }),
            });
    
            const data = await response.json();
            // console.log(data);

        } catch(err) {
            console.error(err);
        }
    }

    const handleSaveDraft = async () => {
        try {
            const response = await fetch('/api/posts', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content: editorContent,
                }),
            });

        } catch (err) {
            console.error(err);
        }
    }

    const handleimageUpload = async (blobInfo:any, progress:any) : Promise<string> =>  {
        console.log("image upload path")

        return new Promise<string>((resolve) => {
            resolve("test");
        });
    }

    return (
        <form action="/api/postSubmitted" method="post" onSubmit={handleSubmit}>
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
            <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Your Title Here" name="postTitle" id="postTitle" className="w-full text-black" required/>
            <div>Location</div>
            <Editor
                tinymceScriptSrc={ '/tinymce/tinymce.min.js'}
                onInit={(evt, editor) =>  editorRef.current = editor}
                // ref={editorRef}
                initialValue='<p>This is the initial content of the editor.</p>'
                value={editorContent}
                onEditorChange={handleEditorChange}
                init={{
                    height: 600,
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
                    images_upload_handler: handleimageUpload,
                    // images_upload_url: "/api/files/images/new",
                    automatic_uploads: true
                }}
            />

            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSaveDraft}>Save draft</button>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={log}>Preview</button>

        </form>
    )
}

export default NewPost