export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  message?: string;
  source: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sourceLabel(source: string): string {
  const labels: Record<string, string> = {
    'Contact Form': 'Contact Section',
    'Hero Modal': 'Get Started Popup',
    'Schedule Appointment': 'Schedule a Call',
  };
  return labels[source] || source;
}

export function buildContactEmailHtml(
  data: ContactFormPayload,
  submittedAt: string,
): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const source = escapeHtml(sourceLabel(data.source));
  const message = data.message?.trim()
    ? escapeHtml(data.message.trim()).replace(/\n/g, '<br>')
    : '<span style="color:#94a3b8;font-style:italic;">No message provided</span>';
  const time = escapeHtml(submittedAt);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead — Social Space Bar</title>
</head>
<body style="margin:0;padding:0;background-color:#eef2f6;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d1526 0%,#131f38 50%,#0d1526 100%);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <div style="display:inline-block;background:rgba(102,199,192,0.15);border:1px solid rgba(102,199,192,0.35);border-radius:100px;padding:6px 16px;margin-bottom:16px;">
                      <span style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#66C7C0;">New Lead Alert</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h1 style="margin:0 0 6px;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">Social Space Bar</h1>
                    <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.55);">Someone just filled out a form on your website</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Source badge -->
          <tr>
            <td style="background:#ffffff;padding:24px 36px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(90deg,rgba(102,199,192,0.08),rgba(124,58,237,0.06));border-left:4px solid #66C7C0;border-radius:0 10px 10px 0;padding:14px 18px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#64748b;">Form Source</p>
                    <p style="margin:0;font-size:16px;font-weight:700;color:#0d1526;">${source}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td style="background:#ffffff;padding:24px 36px;">
              <p style="margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Contact Details</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background:#f8fafc;width:110px;vertical-align:top;">
                    <span style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Name</span>
                  </td>
                  <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:16px;font-weight:700;color:#0d1526;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;background:#f8fafc;vertical-align:top;">
                    <span style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Email</span>
                  </td>
                  <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;">
                    <a href="mailto:${email}" style="font-size:15px;color:#66C7C0;text-decoration:none;font-weight:600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;background:#f8fafc;vertical-align:top;">
                    <span style="font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Phone</span>
                  </td>
                  <td style="padding:16px 20px;">
                    <a href="tel:${phone}" style="font-size:15px;color:#66C7C0;text-decoration:none;font-weight:600;">${phone}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="background:#ffffff;padding:0 36px 28px;">
              <p style="margin:0 0 12px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Message</p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:18px 20px;">
                <p style="margin:0;font-size:15px;line-height:1.65;color:#334155;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- CTA buttons -->
          <tr>
            <td style="background:#ffffff;padding:0 36px 32px;text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="mailto:${email}?subject=Re:%20Social%20Space%20Bar%20Inquiry" style="display:inline-block;background:linear-gradient(135deg,#66C7C0,#4db8b0);color:#0d1526;font-size:14px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:100px;">Reply via Email</a>
                  </td>
                  <td style="padding-left:10px;">
                    <a href="tel:${phone}" style="display:inline-block;background:#0d1526;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:100px;border:1px solid #1e2d4a;">Call Now</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#94a3b8;">Submitted on ${time}</p>
              <p style="margin:0;font-size:12px;color:#cbd5e1;">socialspacebar.com &nbsp;·&nbsp; Automated notification</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactEmailText(
  data: ContactFormPayload,
  submittedAt: string,
): string {
  const message = data.message?.trim() || 'No message provided';

  return [
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '  NEW LEAD — SOCIAL SPACE BAR',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `Form:     ${sourceLabel(data.source)}`,
    `Name:     ${data.name}`,
    `Email:    ${data.email}`,
    `Phone:    ${data.phone}`,
    '',
    'Message:',
    message,
    '',
    `Submitted: ${submittedAt}`,
    '',
    'Reply to this email to respond directly to the lead.',
  ].join('\n');
}
