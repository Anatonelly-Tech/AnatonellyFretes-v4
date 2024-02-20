import { FaTruck } from "react-icons/fa";

interface AdvancedPagesProps {
  WhatPage: number;
}

export default function AdvancedPages({ WhatPage }: AdvancedPagesProps) {
  const truckPositions = ["18.5%", "39%", "59%", "79%"];

  const getPosition = () => truckPositions[WhatPage - 1];

  const pageTexts = [
    "Dados de coleta e entrega",
    "Dados da carga",
    "Veículos",
    "Dados Pagamento",
  ];

  return (
    <div className="w-full relative left-0 p-5">
      <FaTruck
        className={`text-white text-4xl relative -top-2 animate-MoveLeft`}
        style={{ left: getPosition() }}
      />
      <div className="flex items-center justify-evenly w-full">
        <hr className="w-11/12 absolute top-14" />
        {[1, 2, 3, 4].map((page) => (
          <div
            key={page}
            className={`w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center relative -translate-y-[0.6rem]`}
          >
            {WhatPage === page ? (
              <div className=" absolute w-2 h-2 rounded-full bg-white flex items-center justify-center">
                <p
                  className="text-xs text-white mt-1 relative top-5 font-bold"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {pageTexts[page - 1]}
                </p>
              </div>
            ) : (
              <p
                className="text-xs text-white mt-1 relative top-5"
                style={{ whiteSpace: "nowrap" }}
              >
                {pageTexts[page - 1]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
