const account = {
    name: "Alex",
    balance: 0,
    credit: 0,
    debit: 0,
    describe(){
        return `owner: ${account.name}, balance ${account.balance}`
    }
}

console.log(account.describe());

account.credit += 250;
account.debit += 80;
account.balance = account.credit - account.debit;

console.log(account.describe());