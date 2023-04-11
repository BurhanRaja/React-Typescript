import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type EditorProps = {
  setVal: (val: string) => void;
  val: string;
};

const RichEditor = ({ val, setVal }: EditorProps) => {
  function handleVal(text: string) {
    console.log(text);
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <>
      <ReactQuill theme="snow" value={val} onChange={handleVal} modules={modules} formats={formats} />
    </>
  );
};

export default RichEditor;
