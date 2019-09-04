let terms = [1, 3, 1, 5, 1];
let t = 0;

for (let i=0; i<terms.length; i++) {
    t = t + terms[i] * 1000;
    setTimeout(() => {
        console.log(terms[i]);
    }, t);
}
