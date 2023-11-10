def FindIntersection(strArr):
  intList = eval(strArr[0])
  visited = set(intList)
  secondStr = eval(strArr[1])

  returnStr = ''

  for num in secondStr:
    if num in visited:
      returnStr += str(num) + ','


  
  return returnStr[:-1]

# keep this function call here 
print(FindIntersection(input()))