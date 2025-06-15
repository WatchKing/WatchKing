// On load, check localStorage for saved Telegram ID
const input = document.getElementById('telegramIdInput');
const btn = document.getElementById('saveTelegram');
const disp = document.getElementById('telegramDisplay');

function showUsername(username) {
  input.classList.add('hidden');
  btn.classList.add('hidden');
  disp.textContent = username;
  disp.classList.remove('hidden');
}

const saved = localStorage.getItem('telegram_id');
if (saved) {
  showUsername(saved);
}

// Save handler
btn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return alert('Please enter your Telegram ID.');
  // Simulate converting ID to username (in a real app you'd call Telegram API)
  const username = '@' + val.replace(/[^a-zA-Z0-9_]/g, '');
  localStorage.setItem('telegram_id', username);
  showUsername(username);
});

// Optional: clicking the username could let them clear it:
// disp.addEventListener('click', () => {
//   if (confirm('Clear saved Telegram username?')) {
//     localStorage.removeItem('telegram_id');
//     location.reload();
//   }
// });
