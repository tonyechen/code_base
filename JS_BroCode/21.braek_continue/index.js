// break = used to exit out of a loop
// continue = skips over an iteration of a loop

for(let i = 1; i <= 20; i++) {
    if(i == 13) {
        break;   
    }
    console.log(i);

}

for(let i = 1; i <= 20; i++) {
    if(i == 13) {
        continue;
    }
    console.log(i);
}