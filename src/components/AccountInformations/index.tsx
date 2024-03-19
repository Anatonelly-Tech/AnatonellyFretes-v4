// Interface
interface InfoProps {
  title: string;
  result: string;
}

export default function AccountInformations({ title, result }: InfoProps) {
  return (
    <div className="w-full h-auto bg-purple-600 rounded flex  justify-center gap-1 items-center">
      <div className="w-full h-auto md:w-auto px-6 p-2 flex flex-col justify-center items-center ">
        <h1 className="text-white text-xs text-center">{title}</h1>
        <h1 className="text-white font-bold text-sm">{result}</h1>
      </div>
    </div>
  );
}
