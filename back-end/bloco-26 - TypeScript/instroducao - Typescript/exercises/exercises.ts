export function greeter(name: string) {
  return `Olá ${name}`; 
}

export function personAge(name:string, age:number ) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add,0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function Losangulo(diagonalX: number, diagonalY: number): number {
  const diagonalMult: number =  (diagonalX > diagonalY)
    ? diagonalX*diagonalY : diagonalY*diagonalX;
    return diagonalMult/2;
}

export function trapezio(height: number, baseX: number, baseY: number): number {
  const baseMult = (baseX > baseY)
  ? baseX*baseY : baseY*baseX;
  return ((baseMult*height)/2);
}

export function baseCircle(raio: number): number {
  return (3.14*(raio**2));
}