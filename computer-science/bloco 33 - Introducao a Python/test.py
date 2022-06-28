
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

'''
  Exercício 4:
  Crie uma função que receba uma lista de nomes
  e retorne o nome com a maior quantidade de caracteres.
  Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
  o retorno deve ser "Fernanda".
'''

def biggestName(names):
  biggest = ''
  for name in names:
    if len(name) > len(biggest):
      biggest = name
  return biggest

'''
  Exercício 5:
  Considere que a cobertura da tinta é de 1 litro para cada
  3 metros quadrados e que a tinta é vendida em latas de 18
  litros, que custam R$ 80,00. Crie uma função que retorne
  dois valores em uma tupla contendo a quantidade de latas
  de tinta a serem compradas e o preço total a partir do
  tamanho de uma parede(em m²).
'''

def price(wall):
  cansNeeded = 1
  littersNeeded = wall/3
  while True:
    if littersNeeded <= (cansNeeded*18):
      return [ cansNeeded, cansNeeded*80 ]
    cansNeeded += 1


print(price(55))