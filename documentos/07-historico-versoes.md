# Histórico de versões

## Sumário

1. [Identificação de versão](#identificação-de-versão)
2. [Registros verificáveis no Git](#registros-verificáveis-no-git)
3. [Modelo para próximas versões](#modelo-para-próximas-versões)
4. [Pendências](#pendências)

## Identificação de versão

O `package.json` raiz e o `backend/package.json` declaram `1.0.0`. O `frontend/package.json` não declara um campo `version`. Esses metadados não comprovam que tenha ocorrido uma versão formal entregue ou publicada. Não foi possível associar um número de release único ao sistema com base nos arquivos analisados.

## Registros verificáveis no Git

Os registros abaixo reproduzem os três commits retornados pelo histórico disponível no workspace. As alterações são descritas somente pelo assunto registrado no commit; não se presume uma lista de funcionalidades a partir desses títulos.

| Registro | Data registrada no Git | Assunto do commit | Versão de release |
|---|---|---|---|
| `235857b` | 2026-11-12 | Primeiro commit | Não identificada |
| `a719e33` | 2026-11-19 | Instruções iniciais para o Lovable | Não identificada |
| `9e7318f` | 2026-11-19 | Reorganização dos arquivos, backend e frontend | Não identificada |

As datas acima são datas de commit no histórico consultado, não datas de publicação ou entrega ao cliente.

## Modelo para próximas versões

Use uma entrada por versão formalmente aprovada:

```text
## [Versão]
- Data da versão:
- Principais alterações:
- Funcionalidades adicionadas:
- Correções realizadas:
- Problemas conhecidos:
- Referência de commit/tag:
```

## Pendências

- Confirmar a versão efetivamente entregue e sua data de publicação.
- Definir convenção de versionamento e registrar releases em tags ou mecanismo equivalente.
- Registrar alterações funcionais, correções e problemas conhecidos por release.
