import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs',
  search: true
})

export default withNextra({
  // ... Your Next.js config options
})
