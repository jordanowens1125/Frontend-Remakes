export default function InputTextAreaDesign() {
  return (
    <>
      <div className="group">
        <input type="text" placeholder="Input1" />
        <input type="text" placeholder="Input2" />
        <input type="text" placeholder="Input3" />
        <textarea
          name="textarea-1"
          id=""
          placeholder="Text Holder 1"
        ></textarea>

        <textarea
          name="textarea-2"
          id=""
          placeholder="Text Holder 2"
        ></textarea>

        <textarea
          name="textarea-3"
          id=""
          placeholder="Text Holder 3"
        ></textarea>
      </div>
    </>
  );
}
