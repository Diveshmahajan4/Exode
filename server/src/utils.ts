const MAX_LENGTH = 5;

export function generate(){
    let ans = "";
    const subset = "abcdefghijklmnopqrstuvwxyz1234567890";
    for(let i = 0; i < MAX_LENGTH; i++){
        ans += subset[Math.floor(Math.random() * subset.length)];
    }

    return ans;
}