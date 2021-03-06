import { copyToClipboard } from "shared/utils/clipboard";

type HextractorOutputProps = {
  extractedColors: string[];
};

const HextractorOutput = (props: HextractorOutputProps) => {
  const { extractedColors } = props;

  return (
    <section className="m-8">
      <h2 className="py-4">Output</h2>
      <div
        id="extracted-colors"
        className="w-full | flex flex-row flex-wrap items-center justify-start | bg-white"
      >
        {extractedColors.map((extractedColor) => (
          <ColorCell
            color={extractedColor}
            key={`color-cell-${extractedColor}`}
          />
        ))}
      </div>
    </section>
  );
};

const ColorCell = (props: any) => {
  const { color } = props;

  const displaySnackbar = () => {
    const snackbar = document.querySelector("#clipboard-snackbar");

    if (snackbar) {
      snackbar.classList.remove("invisible");
      snackbar.classList.add("visible");
      setTimeout(() => {
        snackbar.classList.remove("visible");
        snackbar.classList.add("invisible");
      }, 2000);
    }
  };

  return (
    <div
      style={{ backgroundColor: color, color: getContrastYIQ(color) }}
      className="w-16 md:w-32 h-16 md:h-32 m-2 | flex flex-row items-center justify-center | text-[10px] md:text-base border-[2px] border-black uppercase rounded cursor-pointer hover:opacity-75"
      onClick={() => copyToClipboard(color, displaySnackbar)}
    >
      {color}
    </div>
  );
};

const getContrastYIQ = (color: string) => {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

export default HextractorOutput;
