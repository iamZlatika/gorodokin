export interface PshychologicalProblem {
    name: string,
    title: string,
    helpSteps: string[]
}

const PSYCHOLOGICAL_PROBLEMS: PshychologicalProblem[] = [
    {
        name: "anxiety", 
        title: "Патологическая тревога и навязчивые мысли",
        helpSteps: [
            "Сформирую индивидуальную схему лечения на основе данных доказательной медицины.",
            "Помогу избежать побочных эффектов и зависимости от препаратов.",
            "У вас восстановиться сон и появиться аппетит, по утрам вы будете чувствовать себя хорошо, исчезнет скованность и внутренняя дрожь."
        ]
    },
    {
        name: "depression", 
        title: "Депрессия и ангедония", 
        helpSteps: [
            "Выберу антидепрессант, который подойдет именно вам.",
            "Разберусь в причинах заболевания, объясню их вам и помогу всё исправить.",
            "Жизнь приобретёт былые краски, исчезнет чувство вины и ощущение загнанности в угол.",
            "Вы снова начнёте думать о будущем хорошее и получать удовольствие.",
        ]
    },
    {
        name: "symptoms", 
        title: "Необъяснимые физические симптомы",
        helpSteps: [
            "Выясню, в чем состоит психическая причина физических расстройств (тот случай, когда врачи-специалисты отсылают вас к психотерапевту), объясню, что именно с вами происходит, и верну вас в норму.",
            "Научу что делать, чтобы это не повторялось. "
        ]
    },
    {
        name: "fatigue", 
        title: "Перепады настроения и хроническая усталость",
        helpSteps: [
            "Разберусь, почему это с вами происходит.",
            "Выберу схему лечения, которая вас стабилизирует и поможет восстановиться.",
            "Объясню, как выйти из состояния хронического стресса.",
            "Если вы успели нарушить свой эндокринный статус – направлю к лучшему специалисту в этой области."
        ]
    },
]

const PROBLEMS_ENG : PshychologicalProblem[]= [{
    name: "anxiety", 
    title: "Pathological anxiety and obsessive thoughts",
    helpSteps: [
        "Will forulete an individual evidence-based treatment scheme ",
        "Will help to avoid side effects and drug dependence.",
        "Your sleep cycle will normalize, you will start to feel relaxed at mornings, inner discomfort will vanish"
    ]
},
{
    name: "depression", 
    title: "Depression and anhedonia", 
    helpSteps: [
        "Will find antidepressant drug that fits you perfectly.",
        "Will find out the reasons of your disorder and the way to solve them.",
        "Your life will get back its colours, guilt and desperation will fade",
        "You will have plans and joy again.",
    ]
},
{
    name: "symptoms", 
    title: "Unexplained somatic symptoms ",
    helpSteps: [
        "Will find out mental reasons of somatic symptoms (when internists are sending you to psychotherapist), will show you exactly what is your problem and how to manage it.",
        "Will teach you to prevent the relapse"
    ]
},
{
    name: "fatigue", 
    title: "Irritability and chronic fatigue",
    helpSteps: [
        "Will figure out what exactly is happening with you",
        "Will find optimal treatment to restore",
        "Will find the way out of stressful conditions",
        "Will link you with best specialists to cope with related endocrine violations"
    ]
},
]

export const getProblem = async (name: string) => PSYCHOLOGICAL_PROBLEMS.find(problem => problem.name === name)

export const loadProblems = async () => PSYCHOLOGICAL_PROBLEMS