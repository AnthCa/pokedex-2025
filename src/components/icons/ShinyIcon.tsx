const ShinyIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M32 20 L36 32 L48 36 L36 40 L32 52 L28 40 L16 36 L28 32 Z" />
      <path d="M12 10 L14 16 L20 18 L14 20 L12 26 L10 20 L4 18 L10 16 Z" />
      <path d="M52 38 L54 44 L60 46 L54 48 L52 54 L50 48 L44 46 L50 44 Z" />
    </svg>
  )
}

export default ShinyIcon