const fs = require("fs")
require("dotenv").config()

// Get the contents of the data.json
const DATA_FILE_PATH = process.env.DATA_FILE_PATH
const data = JSON.parse(fs.readFileSync(DATA_FILE_PATH).toLocaleString())

const capitalize = (string) => {
  let str = ''
  let splitStr = string.split(' ')
  if (splitStr.length < 0) {
      return string[0].toUpperCase() + string.slice(1)
  } else {
      splitStr.forEach((x, index) => {
          str += x[0].toUpperCase() + x.slice(1)
          if (index !== 0 || index  !== splitStr.length - 1) {
              str += ' '
          }
      })
      return str.trimEnd()
  }
}
// console.log(data)
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = function (api) {
  api.loadSource(async ({ addCollection, addSchemaResolvers }) => {
    const usersCollection = addCollection('Users')
    const worksCollection = addCollection('Works')
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const user = data[key];

        // Add nodes to user GraphQL collection
        usersCollection.addNode({
          id: user.id,
          username: user.username,
          avatar: user.avatar || '',
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          location: user.location,
          currentRole: user.currentRole,
          currentCompany: user.currentCompany,
          portfolio: user.portfolio,
          bio: user.bio,
          isVerified: user.isVerified,
          selectedWorks: user.selectedWorks,
          category: capitalize(user.category),
          social: user.social,
          skills: user.skills
        })

        // Add works to work GraphQL collection
        worksCollection.addReference('user', 'Users')
        for (const work of user.selectedWorks) {
          worksCollection.addNode({
            title: work.projectTitle,
            imageUrl: work.projectImageUrl,
            description: work.projectDescription,
            link: work.projectLink,
            user: user.id,
            username: user.username
          })
        }
      }
    }

    addSchemaResolvers({
      Users: {
        firstName: {
          type: 'String',
          resolve({ name }){
            return `${name.split(' ')[0]}`
          }
        },
        lastName: {
          type: 'String',
          resolve({name}) {
            const names = name.split(' ')
            return `${names.length < 2 ? "" : names[names.length - 1]}`
          }
        }
      }
    })
  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/

    // FIxed user pages 404 issue
    // By generating user pages individually
    const { data } = await graphql(`
    query {
      Users:allUsers {
        edges {
          node {
            firstName, lastName, currentRole, currentCompany, bio, id, name, isVerified, username, category, skills, social {
              twitter, linkedIn, github, email
            }
          }
        }
      }
  }
    `)

    console.log(data)

    data.Users.edges.forEach(({ node }) => {
      createPage({
        path: `/users/${node.username}`,
        component: `./src/templates/Users.vue`,
        context: {
          username: node.username,
          id: node.id
        }
      })
    })
  })
}
