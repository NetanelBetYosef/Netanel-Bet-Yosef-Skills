/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

  const sendEmail = (e) => {
    e.preventDefault()


    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_yejzd9a','template_0uqonag','#contact-form','yiqZjIxavsB82jn1k')
    .then(() => {
        contactMessage.textContent = '✅ ההודעה נשלחה בהצלחה'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = '❌ ההודעה לא נשלחה (שגיאת מערכת)'
    })
  }

  contactForm.addEventListener('submit', sendEmail)
