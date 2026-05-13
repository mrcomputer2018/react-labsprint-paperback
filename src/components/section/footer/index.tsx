import SpanUppercase from "@/components/common/span-uppercase";

export default function Footer() {
  return (
    <footer className="py-7.5 flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-between items-center gap-8">
            <SpanUppercase variant="white_30">POLÍTICA DE PRIVACIDADE</SpanUppercase>
            <SpanUppercase variant="white_30">TERMOS DE SERVIÇO</SpanUppercase>
            <SpanUppercase variant="white_30">CONFIGURAÇÕES DE COOKIES</SpanUppercase>
        </div>
        <div>
            <SpanUppercase variant="white_30">
                © 2026 NEON PAPERBACK. TODOS OS DIREITOS RESERVADOS.
            </SpanUppercase>
        </div>
    </footer>
  )
}
