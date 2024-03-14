export function DiaFormatado(dateWithoutFormat: Date) {
  let dia = (dateWithoutFormat.getDate() + 1).toString().padStart(2, '0');
  let mes = (dateWithoutFormat.getMonth() + 1).toString().padStart(2, '0'); //+1 pois no getMonth Janeiro começa com zero.
  let ano = dateWithoutFormat.getFullYear();
  return dia + '/' + mes + '/' + ano;
}
