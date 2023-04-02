const API_KEY = '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'

const submitButton = document.querySelector('#send-btn')
const outPutElement = document.querySelector('#chat-messages')
const inputElement = document.querySelector('input')
async function getMessage(){
    console.log("clicked")
    const options = {
        method: 'POST',
        headers: {
            'Authorization' : `Bearer ${API_KEY}`,
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(
            {
                model : "gpt-3.5-turbo",
                messages : [{role:"user", content: inputElement.value}],
                max_tokens: 100
            }
        ) 
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
        }
    } catch (error){
        console.error(error)
    }
}

submitButton.addEventListener('click', getMessage)
