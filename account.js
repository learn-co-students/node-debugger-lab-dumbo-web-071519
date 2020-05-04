function account() {
  const output = {}
  let customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType (customerAccount) {
    if (customerAccount.checking === '1') {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  const signupBonus = 250
  const deposit = 1000

  function openAccount(account, deposit, signupBonus) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount

  openAccount(customerAccount, deposit, signupBonus)
  setAccountType(customerAccount)

  output['Account after opening'] = customerAccount

  debugger

  return output
}

module.exports = account

account()
