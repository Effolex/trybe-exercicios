
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

'''
  Exercício 3:
  Faça um programa que, dado um valor n qualquer,
  tal que n > 1, imprima na tela um quadrado feito
  de asteriscos de lado de tamanho n.
'''

def printSquare(size):
  arr = [ '*' for i in range(size)]
  for i in range(size):
    print(''.join(arr))
