export interface User {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface Test {
    id: number,
    name: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string
    questions: Question[]
}

interface Question {
    id: number;
    testId: number;
    title: string;
    description: string;
    testCode: string;
    createdAt: string,
    updatedAt: string
}