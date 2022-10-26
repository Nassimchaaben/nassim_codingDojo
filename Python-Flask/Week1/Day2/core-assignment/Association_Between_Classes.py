class BankAccount:
    bank_name = "First National Dojo"
    all_accounts = []
    def __init__(self, int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def make_deposit(self, amount):
        self.balance += amount
        return self 

    def make_withdrawal(self, amount):
        if (self.balance - amount) >=0  :
            self.balance -= amount
        else: 
            print("Insufficient funds")
            self.balance -= 5
        return self
        
    def display_account_info(self):
        return(f"{self.balance}")

    def yield_interest(self):
        if self.balance > 0:
            self.balance +=(self.balance*self.int_rate)
        return self
    @classmethod
    def all_balances(cls):
        # we use cls to refer to the class
        for account in cls.all_accounts:
            account.display_account_info()

class user:
    
    def __init__(self,first_name):
        self.first_name = first_name
        self.account = {
                "account_1" : BankAccount(.05,1000),
                "account_2" : BankAccount(.02,2000)
        }       
    
    def display_user_balance(self):
        print(f"user : {self.first_name}Balance: ${self.account['account_1'].display_account_info()}")
        print(f"user : {self.first_name}Balance: ${self.account['account_2'].display_account_info()}")
        return self
        
    
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        print(f"user : {self.first_name} {self.last_name} Balance: ${self.account_balance} sand monney to { other_user.first_name} { other_user.last_name} his balance is { other_user.account_balance}")
        return self
nassim = user("Nassim")

nassim.account["account_1"].make_deposit(100)
nassim.display_user_balance()















