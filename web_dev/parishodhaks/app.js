// const query_btn = document.querySelector("#queries_submit");
// query_btn.onclick = function(){
//     console.log("query submitted")
//     alert('query submitted')
// }

// query_btn.onmouseover = 
// multiple actions could be excuted with addEventListener
const query_btn = document.querySelector('#queries_submit')
query_btn.addEventListener('click', (e) => {
    // send the data to admin
    // by default the click would take the page to default page. This perevent it
    e.preventDefault();
    const name = document.querySelector('#name')
    const org = document.querySelector('#org')
    const email = document.querySelector('#email')
    const info = document.querySelector('#info')
    // console.log(name.value)
    const submit_msg_txt = document.querySelector('#submit_msg')
    const submit_msg = document.createElement("p")
    submit_msg.innerText = "Query submitted!!"
    name.value = ""
    org.value = ""
    email.value = ""
    info.value = ""
    submit_msg_txt.append(submit_msg)

})

const email_validation = document.querySelector('#email')
email_validation.addEventListener('change', () => {
    // validate email
    this.value
    
})

// Tyrp of events can be : input, change, click

const clear_btn = document.querySelector('#clear_fields')
clear_btn.addEventListener('click', () => {
    // alert('fields cleared')
    const input_fields = document.querySelector('.form-control')


})

const cus_info = document.querySelector('#cus_info')
cus_info.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = cus_info.elements.name.value
    console.log(name)
    const newRecord = document.createElement('li')
    const btag = document.createElement('b')
    btag.append(name)
    newRecord.append(btag)
    newRecord.append(`- ${name}`)
    console.log(newRecord)
    cus_info.append(newRecord)
})
