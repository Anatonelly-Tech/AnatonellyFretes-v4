import Page1 from '@/app/private/EmployerScreens/CriarFrete/page1';
import Page2 from '@/app/private/EmployerScreens/CriarFrete/page2';
import Page3 from '@/app/private/EmployerScreens/CriarFrete/page3';
import Page4 from '@/app/private/EmployerScreens/CriarFrete/page4';
import Page5 from '@/app/private/EmployerScreens/CriarFrete/page5';
import Loading from '@/components/Loading';

interface AdvancedPagesProps {
  activeStep: number;
  register: any;
  error: any;
  data: any;
  session: any;
}

export default function AdvancedPages({
  activeStep,
  register,
  error,
  data,
  session,
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
