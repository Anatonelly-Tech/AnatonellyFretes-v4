// Interface
interface InfoProps {
  title: string;
  result: string;
}

export default function AccountInformations({ title, result }: InfoProps) {
  return (
    <div className="w-full h-full bg-purple-600 rounded flex items-center flex-col justify-between ">
      <div></div>
      <div className=" w-full h-auto p-4 flex flex-col justify-start items-center gap-2">
        <h1 className="text-white text-sm text-center">{title}</h1>
        <h1 className="text-white font-bold text-lg">{result}</h1>
      </div>
      <div className="w-full h-8 bg-purple-800 rounded-b"></div>
    </div>
  );
}
