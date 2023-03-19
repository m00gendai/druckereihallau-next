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
  return (
    <div className={s.containerTextarea}>
      <label
        className={
          focus[tag]
            ? s.labelActive
            : formValue[tag] !== "" && !focus[tag]
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
          focus[tag]
            ? s.inputActive
            : formValue[tag] !== "" && !focus[tag]
            ? s.inputOk
            : s.inputPassive
        }
      />
    </div>
  );
}
