export interface UserResponse{
    name: string,
    email: string,
    password: string
}

export interface LoginResponse{
    email: string,
    password: string
}


export interface AnouncementResponse{
    name: string,
    occupationArea: string,
    timeExperience: string,
    adress: string,
    contact: string,
    city: string,
    description: string
}