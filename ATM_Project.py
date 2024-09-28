# OCTANET Internship Task



'''The ATMs in our cities are built on Python, as we have all seen them. It is a console-based
 application with five different classes. In order to use the system, the user must enter his or her
 user ID and pin when it starts. Once the details are entered successfully, ATM functionality is
 unlocked. As a result of the project, the following operations can be performed:
 
 
 1) Withdraw
 2) Transection History 
 3) Deposit
 4) transfer
 5) Quite 
 
 '''
account_balance = 100
previous_transactions = []

def get_user_input(prompt, validate_func=None):
    while True:
        user_input = input(prompt)
        if not validate_func or validate_func(user_input):
            return user_input
        print("Invalid input. Please try again.")

def update_balance(account_balance):
    while True:
        amount_str = get_user_input("Enter the amount you want to add to your account balance: ")
        if amount_str.replace(".", "", 1).isdigit():
            amount = float(amount_str)
            account_balance += amount
            print("Your updated balance is", account_balance)
            return account_balance
        print("Invalid input. Please enter a valid amount.")

def further_options():
    end_transaction = input("Do you want to perform another transaction? (YES/NO): ").upper()
    return end_transaction == "NO"

def perform_transactions(account_balance, previous_transactions):
    while True:
        print("\nSelect the option you want to perform:")
        print("1. Check Account Balance")
        print("2. Cash Withdrawal")
        print("3. Check Previous Transactions")
        print("4. Add Balance")
        print("5. Transfer Money")
        option = get_user_input("Enter the option number: ", lambda x: x.isdigit() and 1 <= int(x) <= 5)
        
        if option == "1":
            print("WELCOME BACK! Your Account Balance is", account_balance)
        elif option == "2":
            amount_str = get_user_input("Enter the amount you want to withdraw: ")
            if amount_str.replace(".", "", 1).isdigit():
                amount = float(amount_str)
                if amount > account_balance:
                    print("Insufficient Funds: Your withdrawal amount exceeds your available balance.")
                else:
                    previous_transactions.append(amount)
                    account_balance -= amount
                    print(f"{amount} Has Been Successfully Withdrawn!")
                    print("Your remaining balance is", account_balance)
            else:
                print("Invalid input. Please enter a valid amount.")
        elif option == "3":
            print("Your previous transactions are:", previous_transactions)
        elif option == "4":
            account_balance = update_balance(account_balance)
        elif option == "5":
            transfer_amount_str = get_user_input("Enter the amount you want to transfer: ")
            if transfer_amount_str.replace(".", "", 1).isdigit():
                transfer_amount = float(transfer_amount_str)
                if transfer_amount > account_balance:
                    print("Insufficient Funds: Your transfer amount exceeds your available balance.")
                else:
                    recipient_account = get_user_input("Enter the recipient's account number: ", lambda x: x.isdigit() and len(x) == 16)
                    print(f"{transfer_amount} Has Been Successfully Transferred to account {recipient_account}")
                    account_balance -= transfer_amount
                    previous_transactions.append(-transfer_amount)
            else:
                print("Invalid input. Please enter a valid amount.")
        
        if further_options():
            print("THANK YOU! Your transaction is ended.")
            break

if __name__ == "__main__":
    print("Welcome to the ATM program!")
    while True:
        account_number = get_user_input("Enter Your 16 Digit Account Number: ", lambda x: x.isdigit() and len(x) == 16)
        account_password = get_user_input("Enter Your Pin Code: ", lambda x: x.isdigit() and len(x) == 4)
        
        print("THANK YOU FOR LOGGING IN AGAIN")
        
        perform_transactions(account_balance, previous_transactions)

        end_program = input("Do you want to exit the program? (YES/NO): ").upper()
        if end_program == "YES":
            break
