export const copyToClipboard = (value: string, callback?: any) => {
  navigator.clipboard
    .writeText(value)
    .then(callback)
    .catch((err) => console.error(err));
};
