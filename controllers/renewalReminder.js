const moment = require("moment");

module.exports.getRenewalReminderOfCategory = function (category, plan, startSubscriptionDate) {
    const price = category[plan].price;
    const month = category[plan].month;
    const renewalDate = moment(startSubscriptionDate, "DD-MM-YYYY").add(month, "months").subtract(10, "days").format("DD-MM-YYYY");
    return {
        renewalDate: renewalDate,
        price: price
    };

}