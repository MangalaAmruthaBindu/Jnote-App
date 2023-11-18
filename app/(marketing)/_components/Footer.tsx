import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"

const Footer = () => {
  return (
    <div className="w-full flex bg-background items-center p-6 z-50">
        <Logo/>
        <div className="md:ml-auto w-full justify-between flex md:justify-end items-center gap-x-2 text-muted-foreground">
            <Button variant="ghost" size="sm">Privacy Policy</Button>
            <Button variant="ghost" size="sm">Terms & Conditions</Button>

        </div>
</div>
  )
}

export default Footer