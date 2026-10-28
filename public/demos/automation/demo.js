const kind = document.body.dataset.kind;
const form = document.querySelector('form');
const results = document.querySelector('#results');
const state = document.querySelector('#state');
const seen = new Set();
let runs = 0;
function report(title, lines) { state.textContent = title; results.textContent = lines.join('\n\n'); }
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim().toLowerCase();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    report('Needs a valid record', ['Enter a name and a valid sample email. No steps ran.']); return;
  }
  if (seen.has(email)) {
    report('Duplicate skipped', ['An entry for ' + email + ' already completed in this session.', 'No additional draft or task was generated. Change the email or reset the demo.']); return;
  }
  if (kind === 'zapier' && data.get('status') !== 'Ready') {
    report('Stopped by filter', ['Trigger: new sample client row received.', 'Filter: status must equal Ready.', 'This record is not ready. No email draft or task was generated.']); return;
  }
  seen.add(email); runs++;
  if (kind === 'make') {
    const urgent = data.get('priority') === 'Urgent';
    report('Simulation complete · ' + runs + ' unique lead(s)', [
      '1. Webhook: received enquiry from ' + name + '.',
      '2. Validate and search: required fields present; no matching email in this demo session.',
      '3. Google Sheets: simulated new lead row — ' + email + '.',
      '4. Router: ' + (urgent ? 'Urgent route → owner review.' : 'Standard route → follow-up queue.'),
      '5. Gmail draft preview:\nTo: ' + email + '\nSubject: Thanks for your enquiry\nHi ' + name + ', thanks for getting in touch. I will review your request and follow up with the next steps.',
      'Local simulation only. No row, email, or notification was created in an external account.'
    ]);
  } else {
    report('Simulation complete · ' + runs + ' client(s) onboarded', [
      '1. Google Sheets: new sample client row — ' + name + '.',
      '2. Filter: status is Ready. Continue.',
      '3. Gmail draft preview:\nTo: ' + email + '\nSubject: Welcome — next steps\nHi ' + name + ', welcome! Please share your priorities, preferred working hours, and the tools we will use.',
      '4. Trello task preview:\nOnboard ' + name + '\nChecklist: confirm scope; request access securely; agree reply hours; schedule kickoff.',
      'Local simulation only. No email draft or Trello card was created in an external account.'
    ]);
  }
});
document.querySelector('#reset').addEventListener('click', () => {
  seen.clear(); runs = 0; form.reset();
  report('Ready to simulate', ['Use the sample record, or change the fields. Run twice to see duplicate handling.']);
});

