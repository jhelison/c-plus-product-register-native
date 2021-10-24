export interface IStock {
    CODEMPRESA: number
    CODPROD: string
    CODSETORESTOQUE: string
    ESTATU: number
    LAST_CHANGE: string
}

export interface IProduct {
    CODPROD: string
    CODIGO: string
    NOMEPROD: string
    UNIDADE: string
    DESCMAXIMO: number
    FLAGINATIVO: boolean
    FLAGNAOVENDER: boolean
    FLAGCONTROLAESTOQUE: boolean
    ESTOQUE: IStock
    PRECO: number
}

export interface IUser {
    id: number
    phone_id: string
    name: string
    created_at: string
}

export interface IUpdate {
    id: number
    user: IUser
    product_code: string
    created_at: string
    quantity: number
}
