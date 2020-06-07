/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      posts {
        items {
          id
          title
          f_name
          l_name
          address
          phone
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      posts {
        items {
          id
          title
          f_name
          l_name
          address
          phone
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      posts {
        items {
          id
          title
          f_name
          l_name
          address
          phone
        }
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      f_name
      l_name
      address
      phone
      Category {
        id
        name
        posts {
          nextToken
        }
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      f_name
      l_name
      address
      phone
      Category {
        id
        name
        posts {
          nextToken
        }
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      f_name
      l_name
      address
      phone
      Category {
        id
        name
        posts {
          nextToken
        }
      }
    }
  }
`;
