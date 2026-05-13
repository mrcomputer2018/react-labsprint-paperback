import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

import imageLogo from "@/assets/logo.png";
import ButtonCustom from "@/components/common/button-custom";
import SubtitleSection from "@/components/common/subtitle-section";
import TitleSection from "@/components/common/title-section";
import { Header } from "@/components/section/header";
import {HeaderLogo} from "@/components/section/header/header-logo";
import {AuthContainer} from "@/components/section/Login/auth-container";
import BrandingSection from "@/components/section/Login/branding-section";
import Description from "@/components/section/Login/description";
import { Divider } from "@/components/section/Login/divider";
import Line from "@/components/section/Login/line";
import SubtitlePrincipal from "@/components/section/Login/subtitle-principal";
import TitlePrincipal from "@/components/section/Login/title-principal";
import {MainContent} from "@/components/section/main-content";
import { SvgGoogle } from "@/components/svg/svg-google";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/auth";

const loginFormSchema = z.object({
    email: z.string().email("E-mail invalido").nonempty("E-mail e obrigatorio"),
    senha: z.string().nonempty("Senha e obrigatoria"),
});

export default function Login() {
    const navigate = useNavigate();
    const { signIn, signInWithGoogle } = useAuth();
    
    const [errorMessage, setErrorMessage] = useState("");
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });

    async function onSubmit(data: z.infer<typeof loginFormSchema>) {
        setErrorMessage("");

        try {
            await signIn(data.email, data.senha);
            toast.success("Login realizado com sucesso!");
            navigate("/pulso/feed");
        } catch {
            toast.error("Falha ao realizar login.", {
                description: "Verifique seu e-mail e senha e tente novamente.",
            });
            setErrorMessage(
                "E-mail ou senha incorretos. Por favor, tente novamente.",
            );
        }
    }

    async function HandleGoogleSignIn() {
        setErrorMessage("");
        setIsGoogleLoading(true);

        try {
            await signInWithGoogle();
            toast.success("Login realizado com sucesso!");
            navigate("/pulso/feed");
        } catch {
            setIsGoogleLoading(false);
            toast.error("Falha ao realizar login.", {
                description: "Verifique seu e-mail e senha e tente novamente.",
            });
            setErrorMessage(
                "E-mail ou senha incorretos. Por favor, tente novamente.",
            );
        }
    }

    return (
        <div className="bg-neon-library min-h-screen w-full">
            <div className="mx-auto max-w-7xl">
                <Header>
                    <div>
                        <HeaderLogo
                            source={imageLogo}
                            alt="logo neom paperback"
                            title="neon paperback"
                        />
                    </div>
                    <div>
                        <Link
                            className="hover:text-primary text-sm font-medium text-white transition-colors duration-500"
                            to="/sobre"
                        >
                            Sobre a Rebelião
                        </Link>
                    </div>
                </Header>
                <MainContent>
                    <BrandingSection>
                        <TitlePrincipal />
                        <SubtitlePrincipal />
                        <Line />
                        <Description>
                            O mundo já é silencioso o suficiente. Mergulhe em
                            histórias que gritam. Junte-se à maior biblioteca
                            digital de literatura de alto impacto.
                        </Description>
                    </BrandingSection>

                    <AuthContainer>
                        <div className="mb-10">
                            <TitleSection>Acesse o Arquivo</TitleSection>
                            <SubtitleSection>
                                Escolha sua frequência para começar.
                            </SubtitleSection>
                        </div>
                        <Form {...form}>
                            <form
                                className="flex flex-col gap-4"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                {/* email */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] text-[#8E9379] uppercase">
                                                E-mail
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <span className="pointer-events-none absolute top-4 left-0 pl-3">
                                                        <Mail className="h-5 w-5 text-[#8E9379]" />
                                                    </span>
                                                    <Input
                                                        type="email"
                                                        placeholder="SEU E-MAIL AQUI"
                                                        {...field}
                                                        className={`mb-1 h-13 w-full border-[#444933] bg-[#1A1D10] pl-10 text-[#8E9379] placeholder:text-base placeholder:text-[#8E9379]/40 ${
                                                            fieldState.error
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage>
                                                {fieldState.error?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />

                                {/* senha */}
                                <FormField
                                    control={form.control}
                                    name="senha"
                                    render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] text-[#8E9379] uppercase">
                                                Senha
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <span className="pointer-events-none absolute top-4 left-0 pl-3">
                                                        <Lock className="h-5 w-5 text-[#8E9379]" />
                                                    </span>
                                                    <Input
                                                        type="password"
                                                        placeholder="SUA SENHA AQUI"
                                                        {...field}
                                                        className={`mb-1 h-13 w-full border-[#444933] bg-[#1A1D10] pl-10 text-[#8E9379] placeholder:text-base placeholder:text-[#8E9379]/40 ${
                                                            fieldState.error
                                                                ? "border-red-500"
                                                                : ""
                                                        }`}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage>
                                                {fieldState.error?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                {/*  {
                                    errorMessage ?  
                                    <p className="text-red-400 text-sm font-bold>
                                        {errorMessage}
                                    </p>
                                    : null
                                } */}
                                <ButtonCustom
                                    type="submit"
                                    variant="primary"
                                    align="center"
                                    disabled={form.formState.isSubmitting}
                                >
                                    <Mail className="h-5 w-5" />
                                    <span>
                                        {form.formState.isSubmitting
                                            ? "Entrando..."
                                            : "Entrar com E-mail"}
                                    </span>
                                </ButtonCustom>
                            </form>
                        </Form>

                        <div className="mt-4 flex flex-col gap-4">
                            <ButtonCustom variant="secondary" align="center">
                                <span className="font-material-symbols text-base">
                                    IOS
                                </span>
                                <span>Continuar com Apple</span>
                            </ButtonCustom>
                            <ButtonCustom
                                variant="black"
                                align="center"
                                onClick={HandleGoogleSignIn}
                                disabled={isGoogleLoading}
                            >
                                <SvgGoogle />
                                <span>
                                    {isGoogleLoading
                                        ? "Redirecionamento..."
                                        : "Continuar com Google"}
                                </span>
                            </ButtonCustom>
                            <Divider />
                        </div>

                        <div className="mt-10 text-center">
                            <Description>Novo no neon?</Description>
                            <Link
                                to="/cadastro"
                                className="text-primary mt-4 text-base uppercase"
                            >
                                junte-se a rebelião
                            </Link>
                        </div>
                        
                    </AuthContainer>
                </MainContent>
            </div>
        </div>
    );
}
