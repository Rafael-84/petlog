import { HeaderAdmin } from "./components/headerAdmin";


export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <HeaderAdmin />
            {children}
        </section>
    )

}