def QuestionMarks(str):
    a = 11
    b = 'false'
    c = 0
    
    for char in str:
        if char.isdigit():
            if int(char) + a == 10:
                if c != 3:
                    return 'false'
                b = 'true'
            c = 0
            a = int(char)
        elif char == '?':
            c += 1
    return b