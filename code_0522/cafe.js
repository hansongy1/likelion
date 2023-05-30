const menu = {
    americano: {
        name:"아메리카노",
        price:3000
    },
    chocolateCreamCake: {
        name:"초코 크림 케이크",
        price:4400
    },
    latte: {
        name:"카페라떼",
        price:4000
    },
    milkCake: {
        name:"우유케이크",
        price:3500
    },
    vanillaLatte: {
        name:"바닐라 라떼",
        price:4500
    },
    mintChocolate: {
        name:"민트 초콜릿",
        price:4600
    }
}

console.log(menu.americano.name, menu.americano.price);
// console.log(typeof menu.americano.name);
// console.log(typeof menu.americano.price);

orderMenu = window.prompt("메뉴 알려줘: ")
if (orderMenu == "아메리카노") {
    console.log(menu.americano.name, menu.americano.price);    
}
else if (orderMenu == "초코 크림 케이크") {
    console.log(menu.chocolateCreamCake.name, menu.chocolateCreamCake.price);
}
else if (orderMenu == "카페라떼") {
    console.log(menu.latte.name, menu.latte.price);
}
else if (orderMenu == "우유케이크") {
    console.log(menu.milkCake.name, menu.milkCake.price);
}
else if (orderMenu == "바닐라 라떼") {
    console.log(menu.vanillaLatte.name, menu.vanillaLatte.price);
}
else if (orderMenu == "민트 초콜릿") {
    console.log(menu.mintChocolate.name, menu.mintChocolate.price);
}
else {
    console.log(`${orderMenu}은 판매하지 않습니다.`);
}