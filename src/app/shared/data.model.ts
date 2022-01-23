export class DataTable {
    
    id!: number;
    nome!: string; 
    cpf!: string; 
    data!: string;
    email!: string; 
    endereco!: string;
    peso!: string;
    altura!: string;
    horas!: string;
    
}

export class RespDados {
    
    id!: number;
    nome!: string; 
    cpf!: string; 
    tabela!: DataTable[];
}