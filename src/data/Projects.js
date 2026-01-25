const projects = [
  {
    title: "Real-Time Fraud Detection System",
    description:
      "Built and deployed a real-time fraud detection API using FastAPI on AWS EC2, achieving 0.9458 ROC-AUC and reducing failed requests by 20% through optimized validation and inference pipelines. Designed for low-latency transaction evaluation using ensemble ML models.",
    stack: ["Python", "FastAPI", "AWS EC2", "Machine Learning", "XGBoost"],
    code: "https://github.com/SG7504/Fraud-Detection-System-with-AWS",
  },
  {
    title: "Dragon’s Vault Discord Bot",
    description:
      "Built an automation-focused Discord bot with role-based access control and ticketing workflows, reducing moderator workload by 50+ tasks per month. Implemented Flask-based admin endpoints and automated over 5,000 support queries and role assignments using the Discord API.",
    stack: ["Python", "Flask", "Discord API", "GitHub"],
    code: "https://github.com/SG7504/Discord-Bot-DV",
  },
  {
    title: "Speech-To-Text-Offline-Subtitle-Generator",
    description:
      "Implemented an offline SRT subtitle translation pipeline using machine learning models, preserving original timestamps and processing 200–300 lines per minute. Achieved over 85% translation accuracy and reduced multi-step manual effort by 60% without requiring internet connectivity.",
    stack: ["Python", "Machine Learning", "NLP", "Google Colab"],
    code: "https://github.com/SG7504/GFGKIIT-Wanderers-Hyperthon",
  },
    {
    title: "EEG-Based Dementia Classification System",
    description:
      "Developed an end-to-end EEG signal classification pipeline to distinguish between Healthy, Mild Cognitive Impairment (MCI), and Dementia patients. Trained and evaluated multiple models (XGBoost, LightGBM, Random Forest, SVM), achieving 94.0% accuracy and 0.94 F1-score using XGBoost, and deployed real-time inference through a FastAPI backend.",
    stack: [
      "Python",
      "Machine Learning",
      "Signal Processing",
      "FastAPI",
      "XGBoost",
      "LightGBM",
      "scikit-learn",
    ],
    code: "https://github.com/SG7504/EEG-Based-Dementia-Classification-System",
  },
];

export default projects;
