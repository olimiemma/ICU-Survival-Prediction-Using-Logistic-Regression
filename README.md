# ICU Survival Prediction Using Logistic Regression

This project analyzes ICU (Intensive Care Unit) patient data using **logistic regression** to predict **survival to hospital discharge** based on various patient characteristics. It demonstrates how statistical modeling can uncover important insights into healthcare outcomes and risk factors.

![Screenshot from 2025-03-23 20-16-08](https://github.com/user-attachments/assets/aa40db8c-3e1d-42ef-b983-63b17450e799)

---

## 🔍 Project Overview

We explore a real-world ICU dataset containing information on 200 adult patients. The project examines how factors such as **prior CPR**, **creatinine levels**, and **age** impact the probability of survival.

Key goals:
- Understand the relationship between individual predictors and survival.
- Fit logistic regression models using R.
- Interpret coefficients, probabilities, odds ratios, and statistical significance.
- Visualize findings for better communication and insight.
![Screenshot from 2025-03-23 17-26-25](https://github.com/user-attachments/assets/f4e31f20-5a62-4e28-9d48-3b00801cf281)

---

## 📁 Dataset

The dataset used comes from the `aplore3` R package and includes:
- 200 adult ICU patients
- Binary outcome: `sta` (Lived or Died)
- Predictors: `cpr`, `cre`, `age`, among others
- 

Source:
- Hosmer, D.W., Lemeshow, S., & Sturdivant, R.X. (2013). *Applied Logistic Regression* (3rd ed.)
- Lemeshow et al. (1988). *Predicting the outcome of intensive care unit patients*. JASA.

---

## 🧮 Methods

We used **simple logistic regression** models to explore the impact of each predictor on survival:

### Variables analyzed:
- **CPR (Prior CPR):** Whether CPR was administered before ICU admission
- **Creatinine Levels:** Elevated (>2.0 mg/dL) vs normal (<=2.0 mg/dL)
- **Age:** Patient age in years

For each variable, we:
- Calculated odds and survival probabilities
- Fit a logistic regression model using `glm()` in R
- Interpreted model coefficients and odds ratios
- Assessed statistical significance (p-values)

---

## 📊 Visualizations

- Bar chart comparing survival percentages for patients **with** and **without prior CPR**
- Interpretation of odds, probabilities, and real-world implications for patient care
![Screenshot from 2025-03-23 19-34-01](https://github.com/user-attachments/assets/5233d685-8fa4-42f1-add0-c65f52af47a7)

---![Screenshot from 2025-03-23 19-38-45](https://github.com/user-attachments/assets/4183fa67-b17c-48e0-abb2-eb58b5dc9fbb)


## 🧠 Key Insights

- **Prior CPR** was significantly associated with lower survival odds (OR ≈ 0.18)
- **Elevated creatinine** also predicted lower survival probability (OR ≈ 0.23)
- **Older age** decreased survival odds incrementally (~2.7% lower odds per year)

These findings align with clinical expectations and highlight the power of logistic regression in guiding medical decision-making.
![Screenshot from 2025-03-23 17-34-06](https://github.com/user-attachments/assets/b1745020-c52e-49bc-8f8a-46e2f90f53ec)
![Screenshot from 2025-03-23 17-34-46](https://github.com/user-attachments/assets/e558c257-c8f1-429c-a3d2-d8d05f97eefa)
![Screenshot from 2025-03-23 17-52-19](https://github.com/user-attachments/assets/6fed93ee-ce6a-43fe-9bcb-f328b7237d75)
![Screenshot from 2025-03-23 17-53-41](https://github.com/user-attachments/assets/2b2a90e7-f2f8-41d1-a3e2-04e0c8214135)

---

## 📌 How to Reproduce This Analysis

1. Install R and RStudio
2. Install required package:
```R
install.packages("aplore3")
```
3. Load the data and run analysis:
```R
library(aplore3)
data("icu")
# Follow along with the model fitting, summary, and visualization code provided
```

---

## ✍️ Author

**Emmanuel Olimi**  
Data Scientist |Entreprenuer| Storyteller  
Connect: [https://linktr.ee/olimiemma](https://linktr.ee/olimiemma)

---

## 📚 References

- Hosmer, D.W., Lemeshow, S., & Sturdivant, R.X. (2013). *Applied Logistic Regression* (3rd ed.). Wiley.
- Lemeshow, S., et al. (1988). *Predicting the outcome of intensive care unit patients*. Journal of the American Statistical Association, 83(402), 348–356. [Read here](https://www.tandfonline.com/doi/abs/10.1080/01621459.1988.10478604)

---

## 📎 License: MIT

This project is intended for educational and research purposes. Always cite the original data source when using or adapting this analysis.

