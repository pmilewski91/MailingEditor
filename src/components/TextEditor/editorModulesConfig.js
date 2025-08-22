const editorModulesConfig = {
  toolbar: [
    [{ header: [] }, { font: [] }],
    [{ align: "" }, { align: "center" }, { align: "right" }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    [{ color: [] }, { background: [] }],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export default editorModulesConfig;
