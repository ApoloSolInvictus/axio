# Axio n8n form workflow

## Frontend connection

`index.html` defines the webhook URLs here:

```html
<script>
  window.AXIO_N8N_WEBHOOKS = {
    subscription: "",
    stayintouch: "",
    contact: ""
  };
</script>
```

Paste the production n8n webhook URL for each form. Keep secrets, API keys, PayPal credentials, and private email credentials out of this file because this site is static and the JavaScript is public.

Vercel is not required for the current setup if n8n accepts browser requests and returns CORS headers. Use Vercel, Cloudflare Workers, or another tiny backend only when you need to hide secrets, validate anti-spam server-side, sign PayPal calls, or avoid CORS limits.

## JSON sent to n8n

Every form sends JSON with shared metadata:

```json
{
  "source_site": "axio.wstudio3d.com",
  "page_url": "https://axio.wstudio3d.com/",
  "submitted_at": "2026-09-04T00:00:00.000Z",
  "project_name": "Axio Tours Ticos",
  "form_type": "contact",
  "form_subject": "Solicitud de reserva Axio"
}
```

Subscription form:

```json
{
  "form_type": "subscription",
  "form_subject": "Nueva suscripción Axio",
  "email": "cliente@example.com"
}
```

Quick reservation form:

```json
{
  "form_type": "stayintouch",
  "form_subject": "Consulta de reserva Axio",
  "full_name": "Nombre del cliente",
  "email": "cliente@example.com",
  "message": "Somos 2 personas y queremos el próximo fin de semana."
}
```

Contact form:

```json
{
  "form_type": "contact",
  "form_subject": "Solicitud de reserva Axio",
  "full_name": "Nombre del cliente",
  "email": "cliente@example.com",
  "event_interest": "Fin de semana de interés",
  "phone": "+506 0000 0000",
  "message": "Personas, alimentación y preguntas especiales."
}
```

## Recommended n8n nodes

1. Webhook node: method `POST`, response mode `Respond to Webhook`.
2. Set/Edit Fields node: normalize `form_type`, `email`, `full_name`, `message`, `phone`, and `event_interest`.
3. IF/Switch node: route by `form_type`.
4. Email node: send your HTML email to the guest and/or admin.
5. PayPal step: create or send the payment link only after availability is confirmed.
6. Respond to Webhook node: return JSON like `{ "ok": true }`.

For direct browser posting, return these headers from n8n if your instance requires them:

```text
Access-Control-Allow-Origin: https://axio.wstudio3d.com
Access-Control-Allow-Headers: content-type
Access-Control-Allow-Methods: POST, OPTIONS
```

## Prompt for Codex or another coding agent

```text
Connect the static Axio site at https://github.com/ApoloSolInvictus/axio.git to n8n webhooks.
Read index.html and js/custom.js first. Preserve the existing Axio template structure.
Use the existing window.AXIO_N8N_WEBHOOKS object in index.html and the shared JSON POST helper in js/custom.js.
Do not place API keys, PayPal credentials, SMTP passwords, or other secrets in frontend code.
The forms are subscription, stayintouch, and contact. Keep their JSON field names stable:
source_site, page_url, submitted_at, project_name, form_type, form_subject, full_name, email, phone, event_interest, message.
```

## Prompt for the OpenAI email/reservation agent in n8n

```text
You are the Axio Tours Ticos reservation email agent.
Use the incoming JSON fields to write warm, concise Spanish emails.
The event is a reserved two-day, one-night Costa Rica experience with Yoga Natural, Aventura Natural, live music by DJ Ronny Woods, and grilled food: meats, seafood, and vegetarian options.
Always confirm that spaces are limited by weekend and that reservation is completed only after availability is confirmed and PayPal payment instructions are sent.
If the guest included dates, number of people, dietary needs, or questions, acknowledge them specifically.
Never invent availability, prices, policies, or PayPal links. If a value is missing, ask for it clearly.
```
