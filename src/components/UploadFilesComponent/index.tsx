import React, { ChangeEvent, Component, useRef, useState } from "react";
import { set } from "react-hook-form";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface a {
  setValue: any;
  register: any;
}

const index = ({ setValue, register }: a) => {
  const [selectedFile, setSelectedFile] = useState("hidden");

  const frameRef = useRef<HTMLImageElement | null>(null);

  const preview = (event: ChangeEvent<HTMLInputElement>) => {
    if (frameRef.current && event.target.files && event.target.files[0]) {
      frameRef.current.src = URL.createObjectURL(event.target.files[0]);
    }
    setSelectedFile("flex");
  };

  return (
    <div className="w-full flex items-center justify-center">
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
      <label
        htmlFor="picture"
        className="flex items-center justify-center gap-2 p-2 rounded-lg cursor-pointer text-white bg-purple-600  hover:bg-purple-700 shadow shadow-black"
      >
        <MdOutlineFileUpload size={28} />{" "}
        <p className="text-sm whitespace-nowrap font-bold">
          Selecionar um arquivo
        </p>
      </label>

      <input
        id="picture"
        className={`${selectedFile} text-white`}
        {...register("picture")}
        name="picture"
        type="file"
        accept="image/png, image/gif, image/jpeg"
        onChange={(e) => {
          preview(e);
          register("picture").onChange(e);
        }}
      />
      <IoMdClose
        className={`${selectedFile} text-white`}
        onClick={() => {
          setSelectedFile("hidden");

          setValue("picture", null);
        }}
      />
    </div>
  );
};

export default index;
