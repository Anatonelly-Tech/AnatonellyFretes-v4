import Page1 from '@/app/CriarFrete/page1';
import Page2 from '@/app/CriarFrete/page2';
import Page3 from '@/app/CriarFrete/page3';
import Page4 from '@/app/CriarFrete/page4';
import Page5 from '@/app/CriarFrete/page5';
import Loading from '@/components/Loading';

interface AdvancedPagesProps {
  activeStep: number;
  register: any;
  error: any;
  data: any;
}

export default function AdvancedPages({
  activeStep,
  register,
  error,
  data,
}: AdvancedPagesProps) {
  switch (activeStep) {
    case 0:
      return <Page1 error={error} register={register} />;
    case 1:
      return <Page2 error={error} register={register} />;
    case 2:
      return <Page3 error={error} register={register} />;
    case 3:
      return <Page4 error={error} register={register} />;
    case 4:
      return <Page5 data={data} />;
    default:
      return <Loading />;
  }
}
