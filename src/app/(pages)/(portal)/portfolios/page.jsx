import dynamic from "next/dynamic";

const Portfolios = dynamic(() => import("@/components/pageComponents/portfolios/Portfolios"), { ssr: true });

export default function PortfoliosPage() {
    return <Portfolios />;
}
