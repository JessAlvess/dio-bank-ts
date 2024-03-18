export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      console.log(`Voce depositou ${value}`)
      this.setBalance(value)
    }
  }

  withdraw = (value: number): string => {
    if (this.validateStatus() && this.getBalance() >= value) {
      this.setBalance(value * -1)
      return `Voce sacou ${value}`
    }
    return 'Saldo insuficiente'
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance += value
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  setStatus = (value: boolean): void => {
    this.status = value
  }

  getStatus = (): boolean => {
    return this.status
  }
}
