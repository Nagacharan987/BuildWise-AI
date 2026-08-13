# 🏗️ BuildWise AI

### AI-Assisted Construction Planning, Estimation & Document Trust

BuildWise AI is a construction technology platform designed to help homeowners organize the early stages of a construction project through AI-assisted planning, preliminary cost estimation, material estimation, and document verification.

**Live Demo:** https://nagacharan987.github.io/BuildWise-AI/

---

## 🚀 Problem

Starting a construction project can be difficult for homeowners.

They may need to understand:

* Plot and built-up area
* Construction stages
* Preliminary project costs
* Material requirements
* Engineering requirements
* Important project documents
* Contractor and quotation information

Information is often distributed across different people and services.

---

## 💡 Our Solution

BuildWise AI brings these early-stage construction tools into one platform.

A user can enter basic project requirements such as location, plot size, number of floors, bedrooms, bathrooms, and budget.

BuildWise then provides a structured preliminary project summary.

### Core features

🤖 **AI Construction Assistant**
Provides structured guidance based on the user's construction questions.

📐 **Project Planner**
Organizes basic project requirements.

💰 **Cost Estimator**
Provides preliminary construction cost estimates.

🧱 **Material Estimator**
Provides preliminary quantities for materials such as cement, steel, and sand.

🔐 **Document Verification**
Generates a SHA-256 fingerprint that can be used to detect whether document content has changed.

---

## 🧠 How It Works

```text
                    USER
                      │
                      ▼
              ┌───────────────┐
              │  BuildWise AI  │
              └───────┬───────┘
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   AI Assistant    Estimator      Document
       │              │           Verification
       │              │              │
       ▼              ▼              ▼
  Construction     Cost &        SHA-256
    Guidance       Materials     Fingerprint
```

---

## 🛠️ Technology

### Current Prototype

* HTML
* CSS
* JavaScript
* Web Crypto API
* GitHub Pages

### Planned Technology

* React / Next.js
* Node.js
* Python / FastAPI
* Database
* Secure AI API integration
* EVM-compatible blockchain
* IPFS or cloud storage

---

## 🔐 Document Trust

BuildWise currently demonstrates document fingerprinting using SHA-256.

```text
Document
   │
   ▼
SHA-256 Hash
   │
   ▼
Unique Fingerprint
```

In the production architecture, the fingerprint can be anchored to a blockchain while the actual document remains stored off-chain.

This can provide an additional integrity-verification layer for important project documents.

---

## 🤖 AI Roadmap

The current public prototype demonstrates the AI-assistant interface and structured construction guidance.

The planned production architecture is:

```text
User
  │
  ▼
BuildWise Frontend
  │
  ▼
Secure Backend
  │
  ▼
AI Model
  │
  ▼
Structured Construction Guidance
```

API credentials will be kept on the server and will not be exposed in the public frontend.

---

## 🏗️ Example User Flow

```text
1. User creates a project
        ↓
2. Enters plot and house requirements
        ↓
3. BuildWise generates preliminary planning information
        ↓
4. User reviews cost and material estimates
        ↓
5. User asks the AI construction assistant questions
        ↓
6. Important documents can be fingerprinted
        ↓
7. Future version → blockchain verification
```

---

## 🎯 Example

### User Input

```text
Location: Warangal
Plot: 1200 sq.ft
Floors: G+1
Bedrooms: 3
Bathrooms: 3
Budget: ₹30 lakh
```

### BuildWise Output

The platform generates:

* Built-up area
* Preliminary cost estimate
* Preliminary material quantities
* Construction planning guidance
* Budget comparison
* Document fingerprint when required

---

## 🗺️ Roadmap

### Phase 1 — Completed ✅

* [x] BuildWise concept
* [x] Project planner
* [x] Cost estimator
* [x] Material estimator
* [x] AI assistant prototype
* [x] SHA-256 document fingerprint
* [x] Responsive web interface
* [x] GitHub repository
* [x] Live deployment

### Phase 2 — Next 🚧

* [ ] Secure AI backend
* [ ] Real AI model integration
* [ ] User authentication
* [ ] Project dashboard
* [ ] Database
* [ ] Save project history

### Phase 3 — Advanced 🔮

* [ ] Engineer marketplace
* [ ] Contractor quotations
* [ ] Location-aware estimates
* [ ] Document storage
* [ ] Blockchain document anchoring
* [ ] Public verification page
* [ ] Mobile application

---

## 🌍 Vision

BuildWise AI aims to become a digital construction companion that helps homeowners understand and organize their construction journey before and during the building process.

The long-term goal is to combine:

**AI + Construction + Verification + Real-world Services**

into one accessible platform.

---

## ⚠️ Disclaimer

BuildWise AI is currently a prototype for educational and demonstration purposes.

Cost and material estimates are preliminary and should not be used as a substitute for professional engineering, structural design, legal approval, soil investigation, or financial advice.

Actual construction decisions should be verified by qualified professionals and relevant local authorities.

---

## 👨‍💻 Project

**BuildWise AI**

Built as a product-development project exploring AI-assisted construction technology.

**Live Demo:** https://nagacharan987.github.io/BuildWise-AI/

**Repository:** https://github.com/Nagacharan987/BuildWise-AI
