const projects = [
    {
        id: "strawberry-harvest-yield-forecasting",
        title: "Strawberry Harvest Yield Forecasting",
        tags: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "Forecasting",
            "Feature Engineering",
        ],
        description: "Built an end-to-end machine learning pipeline to forecast strawberry harvest yield using operational, sensor, and weather data. Engineered lag, rolling-window, and weather-based features, then evaluated regression models using MAE and RMSE.",
        details: [
            "Prepared time-aware features from production, sensor, and weather signals.",
            "Compared regression models with MAE and RMSE to select practical forecasting baselines.",
            "Structured the workflow so future operational data can be added without rewriting the pipeline.",
        ],
        caseStudyId: "case-strawberry-harvest-yield-forecasting",
    },
    {
        id: "logistics-performance-analysis-app",
        title: "Logistics Performance Analysis App",
        tags: [
            "Streamlit",
            "Python",
            "Pandas",
            "REST APIs",
            "KPI Dashboard",
        ],
        description: "Built an API-driven Streamlit dashboard that replaced manual Excel pivot reporting and became a primary logistics monitoring tool for supply chain stakeholders.",
        details: [
            "Connected API, Excel, and SAP-exported data into a repeatable reporting pipeline.",
            "Reduced manual reporting effort by automating cleansing, validation, and KPI calculations.",
            "Designed stakeholder-friendly views for order-to-shipment monitoring.",
        ],
        caseStudyId: "case-logistics-performance-analysis-app",
    },
    {
        id: "material-depletion-forecast",
        title: "Material Depletion Forecast",
        tags: [
            "Python",
            "SQL",
            "Inventory Analytics",
            "Forecasting",
        ],
        description: "Developed a forecasting tool combining inventory, purchasing, and MRP data to estimate raw material depletion dates and support proactive procurement decisions.",
        details: [
            "Merged inventory balances, purchase orders, and MRP demand into a planning-ready dataset.",
            "Flagged materials at risk of depletion before replenishment dates.",
            "Helped planning teams prioritize procurement follow-up with clearer timing signals.",
        ],
    },
    {
        id: "training-management-app",
        title: "Training Management App",
        tags: [
            "Power Apps",
            "Microsoft Fabric",
            "Power BI",
            "Workflow Automation",
        ],
        description: "Built a Power Apps solution that centralized employee training assignments and reduced manual HR coordination.",
        details: [
            "Centralized training assignment tracking in a low-code application.",
            "Supported reporting initiatives across Microsoft Fabric and Power BI.",
            "Reduced manual coordination by creating a clearer owner-status workflow.",
        ],
    },
];

export default projects;
