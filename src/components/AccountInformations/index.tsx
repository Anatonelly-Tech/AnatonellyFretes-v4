interface InfoProps {
  title: string;
  result: string;
}

export default function AccountInformations( {title, result}: InfoProps) {
  return (
    <div className='w-5/6 h-auto bg-purple-600 rounded flex items-center flex-col justify-start gap-2'>
        <div className=' w-full h-auto p-4 flex flex-col justify-start items-center gap-2'>

      <h1 className='text-white text-lg text-center'>{title}</h1>
      <h1 className='text-white font-bold text-3xl'>{result}</h1>
        </div>
      <div className='w-full h-8 bg-purple-800 rounded-b'></div>
    </div>
  );
}
