let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "raccon"];
let extensiones = [".com", ".net", ".es", ".io"];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensiones) {
      console.log(p + a + n + ext);
      }
    }
  }
}


