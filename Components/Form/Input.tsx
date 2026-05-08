export default function Input({
  type = "text",
  placeholder = "",
  name,
  styles,
}: {
  type?: string;
  placeholder?: string;
  name: string;
  styles: string;
}) {
  return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={styles}
      />
  );
}
