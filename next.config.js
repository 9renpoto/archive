const config = require('nextein/config').default
const withTypescript = require('@zeit/next-typescript')
const { entries, inCategory } = require('nextein/posts')

const getStories = async () => {
  const category = 'stories'
  const all = await entries()
  return all
    .filter(inCategory(category, { includeSubCategories: true }))
    .map(post => post.data.category)
    .filter((category, idx, arr) => arr.indexOf(category) === idx)
    .reduce(
      (prev, entry) => ({
        ...prev,
        [`/${entry.replace(`${category}/`, '')}`]: {
          page: '/stories',
          query: { category: `${entry}` }
        }
      }),
      {}
    )
}

module.exports = config({
  ...withTypescript(),
  exportPathMap: async () => {
    const stories = await getStories()
    return {
      ...stories
    }
  }
})
