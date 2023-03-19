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
    setTimeout(function () {
      setFeedback({ color: "limegreen", content: "Jop, jut" });
    }, 1000);
    console.log(formValue);
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
