def validInput(strParam):
    if len(strParam) < 4 or len(strParam) > 25:
        return False
    
    if not strParam.startswith[0].isalpha():
        return False
    
    if strParam[len(strParam)-1] == '_':
        return False
    
    
    return True