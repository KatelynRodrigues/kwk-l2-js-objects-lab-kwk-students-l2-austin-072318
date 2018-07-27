// Write your solution in this file!
var driver = {}
  

function updateDriverWithKeyAndValue(driver, key, value){
 let driver1 = driver
 driver1[key] = value
 return driver1
}

//updateDriverWithKeyAndValue("Sam", "address", "11 Broadway")

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value
  return driver
}

function deleteFromDriverByKey(driver,key){
  let driver2 = driver
  delete driver2[key]
  console.log(driver)
  return driver2
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}
  
  