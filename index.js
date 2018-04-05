const models = require('./models')

async function main() {
  await models.initialize()

  // Get models
  const User = models.user
  const Previlledge = models.previlledge

  // If you dont have previlledges, exec below
  // await Previlledge.create({ name: 'read' })
  // await Previlledge.create({ name: 'write' })
  // await Previlledge.create({ name: 'execute' })

  // Find previlledges
  const previlledges = await Previlledge.find({
    name: ['read', 'write']
  })

  // Create user data
  const user = await User.create({
    account: 'username',
    firstName: 'Takashi',
    lastName: 'Sato'
  }).meta({ fetch: true })

  console.log('User created')

  // Associate Previlledges to User
  await User.addToCollection(user.id, 'previlledges', previlledges.map(p => p.id))

  console.log('Collection added')
}

main()
