# CareerPulse AI - Machine Learning Recommendation Engine & NLP Assistant Model

import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# 40 Official Tamil Nadu Government School Group Codes & Feature Vectors
TN_GROUPS_DB = [
  {"code": "2501", "stream": "Science", "categoryId": "cs-maths", "title": "Physics, Chemistry, Statistics, Mathematics", "keywords": "physics chemistry statistics mathematics math data analytical statistics coding engineering"},
  {"code": "2502", "stream": "Science", "categoryId": "cs-maths", "title": "Physics, Chemistry, Computer Science, Mathematics", "keywords": "physics chemistry computer science mathematics coding programming software ai data science engineering technology python algorithms"},
  {"code": "2503", "stream": "Science", "categoryId": "bio-maths", "title": "Physics, Chemistry, Biology, Mathematics", "keywords": "physics chemistry biology mathematics doctor medical neet engineering biotech biomedical genetics surgeon health research"},
  {"code": "2504", "stream": "Science", "categoryId": "cs-maths", "title": "Physics, Chemistry, Bio-Chemistry, Mathematics", "keywords": "physics chemistry biochemistry mathematics bio-tech molecular lab research engineering"},
  {"code": "2505", "stream": "Science", "categoryId": "cs-maths", "title": "Physics, Chemistry, Communicative English, Mathematics", "keywords": "physics chemistry english mathematics media technical writing engineering"},
  {"code": "2506", "stream": "Science", "categoryId": "cs-maths", "title": "Physics, Chemistry, Mathematics, Home Science", "keywords": "physics chemistry mathematics home science food design engineering"},

  {"code": "2601", "stream": "Science", "categoryId": "bio-maths", "title": "Physics, Chemistry, Biology, Computer Science", "keywords": "physics chemistry biology computer science neet doctor health software bio-informatics coding"},
  {"code": "2602", "stream": "Science", "categoryId": "pure-science", "title": "Physics, Chemistry, Biology, Micro-Biology", "keywords": "physics chemistry biology microbiology lab virus bacteria research pharma"},
  {"code": "2603", "stream": "Science", "categoryId": "pure-science", "title": "Physics, Chemistry, Biology, Bio-Chemistry", "keywords": "physics chemistry biology biochemistry molecular lab drug design"},
  {"code": "2604", "stream": "Science", "categoryId": "pure-science", "title": "Physics, Chemistry, Biology, General Nursing", "keywords": "physics chemistry biology nursing healthcare patient care clinical hospital"},
  {"code": "2605", "stream": "Science", "categoryId": "pure-science", "title": "Physics, Chemistry, Biology, Nutrition & Dietetics", "keywords": "physics chemistry biology nutrition dietetics food health wellness"},
  {"code": "2606", "stream": "Science", "categoryId": "pure-science", "title": "Physics, Chemistry, Biology, Communicative English", "keywords": "physics chemistry biology english medical communication hospital admin"},
  {"code": "2607", "stream": "Science", "categoryId": "pure-science", "title": "Physics, Chemistry, Biology, Home Science", "keywords": "physics chemistry biology home science human ecology lab"},
  {"code": "2608", "stream": "Science", "categoryId": "pure-science", "title": "Physics, Chemistry, Botany, Zoology", "keywords": "physics chemistry botany zoology pure science research tanuvas veterinary tnau agriculture biology"},

  {"code": "2701", "stream": "Commerce", "categoryId": "commerce", "title": "Statistics, Economics, Commerce, Accountancy", "keywords": "statistics economics commerce accountancy ca foundation audit finance business stats"},
  {"code": "2702", "stream": "Commerce", "categoryId": "commerce", "title": "Economics, Commerce, Accountancy, Computer Applications", "keywords": "economics commerce accountancy computer applications bca fintech e-commerce business coding"},
  {"code": "2703", "stream": "Commerce", "categoryId": "commerce", "title": "Communicative English, Economics, Commerce, Accountancy", "keywords": "english economics commerce accountancy corporate communication business pr"},
  {"code": "2704", "stream": "Commerce", "categoryId": "commerce", "title": "History, Economics, Commerce, Accountancy", "keywords": "history economics commerce accountancy corporate law public finance tax audit"},
  {"code": "2705", "stream": "Commerce", "categoryId": "commerce", "title": "Economics, Political Science, Commerce, Accountancy", "keywords": "economics political science commerce accountancy governance corporate law bba law ca"},
  {"code": "2706", "stream": "Commerce", "categoryId": "commerce", "title": "Economics, Commerce, Accountancy, Ethics & Culture", "keywords": "economics commerce accountancy ethics culture business management ethics"},
  {"code": "2707", "stream": "Commerce", "categoryId": "commerce", "title": "Economics, Commerce, Accountancy, Advanced Tamil", "keywords": "economics commerce accountancy tamil business regional trade literature"},
  {"code": "2708", "stream": "Commerce", "categoryId": "commerce", "title": "Economics, Commerce, Accountancy, Business Maths", "keywords": "economics commerce accountancy business mathematics ca cma cfa ipmat stock market finance banking"},

  {"code": "2801", "stream": "Humanities", "categoryId": "arts-humanities", "title": "Statistics, Geography, History, Economics", "keywords": "statistics geography history economics planning demography analytics policy"},
  {"code": "2802", "stream": "Humanities", "categoryId": "arts-humanities", "title": "Geography, History, Economics, Computer Applications", "keywords": "geography history economics computer applications gis map tech digital humanities"},
  {"code": "2803", "stream": "Humanities", "categoryId": "arts-humanities", "title": "Geography, Communicative English, History, Economics", "keywords": "geography english history economics tourism journalism media media house"},
  {"code": "2804", "stream": "Humanities", "categoryId": "arts-humanities", "title": "Geography, History, Economics, Political Science", "keywords": "geography history economics political science upsc ias ips civil services clat law public policy governance"},
  {"code": "2805", "stream": "Humanities", "categoryId": "arts-humanities", "title": "Geography, History, Economics, Ethics & Culture", "keywords": "geography history economics ethics culture heritage sociology social work"},
  {"code": "2806", "stream": "Humanities", "categoryId": "arts-humanities", "title": "Geography, History, Economics, Advanced Tamil", "keywords": "geography history economics tamil literature research governance"},

  {"code": "2921", "stream": "Vocational", "categoryId": "cs-maths", "title": "Basic Mechanical Engineering Vocational", "keywords": "mathematics mechanical engineering computer practical tnea direct machine lab"},
  {"code": "2922", "stream": "Vocational", "categoryId": "cs-maths", "title": "Basic Electrical Engineering Vocational", "keywords": "mathematics electrical engineering computer practical tnea power grid circuits"},
  {"code": "2923", "stream": "Vocational", "categoryId": "cs-maths", "title": "Basic Electronics Engineering Vocational", "keywords": "mathematics electronics engineering computer practical tnea microcontrollers chips"},
  {"code": "2924", "stream": "Vocational", "categoryId": "cs-maths", "title": "Basic Civil Engineering Vocational", "keywords": "mathematics civil engineering computer practical tnea construction surveying"},
  {"code": "2925", "stream": "Vocational", "categoryId": "cs-maths", "title": "Basic Automobile Engineering Vocational", "keywords": "mathematics automobile engineering computer practical tnea automotive engines ev"},
  {"code": "2926", "stream": "Vocational", "categoryId": "cs-maths", "title": "Textile Technology Vocational", "keywords": "mathematics textile technology computer practical tnea apparel design manufacturing"},
  {"code": "2931", "stream": "Vocational", "categoryId": "pure-science", "title": "Nursing Vocational Stream", "keywords": "biology nursing vocational computer practical hospital clinical care patient"},
  {"code": "2941", "stream": "Vocational", "categoryId": "arts-humanities", "title": "Textile & Dress Designing Vocational", "keywords": "home science dress designing computer practical nift fashion design costume"},
  {"code": "2942", "stream": "Vocational", "categoryId": "pure-science", "title": "Food Service Management Vocational", "keywords": "home science food service computer practical hotel management catering food tech"},
  {"code": "2951", "stream": "Vocational", "categoryId": "pure-science", "title": "Agricultural Science Vocational Stream", "keywords": "biology agricultural science computer practical tnau farming agri tech crops soil"},
  {"code": "2961", "stream": "Vocational", "categoryId": "commerce", "title": "Office Management & Secretaryship", "keywords": "commerce accountancy office management secretaryship typography office admin"},
  {"code": "2962", "stream": "Vocational", "categoryId": "commerce", "title": "Commerce & Auditing Vocational", "keywords": "commerce accountancy computer applications auditing practical ca articleship book keeping"}
]


class CareerAIRecommender:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(stop_words='english')
        self.documents = [g["keywords"] for g in TN_GROUPS_DB]
        self.tfidf_matrix = self.vectorizer.fit_transform(self.documents)

    def recommend(self, user_interests: str, top_n: int = 5):
        """
        Scikit-Learn ML Model Recommendation Engine:
        Computes Cosine Similarity between student query vector and all 40 TN Group Code feature vectors.
        """
        user_vector = self.vectorizer.transform([user_interests])
        similarity_scores = cosine_similarity(user_vector, self.tfidf_matrix).flatten()
        
        # Sort indices by score descending
        sorted_indices = np.argsort(similarity_scores)[::-1]
        
        recommendations = []
        for idx in sorted_indices[:top_n]:
            group = TN_GROUPS_DB[idx].copy()
            raw_score = similarity_scores[idx]
            match_percentage = min(98, max(45, int(raw_score * 100 + 45)))
            group["match_score"] = match_percentage
            recommendations.append(group)
            
        return recommendations


# Initialize singleton model instance
ai_recommender = CareerAIRecommender()
