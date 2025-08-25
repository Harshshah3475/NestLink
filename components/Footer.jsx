import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
    return (
        <footer className="px-8 md:px-20 lg:px-32 py-5 mt-3 grid gap-4">
            <div className="flex justify-between">
                <div>
                    <Logo />
                 </div>
                <div>
                    <ModeToggle/>
                </div>
            </div>

            <p className="text-xs">&copy; {new Date().getFullYear()} <Link href="/" className="text-primary hover:underline">LinkNest</Link> All Rights Reserved.</p>
        </footer>
    )
}