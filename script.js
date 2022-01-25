/* /* const myPromise = new Promise((resolve, reject) => { 
                   window.setTimeout(() => { 
                            resolve(console.log(‘Resolvida’));
                   }, 2000);
});

await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));
// após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"


async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => { 
        window.setTimeout(() => { 
                resolve(‘Resolvida’);
        }, 3000);
    });

    const resolved = await myPromise // await vai fazer com que o código pare, seja resolvido estas questões para depois voltar a ser executado
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
            .catch((err) => console.log(err.message));

    return resolved;
}
 */

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => { 
        window.setTimeout(() => { 
                resolve(‘Resolvida’);
        }, 3000);
    });

    let result;

    try{
        resolved = await myPromise // await vai fazer com que o código pare, seja resolvido estas questões para depois voltar a ser executado
                .then((result) => result + ' passando pelo then')
                .then((result) => result + ' e agora acabou!')
    }catch(err){
        result = err.message;
    }
    return resolved;
}
