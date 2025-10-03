import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/pageComponents/home/Home"), { ssr: true });

export default function HomePage() {
    return <Home />;
}
