// CareerPulse AI - Frontend to Python FastAPI Backend API Service

const API_BASE_URL = 'http://localhost:8000/api/v1';

export async function fetchTNGroups(stream = null) {
  try {
    const url = stream ? `${API_BASE_URL}/groups?stream=${stream}` : `${API_BASE_URL}/groups`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('API server response not ok');
    const data = await res.json();
    return data.groups;
  } catch (err) {
    console.warn('Backend API connection offline, using fallback dataset:', err);
    return null;
  }
}

export async function fetchAIRecommendation(interests, preferredSubjects = [], careerGoal = '') {
  try {
    const res = await fetch(`${API_BASE_URL}/recommend`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        interests,
        preferred_subjects: preferredSubjects,
        career_goal: careerGoal
      })
    });
    if (!res.ok) throw new Error('Recommendation API failed');
    return await res.json();
  } catch (err) {
    console.warn('Backend ML model offline, using client scoring engine:', err);
    return null;
  }
}

export async function calculateCutoffAPI(maths, physics, chemistry) {
  try {
    const res = await fetch(`${API_BASE_URL}/calculate-cutoff`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ maths: parseFloat(maths), physics: parseFloat(physics), chemistry: parseFloat(chemistry) })
    });
    if (!res.ok) throw new Error('Cutoff API failed');
    return await res.json();
  } catch (err) {
    console.warn('Backend Cutoff Engine offline, using fallback:', err);
    return null;
  }
}

export async function sendChatMessageAPI(message, groupCode = null) {
  try {
    const res = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, group_code: groupCode })
    });
    if (!res.ok) throw new Error('Chat API failed');
    return await res.json();
  } catch (err) {
    console.warn('Backend Chat NLP model offline, using client fallback:', err);
    return null;
  }
}
