import s from "@/styles/contactform.module.css";

interface textareaProps {
  tag: string;
  content: string;
  formValue: {
    name: string;
    mail: string;
    message: string;
  };
  focus: {
    name: boolean;
    mail: boolean;
    message: boolean;
  };
  setFormValue: Function;
  setFocus: Function;
}

export default function Text({
  tag,
  content,
  formValue,
  focus,
  setFormValue,
  setFocus,
}: textareaProps) {
  const hasFocus: boolean = focus.tag;

  return (
    <div className={s.containerTextarea}>
      <label
        className={
          hasFocus
            ? s.labelActive
            : formValue[tag] !== "" && !hasFocus
            ? s.labelOk
            : s.labelPassive
        }
        htmlFor={`${tag}`}
      >
        {content}
      </label>
      <textarea
        name={`${tag}`}
        placeholder=""
        required
        onFocus={(event) =>
          setFocus({
            ...focus,
            [event.currentTarget.name]: !focus[event.currentTarget.name],
          })
        }
        onBlur={(event) =>
          setFocus({
            ...focus,
            [event.currentTarget.name]: !focus[event.currentTarget.name],
          })
        }
        onChange={(event) =>
          setFormValue({ ...formValue, [tag]: event.currentTarget.value })
        }
        className={
          hasFocus
            ? s.inputActive
            : formValue[tag] !== "" && !hasFocus
            ? s.inputOk
            : s.inputPassive
        }
      />
    </div>
  );
}
