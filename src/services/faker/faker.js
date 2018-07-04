const TIMEOUT = 500;

export const fakerMap = (URL, options) => {
  if(options.type === 'POST') {
    return setTimeout(() => {
      return {
        status: true
      }
    }, TIMEOUT)
  } else {
    const fakeOptions = {
      key: options ? options : undefined,
      pagination: {
        size: options.size ? options.size : 3,
        current: options.current ? options.current : 1
      }
    };
    return setTimeout(() => {
      return {
        data: seedMap(URL, fakeOptions)
      }
    }, TIMEOUT)
  }
}

export const seedMap = (URL, options) => {
  const resources = getSource(URL);
  if(options.key) {
    return resources.filter(({id}) => id === options.key)
  }
  const { pagination } = options;

  return resources.slice((pagination.current-1)*pagination.size, pagination.current*pagination.size);
}

const getSource = (URL) => {
  return sources[URL];
}

const sources = {
  'categories': [
    {
      id: '1',
      name: 'Category 1',
      description: 'description 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 1
    },
    {
      id: '2',
      name: 'Category 2',
      description: 'description 2',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 2
    },
    {
      id: '3',
      name: 'Category 3',
      description: 'description 3',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 3
    },
    {
      id: '4',
      name: 'Category 4',
      description: 'description 4',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 4
    },
    {
      id: '5',
      name: 'Category 5',
      description: 'description 5',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 5
    },
    {
      id: '6',
      name: 'Category 6',
      description: 'description 6',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 6
    }
  ],
  'tags': [
    {
      id: '1',
      name: 'Tag 1',
      description: 'description 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 1
    },
    {
      id: '2',
      name: 'Tag 2',
      description: 'description 2',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 2
    },
    {
      id: '3',
      name: 'Tag 3',
      description: 'description 3',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 3
    },
    {
      id: '4',
      name: 'Tag 4',
      description: 'description 4',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 4
    },
    {
      id: '5',
      name: 'Tag 5',
      description: 'description 5',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 5
    },
    {
      id: '6',
      name: 'Tag 6',
      description: 'description 6',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 6
    }
  ],
  'posts': [
    {
      id: '1',
      name: 'Post 1',
      description: 'description 1',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 1,
      categories: [
        {
          id: '1',
          name: 'Category 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Category 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ],
      tags: [
        {
          id: '1',
          name: 'Tag 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Tag 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ]
    },
    {
      id: '2',
      name: 'Post 2',
      description: 'description 2',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 2,
      categories: [
        {
          id: '1',
          name: 'Category 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Category 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ],
      tags: [
        {
          id: '1',
          name: 'Tag 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Tag 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ]
    },
    {
      id: '3',
      name: 'Post 3',
      description: 'description 3',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 3,
      categories: [
        {
          id: '1',
          name: 'Category 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Category 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ],
      tags: [
        {
          id: '1',
          name: 'Tag 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Tag 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ]
    },
    {
      id: '4',
      name: 'Post 4',
      description: 'description 4',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 4,
      categories: [
        {
          id: '1',
          name: 'Category 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Category 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ],
      tags: [
        {
          id: '1',
          name: 'Tag 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Tag 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ]
    },
    {
      id: '5',
      name: 'Post 5',
      description: 'description 5',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 5,
      categories: [
        {
          id: '1',
          name: 'Category 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Category 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ],
      tags: [
        {
          id: '1',
          name: 'Tag 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Tag 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ]
    },
    {
      id: '6',
      name: 'Post 6',
      description: 'description 6',
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 6,
      categories: [
        {
          id: '1',
          name: 'Category 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Category 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ],
      tags: [
        {
          id: '1',
          name: 'Tag 1',
          description: 'description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 1
        },
        {
          id: '2',
          name: 'Tag 2',
          description: 'description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          count: 2
        }
      ]
    }
  ]
}