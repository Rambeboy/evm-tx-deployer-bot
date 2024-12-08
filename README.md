## EVM TX & DEPLOYER BOT

The Evm Testnet Bot is a powerful tool designed for interacting with EVM-compatible networks. This bot automates transaction processes, enabling users to perform actions such as ETH to WETH swap interactions seamlessly and daily. Additionally, it provides a built-in smart contract deployment feature, making it an ideal solution for you to do your testnet airdrop.

---

## PREREQUISITE

- Git
- Node JS (v22)

---
                             
## BOT FEATURE

- Multi Account 
- Support PK & SEED
- Auto TX Daily (Wrap Unwrap ETH)
- Auto TX Daily With RAW TX DATA
- Auto TX Daily (SELF TRANSFER)
- Deploy Smart Contract

---

## SETUP & CONFIGURE BOT

### LINUX

1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/evm-tx-deployer-bot.git && cd evm-tx-deployer-bot
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run
   ```
   cp -r accounts/accounts_tmp.js accounts/accounts.js && cp -r config/config_tmp.js config/config.js
   ```
4. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
5. Configure the bot config
    ```
   nano config/config.js
    ```
6. To run Auto TX
   ```
   npm run start
   ```
7. To run Contract Deployer
    ```
    npm run deploy
    ```
   
---

### WINDOWS

1. Open your `Command Prompt` or `Power Shell`.

2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/evm-tx-deployer-bot.git && cd evm-tx-deployer-bot
   ```
3. Install dependencies
   ```
   npm install
   ```
5. Navigate to `evm-tx-deployer-bot` directory. 

6. Navigate to `accounts` folder and rename `accounts_tmp.js` to `accounts.js`.

7. Now open `acccounts.js` and setup your accounts. 

8. Now Back to `evm-tx-deployer-bot` directory and Navigate to `config` and rename `config_tmp.js` to `config.js` adjust the `config.js` as needed.

9.  Back to `evm-tx-deployer-bot` directory.

10. To start the app open your `Command Prompt` or `Power Shell`

11. To run auto Tx Bot
    ```
    npm run start
    ```

12. To run Smart Contract Deployer
    ```
    npm run deploy
    ```

---

## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```
3. Start the bot

4. If any eror happen check `log/app.log`


---

## IMPORTANT NOTE (READ IT THIS IS NOT DECORATION)

DWYOR & Always use a new wallet when running the bot, I am not responsible for any loss of assets.

If any error regarding SQL, try to delete `database.db` first

---

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
