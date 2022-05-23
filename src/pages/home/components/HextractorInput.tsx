import { useState } from "react";

type HextractorInputProps = {
  onSubmit: any;
};

const HextractorInput = (props: HextractorInputProps) => {
  const { onSubmit } = props;

  const [inputValue, setInputValue] = useState("");

  const placeholder =
    "Copy & paste any text that contains colors expressed in a hexadecimal format, and this tool will extract & output all the colors in a grid below.";

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
          className="w-full h-[320px] md:h-[480px] p-4 | border-[2px] border-black rounded placeholder:text-[12px] md:placeholder:text-base whitespace-pre-wrap"
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
