'use client';
import { useState } from "react";

export default function RecruiterMarginCalc() {
  const [grossIncome, setGrossIncome] = useState(1907.33);
  const [hoursPerWeek, setHoursPerWeek] = useState(35);
  const [housing, setHousing] = useState(910);
  const [meals, setMeals] = useState(430);

  const originalStipends = housing + meals;
  const maxNonTaxable = grossIncome - 20 * hoursPerWeek;
  const scale = originalStipends > 0 ? Math.min(1, maxNonTaxable / originalStipends) : 0;

  const adjustedHousing = parseFloat((housing * scale).toFixed(2));
  const adjustedMeals = parseFloat((meals * scale).toFixed(2));
  const adjustedTaxableHourly = parseFloat(
    ((grossIncome - adjustedHousing - adjustedMeals) / hoursPerWeek).toFixed(2)
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Recruiter Margin Calculator</h2>

        <div style={{ marginTop: "1rem" }}>
          <label>Gross Weekly Income</label>
          <input
            type="number"
            value={grossIncome}
            onChange={(e) => setGrossIncome(parseFloat(e.target.value))}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Hours per Week</label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Original Housing (GSA)</label>
          <input
            type="number"
            value={housing}
            onChange={(e) => setHousing(parseFloat(e.target.value))}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Original Meals (GSA)</label>
          <input
            type="number"
            value={meals}
            onChange={(e) => setMeals(parseFloat(e.target.value))}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
      </div>

      <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "600" }}>Results</h3>
        <div>Adjusted Housing: ${adjustedHousing}</div>
        <div>Adjusted Meals: ${adjustedMeals}</div>
        <div style={{ fontWeight: "bold" }}>
          Adjusted Taxable Hourly: ${adjustedTaxableHourly}
        </div>
      </div>
    </div>
  );
}
