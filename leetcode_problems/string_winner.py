##given s astring such as 'wwwbbbbwww' return the winner
#w always goes first, you can only remove a char if it is surrounded by the same
#if you cannot remove your char on your turn the other player wins

#use a counter, plus on w and minus on a valid b
#do logic to check who wins at the end
#-2 -> b wins
#-1 -> b wins 'bbbwwwbbb'
#0 -> b wins
#1 -> w wins 'wwwbbbwww'
#2 -> w wins 'wwwwbb'
#3 -> w wins 'wwwwwwbb'

def string_winnder(str):
    count = 0
    
    for i, char in enumerate(str):
        if char == 'w' and i > 0 and i < len(str) - 1:
            if str[i-1] == 'w' and str[i+1] == 'w':
                count += 1
    
    for i, char in enumerate(str):
        if char == 'b' and i > 0 and i < len(str) - 1:
            if str[i-1] == 'b' and str[i+1] == 'b':
                count -= 1
                
    
    if count <= 0:
        return 'b'
    else:
        return 'w'
    
