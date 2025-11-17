import { HeaderProfile } from "../_components/header-customer";




export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderProfile />
            {children}
        </>
    )
}