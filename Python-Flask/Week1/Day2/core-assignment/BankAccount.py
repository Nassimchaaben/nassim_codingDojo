class BankAccount:
    bank_name = "First National Dojo"
    all_accounts = []
    def __init__(self, int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self 

    def withdraw(self, amount):
        if (self.balance - amount >=0 ) :
            self.balance -= amount
        else: 
            print("Insufficient funds")
            self.balance -= 5
        return self
        
    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance +=(self.balance*self.int_rate)
        return self
    @classmethod
    def all_balances(cls):
        # we use cls to refer to the class
        for account in cls.all_accounts:
            account.display_account_info()

account_1=BankAccount(.05,1000)
account_2=BankAccount(.02,2000)

account_1.deposit(100).deposit(200).deposit(300).withdraw(50).yield_interest().display_account_info()
account_2.deposit(500).deposit(100).withdraw(200).withdraw(50).withdraw(400).withdraw(50).yield_interest().display_account_info()


BankAccount.all_balances()












   

