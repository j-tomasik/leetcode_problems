def validInput(strParam):
    if len(strParam) < 4 or len(strParam) > 25:
        return False
    
    if not strParam.startswith[0].isalpha():
        return False
    
    if strParam[len(strParam)-1] == '_':
        return False
    
    for char in strParam:
        if not char.isdigit() and not char.isalpha() and char != '_':
            return False
    
    return True