const _ = require('lodash')
const assert = require('assert')
let addressBook = []
let addressBooks = []
let addressBooks2 = []
let addressBooks3 = []


const getMultipleBurgers = () => {
    fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3]')
      .then(res => res.json())
      .then(data => { const displayUsers = data.map(person => {
        addressBook = data
      })})
      .then(console.log(addressBook))
  }



  if (typeof describe === 'function') {
    describe('Lodash Burger Tests', () => {
      it('should reverse the burgers', async () => {
        await fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3]')
        .then(res => {
            if(!res.ok) {
                throw Error("Error")
            }
                return res.json()
                .then(data => {
                    const displayUsers = data.map((person,index) => {
                    addressBook.push(data[index].name)
                })
            const reversedAddress = _.reverse(addressBook)    
            assert.equal(reversedAddress[0], `Foot Feta-ish Burger`)
            })
        })
    })
    it('should chunk the burgers', async () => {
        await fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3,4,5,6]')
        .then(res => {
            if(!res.ok) {
                throw Error("Error")
            }
                return res.json()
                .then(data => {
                    const displayUsers = data.map((person,index) => {
                    addressBooks.push(data[index].name)
                })
            const [burger1, burger2] = _.chunk(addressBooks, 3)    
            assert.equal(burger2[0], `Tunami`)
            })
        })
    })
    it('should get rid of an item', async () => {
        await fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3]')
        .then(res => {
            if(!res.ok) {
                throw Error("Error")
            }
                return res.json()
                .then(data => {
                    const displayUsers = data.map((person,index) => {
                    addressBooks2.push(data[index].name)
                })
            const clippedAddress = _.without(addressBooks2, `Foot Feta-ish Burger`)    
            assert.equal(clippedAddress.length, 2)
            })
        })
    })
    it('should shuffle the items', async () => {
        await fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3]')
        .then(res => {
            if(!res.ok) {
                throw Error("Error")
            }
                return res.json()
                .then(data => {
                    const displayUsers = data.map((person,index) => {
                    addressBooks3.push(data[index].name)
                })   
            const clippedAddress = _.shuffle(addressBooks3)    
            assert.notEqual(JSON.stringify(addressBooks3), JSON.stringify(clippedAddress))
            })
        })
    })
}
    )}