module.exports.getTopUpPrice = function (topUp, TOPUP_PLANS) {
    const topCount = Object.keys(topUp).length;
    let topUpPrice = 0;
    if (topCount != 0) {
        if (topUp.hasOwnProperty("FOUR_DEVICE")) {

            const months = topUp["FOUR_DEVICE"];
            const priceOfMonth = TOPUP_PLANS["FOUR_DEVICE"].price;
            topUpPrice = (priceOfMonth * months);

        } else {

            const months = topUp["TEN_DEVICE"];
            const priceOfMonth = TOPUP_PLANS["TEN_DEVICE"].price;
            topUpPrice = (priceOfMonth * months);

        }
    }

    return topUpPrice;
}