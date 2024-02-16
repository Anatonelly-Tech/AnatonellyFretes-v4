import * as Avatar from "@radix-ui/react-avatar";
import { LiaMedalSolid } from "react-icons/lia";
interface RankingProps {
  Placing: () => string;
  QtdFretes: number;
  NameSeller: string;
  photoSeller: string;
}

export default function Ranking({
  QtdFretes,
  NameSeller,
  photoSeller,
  Placing,
}: RankingProps) {
  return (
    <div className="flex items-center gap-4 p-2 rounded-md ">
      <h1 className="text-white font-bold text-lg ">{Placing()}</h1>
      <Avatar.Root>
        <Avatar.Image
          className="h-16 w-16 rounded-full object-cover border-2 border-purple-600"
          src={photoSeller}
          alt={`${NameSeller}'s profile picture`}
        />
      </Avatar.Root>
      <div className="flex flex-col w-28">
        <p className="text-white text-xl font-bold">{NameSeller}</p>
        <p className="text-white text-md font-medium">{QtdFretes} Fretes</p>
      </div>
      {Placing() === "1º" && <p className="text-2xl">🥇</p>}
      {Placing() === "2º" && <p className="text-2xl">🥈</p>}
      {Placing() === "3º" && <p className="text-2xl">🥉</p>}
      {Placing() >= "4º" && <LiaMedalSolid className="text-white text-3xl" />}
    </div>
  );
}
