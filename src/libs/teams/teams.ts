export interface ITeam {
    _id?: string;
    tema: string;
    description: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  // const newProject: Required<ITeam> = {};
  const memoryTeams: ITeam[] = [];
  let createdTeams: number = 0;
  
  //CREAR
  export const createTeam = async (team: ITeam) => {
    const newTeam = { ...team };
    newTeam._id = (++createdTeams).toString();
    newTeam.createdAt = new Date();
    newTeam.updatedAt = newTeam.createdAt;
    memoryTeams.push(newTeam);
    return newTeam;
  }
  
  //OBTENER TODO
  export const getTeam = async () => {
    return memoryTeams;
  };

  //BUSCAR POR ID
  export const getbyidTeam = (id:string) => {
    const teams = memoryTeams.find(p => p._id === id);
    if (!teams) throw new Error('Team not found');
    return teams;
  }

  //ACTUALIZAR
  export const updateTeam = ( id:string, team: Partial<ITeam>) => {
    const index = memoryTeams.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Team not found');
    memoryTeams[index] = { ...memoryTeams[index], ...team, updatedAt: new Date() };
    return memoryTeams[index];
  }

  //BORRAR
  export const deleteTeam = (id:string) => {
    const index = memoryTeams.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Team not found');
    memoryTeams.splice(index, 1);
    return true;
  }
