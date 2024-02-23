// Libs
import React from 'react';
import Marquee from 'react-fast-marquee';

// Documentação da lib
// https://www.npmjs.com/package/react-fast-marquee

export function Carousel() {
  const Publis = [
    {
      empresa: 'Petrobras',
      src: '/img/Publis/Petrobras.png',
      titulo: 'Diesel',
      desconto: '10%',
      cupom: 'Anatonelly10',
    },
    {
      empresa: 'Shell',
      src: '/img/Publis/Shell.png',
      titulo: 'Diesel',
      desconto: '12%',
      cupom: 'Anatonelly12',
    },
    {
      empresa: 'Michelin',
      src: '/img/Publis/Michelin.png',
      titulo: 'Pneus',
      desconto: '15%',
      cupom: 'Anatonelly15',
    },
  ];

  return (
    <Marquee pauseOnHover pauseOnClick autoFill>
      {Publis.map((publi, index) => (
        <div
          className='flex justify-center items-center ml-10 gap-5 '
          key={index}
        >
          <div className='bg-white rounded-full w-32 h-32 justify-center items-center flex'>
            <img
              className='object-scale-down w-24 h-24 rounded-full'
              src={publi.src}
              alt={publi.empresa}
            />
          </div>
          <div className='bg-white text-black p-3  rounded-lg'>
            <p className='text-xl font-black'>{publi.empresa}</p>
            <p className='text-lg font-semibold'>{publi.titulo}</p>
            <p>
              Desconto: <span className='font-semibold'>{publi.desconto}</span>
            </p>
            <p>
              Cupom: <span className='font-semibold'>{publi.cupom}</span>
            </p>
          </div>
        </div>
      ))}
    </Marquee>
  );
}
