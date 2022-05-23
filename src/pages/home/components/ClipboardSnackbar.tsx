const ClipboardSnackbar = () => {
  return (
    <div
      id="clipboard-snackbar"
      className="invisible m-2 p-2 | fixed top-0 right-0 | text-[12px] text-base bg-slate-800 text-slate-200 rounded | transition-all duration-200"
    >
      Copied to clipboard &#9989;
    </div>
  );
};

export default ClipboardSnackbar;
