<<<<<<< HEAD
import Page1 from "@/app/private/CriarFrete/page1";
import Page2 from "@/app/private/CriarFrete/page2";
import Page3 from "@/app/private/CriarFrete/page3";
import Page4 from "@/app/private/CriarFrete/page4";
import Page5 from "@/app/private/CriarFrete/page5";
=======
import Page1 from "@/app/CriarFrete/page1/page";
import Page2 from "@/app/CriarFrete/page2/page";
import Page3 from "@/app/CriarFrete/page3/page";
import Page4 from "@/app/CriarFrete/page4/page";
>>>>>>> master
import Loading from "@/components/Loading";

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
      return <Page1 />;
    case 1:
<<<<<<< HEAD
      return <Page2 error={error} register={register} />;
=======
      return <Page2 />;
>>>>>>> master
    case 2:
      return <Page3 />;
    case 3:
<<<<<<< HEAD
      return <Page4 error={error} register={register} />;
    case 4:
      return <Page5 data={data} />;
=======
      return <Page4 />;
>>>>>>> master
    default:
      return <Loading />;
  }
}
