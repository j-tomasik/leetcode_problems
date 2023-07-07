class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        not_a_pal = ''

        if len(palindrome) <= 1:
            return ''

        for i, char in enumerate(palindrome):
            if char != 'a':
                if palindrome[i+1] == 'a' and palindrome[i-1] == 'a':
                    return not_a_pal + palindrome[i:-1] + 'b'
                else:
                    return not_a_pal + 'a' + palindrome[i+1:]
            else:
                not_a_pal += char

        final_str = not_a_pal[:-1] + 'b'

        return final_str
