import { useState } from "react";

import HextractorInput from "pages/home/components/HextractorInput";
import HextractorOutput from "pages/home/components/HextractorOutput";
import HextractorActions from "pages/home/components/HextractorActions";
import ClipboardSnackbar from "pages/home/components/ClipboardSnackbar";

const Home = () => {
  const [extractedColors, setExtractedColors] = useState<string[]>([]);

  const onInputSubmit = (input: string) => {
    extractColors(input);
  };

  const extractColors = (text: string) => {
    const lowercaseText = text.toLowerCase();
    const hexMatches = lowercaseText.match(/#[0-9a-fA-F]{6}/g);
    if (hexMatches) {
      hexMatches.sort(
        (a, b) => parseInt(a.substring(1), 16) - parseInt(b.substring(1), 16)
      );
      const uniqueMatches = new Set(hexMatches);
      setExtractedColors(Array.from(uniqueMatches));
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <HextractorInput onSubmit={onInputSubmit} />
      {extractedColors.length > 0 && (
        <>
          <HextractorOutput extractedColors={extractedColors} />
          <HextractorActions extractedColors={extractedColors} />
        </>
      )}
      <ClipboardSnackbar />
    </div>
  );
};

export default Home;
