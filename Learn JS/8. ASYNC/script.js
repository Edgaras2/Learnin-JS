// const first = () => {
//     console.log("Yo it works ");
//     second();
//     console.log("End");
// }
// const second = () => {

//     setTimeout(() => {
//         console.log("Second  ASYNC");
        
//     }, 2000);
// }
// first();


    const getIds = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([255,333,123]);
        },1500) ;
    });

    const getRecipe = recId => {
        return new Promise((resolve, reject) => {
            setTimeout((ID) => {
                const recipe = {title: "baba", publisher: "zaza"};
                resolve(`${ID}: ${recipe.title}`);
                
            }, 1500, recId);
        });
    };

    const getRalated = publisher => {
        return new Promise((resolve, reject) => {
            setTimeout((pub) => {
                const recipe2 = {title:"recipe 2", publisher: "me"};
                resolve(`${pub}: ${recipe2.title}`)
            }, 1500, publisher);
        });
    };
                                //promises

    // getIds
    // .then(Ids => {
    //     console.log(Ids);
    //     return getRecipe(Ids[1]);
    // })
    // .then(recip => {
    //     console.log(recip);
    //     return getRalated("me");
    // })
    // .then(test => {
    //     console.log(test);
    // })
    // .catch(error => {
    //     console.log(error);
    // });


                                    //ASYNC

    async function getRecepesAW() {
        const test = await getIds;
        console.log(test);
        const recipe = await getRecipe(test[1]);
        console.log(recipe);
        const related = await getRalated("me");
        console.log(related);

        return  recipe;

    }
    getRecepesAW().then(rezult =>{
        console.log("After returning Promise " +rezult);
    });
  
