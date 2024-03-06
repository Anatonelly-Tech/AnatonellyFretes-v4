import Link from "next/link";

export default function DaniedPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl mb-6 ">Acesso Restrito</h1>
      <p className="text-base text-slate-600 mb-10">
        Você não tem permissão para prosseguir
      </p>
      <Link className="p-4 bg-amber-950 text-slate-50" href="/">
        Voltar
      </Link>
    </div>
  );
}
