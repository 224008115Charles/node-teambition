const Teambition = require('../lib/index')

let accessToken = 'teambition accessToken'
let teambition = new Teambition(accessToken)

// callback
teambition.get('/users/me', (err, data) => {
  // user's profile
  if (err) throw err
  console.log(data)
})

// promise
teambition.users()
  .info({ email: 'qiang@teambiton.com' })
  .then(userprofile => console.log(userprofile))
  .catch(err => console.log(err))
