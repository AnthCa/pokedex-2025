const NormalIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" fill="none" />
      <line x1="8" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="4" />

      <circle cx="32" cy="32" r="6" fill="currentColor" />
    </svg>
  )
}

export default NormalIcon