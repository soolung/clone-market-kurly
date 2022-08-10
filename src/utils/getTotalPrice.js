import {checkObjectIsEmpty} from "./checkObjectIsEmpty";

export const getTotalPrice = (user, products) => {
    let tempTotalPrice = {
        itemSum: 0,
        discountSum: 0,
        accumulationSum: 0,
        delivery: 0,
        totalPrice: 0,
    };

    let accumulationPercent = checkObjectIsEmpty(user) ? 0 : user.grade.accumulationPercent;

    for (let i of products) {
        if (i.product.isDiscount) {
            tempTotalPrice.itemSum += i.amount * i.product.priceBeforeDiscount;
            if (!checkObjectIsEmpty(user)) tempTotalPrice.discountSum += i.amount * (i.product.price - i.product.priceBeforeDiscount);
        } else {
            tempTotalPrice.itemSum += i.amount * i.product.price;
        }

        if (i.product.isAccumulate) tempTotalPrice.accumulationSum += i.product.price * i.amount;
    }

    if (tempTotalPrice.itemSum > 0 && tempTotalPrice.itemSum + tempTotalPrice.discountSum < 40000) tempTotalPrice.delivery = 3000;
    tempTotalPrice.totalPrice = tempTotalPrice.itemSum + tempTotalPrice.discountSum + tempTotalPrice.delivery
    tempTotalPrice.accumulationSum = Math.round(tempTotalPrice.accumulationSum * accumulationPercent);

    return tempTotalPrice;
}
