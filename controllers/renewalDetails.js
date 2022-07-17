const categoryPlans = require("../models/categoryPlans");
const topUpPlans = require("../models/topUpPlans");
const getTopUpPrice = require("./getTopUpPrice");
const renewalReminder = require("./renewalReminder");

// all details about music category
let MUSIC_PLANS = categoryPlans.MUSIC_PLANS;
// all details about video category
let VIDEO_PLANS = categoryPlans.VIDEO_PLANS;
// all details about podcast category
let PODCAST_PLANS = categoryPlans.PODCAST_PLANS;
// all details about top up
let TOPUP_PLANS = topUpPlans;
//price of subcriptions and topup.
let totalAmount = 0;

module.exports.printRenewalDetails = function (startSubscriptionDate, subscription, topUp) {
    
    for (let category in subscription) {

        if (category === "MUSIC") {

            const plan = subscription[category];
            const renewalDateAndPrice = renewalReminder.getRenewalReminderOfCategory(MUSIC_PLANS, plan, startSubscriptionDate);
            totalAmount += renewalDateAndPrice.price;
            console.log(`RENEWAL_REMINDER MUSIC ${renewalDateAndPrice.renewalDate}`);

        } else if (category === "VIDEO") {

            const plan = subscription[category];
            const renewalDateAndPrice = renewalReminder.getRenewalReminderOfCategory(VIDEO_PLANS, plan, startSubscriptionDate);
            totalAmount += renewalDateAndPrice.price;
            console.log(`RENEWAL_REMINDER VIDEO ${renewalDateAndPrice.renewalDate}`);

        } else {

            const plan = subscription[category];
            const renewalDateAndPrice = renewalReminder.getRenewalReminderOfCategory(PODCAST_PLANS, plan, startSubscriptionDate);
            totalAmount += renewalDateAndPrice.price;
            console.log(`RENEWAL_REMINDER PODCAST ${renewalDateAndPrice.renewalDate}`);

        }

    }

    const topUpPrice = getTopUpPrice.getTopUpPrice(topUp, TOPUP_PLANS);
    totalAmount += topUpPrice;
    console.log(`RENEWAL_AMOUNT ${totalAmount}`);

}

