import { copyToClipboard } from "shared/utils/clipboard";

import domtoimage from "dom-to-image";

type HextractorActionsProps = {
  extractedColors: string[];
};

const HextractorActions = (props: HextractorActionsProps) => {
  const { extractedColors } = props;

  const actions = [
    {
      text: "Copy all to clipboard",
      action: () =>
        copyToClipboard(extractedColors.join(", "), () => {
          const snackbar = document.querySelector("#clipboard-snackbar");

          if (snackbar) {
            snackbar.classList.remove("invisible");
            snackbar.classList.add("visible");
            setTimeout(() => {
              snackbar.classList.remove("visible");
              snackbar.classList.add("invisible");
            }, 2000);
          }
        }),
    },
    {
      text: "Export as PNG",
      action: () => {
        domtoimage
          .toPng(document.getElementById("extracted-colors")!)
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = `extracted_colors.${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
          });
      },
    },
  ];

  return (
    <section className="m-8">
      <h2 className="py-4">Actions</h2>
      <div className="flex flex-col items-start justify-center">
        {actions.map((action) => {
          return (
            <ActionButton
              key={action.text}
              text={action.text}
              action={action.action}
            />
          );
        })}
      </div>
    </section>
  );
};

type ActionButtonProps = {
  text: string;
  action: any;
};

const ActionButton = (props: ActionButtonProps) => {
  const { text, action } = props;
  return (
    <button
      className="w-full md:w-[320px] px-8 py-4 my-2 | uppercase text-base md:text-xl font-semibold text-neutral-100 bg-slate-600 hover:bg-slate-800 border-[2px] border-black rounded"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default HextractorActions;
