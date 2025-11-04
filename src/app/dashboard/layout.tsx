import { HeaderAdmin } from "./components/headerAdmin";
import { EditEstoqueProvider } from "@/contexts/EditEstoqueContext";


export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <EditEstoqueProvider>
                <HeaderAdmin />
                {children}
            </EditEstoqueProvider>
        </section>
    )

}