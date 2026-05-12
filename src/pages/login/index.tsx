import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

import imageLogo from "@/assets/logo.png";
import SubtitleSection from "@/components/common/subtitle-section";
import TitleSection from "@/components/common/title-section";
import { Header } from "@/components/section/header";
import HeaderLogo from "@/components/section/header/header-logo";
import AuthContainer from "@/components/section/Login/auth-container";
import BrandingSection from "@/components/section/Login/branding-section";
import Description from "@/components/section/Login/description";
import Line from "@/components/section/Login/line";
import SubtitlePrincipal from "@/components/section/Login/subtitle-principal";
import TitlePrincipal from "@/components/section/Login/title-principal";
import MainContent from "@/components/section/main-content";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonCustom from "@/components/common/button-custom";

const loginFormSchema = z.object({
    email: z.string().email("E-mail invalido").nonempty("E-mail e obrigatorio"),
    senha: z.string().nonempty("Senha e obrigatoria"),
});

export default function Login() {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });

    async function onSubmit(data: z.infer<typeof loginFormSchema>) {
        console.log(data);
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
                    </AuthContainer>
                </MainContent>
            </div>
        </div>
    );
}
