export const quickAutocomplete = (queryValue: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                items: [
                    {
                        title: 'Content Title',
                        description: 'Content Description',
                        thumbnail: 'http://via.placeholder.com/150x150',
                        id: '123'
                    },
                    {
                        title: 'Content Title',
                        description: 'Content Description',
                        thumbnail: 'http://via.placeholder.com/150x150',
                        id: '124'
                    },
                    {
                        title: 'Content Title',
                        description: 'Content Description',
                        thumbnail: 'http://via.placeholder.com/150x150',
                        id: '125'
                    },
                    {
                        title: 'Content Title',
                        description: 'Content Description',
                        thumbnail: 'http://via.placeholder.com/150x150',
                        id: '126'
                    },
                    {
                        title: 'Content Title',
                        description: 'Content Description',
                        thumbnail: 'http://via.placeholder.com/150x150',
                        id: '127'
                    }
                ]
            })
        }, 300)
    })
}