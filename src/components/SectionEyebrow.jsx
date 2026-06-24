export default function SectionEyebrow({ index, children }) {
  return (
    <p className="eyebrow">
      {index ? `${index} — ` : ""}
      {children}
    </p>
  );
}
