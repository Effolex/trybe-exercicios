let bruto = 3000;
let liquido = 0;
let final = 0;

if(bruto <= 1556.94){
  liquido = bruto - (bruto*0.08);
}else if(bruto <= 2594.92){
  liquido = bruto - (bruto*0.09);
}else if(bruto <= 5189.82){
  liquido = bruto - (bruto*0.11)
} else{
  liquido = bruto - (570.88)
}

if(liquido <= 1903.98){
  final = liquido;
}else if(liquido <= 2826.65){
  final = liquido - ((liquido*0.075) - 142.80);
} else if(liquido <= 3751.05){
  final = liquido - ((liquido*0.15) - 354.80);
} else if(liquido <= 4664.68){
  final = liquido - ((liquido*0.225) - 636.13);
} else{
  final = liquido - ((liquido*0.275) - 869.36);
}

console.log(final);
