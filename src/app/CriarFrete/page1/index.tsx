// Libs
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

// Components
import InputRadio from '@/components/Radio';

export default function Page1() {
  const form = useForm();
  const { register, control } = form;

  return (
    <div>
      <div>
        <InputRadio
          id={['LocalizacaoFrete']}
          label={['Nacional','Internacional']}
          subLabel={['Fretes realizados dentro do país', 'Fretes realizados para fora do país']}
          register={register}
          name={'Nacional'}
          value={['Nacional', 'Internacional']}
          title={'Localizacao do Frete'}
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
