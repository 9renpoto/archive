const { default: config } = require('nextein/config')
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
  webpack: c => {
    c.resolve.alias = {
      react: 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat'
    }

    return c
  },
  exportPathMap: async () => {
    const stories = await getStories()
    return {
      '/all-posts': { page: '/all-posts' },
      '/sub-section': { page: '/sub-section' },
      '/tags': { page: '/tags' },
      ...stories
    }
  }
})
