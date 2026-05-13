import { Link } from "react-router";

import { Badge } from "@/components/common/badge";
import { ButtonCustom } from "@/components/common/button-custom";
import { RegisterForm } from "@/components/common/register-form";
import SpanUppercase from "@/components/common/span-uppercase";
import SubtitleSection from "@/components/common/subtitle-section";
import { TitlePrincipalRegister } from "@/components/common/title-principal-resgiter";
import TitleSection  from "@/components/common/title-section";
import Footer from "@/components/section/footer";
import { Header } from "@/components/section/header";
import { HeaderLogo } from "@/components/section/header/header-logo";
import { AuthContainer } from "@/components/section/Login/auth-container";
import BrandingSection from "@/components/section/Login/branding-section";
import Description from "@/components/section/Login/description";
import { MainContent } from "@/components/section/main-content";

import logo from "../../assets/logo.png";

export default function Register() {
    return (
        <div className="bg-neon-library min-h-screen w-full">
            <div className="mx-auto max-w-7xl">
                <Header>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <HeaderLogo
                            source={logo}
                            alt="logo neon paperback"
                            title="neon paperback"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between gap-8">
                        <SpanUppercase variant="white_60">
                            MANIFESTO
                        </SpanUppercase>
                        <SpanUppercase variant="white_60">
                            ARQUIVOS
                        </SpanUppercase>
                        <SpanUppercase variant="white_60">
                            FACÇÕES
                        </SpanUppercase>
                        <ButtonCustom variant="primary" className="h-9" align="center">
                            <Link
                                to="/"
                                className="text-sm text-black uppercase"
                            >
                                entrar
                            </Link>
                        </ButtonCustom>
                    </div>
                </Header>

                <MainContent>
                    <BrandingSection>
                        <Badge title="acesso autorizado" />
                        <TitlePrincipalRegister />
                        <Description>
                            Cadastre-se para acessar os arquivos criptografados
                            e as transmissões proibidas <br />
                            da Neon Paperback.
                        </Description>
                        <div className="mt-8 flex flex-row items-center gap-1">
                            <div className="w-12">
                                <span className="text-primary">-----</span>
                            </div>
                            <span className="text-primary text-[10px]">
                                Status: offline
                            </span>
                        </div>
                    </BrandingSection>

                    <AuthContainer>
                        <div className="mb-10">
                            <TitleSection variant="primary">
                                Junte-se à Rebelião
                            </TitleSection>
                            <SubtitleSection>
                                Inicie sua transmissão hoje.
                            </SubtitleSection>
                        </div>

                        <RegisterForm />

                        <div className="mt-10 text-center">
                            <Description>Já tem uma conta?</Description>
                            <Link
                                to="/"
                                className="text-primary mt-4 text-base uppercase"
                            >
                                faça login.
                            </Link>
                        </div>
                    </AuthContainer>
                </MainContent>

                <Footer />
            </div>
        </div>
    );
}
