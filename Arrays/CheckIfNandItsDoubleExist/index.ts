function checkIfExist(arr: number[]): boolean {
  let set = new Set()
    
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i]
    
    if(set.has(currentNum)) {
      return true
    }
    
    set.add(currentNum * 2)
    set.add(currentNum / 2)
  }
  return false
};