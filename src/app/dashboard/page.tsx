import { Container } from "@/components/container";
import { HeaderAdmin } from "./components/headerAdmin";


export default function DashboardAdmin() {
    return (
        <main>
            <Container >
                <h2 className="text-2xl font-bold p-4">Vendas</h2>
                {/* Other dashboard content can go here */}
            </Container>
        </main>
    );
}