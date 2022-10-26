from unicodedata import name


class user:
    bank_name = "First National Dojo"	
    def __init__(self, first_name , last_name,e_mail, account_balance=0):
        self.first_name = first_name
        self.last_name = last_name
        self.e_mail = e_mail
        self.account_balance = account_balance
    
    def make_deposit(self, amount):
        self.account_balance += amount
        
    
    def make_withdrawal(self, amount):
        self.account_balance -= amount
       
    
    def display_user_balance(self):
        print(f"user : {self.first_name} {self.last_name} Balance: ${self.account_balance}")
        
    
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        print(f"user : {self.first_name} {self.last_name} Balance: ${self.account_balance} sand monney to { other_user.first_name} { other_user.last_name} his balance is { other_user.account_balance}")
       

name_1 = user( "mouin" , "mohsni", "mouin.mohsni@" ,1000)
name_2 = user( "nassim" , "chaaben", "nassim.chaaben@" ,1000)
name_3 = user( "Elon" , "mask", "Elon.mask@" ,1000)

name_1.make_deposit(100)
name_1.make_withdrawal(400)
name_1.make_withdrawal(1400)
name_1.make_withdrawal(700)
name_1.display_user_balance()




name_2.make_deposit(100)
name_2.make_withdrawal(400)
name_2.make_deposit(1000)
name_2.make_deposit(3000)
name_2.make_withdrawal(1400)
name_2.make_withdrawal(700)
name_2.display_user_balance()

name_3.make_deposit(50)
name_3.make_withdrawal(1800)
name_3.make_deposit(1000)
name_3.make_deposit(1000)
name_3.make_withdrawal(1400)
name_3.make_withdrawal(700)
name_3.display_user_balance()

name_2.transfer_money(name_3, 200)
name_2.transfer_money(name_3, 10)














