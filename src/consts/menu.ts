import { routes } from "./routes";

const menu = [
    {
        icone: "create",
        nome: "Gerentes",
        link: routes.CADASTRO_GERENTE,
        roles: ['Administrador']
    },
    {
        icone: "create",
        nome: "Ativos",
        link: routes.CADASTRO_ATIVO,
        roles: ['Administrador']
    },
    {
        icone: "create",
        nome: "Clientes",
        link: routes.CADASTRO_CLIENTE,
        roles: ['Administrador']
    },
    {
        icone: "create",
        nome: "Carteira",
        link: routes.CADASTRO_GERENTE,
        roles: ['Administrador']
    }     
]

export { menu }