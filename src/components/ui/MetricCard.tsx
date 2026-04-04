interface MetricCardProps {
  metric: string;
  label: string;
}

export default function MetricCard({ metric, label }: MetricCardProps) {
  return (
    <div className="border border-[#1f2937] bg-[#0a0a0a] p-6 rounded-[4px]">
      <h3 className="text-white text-[1.75rem] font-bold mb-2 tracking-tight">{metric}</h3>
      <p className="text-[#6b7280] text-[10px] tracking-[0.15em] font-mono uppercase">{label}</p>
    </div>
  );
}