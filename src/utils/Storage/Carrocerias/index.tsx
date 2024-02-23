interface CarroceriasProps {
  Fechadas: string[];
  Abertas: string[];
  Especial: string[];
}

const Carrocerias: CarroceriasProps = {
  Fechadas: [
    'Todos os Fechados',
    'Baú',
    'Baú Frigorífico',
    'Baú Refrigerado',
    'Sider',
  ],
  Abertas: [
    'Todas as Abertas',
    'Caçamba',
    'Grade Baixa',
    'Graneleiro',
    'Plataforma',
    'Prancha',
  ],
  Especial: [
    'Apenas Cavalo',
    'Bug Porta Container',
    'Cavaqueira',
    'Cegonheiro',
    'Gaiola',
    'Hopper',
    'Munck',
    'Silo',
    'Tanque',
  ],
};

export default Carrocerias;
