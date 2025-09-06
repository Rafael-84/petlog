import { HeaderAdmin } from "./components/headerAdmin";
import { EditEstoqueProvider } from "@/providers/edit_estoque";


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