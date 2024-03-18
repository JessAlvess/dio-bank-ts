import { DioAccount } from "./DioAccount";

export class InvestmentAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void =>  {
        if(this.validateStatus()){
            console.log(`Voce depositou ${value + 10}`)
            this.setBalance(value + 10)
          }
    }
}