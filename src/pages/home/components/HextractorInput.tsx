import { useState } from "react";

type HextractorInputProps = {
  onSubmit: any;
};

const HextractorInput = (props: HextractorInputProps) => {
  const { onSubmit } = props;

  const [inputValue, setInputValue] = useState("");

  const placeholder =
    "How to use:-\n\nPaste any text that contains colors expressed in a hexadecimal format. This could be text containing a single hex-string or even delimited strings, where the hex-strings could be separated by commas, spaces or new-lines.\n\nYou can even paste in an entire CSS file. This tool will search through the text and extract all unique colors it finds.\n\nAdditonal Features:-\n\n- Click on a color cell to copy that colors hex-string to the clipboard.\n- Copy all color hex-strings to the clipboard\n- Export the entire color grid as a JPEG file.\n";

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <section className="m-8">
      <h2 className="py-4">Input</h2>
      <form className="flex flex-col items-center" onSubmit={handleFormSubmit}>
        <textarea
          name="hextractor-input"
          id="hextractor-input"
          className="w-full h-[480px] p-4 | border-[2px] border-black rounded placeholder:text-[12px] md:placeholder:text-base whitespace-pre-wrap"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        ></textarea>
        <button className="px-8 py-4 mt-8 | uppercase text:lg md:text-xl font-semibold text-neutral-100 bg-slate-600 hover:bg-slate-800 border-[2px] border-black rounded">
          Extract Colors
        </button>
      </form>
    </section>
  );
};

export default HextractorInput;
