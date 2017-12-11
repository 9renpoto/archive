import config from 'nextein/config'
import { entries, inCategory } from 'nextein/posts'

const getStories = async () => {
  const category = 'stories'
  const all = await entries()
  return all
    .filter(inCategory(category, { includeSubCategories: true }))
    .map((post: any) => post.data.category)
    .filter(
      (category: any, idx: number, arr: any) => arr.indexOf(category) === idx
    )
    .reduce(
      (prev: any, entry: any) => ({
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
  exportPathMap: async () => {
    const stories = await getStories()
    return {
      ...stories
    }
  }
})
