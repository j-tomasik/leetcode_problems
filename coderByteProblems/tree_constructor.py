
def TreeConstructor(strArr):
    parentList = []
    for node in strArr:
        child, parent = eval(node)
        parentList.append(parent)
        if parentList.count(parent) > 2:
            return "false"
    
    return 'true'