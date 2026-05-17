const projects = [
    {
        id: "logistics-performance-analysis-app",
        title: "Logistics Performance Analysis App",
        roleBadges: ["Data Analytics", "KPI Automation", "Data Engineering"],
        tags: ["Streamlit", "Python", "Pandas", "REST APIs", "SAP/ERP"],
        problem: "Supply chain stakeholders relied on manual Excel pivot reports, making reporting slow, repetitive, and error-prone.",
        description: "API-driven Streamlit dashboard that replaced manual Excel pivot reporting and became a primary logistics monitoring tool for supply chain stakeholders.",
        details: [
            "Connected REST API, Excel, and SAP-exported data into a single repeatable reporting pipeline.",
            "Reduced manual reporting effort by ~90% through automated cleansing, validation, and KPI calculations.",
            "Designed stakeholder-friendly views for order-to-shipment performance and regional outlier detection.",
            "Packaged as a standalone executable — non-technical users run the tool without any setup.",
        ],
        impact: "~90% reduction in manual reporting effort · 6 stakeholders served · replaced Excel pivot workflow entirely",
        caseStudyId: "case-logistics-performance-analysis-app",
    },
    {
        id: "strawberry-harvest-yield-forecasting",
        title: "Strawberry Yield Forecasting",
        roleBadges: ["Machine Learning", "Data Science", "Forecasting"],
        tags: ["Python", "Pandas", "Scikit-learn", "Feature Engineering", "Regression"],
        problem: "Harvest planning needed a more data-driven way to estimate near-term yield from operational, sensor, and weather signals.",
        description: "End-to-end ML pipeline to forecast strawberry harvest yield using operational, sensor, and daily weather data — from feature engineering through model evaluation.",
        details: [
            "Prepared time-aware features from production, sensor, and weather signals with lag and rolling windows.",
            "Engineered weather-derived, lag, and rolling-window features to capture temporal patterns.",
            "Evaluated regression models (Linear, Ridge, Random Forest) using MAE and RMSE for practical comparison.",
            "Built a reusable foundation where future operational data can be added without rewriting the pipeline.",
        ],
        impact: "End-to-end ML pipeline · measurable MAE/RMSE comparisons · reusable for future planning experiments",
        caseStudyId: "case-strawberry-harvest-yield-forecasting",
    },
    {
        id: "material-depletion-forecast",
        title: "Material Depletion Forecasting",
        roleBadges: ["Data Analytics", "Supply Chain", "Forecasting"],
        tags: ["Python", "SQL", "Inventory Analytics", "Forecasting"],
        problem: "Planning teams had no automated way to see which materials were at risk of running out before replenishment arrived.",
        description: "Forecasting tool combining inventory, purchasing, and MRP data to estimate raw material depletion dates and support proactive procurement.",
        details: [
            "Merged inventory balances, open purchase orders, and MRP demand into a unified planning-ready dataset.",
            "Computed forward-looking depletion timelines to flag materials at risk before replenishment dates.",
            "Helped planning teams prioritize procurement follow-up with clearer timing signals and early warnings.",
        ],
        impact: "Proactive material risk visibility · reduced stock-out risk · planning teams gained earlier warning signals",
    },
    {
        id: "training-management-app",
        title: "Training Management & Analytics App",
        roleBadges: ["BI", "Data Engineering", "Automation"],
        tags: ["Power Apps", "Microsoft Fabric", "Power BI", "SharePoint"],
        problem: "Employee training assignment tracking was scattered across manual processes, making HR reporting and status visibility difficult.",
        description: "Power Apps low-code solution centralizing employee training assignments, backed by SharePoint data and feeding Power BI analytics.",
        details: [
            "Built a centralized training assignment tracker with clear owner-status workflow in Power Apps.",
            "Connected SharePoint backend to Power BI and Microsoft Fabric for reporting and analytics.",
            "Reduced manual HR coordination overhead by automating assignment notifications and completion tracking.",
        ],
        impact: "Eliminated manual assignment coordination · enabled real-time HR training visibility · integrated into Fabric reporting",
    },
];

export default projects;
