import { useState, useEffect } from "react";
import { getFreightById } from "@/services/formData";

//icons
import { FaMapMarkerAlt } from "react-icons/fa";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { CiRoute } from "react-icons/ci";
import LoadingForComponents from "@/components/Loading/LoadingForComponents";
import { DiaFormatado } from "@/utils/formatDateFunction";

interface READProps {
  id: string;
}

const READ = ({ id }: READProps) => {
  const [loaded, setLoaded] = useState(false);
  const [Freight, setFreight] = useState<any>({}); // Defina o tipo de Freight conforme a estrutura esperada

  useEffect(() => {
    const getFreight = async () => {
      try {
        const response = await getFreightById(id);
        setFreight(response.data.response);

        WaitLoad();
      } catch (error) {
        console.error("Erro ao obter o frete:", error);
      }
    };

    getFreight();
  }, [id]);

  const WaitLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  console.log(Freight);

  return (
    <div className="w-auto h-auto text-nowrap flex flex-col items-center justify-center ">
      {loaded ? (
        <div className="w-auto h-auto text-nowrap flex flex-col items-center justify-center gap-3">
          <div className="w-auto flex items-start justify-center gap-3">
            <div className="h-auto flex flex-col font-semibold">
              Nome do Frete
              <div className=" h-28 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className="h-full p-5 flex items-center justify-center text-xl">
                  {Freight.name}
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-col font-semibold">
              Local de coleta e entrega
              <div className=" flex min-h-full items-center justify-center gap-5 p-5 h-28 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className=" flex min-h-full flex-col justify-center">
                  <FaMapMarkerAlt className="text-lg my-1" />
                  <p>{Freight.collectCity}</p>
                  <p>{DiaFormatado(new Date(Freight.collectDate))}</p>
                </div>
                <CiRoute className="text-4xl " />
                <div className="flex min-h-full flex-col justify-center">
                  <LocationCityIcon className="text-lg" />
                  <p>{Freight.deliveryCity}</p>
                  <p>{DiaFormatado(new Date(Freight.deliveryDate))}</p>
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-col font-semibold">
              Valor do Frete
              <div className=" h-28 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className="h-full p-5 flex items-center justify-center text-xl">
                  {Freight.radioValueValor == "aCombinar" ? (
                    <span className="font-normal pl-1">A Combinar</span>
                  ) : (
                    <span className="font-normal pl-1">
                      R$ {Freight.freightPrice}/{Freight.valueCalculation}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto flex items-start justify-center gap-3">
            <div className="h-auto flex flex-col font-semibold">
              Responsáveis do Frete
              <div className=" h-28 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className="h-full gap-2 p-5 flex flex-col items-center justify-center text-md">
                  {Freight.responsibleFreight.map((responsible: any) => (
                    <p key={responsible.id}>{responsible.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col font-semibold">
              veiculos e carrocerias
              <div className="flex items-start justify-center gap-5 p-5 
               bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm overflow-auto">
                <div className="flex flex-col items-start justify-center">
                  Veiculos
                  {Freight.veiculos.map((veiculo: any) => (
                    <p className="text-sm" key={veiculo}>
                      {veiculo}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col items-start justify-center ">
                  Carrocerias
                  {Freight.carrocerias.map((Carrocerias: any) => (
                    <p className="text-sm" key={Carrocerias}>
                      {Carrocerias}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className=" h-auto w-auto flex flex-col font-semibold text-sm">
              Forma de <br /> Pagamento
              <div className="w-auto  bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className="w-auto px-2 h-full flex items-center justify-center text-sm">
                  {Freight.paymentForm}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-start justify-between">
            <div className=" h-auto w-auto flex flex-col font-semibold text-sm">
              Pacote <br /> escolhido
              <div className="w-auto h-16 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className="w-auto px-2 h-full flex items-center justify-center text-sm">
                  {Freight.radioPacoteEscolhido}
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-col font-semibold text-sm">
              Localização <br /> do frete
              <div className=" h-16 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className=" px-2 h-full flex items-center justify-center text-sm">
                  {Freight.radioValueLocalizacao}
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-col font-semibold text-sm">
              Precisa <br /> de lona?
              <div className=" h-16 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className=" px-2 h-full flex items-center justify-center text-sm">
                  {Freight.radioValueLona}
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-col font-semibold text-sm">
              Pedágio <br /> incluso?
              <div className=" h-16 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className=" px-2 h-full flex items-center justify-center text-sm">
                  {Freight.radioValuePedagio}
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-col font-semibold text-sm">
              Precisa de <br /> Rastreador?
              <div className=" h-16 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className=" px-2 h-full flex items-center justify-center text-sm">
                  {Freight.radioValueRastreador}
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-col font-semibold text-sm">
              Tipo de <br /> carga
              <div className=" h-16 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className=" px-2 h-full flex items-center justify-center text-sm">
                  {Freight.radioValueTipoCarga}
                </div>
              </div>
            </div>
            <div className="h-auto flex flex-col font-semibold text-sm">
              Informações <br /> do Valor
              <div className=" h-16 bg-zinc-100 shadow-inner shadow-zinc-400 rounded-sm">
                <div className=" px-2 h-full flex items-center justify-center text-sm">
                  {Freight.radioValueValor}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingForComponents />
      )}
    </div>
  );
};

export default READ;
