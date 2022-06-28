
'''
  🚀 Exercício 1:
  Crie uma função que receba dois números e retorne o maior deles.
'''

def biggestN(x, y):
  return (x>y)*x + (y>x)*y;

'''
  🚀 Exercício 2:
    Calcule a média aritmética dos valores contidos em uma lista.
'''

def arithMean(list):
  sum = 0
  for number in list:
    sum += number
  return sum / len(list)
