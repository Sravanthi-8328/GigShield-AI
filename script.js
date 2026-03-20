const incomeRange = document.getElementById("incomeRange");
const riskBand = document.getElementById("riskBand");
const coverLevel = document.getElementById("coverLevel");
const incomeValue = document.getElementById("incomeValue");
const premiumValue = document.getElementById("premiumValue");
const payoutValue = document.getElementById("payoutValue");
const protectionValue = document.getElementById("protectionValue");
const planChip = document.getElementById("planChip");

function formatInr(value) {
  return `INR ${Math.round(value).toLocaleString("en-IN")}`;
}

function updatePricing() {
  const weeklyIncome = Number(incomeRange.value);
  const riskRate = Number(riskBand.value);
  const coverRatio = Number(coverLevel.value);
  const weeklyPremium = Math.max(49, weeklyIncome * riskRate + 18);
  const maxPayout = weeklyIncome * coverRatio;
  const protectionValueAmount = Math.max(0, maxPayout - weeklyPremium);

  let planText = "Essential Plan Recommended";
  if (coverRatio >= 0.4) {
    planText = "Strong Plan Recommended";
  } else if (coverRatio >= 0.35) {
    planText = "Balanced Plan Recommended";
  }

  incomeValue.textContent = formatInr(weeklyIncome);
  premiumValue.textContent = formatInr(weeklyPremium);
  payoutValue.textContent = formatInr(maxPayout);
  protectionValue.textContent = formatInr(protectionValueAmount);
  planChip.textContent = planText;
}

incomeRange.addEventListener("input", updatePricing);
riskBand.addEventListener("change", updatePricing);
coverLevel.addEventListener("change", updatePricing);
updatePricing();

const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
  revealObserver.observe(item);
});
