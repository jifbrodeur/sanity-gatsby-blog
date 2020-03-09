export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e65a00c115ce0f438432810',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vdmm2vr2',
                  apiId: 'de142ffd-4d59-4359-81c6-7527442dc776'
                },
                {
                  buildHookId: '5e65a00c46c324111ef057c6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-93pzj3nk',
                  apiId: 'c15e30a6-f660-4563-b04a-c4c9b3dd38ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jifbrodeur/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-93pzj3nk.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
