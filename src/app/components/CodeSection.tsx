import CodeBlock from "./CodeBlock";

export default function CodeSection({
  title,
  desc,
  codeTitle,
  code,
  codeDesc,
}: {
  title: string;
  desc: string;
  codeTitle: string;
  code: string;
  codeDesc: string;
}) {
  return (
    <div className="code-section mt-4">
      <h3>{title}</h3>
      <p className="mt-2">{desc}</p>
      <h4 className="mt-8">{codeTitle}</h4>
      <pre className="p-4 rounded-lg ">
        <CodeBlock>{code}</CodeBlock>
      </pre>
      <p className="mt-2">{codeDesc}</p>
    </div>
  );
}
