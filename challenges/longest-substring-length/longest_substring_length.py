class PolinomialTimeSolution:        
    def lengthOfLongestSubstring(self, s):
        major_substring = ''
        major_length = 0

        given_s_len = len(s)

        for i in range(given_s_len):
            aux = ''

            for j in range(i, given_s_len):
                if(s[j] in aux):
                    break
                aux += s[j]

            if(len(aux) > major_length):
                major_length = len(aux)
                major_substring = aux

        return major_length


class LinearTimeSolution:
    def lengthOfLongestSubstring(self, s):
        major_substring = ''
        major_len = 0
         
        given_s_len = len(s)
        aux = ''
        i = 0

        for j in range(given_s_len):
            if(s[j] in aux):
                i = aux.find(s[j]) + i + 1
                if(len(aux) > major_len):
                    major_len = len(aux)
                    major_substring = aux
                aux = s[i:j+1]
            else:
                aux += s[j]

        return major_len 



print(PolinomialTimeSolution().lengthOfLongestSubstring('abrkaabcdefghijjxxx'))

print(LinearTimeSolution().lengthOfLongestSubstring('abrkaabcdefghijjxxx'*100000))
