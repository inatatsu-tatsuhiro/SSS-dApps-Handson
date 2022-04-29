const symbol = require('/node_modules/symbol-sdk')
function handleClick() {
  const addr = document.getElementById('addr-input').value
  console.log('clicked script', addr)
  const a = symbol.Address.createFromRawAddress(addr);
  console.log(a)
}