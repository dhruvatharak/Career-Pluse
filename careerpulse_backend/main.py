# CareerPulse AI - FastAPI Backend API Server

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from ai_model import ai_recommender, TN_GROUPS_DB

app = FastAPI(
    title="CareerPulse AI Backend Server",
    description="AI-powered 11th Standard Group Selection & Career Path Guidance API for Tamil Nadu State Board & National Pathways",
    version="2.0.0"
)

# Enable CORS for React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Input Schemas
class RecommendationRequest(BaseModel):
    interests: str
    preferred_subjects: Optional[List[str]] = []
    career_goal: Optional[str] = ""

class CutoffRequest(BaseModel):
    maths: float
    physics: float
    chemistry: float

class ChatRequest(BaseModel):
    message: str
    group_code: Optional[str] = None


@app.get("/")
def read_root():
    return {
        "system": "CareerPulse AI Backend Server",
        "status": "Online & Operational",
        "version": "2.0.0",
        "total_tn_groups": len(TN_GROUPS_DB),
        "docs_url": "/docs"
    }


@app.get("/api/v1/groups")
def get_all_groups(stream: Optional[str] = None):
    """Fetch all 40 Official Tamil Nadu Government School 11th Group Codes (Annexure I & II)"""
    if stream and stream != "All":
        filtered = [g for g in TN_GROUPS_DB if g["stream"].lower() == stream.lower()]
        return {"total": len(filtered), "groups": filtered}
    return {"total": len(TN_GROUPS_DB), "groups": TN_GROUPS_DB}


@app.get("/api/v1/groups/{code}")
def get_group_by_code(code: str):
    """Fetch specific TN Group Code details"""
    group = next((g for g in TN_GROUPS_DB if g["code"] == code), None)
    if not group:
        raise HTTPException(status_code=404, detail=f"TN Group Code {code} not found.")
    return {"success": True, "group": group}


@app.post("/api/v1/recommend")
def recommend_groups(payload: RecommendationRequest):
    """
    Scikit-Learn ML Recommendation Endpoint:
    Processes student interest prompt & vectorizes similarity against 40 TN Group Codes.
    """
    user_prompt = f"{payload.interests} {' '.join(payload.preferred_subjects or [])} {payload.career_goal}"
    results = ai_recommender.recommend(user_prompt, top_n=5)
    return {
        "status": "success",
        "query": user_prompt,
        "recommendations": results
    }


@app.post("/api/v1/calculate-cutoff")
def calculate_tnea_cutoff(payload: CutoffRequest):
    """
    Tamil Nadu TNEA Aggregate Cutoff Calculation Engine:
    Cutoff = Maths + (Physics / 2) + (Chemistry / 2) out of 200 marks.
    """
    if payload.maths < 0 or payload.maths > 100 or payload.physics < 0 or payload.physics > 100 or payload.chemistry < 0 or payload.chemistry > 100:
        raise HTTPException(status_code=400, detail="Marks must be between 0 and 100.")
        
    cutoff = payload.maths + (payload.physics / 2.0) + (payload.chemistry / 2.0)
    
    eligibility_tier = "High Engineering Cutoff (Top Tier Anna University Colleges)" if cutoff >= 185 else \
                       "Good Cutoff (Premier Govt & Aided Colleges)" if cutoff >= 160 else \
                       "Standard Engineering Cutoff"

    return {
        "maths": payload.maths,
        "physics": payload.physics,
        "chemistry": payload.chemistry,
        "tnea_cutoff": round(cutoff, 2),
        "max_marks": 200,
        "eligibility_tier": eligibility_tier,
        "formula": "Maths + (Physics / 2) + (Chemistry / 2)"
    }


@app.post("/api/v1/chat")
def ai_assistant_chat(payload: ChatRequest):
    """
    AI Career Assistant NLP Chatbot Endpoint
    """
    msg = payload.message.lower()
    
    if "data scientist" in msg or "data science" in msg or "2502" in msg:
        reply = "Choosing **Group Code 2502 (Physics, Chemistry, CS, Mathematics)** is the #1 ideal route to becoming a Data Scientist! Pursue B.Tech AI & Data Science or B.E CSE post 12th."
        related_group = "cs-maths"
    elif "neet" in msg or "doctor" in msg or "medical" in msg or "2503" in msg:
        reply = "For Medical (MBBS, BDS) or Biotechnology, select **Group Code 2503 (Bio-Maths)** or **Group Code 2601/2608 (Pure Science)**. Prepare for NEET-UG."
        related_group = "bio-maths"
    elif "ca" in msg or "chartered accountant" in msg or "2708" in msg:
        reply = "To become a Chartered Accountant (CA), select **Group Code 2708 (Commerce + Business Maths)**. Pass CA Foundation post 12th Board."
        related_group = "commerce"
    elif "ias" in msg or "upsc" in msg or "civil services" in msg or "2804" in msg:
        reply = "For Civil Services (IAS/IPS) & Law, choose **Group Code 2804 (Arts/Humanities)**. Over 70% of UPSC syllabus overlaps with History, Polity, Geography & Economics."
        related_group = "arts-humanities"
    else:
        reply = "CareerPulse AI maps all 40 Official TN Government School Group Codes to higher education and career roadmaps. You can explore the interactive visual flowchart or use the eligibility calculator!"
        related_group = "cs-maths"

    return {
        "status": "success",
        "reply": reply,
        "related_group": related_group
    }


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
