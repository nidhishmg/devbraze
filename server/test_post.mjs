const res = await fetch('http://localhost:4000/api/events/test-event/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    branch: 'ECE',
    year: '3',
    notes: 'CLI test'
  })
})
console.log('Status', res.status)
const data = await res.json()
console.log(data)
