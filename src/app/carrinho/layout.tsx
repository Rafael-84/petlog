import { Footer } from "../components/home/footer";


export default function LayoutCarrinho({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-[#fafafa]">
            {children}
            <Footer />
        </main>
    )
}