interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`inline-flex items-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm text-blue-300 ${className}`}>
      <ul className="list-disc list-inside">
        <li>{title}</li>
      </ul>
    </div>
  );
};

export default SectionHeader; 