import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { InvestmentAccount } from './class/InvestmentAccount' 

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Jessé', 10)
// console.log(peopleAccount)
// peopleAccount.deposit(100)
// console.log(peopleAccount.getBalance())
// console.log(peopleAccount.withdraw(50))
// console.log(peopleAccount.getBalance())
// console.log(peopleAccount.withdraw(15))
// console.log(peopleAccount.getBalance())
// console.log(peopleAccount.withdraw(35))
// console.log(peopleAccount.getBalance())
// console.log(peopleAccount.withdraw(35))





// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// // companyAccount.deposit(150)
// // console.log(companyAccount)
// console.log(companyAccount.getLoan(20000))
// console.log(companyAccount.getBalance())


const investmentAccount: InvestmentAccount = new InvestmentAccount('Jessé', 30)
console.log(investmentAccount.deposit(50))
console.log(investmentAccount.getBalance())