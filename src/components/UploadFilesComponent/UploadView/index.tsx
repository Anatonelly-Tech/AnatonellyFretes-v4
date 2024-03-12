import React from "react";

interface UploadViewProps {
  selectedFile: string;
  frameRef: React.RefObject<HTMLImageElement>;
}

const UploadView = ({ selectedFile, frameRef }: UploadViewProps) => {
  return (
    <>
      <img
        className={`${selectedFile} top-36 w-52 object-cover object-center max-h-32 rounded
    `}
        id="frame"
        ref={frameRef}
        src={
          frameRef.current && frameRef.current.src
            ? frameRef.current.src
            : undefined
        }
        width="100px"
        height="100px"
        alt=""
      />
    </>
  );
};

export default UploadView;
