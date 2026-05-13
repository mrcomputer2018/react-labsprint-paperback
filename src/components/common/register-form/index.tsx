import { zodResolver } from "@hookform/resolvers/zod";
import { AtSignIcon, HashIcon, LockKeyholeIcon, LockKeyholeOpenIcon, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

import { ButtonCustom } from "@/components/common/button-custom";
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
    name: z
        .string()
        .min(2, "Nome deve ter pelo menos 2 caracteres")
        .nonempty("Nome é obrigatório"),
    email: z
        .string()
        .email("E-mail inválido")
        .nonempty("E-mail é obrigatório"),
    username: z
        .string()
        .min(3, "Nome de usuário deve ter pelo menos 3 caracteres")
        .nonempty("Nome de usuário é obrigatório"),
    senha: z
        .string()
        .min(8, "Senha deve ter pelo menos 8 caracteres")
        .max(20, "Senha deve ter no máximo 20 caracteres")
        .nonempty("Senha é obrigatória"),
});

export function RegisterForm() {
    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();
    const { signUp } = useAuth();

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            name: "",
            email: "",
            username: "",
            senha: "",
        },
    });

    function togglePasswordVisibility() {
        setViewPassword(!viewPassword);
    }

    async function onSubmit(data: z.infer<typeof loginFormSchema>) {
        setErrorMessage("");
        setSuccessMessage("");

        try {
            await signUp(data.name, data.username, data.email, data.senha);
            toast.success("Cadastro realizado com sucesso.", {
                description:
                    "Enviamos um e-mail de verificacao para ativar sua conta.",
            });
            setSuccessMessage(
                "Enviamos um e-mail de verificacao para ativar sua conta.",
            );
            navigate("/pulso/feed");
        } catch {
            toast.error("Falha ao realizar cadastro.", {
                description: "Revise os dados informados e tente novamente.",
            });
            setErrorMessage("Nao foi possivel criar a conta. Tente novamente.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
                {/* nome */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-3">
                            <FormLabel className="text-[10px] text-[#8E9379] uppercase">
                                Nome completo
                            </FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="pointer-events-none absolute top-4 left-0 pl-3">
                                        <User className="h-5 w-5 text-[#8E9379]" />
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="SEU NOME AQUI"
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

                {/* e-mail */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-3">
                            <FormLabel className="text-[10px] text-[#8E9379] uppercase">
                                E-mail
                            </FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="pointer-events-none absolute top-4 left-0 pl-3">
                                        <AtSignIcon className="h-5 w-5 text-[#8E9379]" />
                                    </span>
                                    <Input
                                        type="text"
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

                {/*nome de usuario */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field, fieldState }) => (
                        <FormItem className="mb-3">
                            <FormLabel className="text-[10px] text-[#8E9379] uppercase">
                                Nome de Usuário
                            </FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span className="pointer-events-none absolute top-4 left-0 pl-3">
                                        <HashIcon className="h-5 w-5 text-[#8E9379]" />
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="SEU NOME DE USUÁRIO AQUI"
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
                        <FormItem className="mb-3">
                            <FormLabel className="text-[10px] text-[#8E9379] uppercase">
                                Senha
                            </FormLabel>

                            <FormControl>
                                <div className="relative">
                                    <span
                                        className="absolute top-4 left-0 z-20 pl-3"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {viewPassword ? (
                                            <LockKeyholeOpenIcon className="h-5 w-5 text-[#8E9379]" />
                                        ) : (
                                            <LockKeyholeIcon className="h-5 w-5 text-[#8E9379]" />
                                        )}
                                    </span>
                                    <Input
                                        type={
                                            viewPassword ? "text" : "password"
                                        }
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

                {errorMessage ? (
                    <p className="mb-3 text-sm font-bold text-red-400">
                        {errorMessage}
                    </p>
                ) : null}
                {successMessage ? (
                    <p className="mb-3 text-sm font-bold text-primary">
                        {successMessage}
                    </p>
                ) : null}

                <ButtonCustom
                    type="submit"
                    variant="primary"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "Criando..." : "Criar Conta"}
                </ButtonCustom>
            </form>
        </Form>
    );
}
