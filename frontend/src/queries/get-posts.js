import { gql } from '@apollo/client'
import MenuFragment from './fragments/menus'

/**
 * Get Header menu
 *
 */
export const GET_POSTS = gql`
 query GET_POSTS( $perPage: Int, $offset: Int ) {
  headerMenus: menuItems(where: {location: HCMS_MENU_HEADER}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
  footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
  posts: posts(where: { offsetPagination: { size: $perPage, offset: $offset }}) {
    edges {
      node {
        id
        title
        excerpt
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
 }
 ${MenuFragment}
 `;

export const GET_TOTAL_POSTS_COUNT = gql`
  query GET_TOTAL_POSTS_COUNT {
  postsCount: posts {
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`

export const GET_POST_SLUGS = gql`
  query GET_POST_SLUGS {
  posts: posts {
    edges {
      node {
        id
        title
        slug
        excerpt
      }
    }
   }
  }
`
