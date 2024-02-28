import Page1 from "@/app/CriarFrete/page1/page";
import Page2 from "@/app/CriarFrete/page2/page";
import Page3 from "@/app/CriarFrete/page3/page";
import Page4 from "@/app/CriarFrete/page4/page";
import Loading from "@/components/Loading";

interface AdvancedPagesProps {
  activeStep: number;
  register: any;
  error: any;
}

export default function AdvancedPages({
  activeStep,
  register,
  error,
}: AdvancedPagesProps) {
  switch (activeStep) {
    case 0:
      return <Page1 />;
    case 1:
      return <Page2 />;
    case 2:
      return <Page3 />;
    case 3:
      return <Page4 />;
    default:
      return <Loading />;
  }
}
