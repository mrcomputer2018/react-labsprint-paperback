import { Header } from "@/components/section/header";
import HeaderLogo from "@/components/section/header/header-logo";
import imageLogo from "@/assets/logo.png"
import { Link } from "react-router";

export default function Login() {
    return (
        <div className="bg-neon-library min-h-screen w-full">
            <div className="mx-auto max-w-7xl">
                <Header>
                    <div>
                        <HeaderLogo source={imageLogo} alt="logo neom paperback" title="neon paperback"/>
                    </div>
                    <div>
                        <Link 
                        className="hover:text-primary text-white text-sm font-medium transition-colors duration-500"
                        to="/sobre">
                            Sobre a Rebelião
                        </Link>
                    </div>
                </Header>
            </div>
        </div>
    );
}
