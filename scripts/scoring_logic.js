/**

Advanced Lead Scoring Logic for n8n Code Node

Evaluates lead quality based on firmographic data. */

const leads = items.map(item => { const data = item.json; let score = 0;

// Firmographic Scoring
const enterpriseDomains = ['google.com', 'microsoft.com', 'apple.com'];
const emailDomain = data.email.split('@')[1];

if (enterpriseDomains.includes(emailDomain)) score += 40;
if (data.job_title && data.job_title.toLowerCase().includes('director')) score += 30;
if (data.revenue > 1000000) score += 30;

item.json.automation_meta = {
    score: score,
    processed_at: new Date().toISOString(),
    tier: score > 70 ? 'Tier 1' : 'Tier 2'
};

return item;


});

return leads;