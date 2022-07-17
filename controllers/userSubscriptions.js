// date manipulation library
const moment = require("moment");
const renewalDetails = require("./renewalDetails");


// starting date of subscriptions
let startSubscriptionDate;
// store the user subscriptions and there plan
const subscription = {};
// store the top up plan
const topUp = {};

const EMPTY = 0;

module.exports.userSubscriptions = function (inputLines){
    let date;
    for (let singleLine of inputLines) {

        singleLine = singleLine.split(" ");
        const command = singleLine[0];

        if (command === "START_SUBSCRIPTION") {

            date = singleLine[1];
            // start subcription from this date.
            startSubscription(date);

        } else if (command === "ADD_SUBSCRIPTION") {

            if (!isDateValid(date)) {
                console.log("ADD_SUBSCRIPTION_FAILED INVALID_DATE");
                continue;
            }
            const subscriptionCategory = singleLine[1];
            const categoryPlan = singleLine[2];
            // add subcription to the subcription object.
            addSubscription(subscriptionCategory, categoryPlan);

        } else if (command === "ADD_TOPUP") {

            if (!isDateValid(date)) {
                console.log("ADD_TOPUP_FAILED INVALID_DATE");
                continue;
            }
            // topUpPlan -> FOUR_DEVICE or TEN_DEVICE
            const topUpPlan = singleLine[1];
            // validity of the topup plan
            const months = singleLine[2];
            // add topup
            addTopUp(topUpPlan, months);

        } else {

            const subscriptionCount = Object.keys(subscription).length;
            // if user have subscription then print the renewal details.
            subscriptionCount === EMPTY ? console.log("SUBSCRIPTIONS_NOT_FOUND") : renewalDetails.printRenewalDetails(startSubscriptionDate, subscription, topUp);
 
        }
    }
}

function isDateValid(date){
    return moment(date, "DD-MM-YYYY").isValid();
}

function startSubscription(date){
    if (isDateValid(date)) {
        startSubscriptionDate = date;
    } else {
        console.log("INVALID_DATE");
    }
}

function addSubscription(subscriptionCategory, categoryPlan){
    // checking this subscription category already present
    if (!subscription.hasOwnProperty(subscriptionCategory)) {
        subscription[subscriptionCategory] = categoryPlan;
    } else {
        console.log("ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY");
    }
}

function addTopUp(topUpPlan, months){
    // to add topup user should have atleast one subscription.
    const subscriptionCount = Object.keys(subscription).length;
    if (subscriptionCount === EMPTY) {
        console.log("ADD_TOPUP_FAILED SUBSCRIPTIONS_NOT_FOUND");
    } else {
        // user should add top up only if user not have top up plan before.
        const topCount = Object.keys(topUp).length;
        if (topCount === EMPTY) {
            topUp[topUpPlan] = months;
        } else {
            console.log("ADD_TOPUP_FAILED DUPLICATE_TOPUP");
        }

    }
}