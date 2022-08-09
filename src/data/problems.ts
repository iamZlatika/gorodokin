export interface PsychologicalProblem {
    name: string,
    title: string,
    helpSteps: string[]
}

export const psychoProblems: PsychologicalProblem[] = [
    {
        name: "anxiety", 
        title: "problems:anxiety",
        helpSteps: [
            "problems:anxietyHelp1",
            "problems:anxietyHelp2",
            "problems:anxietyHelp3"
        ]
    },
    {
        name: "depression", 
        title:  "problems:depression", 
        helpSteps: [
            "problems:depressionSteps1",
            "problems:depressionSteps2",
            "problems:depressionSteps3",
            "problems:depressionSteps4",
        ]
    },
    {
        name: "symptoms", 
        title: "problems:somatic",
        helpSteps: [
            "problems:somaticSteps1",
            "problems:somaticSteps2"
        ]
    },
    {
        name: "fatigue", 
        title:  "problems:chronic",
        helpSteps: [
            "problems:chronicSteps1",
            "problems:chronicSteps2",
            "problems:chronicSteps3",
            "problems:chronicSteps4"
        ]
    },
]


