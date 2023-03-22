let counter = 0;

let usernames = [`cameron_winner`, `josh`, `andrew`, `clayton`, `jared`];


while(counter < usernames.length){
    
    let upper_user_name = usernames[counter].toLowerCase();

    let user_contains_winner = upper_user_name.includes(`_winner`);

    if(user_contains_winner === true){

        console.log(`we have a winner: ${usernames[counter]}`);
    }


counter = counter +1;
}


function do_math(){

    console.log(`did you know that 2+2 is 4?`);
}

do_math();