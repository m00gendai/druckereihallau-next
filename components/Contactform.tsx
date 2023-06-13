import Input from "@/components/Input";
import Text from "@/components/Textarea";
import { useState } from "react";
import s from "@/styles/contactform.module.css";

export default function Contactform() {
  interface isFocus {
    [key: string]: boolean;
  }
  const [focus, setFocus] = useState<isFocus>({
    name: false,
    mail: false,
    message: false,
  });

  interface isFormValue {
    [key: string]: string;
  }
  const [formValue, setFormValue] = useState<isFormValue>({
    name: "",
    mail: "",
    message: "",
  });

  interface isFormValid {
    [key: string]: boolean;
  }
  const [formValid, setFormValid] = useState<isFormValid>({
    name: false,
    mail: false,
    message: false,
  });

  interface isFeedback {
    color: string;
    content: string;
  }
  const [feedbackVisible, setFeedbackVisible] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<isFeedback>({
    color: "",
    content: "",
  });

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (feedbackVisible) {
      setFeedbackVisible(false);
    }
    setFeedbackVisible(true);
    setFeedback({ color: "red", content: "Einen Augenment bitte..." });

    fetch("/api/contact", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValue)
    }).then(async (res) => {

        if (res.status === 200) {
            setFeedback({color: "lime", content: "Nachricht erfolgreich übermittelt. Sie haben auch eine Kopie erhalten."})
            
            setFeedbackVisible(true) 
        } else {
            const errmsg = await res.json()
            setFeedback({color: "red", content:`
                Es ist etwas schiefgegangen. Bitte überprüfen Sie insbesondere Ihre angegebene E-Mail-Adresse. Ansonsten wenden SIe sich an die im Impressum angegebene Kontaktmöglichkeit.
                

                Fehler: ${res.status} 
                Meldung ${errmsg.err}
            `})
            
            setFeedbackVisible(true) 
        }
    })
  }

  return (
    <form className={s.form} onSubmit={(event: any) => handleSubmit(event)}>
      <Input
        tag="name"
        type="text"
        content="Name *"
        formValue={formValue}
        focus={focus}
        formValid={formValid}
        setFormValid={setFormValid}
        setFormValue={setFormValue}
        setFocus={setFocus}
      />
      <Input
        tag="mail"
        type="email"
        content="E-Mail *"
        formValue={formValue}
        focus={focus}
        formValid={formValid}
        setFormValid={setFormValid}
        setFormValue={setFormValue}
        setFocus={setFocus}
      />
      <Text
        tag="message"
        content="Nachricht *"
        formValue={formValue}
        focus={focus}
        setFormValue={setFormValue}
        setFocus={setFocus}
      />
      <input type="submit" className="button" value="Abschicken" />
      {feedbackVisible ? (
        <p className={s.feedback} style={{ color: feedback.color }}>
          {feedback.content}
        </p>
      ) : null}
    </form>
  );
}
