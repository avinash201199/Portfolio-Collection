print('WELCOME TO THE QUIZ')
answer=input('Are you ready to play the Quiz ? (yes/no) :\n')
score=0
total_questions=3
 
if answer.lower()=='yes':
    answer=input('Question 1: what is the national game of India ?\n')
    if answer.lower()=='hockey':
        score += 1
        print('Nice')
    else:
        print('OOPS Wrong Answer :( try again')
 
    answer=input('Question 2: ? How many centuries does Sachin Tendulkar has in international cricket? \n')
    if answer.lower()=='100':
        score += 1
        print('Wow keep going')
    else:print('Wrong Answer :(')
 
    answer=input('Question 3:In which year India won its first World Cup  ?\n')
    if answer.lower()=='1983':
        score += 1
        print('Excellent Work')
    else:
        print('Wrong Answer :(')
 
print('Thankyou for Playing quiz , you attempted',score,"questions correctly!")
mark=(score/total_questions)*100
print('Marks obtained:',mark)
