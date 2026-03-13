# GigShield-AI
AI-powered parametric insurance platform designed to protect gig economy delivery workers from income loss caused by external disruptions.


## Problem Statement
Delivery partners in India’s gig economy (such as workers from Zomato, Swiggy, Amazon, and Zepto) depend on daily deliveries for their earnings. However, external disruptions like extreme weather, heavy rain, floods, pollution, curfews, or local restrictions can prevent them from working. These uncontrollable events often reduce their working hours and lead to significant income loss. Currently, gig workers have little or no financial protection against such disruptions, leaving them to bear the entire loss of earnings.


## Proposed Solution
The proposed solution is an **AI-powered parametric insurance platform** that provides income protection for gig economy delivery workers affected by external disruptions such as extreme weather, pollution, floods, or sudden curfews.

The platform uses **real-time data from external sources** such as weather and location services to identify disruption events that impact delivery operations in specific areas. When predefined conditions are met, the system automatically triggers the claim process for affected workers.

AI analyzes **historical data and regional risk patterns** to determine fair weekly insurance premiums. The system also includes **fraud detection mechanisms** to verify worker activity and location, ensuring secure and reliable claim processing.

This approach enables **fast compensation** and provides delivery workers with a dependable financial safety net during unexpected disruptions.


## Target Persona
The primary target persona for this solution is **food delivery partners working with platforms such as Swiggy and Zomato**.

These workers depend on completing multiple deliveries each day to earn their income. Since their work requires traveling outdoors and reaching restaurants and customer locations, they are highly vulnerable to external disruptions such as:

- Heavy rain  
- Extreme heat  
- Severe pollution  
- Sudden local restrictions  

Such conditions can reduce the number of orders or make deliveries impossible, directly affecting their daily earnings. This platform provides **financial protection for delivery partners during unavoidable disruptions.**


## Example Scenario

### Extreme Heat

**Condition**  
Temperature rises above **45°C**

**Impact**
- Delivery workers cannot safely ride during peak afternoon hours
- Platforms temporarily reduce delivery slots
- Workers lose several hours of potential earnings

**Outcome**  
The insurance system detects the extreme heat condition and automatically triggers compensation for delivery partners for the hours they are unable to work.


## System Workflow
1. Delivery worker registers on the platform  
2. System calculates weekly premium using an AI risk model  
3. Worker purchases the insurance policy  
4. Platform continuously monitors environmental data via APIs  
5. If disruption conditions are met, a claim is automatically triggered  
6. Fraud detection verifies worker location and activity  
7. Payout is sent instantly through a payment gateway simulation  


## Weekly Premium Model

**Basic Plan**
- Weekly Premium: ₹20
- Max Weekly Payout: ₹800

**Standard Plan**
- Weekly Premium: ₹30
- Max Weekly Payout: ₹1500

**Premium Plan**
- Weekly Premium: ₹40
- Max Weekly Payout: ₹2500

**Premium calculation depends on:**
- Historical weather risk
- Worker location
- Disruption probability

## Parametric Triggers

**Heavy Rain**
- Condition: Rainfall > 50 mm
- Data Source: Weather API

**Extreme Heat**
- Condition: Temperature > 45°C
- Data Source: Weather API

**Severe Pollution**
- Condition: AQI > 350
- Data Source: AQI API

**Flood Alert**
- Condition: Flood warning issued
- Data Source: Government disaster alert data

When these conditions occur in the worker’s operating zone, the system automatically detects the disruption and triggers the claim process.


## AI / ML Integration

**Dynamic Premium Calculation**  
AI analyzes historical weather patterns, disruption frequency, and worker location risk to determine fair weekly insurance premiums.

**Risk Prediction**  
Machine learning models predict the probability of disruptions in specific delivery zones using past weather and environmental data.

**Fraud Detection**  
AI-based anomaly detection monitors worker location, activity patterns, and claim history to identify suspicious or duplicate claims.

**Disruption Impact Analysis**  
AI evaluates historical delivery data and disruption events to estimate potential income loss during external disruptions.

These AI models improve pricing accuracy, detect fraud, and ensure efficient claim processing.


## Key Features
- AI-powered risk assessment
- Automated parametric claim triggers
- Weekly premium insurance model
- Fraud detection using anomaly detection
- Instant payout simulation
- Worker dashboard for policy tracking


## Technology Stack

**Frontend**
- React.js
- HTML
- CSS
- JavaScript

**Backend**
- Python Flask for REST APIs, claim automation, and AI integration

**Database**
- MySQL / PostgreSQL

**External APIs**
- Weather API for rainfall and temperature data
- AQI API for air quality monitoring
- Government disaster alert APIs

**AI / ML Tools**
- Python
- Scikit-learn
- TensorFlow

**Cloud / Deployment**
- AWS EC2
- AWS S3

**Payment Integration**
- UPI / Razorpay sandbox for simulated payouts


## System Architecture

Worker App  
↓  
Backend API Server  
↓  
AI Risk Engine (Premium Calculation + Fraud Detection)  
↓  
External Data APIs (Weather API, AQI API, Government Alerts)  
↓  
Claim Automation Engine  
↓  
Payment Gateway (UPI / Razorpay Sandbox)


## Expected Impact

**Income Protection**  
Delivery workers receive financial support during disruptions that prevent them from working.

**Financial Stability**  
Gig workers maintain more stable earnings despite unpredictable disruptions.

**Worker Safety**  
Encourages workers to avoid unsafe conditions such as extreme heat, heavy rain, or severe pollution.

**Trust in Gig Platforms**  
Improves confidence and security for workers participating in gig economy platforms.

**Efficient Claim Processing**  
Automated parametric triggers enable fast claim initiation and quicker payouts.

## License
This project is developed as part of the **Guidewire DEVTrails Hackathon**.
