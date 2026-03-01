# Vexiarh – One Page Agency (Next.js + TypeScript)

Projeto migrado para Next.js (React + TypeScript) pronto para deploy no Vercel. O template **one-page-agency-02** foi convertido para a rota `/` e os formulários PHP foram substituídos por rotas API Node.

## Estrutura
- `web/` – app Next.js com código-fonte em `src/` e assets em `public/` (css/js/imagens/fontes).
- `web/src/app/api/contact` – endpoint de contato (retorno em HTML).
- `web/src/app/api/mailchimp` – endpoint de newsletter usando Mailchimp.

## Rodando localmente
```bash
cd web
npm install        # já executado na criação, rode se precisar
npm run dev        # servidor em http://localhost:3000
```

## Variáveis de ambiente
Crie um `.env.local` dentro de `web/` com, no mínimo:
```
MAILCHIMP_API_KEY=    # ex: abc123-us15
MAILCHIMP_LIST_ID=    # ID da lista
MAILCHIMP_SERVER_PREFIX=us15  # prefixo do data center (parte após o hífen da API key)
```
Sem esses valores, a rota `/api/mailchimp` devolve erro informativo. O formulário de contato responde com sucesso sem integração externa; plugue um provedor (Resend/SMTP) se quiser envio real.

## Build e produção
```bash
cd web
npm run build
```
O output é gerado para deploy no Vercel automaticamente (Next.js). Para publicar:
```bash
cd web
npm run build   # opcional, Vercel faz no CI
```
Depois conecte o repositório no Vercel (framework Next.js detectado) e configure as variáveis acima.

## Notas
- Todos os assets necessários estão em `web/public`; a pasta antiga `templates/` foi removida para evitar duplicação e PHP.
- O Google Maps e reCAPTCHA continuam no front; substitua as chaves embutidas por chaves próprias se for usar esses serviços.
