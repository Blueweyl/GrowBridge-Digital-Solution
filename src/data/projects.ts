export interface Project {
  title: string;
  image: string;
  tools: string[];
  category: string;
  problem: string;
  solution: string;
  result: string;
}

export const projects: Project[] = [
  {
    "title": "AI Document Assistant",
    "image": "ai-agent-n8n.png",
    "tools": [
      "n8n",
      "Google Gemini",
      "Webhooks"
    ],
    "category": "n8n",
    "problem": "Client's team spent hours manually reviewing, categorizing, and extracting data from incoming documents.",
    "solution": "Built an n8n pipeline with Google Gemini AI that automatically processes documents via webhook, routes them through an AI agent with memory, and sends structured responses via HTTP.",
    "result": "Reduced document processing time by over 70%, freeing up 15+ hours per week for the team."
  },
  {
    "title": "ASMR Video Generator",
    "image": "asmr-n8n.png",
    "tools": [
      "n8n",
      "Google Gemini",
      "Google Veo API"
    ],
    "category": "n8n",
    "problem": "Content creator needed a scalable way to generate ASMR videos without manual editing for each piece of content.",
    "solution": "Automated pipeline using n8n with scheduled triggers, Gemini-powered prompt generation, JWT auth for Google Veo API, and automated video rendering with error handling.",
    "result": "Fully automated video generation pipeline producing content on schedule with zero manual intervention."
  },
  {
    "title": "Client Task Management",
    "image": "task-management-zapier.png",
    "tools": [
      "Zapier",
      "Asana",
      "Gmail",
      "Google Drive"
    ],
    "category": "Zapier",
    "problem": "Agency struggled to track client task status across multiple stages — leading to missed follow-ups and delayed deliverables.",
    "solution": "Created a multi-path Zapier automation triggered by Asana task updates, routing through 5 stages with automated emails, folder creation, and subtask management.",
    "result": "Eliminated manual status tracking, ensuring 100% follow-up compliance and faster project turnaround."
  },
  {
    "title": "Social Media Automation",
    "image": "facebook-posting-make.png",
    "tools": [
      "Make.com",
      "Facebook API",
      "Google Sheets",
      "Slack"
    ],
    "category": "Make.com",
    "problem": "Marketing team manually posted to Facebook, tracked content in spreadsheets, and notified the team via Slack — consuming 8+ hours weekly.",
    "solution": "Built a Make.com scenario that watches Google Sheets for new content, posts to Facebook Pages, logs results back to Sheets, and sends Slack notifications.",
    "result": "Streamlined content pipeline from 8 hours to fully automated, with real-time tracking and team notifications."
  },
  {
    "title": "Xero Transaction Sync",
    "image": "xero-sync-make.png",
    "tools": [
      "Make.com",
      "Xero",
      "Asana",
      "Google Sheets"
    ],
    "category": "Make.com",
    "problem": "Accounting team manually exported Xero transactions and updated project management tools, causing delays and data entry errors.",
    "solution": "Automated flow that watches Asana for completed tasks, pulls Xero transaction data, iterates through records, syncs to Google Sheets, and uploads CSV reports back to Asana.",
    "result": "Eliminated manual data entry errors and saved 10+ hours per week in accounting reconciliation."
  },
  {
    "title": "Bounced Email DND System",
    "image": "bounced-emails-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Hard-bounced and spam emails continued receiving marketing messages, damaging sender reputation and deliverability scores.",
    "solution": "GoHighLevel workflow triggered by hard bounce events that automatically enables DND status on the contact to prevent future sends.",
    "result": "Improved email deliverability by 35% and protected sender reputation across all campaigns."
  },
  {
    "title": "Client Onboarding Tracker",
    "image": "client-tracker-zapier.png",
    "tools": [
      "Zapier",
      "Jotform",
      "Trainerize",
      "Google Drive"
    ],
    "category": "Zapier",
    "problem": "Fitness business manually onboarded clients — creating accounts, folders, spreadsheets, and sending welcome emails for each new signup.",
    "solution": "6-step Zapier automation: Jotform submission → Trainerize client creation + tagging → Google Drive folder → Sheets row → Gmail welcome email.",
    "result": "Reduced client onboarding from 30 minutes to instant, with zero manual steps."
  },
  {
    "title": "Booking Reminder System",
    "image": "customer-booking-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "High no-show rates (30%+) for appointments due to lack of timely reminders across channels.",
    "solution": "GoHighLevel workflow with multi-channel reminders: 24-hour email + SMS, then 1-hour email + SMS before appointment, all triggered automatically on booking.",
    "result": "Reduced no-show rate by 50%+, recovering thousands in lost revenue monthly."
  },
  {
    "title": "Lead Re-engagement Flow",
    "image": "customer-not-interested-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "When customers replied 'not interested,' contacts lingered in active pipelines, wasting follow-up resources.",
    "solution": "Automated workflow triggered by customer reply: removes active tags, adds 'Not Interested' tag, and sends a polite SMS acknowledgment.",
    "result": "Cleaned pipeline accuracy by 40%, letting the sales team focus only on warm leads."
  },
  {
    "title": "AI Customer Support Agent",
    "image": "customer-support-n8n.png",
    "tools": [
      "n8n",
      "Google Gemini",
      "Gmail"
    ],
    "category": "n8n",
    "problem": "Support inbox was flooded with repetitive questions, overwhelming the team and delaying critical responses.",
    "solution": "n8n workflow with Gmail trigger → Text Classifier → AI Agent with memory generates intelligent replies → auto-replies and labels messages in Gmail.",
    "result": "Automated 60%+ of support replies, reducing average response time from hours to seconds."
  },
  {
    "title": "Daily Task Digest",
    "image": "daily-task-zapier-f.png",
    "tools": [
      "Zapier",
      "Asana",
      "Gmail"
    ],
    "category": "Zapier",
    "problem": "Team members missed daily priorities because task lists were buried inside project management tools.",
    "solution": "Zapier scheduled trigger runs daily, pulls tasks from Asana workspace, and sends a formatted digest email via Gmail.",
    "result": "100% visibility on daily priorities — team productivity improved with zero extra effort."
  },
  {
    "title": "Email Attachment Pipeline",
    "image": "email-attachment-zapier.png",
    "tools": [
      "Zapier",
      "Gmail",
      "Google Drive",
      "Slack"
    ],
    "category": "Zapier",
    "problem": "Important email attachments were lost in inboxes, requiring manual downloading and filing into shared drives.",
    "solution": "Zapier watches Gmail for new attachments, filters by criteria, uploads files to Google Drive, and sends a Slack notification.",
    "result": "Zero lost attachments — all files auto-organized in Google Drive with instant team alerts."
  },
  {
    "title": "Form Response Automation",
    "image": "form-response-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Leads who submitted forms waited hours for a response, causing drop-off before the sales team could engage.",
    "solution": "GoHighLevel workflow triggered on form submission: instantly tags the contact, sends an SMS, waits, then initiates a call with follow-up sequences.",
    "result": "Lead response time dropped from hours to under 1 minute, dramatically improving conversion rates."
  },
  {
    "title": "Gmail AI Processing",
    "image": "gmail-integration-make.png",
    "tools": [
      "Make.com",
      "Google Gemini AI",
      "Google Drive",
      "Gmail"
    ],
    "category": "Make.com",
    "problem": "Client received dozens of emails with attachments daily that needed AI analysis, filing, logging, and response — all done manually.",
    "solution": "Make.com scenario watches Gmail → iterates attachments → uploads to Gemini AI for analysis → saves to Drive → logs in Sheets → sends summary reply.",
    "result": "Fully automated email processing pipeline handling 50+ emails/day with AI-powered analysis."
  },
  {
    "title": "Lead Nurture Sales Pipeline",
    "image": "lead-nurture-pipeline.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Complex sales funnel with multiple stages required manual follow-up at each step, causing leads to fall through the cracks.",
    "solution": "Comprehensive GoHighLevel automation spanning the entire sales pipeline with branching logic and multi-channel touchpoints.",
    "result": "End-to-end automated sales pipeline nurturing leads 24/7, increasing close rates significantly."
  },
  {
    "title": "Lead Temperature Router",
    "image": "lead-temperature-router.png",
    "tools": [
      "n8n",
      "Google Sheets"
    ],
    "category": "n8n",
    "problem": "All leads were treated equally regardless of engagement level, wasting sales time on cold prospects.",
    "solution": "n8n workflow triggered on form submission → Switch node routes leads by temperature (Cold, Warm, Hot) → results appended to Google Sheets.",
    "result": "Sales team focused on hot leads first, improving conversion rates by prioritizing high-intent prospects."
  },
  {
    "title": "Opportunity Pipeline Mover",
    "image": "move-to-opportunity.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "When customers booked appointments, their opportunity status wasn't updated — causing pipeline confusion.",
    "solution": "GoHighLevel workflow: on booking → finds opportunity in pipeline → updates to 'Booked Call' and removes from Lead Nurture workflow.",
    "result": "Pipeline always reflects real-time status — eliminated duplicate outreach and improved efficiency."
  },
  {
    "title": "Multi-Stage Lead Automation",
    "image": "moving-leads-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Moving leads between pipeline stages required manual CRM updates.",
    "solution": "Suite of GoHighLevel workflows that automatically move leads through stages based on actions taken — booking, call completion, and proposal sending.",
    "result": "Fully automated pipeline progression with zero manual CRM updates."
  },
  {
    "title": "Multi-Message Slack Router",
    "image": "slack-router-make.png",
    "tools": [
      "Make.com",
      "Google Sheets",
      "Slack"
    ],
    "category": "Make.com",
    "problem": "Team updates from spreadsheets needed to be posted to multiple Slack channels, but manual posting was inconsistent.",
    "solution": "Make.com scenario watches Google Sheets → sends initial Slack message → Router splits to multiple channels with customized messages.",
    "result": "Instant, consistent multi-channel Slack notifications — saving 5+ hours weekly."
  },
  {
    "title": "RAG Pipeline Chatbot",
    "image": "rag-pipeline-chatbot.png",
    "tools": [
      "n8n",
      "OpenAI",
      "Pinecone",
      "Google Drive"
    ],
    "category": "n8n",
    "problem": "Knowledge base was scattered across Google Drive, making it impossible for the team to find answers quickly.",
    "solution": "n8n RAG pipeline: Google Drive trigger → downloads files → embeds in Pinecone via OpenAI → AI Agent chatbot retrieves relevant context from vector store to answer questions.",
    "result": "Instant knowledge retrieval from company docs — reduced internal support queries by 70%."
  },
  {
    "title": "Smart SMS Lead Nurturer",
    "image": "replyflow-sms-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "SMS lead follow-ups were generic — no branching logic based on reply content or timing, causing lost opportunities.",
    "solution": "GoHighLevel workflow with dual triggers (Contact Reply + Timeout), conditional branching for 'INTERESTED' replies, and automated workflow routing for different response paths.",
    "result": "Personalized SMS nurture increased engagement rates by 45% and recovered previously cold leads."
  },
  {
    "title": "Review Request System",
    "image": "review-request-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Business had no systematic way to request reviews, and low-rating customers weren't handled separately.",
    "solution": "GoHighLevel workflow: contact tag trigger → SMS review request → waits 48h → branches by star rating (1-3 vs 4-5) → sends appropriate follow-up with retry logic for non-responders.",
    "result": "5x increase in positive reviews with automated damage control for negative experiences."
  },
  {
    "title": "AI Sales Agent System",
    "image": "sales-agent-n8n.png",
    "tools": [
      "n8n",
      "Google Gemini",
      "Gmail",
      "Google Sheets"
    ],
    "category": "n8n",
    "problem": "Sales team couldn't follow up with every lead consistently — manual outreach was slow and inconsistent.",
    "solution": "Multi-stage n8n system: lead scraping → CRM enrichment → AI-generated personalized emails → scheduled follow-up sequences with Gemini chat models → conversion tracking.",
    "result": "Fully automated sales outreach handling 100+ leads/week with personalized AI-written emails."
  },
  {
    "title": "Sales Alert Autopilot",
    "image": "sales-alert-zapier.png",
    "tools": [
      "Zapier",
      "Apollo",
      "Google Sheets",
      "Slack",
      "Gmail"
    ],
    "category": "Zapier",
    "problem": "Inbound leads weren't enriched or prioritized — sales team wasted time on low-quality prospects.",
    "solution": "Zapier webhook captures leads → formats company URL → enriches via Apollo → splits into High/Low priority paths → saves to Sheets, alerts Slack, drafts AI emails via Gmail.",
    "result": "Instant lead scoring and enrichment — sales team focuses on high-priority leads with AI-drafted outreach."
  },
  {
    "title": "Weather Forecast Social Posts",
    "image": "weather-social-n8n.png",
    "tools": [
      "n8n",
      "Google Gemini",
      "Facebook API",
      "OpenWeatherMap"
    ],
    "category": "n8n",
    "problem": "Local business wanted daily social media posts with weather-relevant content but couldn't dedicate staff to create them.",
    "solution": "n8n scheduled workflow: generates quotes via Gemini → fetches weather from OpenWeatherMap → AI Agent creates themed posts with background images → posts to Facebook via Graph API.",
    "result": "Fully automated daily social content tied to local weather — zero human effort with high engagement."
  },
  {
    "title": "Social Media Update Pipeline",
    "image": "social-media-make.png",
    "tools": [
      "Make.com",
      "Google Sheets",
      "Slack",
      "Facebook API"
    ],
    "category": "Make.com",
    "problem": "Social media team manually coordinated content approval, posting, and tracking across multiple platforms.",
    "solution": "Make.com scenario: watches Google Sheets → notifies Slack → posts to Facebook Pages → searches and updates tracking Sheets with post results.",
    "result": "Streamlined social media workflow with full audit trail — team saves 6+ hours weekly."
  },
  {
    "title": "Spreadsheet Event Scheduler",
    "image": "event-scheduler-zapier.png",
    "tools": [
      "Zapier",
      "Google Sheets",
      "Google Calendar",
      "Slack"
    ],
    "category": "Zapier",
    "problem": "Events entered in spreadsheets weren't reflected in team calendars, causing scheduling conflicts and missed events.",
    "solution": "Zapier watches Google Sheets for new/updated rows → creates detailed Google Calendar events → sends Slack channel notification to the team.",
    "result": "Zero missed events — all spreadsheet entries instantly synced to calendars with team alerts."
  },
  {
    "title": "Credit Application System",
    "image": "credit-application-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Credit application process required manual tracking across 6 workflow stages — from lead intake to approval/decline — causing delays and human error.",
    "solution": "Built a comprehensive 6-workflow GoHighLevel system: New Lead → Send Application, Application Submitted Handler, Document Upload Checker, Reminder Ladder, Approval Flow, and Decline Flow — all interconnected with conditional logic.",
    "result": "End-to-end automated credit application pipeline processing leads 24/7 with zero manual intervention."
  },
  {
    "title": "Application Submitted Handler",
    "image": "application-submitted-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "When applicants submitted forms, there was no automated process to update records, move pipeline stages, or notify the team.",
    "solution": "GoHighLevel workflow triggered on form submission: updates custom fields → moves opportunity to 'Application Submitted' stage → sends SMS confirmation → triggers internal notification.",
    "result": "Instant application processing with real-time team alerts and pipeline updates."
  },
  {
    "title": "Application Approval Flow",
    "image": "approval-flow-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Approved applications required manual status updates, SMS notifications, and email confirmations — causing delays in onboarding.",
    "solution": "GoHighLevel workflow: Decision Status trigger → updates opportunity to Approved → sends approval SMS → sends approval email — all automated on status change.",
    "result": "Instant approval notifications across SMS and email, cutting onboarding time significantly."
  },
  {
    "title": "Application Decline Flow",
    "image": "decline-flow-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Declined applicants received no communication, leading to confusion and poor customer experience.",
    "solution": "GoHighLevel workflow: Pipeline stage change to Declined → updates opportunity status → sends professional decline SMS with next steps.",
    "result": "Professional decline handling maintaining brand reputation with automated, empathetic communication."
  },
  {
    "title": "Document Upload Checker",
    "image": "document-upload-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "No way to verify if applicants uploaded required documents — incomplete applications sat in limbo without review.",
    "solution": "GoHighLevel workflow with conditional branching: checks if docs are uploaded AND decision is pending → moves to 'Under Review' stage, updates fields, and notifies team via SMS. Falls through if conditions aren't met.",
    "result": "Automated document verification ensuring only complete applications proceed to review."
  },
  {
    "title": "New Lead Application Sender",
    "image": "new-lead-application-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "New leads entering the pipeline didn't receive application links promptly, causing drop-off before they could apply.",
    "solution": "GoHighLevel workflow: Pipeline stage = New Lead → sends SMS with application link → sends welcome email → updates contact field to 'Application Link Sent' → moves opportunity forward.",
    "result": "Instant multi-channel outreach to new leads, dramatically reducing time-to-application."
  },
  {
    "title": "Application Reminder Ladder",
    "image": "reminder-ladder-ghl.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Applicants who received the link but didn't submit often forgot, with no systematic follow-up in place.",
    "solution": "Complex GoHighLevel reminder workflow: waits 2 hours → checks if submitted → if not, sends SMS reminder #1 → waits again → reminder #2 → waits → reminder #3 → if still not submitted, closes opportunity as 'No Response'.",
    "result": "Multi-stage reminder system recovering 40%+ of incomplete applications before auto-closing."
  },
  {
    "title": "Invoice Follow-Up System",
    "image": "invoice-followup-n8n.png",
    "tools": [
      "n8n",
      "Gmail",
      "Google Sheets"
    ],
    "category": "n8n",
    "problem": "Overdue invoices were tracked manually with no tiered escalation — reminders were inconsistent and freelancers weren't alerted about long-overdue payments.",
    "solution": "n8n workflow: daily scheduled trigger reads invoices from Google Sheets → filters overdue → calculates days overdue → routes by tier (First Reminder, Second Reminder, Escalation) → sends Gmail messages and updates sheet status at each level, including freelancer alerts for 30+ day invoices.",
    "result": "Automated 3-tier follow-up system recovering 60%+ of overdue invoices with zero manual effort."
  },
  {
    "title": "AI Email Outreach Engine",
    "image": "email-outreach-n8n.png",
    "tools": [
      "n8n",
      "OpenAI",
      "Google Sheets",
      "Outlook"
    ],
    "category": "n8n",
    "problem": "Sales team manually wrote personalized outreach emails for each sector — time-consuming and inconsistent in quality.",
    "solution": "n8n workflow: hourly schedule fetches pending leads from Sheets → splits into batches → OpenAI personalizes each email by sector → sends via Outlook → marks as Sent or Failed in Sheets → loops back for next batch.",
    "result": "Scaled personalized outreach to 200+ leads/day with AI-written sector-specific emails and full tracking."
  },
  {
    "title": "Marketing Strategy Dashboard",
    "image": "marketing-dashboard.png",
    "tools": [
      "GoHighLevel"
    ],
    "category": "GoHighLevel",
    "problem": "Marketing performance data was scattered across Google Business, SEO tools, and Meta Ads — no unified view for decision-making.",
    "solution": "Built a real-time marketing dashboard consolidating Total Calls, Direction Requests, Lead Conversion Lift, CAC, Market Share Visibility, Local SEO Rankings, and Meta Ad Sequence tracking into one interface.",
    "result": "Single-pane marketing intelligence enabling data-driven decisions and 15% improvement in lead conversion."
  }
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
