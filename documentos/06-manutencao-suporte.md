# Manutenção e suporte

## Sumário

1. [Escopo](#escopo)
2. [Iniciar e interromper os serviços](#iniciar-e-interromper-os-serviços)
3. [Logs e diagnóstico](#logs-e-diagnóstico)
4. [Problemas comuns](#problemas-comuns)
5. [Backup e restauração](#backup-e-restauração)
6. [Recomendações de segurança](#recomendações-de-segurança)
7. [Atualizações](#atualizações)
8. [Solicitação de suporte](#solicitação-de-suporte)
9. [Limitações conhecidas](#limitações-conhecidas)

## Escopo

Este documento separa comandos disponíveis no projeto de recomendações que ainda dependem de definição operacional. Não há processo de operação de produção, backup ou recuperação documentado no repositório.

## Iniciar e interromper os serviços

Na raiz do projeto, em terminais separados:

```powershell
npm run dev:backend
npm run dev:frontend
```

O backend usa `node --watch index.js`; o frontend usa `vite dev`. Para interromper um serviço iniciado em primeiro plano, use `Ctrl+C no terminal correspondente`.

O backend também declara o script `npm start` em `backend/package.json`; ele deve ser executado no diretório `backend/`. Esse script, sozinho, não define um ambiente de produção gerenciado nem inicializa o frontend.

## Logs e diagnóstico

- **Backend:** mensagens de inicialização e erros são enviados para o console do processo. O middleware de erro usa `console.error`.
- **Frontend:** falhas de interface são registradas pelo código de tratamento de erros do app e podem ser consultadas no console do navegador; erros operacionais também aparecem como mensagens na página.
- **PostgreSQL:** logs, retenção e localização dependem da instalação externa do PostgreSQL e não são configurados pelo repositório.

Ao investigar um erro, registre horário aproximado, operação executada, endpoint (se conhecido), status HTTP, mensagem apresentada e trechos relevantes dos logs sem incluir senhas, tokens, dados pessoais ou conteúdo confidencial.

## Problemas comuns

| Sintoma | Diagnóstico inicial |
|---|---|
| API não inicia | Confira conexão PostgreSQL, existência do banco, variáveis `DB_*` e porta da API. O processo aguarda autenticação e sincronização antes de escutar. |
| Erro `ECONNREFUSED` no frontend | Confirme se o backend está ativo no host/porta de `VITE_API_URL`. |
| Erro CORS | Confirme se `CORS_ORIGIN` corresponde exatamente ao endereço do frontend no navegador. A origem do exemplo difere do padrão do backend. |
| Lista vazia | Uma resposta vazia é permitida; não há seed que carregue tarefas automaticamente. |
| Erro ao salvar ou atualizar | Confira resposta da API e logs do backend; valide título, tamanho dos campos e formato da data. |
| Lint falha | Na execução feita para esta entrega, o lint reportou 5.850 erros e 8 avisos do Prettier, principalmente `Delete CR` em fins de linha. Não foi corrigido como parte da tarefa documental. |

Consulte o [manual de instalação](./03-instalacao-configuracao.md) para configuração das variáveis e verificação local.

## Backup e restauração

**Não há rotina de backup ou restauração implementada nem documentada no projeto.** Não trate a execução de `db.sync()` como backup ou recuperação.

Como recomendação ainda pendente de implementação e validação, a equipe de operação deve estabelecer uma estratégia para PostgreSQL que defina frequência, retenção, acesso restrito, armazenamento protegido, monitoramento dos jobs e testes periódicos de restauração. O cliente e a equipe devem confirmar RPO/RTO e requisitos regulatórios antes de aprovar a política.

## Recomendações de segurança

As recomendações abaixo não são funcionalidades adicionadas pelo projeto:

- Manter credenciais em armazenamento de segredos ou variáveis protegidas; não versionar arquivos `.env`.
- Usar TLS/SSL conforme a topologia do ambiente e validar certificados de forma apropriada.
- Restringir a conectividade PostgreSQL e usar uma conta de serviço com privilégios mínimos.
- Revisar a origem CORS e evitar curingas ou origens não necessárias.
- Avaliar a ausência de autenticação/autorização antes de expor a API fora de ambiente controlado.
- Atualizar dependências por processo revisado e executar build e testes depois das alterações.
- Definir logs, monitoramento, política de retenção e resposta a incidentes antes da implantação.

## Atualizações

O projeto contém manifests e arquivos de lock separados em `frontend/` e `backend/`. Para atualizar dependências:

1. Planeje a atualização em branch de trabalho.
2. Atualize os manifests/locks pelo processo aprovado pela equipe.
3. Revise changelogs e compatibilidade.
4. Execute `npm test`, `npm run lint` e `npm run build` na raiz.
5. Teste a integração com API e banco em ambiente controlado.
6. Planeje a atualização do schema separadamente: atualmente não há migrations versionadas.

Não atualize dependências diretamente em produção sem um plano de rollback definido. Esse procedimento é uma recomendação; não existe pipeline de release/rollback documentado.

## Solicitação de suporte

Forneça:

- Ambiente afetado (local, homologação ou produção) e endereço não sensível.
- Data/hora aproximada e fuso.
- Passos para reproduzir e operação que falhou.
- Mensagem e status exibidos.
- Versões efetivas de Node.js, npm, PostgreSQL e navegador.
- Logs relevantes com credenciais, tokens e dados pessoais removidos.

Não envie arquivos `.env`, senhas, connection strings completas nem dumps de banco não sanitizados.

## Limitações conhecidas

- Sem autenticação, autorização, usuários ou segregação de tarefas por pessoa.
- Sem backup, restauração, migrations, seeds ou monitoramento configurado pelo repositório.
- Sem testes automatizados do backend ou de integração com PostgreSQL.
- Porta/origem de CORS do exemplo não coincide com o padrão configurado pelo backend.
- Etiqueta “Dados de demonstração” diverge da consulta real à API.
- Processo de implantação e suporte a produção não especificados.
