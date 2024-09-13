export default class ContaBancaria {
    numeroConta = 1
    agencia = 1010
    private saldo = 0
    extrato = []


    public depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor
        }
    }

    public sacar(valor: number) { 
        if (valor > 0) {
            this.saldo -= valor
        }
    }

    public consultarSaldo() { 
        return this.saldo
    }

    public consultarExtrato() {
        return this.extrato
    }
    private registraroperacao() { 
        
    }

}
