const assert = require("assert");
const renewalReminder = require("../controllers/renewalReminder");
const getTopUpPrice = require("../controllers/getTopUpPrice");
const category = require("../models/categoryPlans");
const topUpCategory = require("../models/topUpPlans"); 


describe("The renewal reminder and getTopUp function", function () {

  describe("renewal reminder function", function(){
    it("Should print the correct renewal Date ", function () {
      let MUSIC_PLANS = category.MUSIC_PLANS;
      let plan = "PERSONAL";
      let date = "05-02-2022";
      let renewalDate = "23-02-2022"
      let result = renewalReminder.getRenewalReminderOfCategory(MUSIC_PLANS, plan, date);
      assert(result, renewalDate);
    });

    it("Should print the correct renewal Date ", function () {
      let VIDEO_PLANS = category.VIDEO_PLANS;
      let plan = "PREMIUM";
      let date = "05-02-2022";
      let renewalDate = "25-04-2022"
      let result = renewalReminder.getRenewalReminderOfCategory(VIDEO_PLANS, plan, date);
      assert(result, renewalDate);
    });
    
    it("Should print the correct renewal Date ", function () {
      let PODCAST_PLANS = category.PODCAST_PLANS;
      let plan = "FREE";
      let date = "05-02-2022";
      let renewalDate = "23-02-2022"
      let result = renewalReminder.getRenewalReminderOfCategory(PODCAST_PLANS, plan, date);
      assert(result, renewalDate);
    });
  })

  describe("getTopUp function", function(){
    it("Should return correct topUp price", function () {
      let topUp = { FOUR_DEVICE: 2 };
      let TOPUP_PLANS = topUpCategory;
      let topUpPrice = 100;
      let result = getTopUpPrice.getTopUpPrice(topUp, TOPUP_PLANS)
      assert(result, topUpPrice);
    });

    it("Should return correct topUp price", function () {
      let topUp = { TEN_DEVICE: 5 };
      let TOPUP_PLANS = topUpCategory;
      let topUpPrice = 500;
      let result = getTopUpPrice.getTopUpPrice(topUp, TOPUP_PLANS)
      assert(result, topUpPrice);
    });

    it("Should return correct topUp price", function () {
      let topUp = { TEN_DEVICE: 15 };
      let TOPUP_PLANS = topUpCategory;
      let topUpPrice = 1500;
      let result = getTopUpPrice.getTopUpPrice(topUp, TOPUP_PLANS)
      assert(result, topUpPrice);
    });
  });
});

