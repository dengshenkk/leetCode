function defangIPaddr(address) {
    return address.replace(/\./g, '[.]')
}


console.log(`defangIPaddr('192.168.1.1'): `, defangIPaddr('192.168.1.1'))
