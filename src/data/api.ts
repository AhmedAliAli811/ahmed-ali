import p11 from "@/images/Project1/Inventory_Dashboard.png";
import p12 from "@/images/Project1/Sales_Dashboard.png";
import p13 from "@/images/Project1/SSRS_Report.png";

import p21 from "@/images/project4/report.png";


import p31 from "@/images/Project3/home.png";
import p32 from "@/images/Project3/movies.png";
import p33 from "@/images/Project3/cast.png";
import p34 from "@/images/Project3/schema.png";

import P41 from "@/images/Project2/Home.png";
import P42 from "@/images/Project2/Actions.png";
import P43 from "@/images/Project2/Details.png";

import p5 from "@/images/project5/dashboard.png";

import linkedin from "@/images/icons/icons8-linkedin-logo-48.png";
import github from "@/images/icons/icons8-github-logo-94.png";
import mail from "@/images/icons/icons8-mail-50.png";

import dataanalytics from "@/images/icons/icons8-data-analytics-53.png";
import powerbi from "@/images/icons/icons8-power-bi-2021-48.png";
import sql from "@/images/icons/icons8-sql-server-48.png";
import mysql from "@/images/icons/icons8-mysql-48.png";
import postgresql from "@/images/icons/icons8-postgresql-100.png";
import ssrs from "@/images/icons/ssrs.png";
import python from "@/images/icons/icons8-python-48.png";
import excel from "@/images/icons/icons8-excel-48.png";
import pandas from "@/images/icons/icons8-pandas-48.png";
import numpy from "@/images/icons/icons8-numpy-48.png";
import tensorflow from "@/images/icons/icons8-tensorflow-48.png";
import pytorch from "@/images/icons/icons8-pytorch-48.png";
import matplot from "@/images/icons/Matplotlib.png";
import seaborn from "@/images/icons/seaborn-icon_.png";
import plotly from "@/images/icons/plotly_.png";
import looker from "@/images/icons/icons8-google-looker-48.png";
import whatsapp from "@/images/icons/icons8-whatsapp-logo-94.png";

    const api = {
        hero: {
            title: "Hi, I'm ",
            name:"Ahmed Ali Ali",
            description:
                "A Fresh BI Engineer and Data Analyst with a knack for building insights.",
            social: [
                {
                    link: "https://github.com/AhmedAliAli811",
                    img: github,
                    title:'Github'
                },
                {
                    link: "https://www.linkedin.com/in/ahmedalialy/",
                    img: linkedin,
                    title:"Linkedin"
                },
                {
                    link: "mailto:aly869556@gmail.com",
                    img: mail,
                    title:"Mail"
                },
                {
                    link: "https://wa.me/+201142092491", // Replace with your number in the format: countrycode+number
                    img: whatsapp,
                    title:"WhatsApp"
                },
            ],
            cv: {
                title: "View My CV",
                link: "https://drive.google.com/file/d/1GYh16cKKJHiHcvC6rXbrFEC6gqGUG1n0/view?usp=sharing",
            },
        },
    projects: {
        title: "Projects",
        items: [
            {
                title: "E-commerce Sales and Inventory Management Dashboard",
                description:
                    "The Sales and Inventory Management Dashboard is designed to provide business owners and decision-makers with insightful analytics related to sales performance and inventory levels. By leveraging Power BI's robust data visualization capabilities, the dashboard enables users to make informed decisions that enhance operational efficiency and profitability.",
                imgs: [p11, p12, p13],
                features: {
                    title: "Key Features",
                    items: [
                        "Inventory Analysis: ABC, VED, and HML categorizations for strategic inventory planning.",
                        "Inventory Analysis: ABC, VED, and HML categorizations for strategic inventory planning.",
                        "SSRS Reporting: Additional inventory insights through comprehensive reports.",
                    ],
                },
                tools: {
                    title: "Tools used",
                    items: [
                        {tool: "Power Bi", img: powerbi},
                        {tool: "SQL Server", img: sql},
                        {tool: "SSRS", img: ssrs},
                    ],
                },
                gitUrl: "https://github.com/AhmedAliAli811/E-Commerce-Analysis",
            },
            {
                title: "Customer Segmentation and Sales Analysis",
                description:
                    "This project involved using SQL to perform customer segmentation and sales analysis for an online retail dataset. It included calculating monthly sales growth, analyzing product sales trends, evaluating sales volume by country, and computing the monthly churn rate. The primary focus was on segmenting customers based on their purchasing behaviors, including recency, frequency, and monetary value (RFM) scores. Using advanced SQL queries, I categorized customers into segments like \"Champions,\" \"Loyal Customers,\" and \"At Risk\" to inform targeted marketing strategies and improve customer retention.",
                imgs: [p21],
                features: {
                    title: "Key Features",
                    items: [
                        "Monthly Sales Growth Analysis: Calculated and visualized the monthly sales growth for overall sales and for each individual product, using the LAG window function to compare sales data month over month.",
                        "Sales Volume by Country: Analyzed total sales and sales volume percentages across different countries, helping identify regions with the highest sales contributions.",
                        "Monthly Churn Rate Calculation: Computed the churn rate for each month based on customer activity and segment classification, identifying trends in customer retention and attrition.",
                        "Customer Segmentation (RFM Model): Segmented customers into categories (e.g., Champions, Loyal Customers, At Risk) based on their recency, frequency, and monetary values. This was achieved by calculating each customer’s activity score and matching them to predefined segment groups.",
                    ],
                },
                tools: {
                    title: "Tools used",
                    items: [{tool: "SQL Server", img: sql}, {tool: "SSRS", img: ssrs}],
                },
                gitUrl: "https://github.com/AhmedAliAli811/Customer-Segmentation-/tree/main",
            },
            {
                title: "Movie Industry Analysis",
                description:
                    "The TMDB Data Analysis project leverages the TMDB movie database to analyze various aspects of film performance, focusing on profitability, crew and cast roles, and viewer ratings. The primary goal is to gain deeper insights into movie success factors by integrating, cleaning, and enriching the data, and then analyzing it through a Power BI dashboard.",
                imgs: [p31, p32, p33, p34],
                features: {
                    title: "Key Features",
                    items: [
                        "Box Office Analysis: Visualizations of revenue trends across years, genres, and regions.",
                        "Genre Popularity: Insights into trending genres over time.",
                        "Revenue Breakdown: Comparison of production budgets versus box office returns.",
                    ],
                },
                tools: {
                    title: "Tools used",
                    items: [
                        {tool: "Power Bi", img: powerbi},
                        {tool: "SQL Server", img: sql},
                        {tool: "Python", img: python},
                    ],
                },
                gitUrl: "https://github.com/AhmedAliAli811/Movie-Analysis-Depi-GP",
            },
            {
                title: "HR Dashboard",
                description:
                    "This project showcases an HR Analytics Dashboard created using Power BI to visualize important HR metrics such as employee demographics, promotion and layoff statuses, job levels, job satisfaction, and more. The goal was to help HR teams make data-driven decisions with ease by leveraging interactive and visually appealing data insights.",
                imgs: [P41, P42, P43],
                features: {
                    title: "Key Features",
                    items: [
                        "Track promotion readiness and layoff trends.",
                        "Analyze employee job satisfaction and service years.",
                        "Improve HR decision-making and policy adjustments.",
                    ],
                },
                tools: {
                    title: "Tools used",
                    items: [{tool: "Power Bi", img: powerbi}],
                },
                gitUrl: "https://github.com/AhmedAliAli811/HR_PowerBI_Dashboard",
            },
            {
                "title": "Applying some principles of the book \"Storytelling with Data\" to the price of gold and the exchange rate in Egypt",
                "description": "This project is an exploration of the relationship between gold prices and exchange rates for USD and EUR against the Egyptian Pound, using principles from the book *Storytelling with Data* to craft clear and insightful visualizations. I retrieved real-time gold price data through web scraping and sourced exchange rates from the Central Bank of Egypt. The primary goal is to applying key concepts from *Storytelling with Data*, such as context, clarity, and simplicity, I demonstrate how to present data in a way that is both informative and accessible.",
                "imgs": [p5],
                "features": {
                    "title": "Key Features",
                    "items": [
                        "Web Scraping for Real-Time Data: I used web scraping techniques to fetch up-to-date gold price data, ensuring the analysis reflects the most current market conditions.",
                        "Exchange Rates Integration: I collected USD and EUR exchange rates from the Central Bank of Egypt and integrated them with gold price data to analyze trends and correlations between currency values and gold prices.",
                        "Standardization for Comparison: Since gold prices and exchange rates have different scales, I performed standardization on the prices to ensure a fair comparison. This allows for meaningful insights when comparing the relative movements of gold prices and currencies.",
                        "Data Transformation with Power Query: In Power Query, I cleaned and transformed the data to ensure consistency and accuracy, preparing it for further analysis.",
                        "Storytelling through Visualizations: Following the *Storytelling with Data* philosophy, I created simple and clear visualizations to highlight key insights, focusing on clarity and minimizing clutter.",
                        "Data at a Glance: I designed the visualizations to provide a clear and concise overview of the current exchange rates for the US dollar, Euro, and 24-karat gold against the Egyptian Pound, with the date (05/12/2024) prominently displayed, making it easy for users to understand the current values at a glance.",
                        "Clear Labeling: The chart includes concise titles, such as the date and currency names, as well as the overall title 'مؤشر الدولار واليورو والذهب عيار 24 بالنسبة للجنيه المصري' (Index of Dollar, Euro, and 24-karat Gold against the Egyptian Pound), ensuring that the audience can easily grasp the content and purpose of the visualization."
                    ]
                },
                "tools": {
                    "title": "Tools Used",
                    "items": [
                        {"tool": "Power BI", "img": powerbi},
                    ]
                },
                "gitUrl": "https://github.com/AhmedAliAli811/Egypt-Gold-Price-and-Exchange-Rate",
            }
            ,
        ],
    },
    experiance: {
        title: "Experience",
        items: [
            {
                role: "Bachelor of Computer Science",
                date: "9/2020 - 5/2024",
                company:
                    "Faculty of Computers and Artificial Intelligence - Cairo University",
                city: "Cairo-Egypt",
            },
            {
                role: "BI Internship",
                date: "4/2024 - 10/2024",
                company: "Digital Egypt Pioneers Initiative (DEPI)",
                city: "Cairo-Egypt",
            },
        ],
    },
    skills: {
        title: "Skills & Tools",
        items: [
            {skill: "Python", img: python},
            {skill: "SQL Server", img: sql},
            {skill: "Power Bi", img: powerbi},
            {skill: "Excel", img: excel},
            {skill: "Data Analytics", img: dataanalytics},
            {skill: "SSRS", img: ssrs},
            {skill: "Github", img: github},
            {skill: "MySQL", img: mysql},
            {skill: "PostgreSQL", img: postgresql},
            {skill: "Pandas", img: pandas},
            {skill: "NumPy", img: numpy},
            {skill: "Matplotlib", img: matplot},
            {skill: "Plotly", img: plotly},
            {skill: "Seaborn", img: seaborn},
            {skill: "Tensorflow", img: tensorflow},
            {skill: "Pytorch", img: pytorch},
            {skill: "Looker", img: looker},
        ],
    },
    about: {
        title: "About Me",
        description:
            "Recent graduate from the Faculty of Computer and Artificial Intelligence with a strong background in data analysis, report generation, and problem-solving. Proficient in SQL, data visualization tools, and key computer science concepts such as algorithms, data structures, and database management. Focused on delivering insights that drive informed decision-making and support business success.",
    },
    copyrights: "© 2024 Ahmed Ali. All Rights Reserved.",
};
export default api;
