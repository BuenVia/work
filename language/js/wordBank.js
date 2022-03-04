export const words = [
    {
            infinitive: {question: "to be", answer: "ser"},
                tense: "present",
            conjugate: [
                    { question: "I am", answer: "soy"},
                    { question: "You are (s)", answer: "eres"},
                    { question: "He/ She/ It is", answer: "es"},
                    { question: "We are", answer: "somos"},
                    { question: "You (all) are", answer: "sois"},
                    { question: "They are", answer: "son"}
            ]
    },
            
    {
            name: "estar",
            conjugate: [
                    { question: "I am", answer: "estoy"},
                    { question: "You are (s)", answer: "estas"},
                    { question: "He/ She/ It is", answer: "esta"},
                    { question: "We are", answer: "estamos"},
                    { question: "You (all) are", answer: "estais"},
                    { question: "They are", answer: "estan"}
            ]
    },

    {
            name: "hacer",
            conjugate: [
                    { question: "I do", answer: "hago"},
                    { question: "You do (s)", answer: "haces"},
                    { question: "He/ She/ It does", answer: "hace"},
                    { question: "We do", answer: "hacemos"},
                    { question: "You (all) do", answer: "haceis"},
                    { question: "They do", answer: "hacen"}
            ]
    },
        {
                name: "ser",
                conjugate: [
                        { question: "I am", answer: "sere"},
                        { question: "You are (s)", answer: "seras"},
                        { question: "He/ She/ It is", answer: "sera"},
                        { question: "We are", answer: "seramos"},
                        { question: "You (all) are", answer: "serais"},
                        { question: "They are", answer: "seran"}
                ]
        },
                
        {
                name: "estar",
                conjugate: [
                        { question: "I am", answer: "estare"},
                        { question: "You are (s)", answer: "estaras"},
                        { question: "He/ She/ It is", answer: "estara"},
                        { question: "We are", answer: "estaramos"},
                        { question: "You (all) are", answer: "estarais"},
                        { question: "They are", answer: "estaran"}
                ]
        },
    
        {
                name: "hacer",
                conjugate: [
                        { question: "I do", answer: "hare"},
                        { question: "You do (s)", answer: "haras"},
                        { question: "He/ She/ It does", answer: "hara"},
                        { question: "We do", answer: "haremos"},
                        { question: "You (all) do", answer: "hareis"},
                        { question: "They do", answer: "haren"}
                ]
        }
]

export const ser =  {
        infinitive: {question: "to be", answer: "ser"},
        present: [
                { question: "I am", answer: "soy"},
                { question: "You are (s)", answer: "eres"},
                { question: "He/ She/ It is", answer: "es"},
                { question: "We are", answer: "somos"},
                { question: "You (all) are", answer: "sois"},
                { question: "They are", answer: "son"}
        ],
        future: [
                { question: "I am", answer: "sere"},
                { question: "You are (s)", answer: "seras"},
                { question: "He/ She/ It is", answer: "sera"},
                { question: "We are", answer: "seramos"},
                { question: "You (all) are", answer: "serais"},
                { question: "They are", answer: "seran"}
        ]
}

const estar = {
        infinitive: {question: "to be", answer: "estar"},
        present: [
                { question: "I am", answer: "estoy"},
                { question: "You are (s)", answer: "estas"},
                { question: "He/ She/ It is", answer: "esta"},
                { question: "We are", answer: "estamos"},
                { question: "You (all) are", answer: "estais"},
                { question: "They are", answer: "estan"}
        ],
        future: [
                { question: "I am", answer: "estare"},
                { question: "You are (s)", answer: "estaras"},
                { question: "He/ She/ It is", answer: "estara"},
                { question: "We are", answer: "estaramos"},
                { question: "You (all) are", answer: "estarais"},
                { question: "They are", answer: "estaran"}
        ]    
}

export const wordArr = [ser, estar]