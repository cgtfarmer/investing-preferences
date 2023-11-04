// Basic
const safeRiskyInput = document.querySelector('#safe-risky');
const growthIncomeInput = document.querySelector('#growth-income');
const safeRiskyDisplay = document.querySelector('#safe-risky-display');
const growthIncomeDisplay = document.querySelector('#growth-income-display');

const safeDisplay = document.querySelector('#safe-display');
const riskyDisplay = document.querySelector('#risky-display');
const growthDisplay = document.querySelector('#growth-display');
const incomeDisplay = document.querySelector('#income-display');

// Advanced
const growthIncomeInputAdv = document.querySelector('#growth-income-adv');
const growthSafeRiskyInputAdv = document.querySelector('#growth-safe-risky-adv');
const incomeSafeRiskyInputAdv = document.querySelector('#income-safe-risky-adv');
const growthIncomeDisplayAdv = document.querySelector('#growth-income-display-adv');
const growthSafeRiskyDisplayAdv = document.querySelector('#growth-safe-risky-display-adv');
const incomeSafeRiskyDisplayAdv = document.querySelector('#income-safe-risky-display-adv');

const growthDisplayAdv = document.querySelector('#growth-display-adv');
const incomeDisplayAdv = document.querySelector('#income-display-adv');
const growthSafeDisplayAdv = document.querySelector('#growth-safe-display-adv');
const growthRiskyDisplayAdv = document.querySelector('#growth-risky-display-adv');
const incomeSafeDisplayAdv = document.querySelector('#income-safe-display-adv');
const incomeRiskyDisplayAdv = document.querySelector('#income-risky-display-adv');

// Results
const safeGrowthUI = document.querySelector('#safe-growth');
const riskyGrowthUI = document.querySelector('#risky-growth');
const safeIncomeUI = document.querySelector('#safe-income');
const riskyIncomeUI = document.querySelector('#risky-income');

let safe = null;
let risky = null;
let growth = null;
let income = null;

let growthAdv = null;
let incomeAdv = null;
let growthSafeAdv = null;
let growthRiskyAdv = null;
let incomeSafeAdv = null;
let incomeRiskyAdv = null;

function calculateAdv() {
  console.log('[Calculate Advanced]');
  growthIncomeDisplayAdv.innerHTML = growthIncomeInputAdv.value;

  incomeAdv = parseInt(growthIncomeInputAdv.value);
  growthAdv = 100 - incomeAdv;

  growthDisplayAdv.innerHTML = growthAdv;
  incomeDisplayAdv.innerHTML = incomeAdv;

  growthSafeRiskyDisplayAdv.innerHTML = growthSafeRiskyInputAdv.value;
  growthRiskyAdv = parseInt(growthSafeRiskyInputAdv.value);
  growthSafeAdv = (100 - growthRiskyAdv);

  growthSafeDisplayAdv.innerHTML = growthSafeAdv;
  growthRiskyDisplayAdv.innerHTML = growthRiskyAdv;

  incomeSafeRiskyDisplayAdv.innerHTML = incomeSafeRiskyInputAdv.value;
  incomeRiskyAdv = parseInt(incomeSafeRiskyInputAdv.value);
  incomeSafeAdv = (100 - incomeRiskyAdv);

  incomeSafeDisplayAdv.innerHTML = incomeSafeAdv;
  incomeRiskyDisplayAdv.innerHTML = incomeRiskyAdv;

  safeGrowthUI.innerHTML = round(((growthSafeAdv / 100) * (growthAdv / 100)) * 100);
  riskyGrowthUI.innerHTML = round(((growthRiskyAdv / 100) * (growthAdv / 100)) * 100);
  safeIncomeUI.innerHTML = round(((incomeSafeAdv / 100) * (incomeAdv / 100)) * 100);
  riskyIncomeUI.innerHTML = round(((incomeRiskyAdv / 100) * (incomeAdv / 100)) * 100);
}

function calculate() {
  console.log('[Calculate]');
  safeRiskyDisplay.innerHTML = safeRiskyInput.value;
  growthIncomeDisplay.innerHTML = growthIncomeInput.value;

  risky = parseInt(safeRiskyInput.value);
  safe = (100 - risky);
  riskyDisplay.innerHTML = risky;
  safeDisplay.innerHTML = safe;

  income = parseInt(growthIncomeInput.value);
  growth = 100 - income;
  growthDisplay.innerHTML = growth;
  incomeDisplay.innerHTML = income;

  safeGrowthUI.innerHTML = round(((safe / 100) * (growth / 100)) * 100);
  riskyGrowthUI.innerHTML = round(((risky / 100) * (growth / 100)) * 100);
  safeIncomeUI.innerHTML = round(((safe / 100) * (income / 100)) * 100);
  riskyIncomeUI.innerHTML = round(((risky / 100) * (income / 100)) * 100);
}

function round(x) {
  return Math.round(x * 1) / 1;
}

// main();
