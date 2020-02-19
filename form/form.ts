import { IPortfolioItem } from "../interfaces/interfaces"

export enum formTypes {
    ADD = 'add',
    EDIT = 'edit',
}

export interface IForm {
    [title: string]: any
    description: any
    language: any
    link: any
    github: any
    video_src: any
    preview_src: any
    gif_src: any
    desktop: any
    mobile: any
    order: any
}

export const initialForm: IForm = {
    title: {
        id: 'title',
        elemType: 'input',
        type: 'text',
        placeholder: 'title',
        require: true,
        value: '',
    },
    description: {
        id: 'description',
        elemType: 'textarea',
        type: 'text',
        placeholder: 'description',
        require: true,
        value: '',
    },
    language: {
        id: 'language',
        elemType: 'select',
        options: {
            React: {
                selected: false,
            },
            TypeScript: {
                selected: false,
            },
            JavaScript: {
                selected: false,
            },
            Cpp: {
                selected: false
            },
            NextJS: {
                selected: false
            }
        },
        require: true,
        multiple: true
    },
    link: {
        id: 'link',
        elemType: 'input',
        type: 'text',
        placeholder: 'link to app',
        require: true,
        value: '',
    },
    github: {
        id: 'github',
        elemType: 'input',
        type: 'text',
        placeholder: 'github link',
        require: true,
        value: '',
    },
    video_src: {
        id: 'video_src',
        elemType: 'input',  
        type: 'text',
        placeholder: 'video link',
        require: true,
        value: '',
    }, 
    preview_src: {
        id: 'preview_src',
        elemType: 'input',  
        type: 'text',
        placeholder: 'preview video link',
        require: true,
        value: '',
    },
    gif_src: {
        id: 'gif_src',
        elemType: 'input',
        type: 'text',
        placeholder: 'gif link',
        require: true,
        value: '',
    },
    desktop: {
        id: 'desktop',
        elemType: 'select',
        options: {
            Yes: {
                selected: false,
            },
            No: {
                selected: false
            },
        },        
        require: true,
    },
    mobile: {   
        id: 'mobile',
        elemType: 'select',
        options: {
            Yes: {
                selected: false,
            },
            No: {
                selected: false
            },
        }, 
        require: true,
    },
    order : {
        id: 'order',
        elemType: 'input',
        type: 'number',
        placeholder: 'order in the list',
        value: '',
    }
}

export const updateEditForm = (item: IPortfolioItem): IForm => {
    const updatedForm: IForm = {
        ...initialForm,
        title: {
            ...initialForm.title,
            value: item.title,
        },
        description: {
            ...initialForm.description,
            value: item.description,
        },
        language: {
            ...initialForm.language,
            options: {
                React: {
                    selected: item.language.includes('React'),
                },
                TypeScript: {
                    selected: item.language.includes('TypeScript'),
                },
                JavaScript: {
                    selected: item.language.includes('JavaScript'),
                },
                Cpp: {
                    selected: item.language.includes('Cpp'),
                },
                NextJS: {
                    selected: item.language.includes('NextJS'),
                }
            },
        },
        link: {
            ...initialForm.link,
            value: item.link,
        },
        github: {
            ...initialForm.github,
            value: item.githubLink,
        },
        video_src: {
            ...initialForm.video_src,
            value: item.video_src
        },
        preview_src: {
            ...initialForm.preview_src,
            value: item.preview_src
        },
        gif_src: {
            ...initialForm.gif_src,
            value: item.gif_src
        },
        desktop: {
            ...initialForm.desktop,
            options: {
                Yes: {
                    selected: item.desktop
                },
                No: {
                    selected: !item.desktop
                }
            }
        },
        mobile: {
            ...initialForm.mobile,
            options: {
                Yes: {
                    selected: item.mobile
                },
                No: {
                    selected: !item.mobile
                }
            }
        }
    }    

    return updatedForm
}