"use client"
import { Navbar } from "./_components/Navbar";

const MarketingLayout=({
    children
}:{
    children:React.ReactNode;
})=>{
    return(
        <div className="h-full">
            <Navbar/>
            <main className="h-full pt-16">
                {children}
            </main>
        </div>
    )

}
export default MarketingLayout;