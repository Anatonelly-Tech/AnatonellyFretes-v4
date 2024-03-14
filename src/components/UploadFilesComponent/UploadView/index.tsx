import React from "react";

interface UploadViewProps {
  selectedFile: string;
  frameRef: React.RefObject<HTMLImageElement>;
}

const UploadView = ({ selectedFile, frameRef }: UploadViewProps) => {
  return (
    <>
      <img
        className={`${selectedFile} rounded-full  w-full object-cover object-center h-full 
    `}
        id="frame"
        ref={frameRef}
        src={
          frameRef.current && frameRef.current.src
            ? frameRef.current.src
            : undefined
        }
        alt=""
      />
    </>
  );
};

export default UploadView;
