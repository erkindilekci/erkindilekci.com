const caseStudies = [
    {
        id: "case-logistics-performance-analysis-app",
        title: "Logistics Performance Analysis App",
        problem: "Supply chain stakeholders relied on manual Excel pivot reports to monitor order-to-shipment performance, which made reporting slow, repetitive, and harder to validate.",
        dataSources: [
            "REST API order and shipment data",
            "Excel workbooks used by operations teams",
            "SAP exports for reference and validation",
        ],
        approach: [
            "Built Python transformation steps for parsing, cleaning, joining, and validating source data.",
            "Created KPI calculations in Pandas and surfaced them in a Streamlit dashboard.",
            "Packaged the workflow so non-technical users could run the tool without manual setup.",
        ],
        tools: [
            "Python",
            "Pandas",
            "Streamlit",
            "REST APIs",
            "Excel",
            "SAP data",
        ],
        outcome: [
            "Replaced manual pivot-table reporting with a repeatable dashboard workflow.",
            "Automated roughly 90% of previous manual reporting work.",
            "Supported 6 stakeholders with clearer logistics performance monitoring.",
        ],
        architecture: [
            "API / Excel / SAP",
            "Python validation pipeline",
            "KPI model",
            "Streamlit dashboard",
        ],
    },
    {
        id: "case-strawberry-harvest-yield-forecasting",
        title: "Strawberry Harvest Yield Forecasting",
        problem: "Harvest planning needed a more data-driven way to estimate near-term yield using operational, sensor, and weather signals.",
        dataSources: [
            "Operational harvest records",
            "Sensor readings",
            "Weather and climate variables",
        ],
        approach: [
            "Cleaned and aligned time-based datasets for model-ready forecasting.",
            "Engineered lag, rolling-window, and weather-derived features.",
            "Evaluated regression models with MAE and RMSE to compare forecasting reliability.",
        ],
        tools: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Feature engineering",
            "Model evaluation",
        ],
        outcome: [
            "Created an end-to-end forecasting pipeline from raw inputs to model evaluation.",
            "Produced measurable model comparisons using business-readable error metrics.",
            "Built a reusable foundation for future yield planning experiments.",
        ],
        architecture: [
            "Operational + sensor + weather data",
            "Feature engineering",
            "Regression models",
            "Forecast evaluation",
        ],
    },
];

export default caseStudies;
