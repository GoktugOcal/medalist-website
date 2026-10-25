type SectionLabelProps = {
  index: string
  label: string
}

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="mb-5 flex items-center gap-3 font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
      <span className="text-lime/70">{index}</span>
      <span className="h-px w-8 bg-lime/40" />
      <span>{label}</span>
    </div>
  )
}
