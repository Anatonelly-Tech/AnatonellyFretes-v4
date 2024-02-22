import Page1 from '@/app/CriarFrete/page1';
import Page2 from '@/app/CriarFrete/page2';
import Loading from '@/components/Loading';


interface AdvancedPagesProps {
  activeStep: number;
  register: any;
}

export default function AdvancedPages({
  activeStep,
  register,
}: AdvancedPagesProps) {
  switch (activeStep) {
    case 0:
      return <Page1 register={register} />;
    case 1:
      return <Page2 />;
    case 2:
      return <Page1 register={register} />;
    case 3:
      return <Page1 register={register} />;
    default:
      return <Loading />;
  }
}
