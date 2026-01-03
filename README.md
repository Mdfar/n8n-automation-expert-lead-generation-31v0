n8n Lead Generation & Orchestration System

This repository contains the architecture for a high-performance lead generation workflow. It captures leads from webhooks, enriches data, scores them, and routes them to CRM and Project Management tools.

Features

Real-time Webhook Ingestion: Instant capture from Typeform and Social APIs.

Conditional Routing: Leads are scored and routed to either "Sales-Ready" or "Nurture" tracks.

Error Handling: Automated retry logic and error logging to Google Sheets.

Multi-Platform Sync: Concurrent updates to HubSpot (CRM) and ClickUp (Tasks).

Setup

Import the workflow.json into your n8n instance.

Configure credentials for HubSpot, ClickUp, and Google Sheets.

Set your Webhook URL in your lead source platform.