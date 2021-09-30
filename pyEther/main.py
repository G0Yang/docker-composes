from web3 import Web3
from dotenv import load_dotenv
import os, sys

load_dotenv()

my_address = os.getenv('MY_WALLET_ADDRESS')
my_address_private_key = os.getenv('MY_WALLET_PRIVATE_KEY')
backup_address = os.getenv('BACKUP_ADDRESS')
backup_address_private_key = os.getenv('BACKUP_PRIVATE_KEY')
ETHER_SEND_PAS_LIMIT = 21000
save_file_name = 'result.txt'

w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/' + os.getenv('INFURA_PROJECT_ID')))


while 1:
    try:
        my_balance = w3.eth.get_balance(my_address)

        gas_price = w3.eth.gas_price
        gas_price_add = gas_price + w3.toWei(0.5, 'gwei')

        gas = gas_price * ETHER_SEND_PAS_LIMIT
        gas_add = gas_price_add * ETHER_SEND_PAS_LIMIT

        send_balance = my_balance - gas_add

        #print(send_balance, my_balance, gas, gas_add, (my_balance + gas), w3.toWei(0.5, 'gwei'), (gas_add - gas))

        #print(my_balance, gas_price, ETHER_SEND_PAS_LIMIT, gas, send_balance, w3.fromWei(send_balance, 'ether'), w3.fromWei(gas, 'ether'), w3.toWei(1, 'gwei'))
        print(w3.fromWei(my_balance, 'ether'), w3.fromWei(w3.eth.gas_price, 'gwei'), w3.fromWei(send_balance, 'ether'))

        if send_balance > 0:
            raw_transaction = dict(
                # from=my_address,
                nonce=w3.eth.get_transaction_count(my_address),
                to=backup_address,
                value=send_balance,
                gasPrice=gas_price,
                gas=ETHER_SEND_PAS_LIMIT
            )
            print(raw_transaction)

            signed_txn = w3.eth.account.signTransaction(raw_transaction, my_address_private_key)
            print(signed_txn)

            tx = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
            print(tx)

            with open(save_file_name, 'w') as f:
                f.write(str(tx))
                f.write(str(raw_transaction))
                f.write(tx)
                f.write(raw_transaction)



    except KeyboardInterrupt:
        exit()
    except:
        print(sys.exc_info())
