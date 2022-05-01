const symbol = require('/node_modules/symbol-sdk')

const GENERATION_HASH = '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836'
const EPOCH = 1637848847
const XYM_ID = '3A8416DB2D53B6C8'
const NODE_URL = 'https://sym-test.opening-line.jp:3001'
const NET_TYPE = symbol.NetworkType.TEST_NET

const address = symbol.Address.createFromRawAddress("TAD7Q3FEN5CZRZFE3WX6TWEESATVTMJDS2ETVTY")

console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)

const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()

const repositoryFactory = new symbol.RepositoryFactoryHttp(NODE_URL)
const accountHttp = repositoryFactory.createAccountRepository()

accountHttp.getAccountInfo(address)
  .toPromise()
  .then((accountInfo) => {
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === XYM_ID) {
        const dom_xym = document.getElementById('wallet-xym')
        dom_xym.innerText = `XYM Balance : ${m.amount.compact() / Math.pow(10, 6)}`
      }
    }
  })





// ================================================================

// function handleClick() {
//   const addr = document.getElementById('addr-input').value
//   console.log('clicked script', addr)
//   const a = symbol.Address.createFromRawAddress(addr);
//   console.log(a)
// }