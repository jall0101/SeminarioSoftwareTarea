export interface IProject{
    _id?: string;
    name: string;
    description: string;
    isActive: boolean;
    createdAt?: Date;
    updateAt?: Date;
}

const newProject: IProject = {
    name: '',
    description: '',
    isActive: false
};

//const newPrject: Required<IProject> = {};

const memoryProjects: IProject[] = [];
let createdProject: number = 0;

export const createtProject = async (project: IProject) =>{
    const newProject = { ...project };
    newProject._id = (++createdProject).toString();
    newProject.createdAt = new Date();
    newProject.updateAt = newProject.createdAt;
    memoryProjects.push(newProject);
    return newProject;
}

export const getProject = async () =>{
    return memoryProjects;
}